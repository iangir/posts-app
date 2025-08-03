import { baseApi } from 'shared/api/api';
import { usersFailed, usersLoading, usersReceived } from '../slice/userSlice';
import type { User } from '../types/user';

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => '/users',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User']
					: ['User'],
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					dispatch(usersLoading());
					const { data } = await queryFulfilled;
					dispatch(usersReceived(data));
				} catch (error) {
					dispatch(
						usersFailed(
							error instanceof Error ? error.message : 'Failed to fetch users'
						)
					);
				}
			},
		}),
		getUserById: builder.query<User, string>({
			query: (id) => `/users/${id}`,
			providesTags: (_, __, id) => [{ type: 'User', id }],
		}),
	}),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
