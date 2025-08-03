import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'entities/post/model/slice/postSlice';
import userReducer from 'entities/user/model/slice/userSlice';
import { baseApi } from 'shared/api/api';

export const store = configureStore({
	reducer: {
		posts: postReducer,
		users: userReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
