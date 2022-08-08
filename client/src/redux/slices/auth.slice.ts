import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { copyFieldValueObj } from '../../utils/object.util';

interface AuthStore {
	googleId: string;
	firstName?: string;
	lastName?: string;
	displayName: string;
	email?: string;
	avatar?: string;
}

// Define the initial state using that type
const initialState: AuthStore = {
	googleId: '',
	firstName: undefined,
	lastName: undefined,
	displayName: '',
	email: undefined,
	avatar: undefined,
};

export const authSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setAuth(state, action: PayloadAction<Partial<AuthStore>>) {
			copyFieldValueObj(state, action.payload);
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
