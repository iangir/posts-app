import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const baseApi = createApi({
	tagTypes: ['Post', 'User', 'Album', 'Comment', 'Todo'],
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: () => ({}),
});
