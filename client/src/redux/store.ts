import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slice';
import intervalSlice from './slices/interval.slice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		interval: intervalSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
