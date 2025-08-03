import { baseApi } from 'shared/api/api';
import { addManyPosts } from '../slice/postSlice';
import type { Post } from '../types/post';

export const postsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => '/posts',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
					: ['Post'],
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(addManyPosts(data));
				} catch (error) {
					console.error('Error fetching posts:', error);
				}
			},
		}),
		getPostById: builder.query<Post, string>({
			query: (id) => `/posts/${id}`,
			providesTags: (_, __, id) => [{ type: 'Post', id }],
		}),
		getPostsByUserId: builder.query<Post[], string>({
			query: (uderId) => '/posts?userId=' + uderId,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
					: ['Post'],
		}),
		deletePost: builder.mutation<void, string>({
			query: (id) => ({
				url: `posts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (_, __, id) => [{ type: 'Post', id }],
		}),
	}),
});

export const {
	useGetPostsQuery,
	useGetPostByIdQuery,
	useGetPostsByUserIdQuery,
	useDeletePostMutation,
} = postsApi;
