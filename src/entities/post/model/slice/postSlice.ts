import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../types/post';

const postsAdapter = createEntityAdapter<Post, string>({
	selectId: (post) => post.id,
});

const postSlice = createSlice({
	name: 'posts',
	initialState: postsAdapter.getInitialState({}),
	reducers: {
		addManyPosts: postsAdapter.addMany,
	},
});

export const { addManyPosts } = postSlice.actions;

export const {
	selectAll: selectAllPosts,
	selectById: selectPostById,
	selectIds: selectPostIds,
} = postsAdapter.getSelectors();

export default postSlice.reducer;
