import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/providers/store/store';
import type { User } from '../types/user';

const usersAdapter = createEntityAdapter<User, string>({
	selectId: (user) => user.id,
});

type UserState = {
	filter: string;
	filteredIds: string[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
} & ReturnType<typeof usersAdapter.getInitialState>;

const initialState: UserState = usersAdapter.getInitialState({
	filter: '',
	filteredIds: [],
	status: 'idle',
	error: null,
});

const userSlice = createSlice({
	name: 'users',
	initialState,

	reducers: {
		setUsers: (state, action: PayloadAction<User[]>) => {
			usersAdapter.setAll(state, action.payload);
			state.filteredIds = action.payload.map((user) => user.id);
		},
		usersLoading: (state) => {
			state.status = 'loading';
		},

		usersReceived(state, action) {
			usersAdapter.setAll(state, action.payload);
			state.status = 'succeeded';
		},
		usersFailed: (state, action: PayloadAction<string>) => {
			state.status = 'failed';
			state.error = action.payload;
		},
		filterUsersByUsername: (state, action: PayloadAction<string>) => {
			state.filter = action.payload.toLowerCase();
			if (!state.filter) {
				state.filteredIds = state.ids;
			} else {
				const allUsers = Object.values(state.entities) as User[];
				state.filteredIds = allUsers
					.filter((user) => user.name.toLowerCase().includes(state.filter))
					.map((user) => user.id);
			}
		},
		clearFilter(state) {
			state.filter = '';
			state.filteredIds = state.ids;
		},
	},
});

export const selectFilteredUsers = (state: RootState) => {
	const { filteredIds, entities } = state.users;
	return filteredIds.map((id) => entities[id]);
};

export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUsersError = (state: RootState) => state.users.error;
export const selectUsersFilter = (state: RootState) => state.users.filter;

export const {
	setUsers,
	usersReceived,
	filterUsersByUsername,
	clearFilter,
	usersLoading,
	usersFailed,
} = userSlice.actions;

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors();

export default userSlice.reducer;
