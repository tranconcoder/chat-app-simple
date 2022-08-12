import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { copyFieldValueObj } from '../../utils/object.util';
import type { AuthStore } from '../../types/store';

// Define the initial state using that type
const initialState: AuthStore = {
	googleId: '',
	userId: '',
	firstName: '',
	lastName: '',
	displayName: '',
	email: '',
	avatar: '',
	gender: '',
	birthDay: {},
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth(state, action: PayloadAction<Partial<AuthStore>>) {
			copyFieldValueObj(state, action.payload);
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
