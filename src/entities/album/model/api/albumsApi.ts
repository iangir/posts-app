import { baseApi } from 'shared/api/api';
import type { Album } from '../types/album';

export const albumsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAlbumsByUserId: builder.query<Album[], string>({
			query: (userId) => 'albums?userId=' + userId,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Album' as const, id })), 'Album']
					: ['Album'],
		}),
	}),
});

export const { useGetAlbumsByUserIdQuery } = albumsApi;
