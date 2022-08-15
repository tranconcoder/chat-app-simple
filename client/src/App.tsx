import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HandleLogin from './components/HandleLogin';
import ToastMessage from './components/ToastMessage';
import startRouteConfig from './config/startRoute.config';
import ChatPage from './pages/Chat';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/start">
						{Object.entries(startRouteConfig).map(
							([key, value], index) => {
								return (
									<Route
										key={index}
										path={key}
										element={value}
									/>
								);
							}
						)}
					</Route>

					<Route path="/auth">
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
					</Route>

					<Route path="/chat" element={<ChatPage />} />
				</Routes>

				<HandleLogin />
			</BrowserRouter>

			<ToastMessage />
		</Fragment>
	);
}

export default App;
