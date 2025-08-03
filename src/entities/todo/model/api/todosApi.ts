import { baseApi } from 'shared/api/api';
import type { Todo } from '../types/todo';

export const todosApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getTodosByUserId: builder.query<Todo[], string>({
			query: (userId) => 'todos?userId=' + userId,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), 'Todo']
					: ['Todo'],
		}),
	}),
});

export const { useGetTodosByUserIdQuery } = todosApi;
