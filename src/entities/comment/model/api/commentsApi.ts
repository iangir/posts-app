import { baseApi } from 'shared/api/api';
import type { PostComment } from '../types/comment';

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<PostComment[], string>({
			query: (postId) => 'comments?postId=' + postId,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Comment' as const, id })), 'Comment']
					: ['Comment'],
		}),
	}),
});

export const { useGetCommentsByPostIdQuery } = userApi;
