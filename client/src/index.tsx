import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home.page';
import Login from './pages/Login/Login.page';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);

reportWebVitals();
