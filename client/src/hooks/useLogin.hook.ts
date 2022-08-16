import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAuth } from '../redux/slices/auth.slice';
import useUpdateToken from './useUpdateToken.hook';

export function useLogin() {
	const dispatch = useAppDispatch();
	const updateToken = useUpdateToken();

	const loginWindowRef = useRef<Window | null>(null);
	const profile = useAppSelector((state) => state.auth);
	const [handleLogin, setHandleLogin] = useState({});

	const triggerLogin = () => {
		const loginUrl = 'http://localhost:3000/auth/google';
		const loginWindow = window.open(loginUrl);

		loginWindowRef.current = loginWindow;

		setHandleLogin({});
	};

	useEffect(() => {
		function handleListenMessage(e: MessageEvent<any>) {
			if (e.origin === 'http://localhost:3000') {
				const profile = e.data.profile;
				const refreshToken = e.data.refreshToken;

				updateToken(refreshToken);

				dispatch(setAuth(profile));

				loginWindowRef.current?.close();
			}
		}

		window.addEventListener('message', handleListenMessage);

		return () => window.removeEventListener('message', handleListenMessage);
	}, [handleLogin]); // eslint-disable-line

	return { profile, triggerLogin };
}
