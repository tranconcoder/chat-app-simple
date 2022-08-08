import { CustomRoute } from '../utils/route.utils';
import { Router } from 'express';
import Token from './token.route';

class API extends CustomRoute {
	constructor() {
		super(Router());

		this.handleRoute();
	}

	private handleRoute() {
		this.Route.use('/token', this.handleChildRoute(Token));
	}
}

export default API;
