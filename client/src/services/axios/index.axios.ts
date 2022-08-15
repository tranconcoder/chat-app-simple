import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:3000/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
