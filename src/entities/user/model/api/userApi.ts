import { baseApi } from 'shared/api/api';
import type { User } from '../types/user';

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => '/users',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User']
					: ['User'],
		}),
		getUserById: builder.query<User, string>({
			query: (id) => `/users/${id}`,
			providesTags: (_, __, id) => [{ type: 'User', id }],
		}),
	}),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
