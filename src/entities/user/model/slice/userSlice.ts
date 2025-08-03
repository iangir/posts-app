import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { User } from '../types/user';

const usersAdapter = createEntityAdapter<User, string>({
	selectId: (user) => user.id,
});

const userSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(),
	reducers: {
		userAdded: usersAdapter.addOne,
		usersReceived(state, action) {
			usersAdapter.setAll(state, action.payload);
		},
		userUpdated: usersAdapter.updateOne,
		userDeleted: usersAdapter.removeOne,
	},
});

export const { userAdded, usersReceived, userUpdated, userDeleted } = userSlice.actions;

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors();

export default userSlice.reducer;
