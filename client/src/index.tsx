import './assets/scss/fonts.scss';
import './assets/scss/reset.scss';
import './assets/scss/variables.scss';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import startRouteConfig from './config/startRoute.config';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

import HandleLogin from './components/HandleLogin';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/start">
					{Object.entries(startRouteConfig).map(
						([key, value], index) => {
							return (
								<Route key={index} path={key} element={value} />
							);
						}
					)}
				</Route>

				<Route path="/auth">
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
				</Route>
			</Routes>

			<HandleLogin />
		</BrowserRouter>
	</Provider>
);

reportWebVitals();
