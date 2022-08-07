import { RootRoute } from '../utils/route.utils';
import type { Express } from 'express';
import Home from './home.route';
import Auth from './auth.route';

class IndexRoute extends RootRoute {
	private readonly app: Express;

	constructor(app: Express) {
		super();

		this.app = app;
	}

	public listenRoutes() {
		this.app.use('/', this.handleChildRoute('/', Home));
		this.app.use('/auth', this.handleChildRoute('/', Auth));
	}

	private handleChildRoute(path: string, childRouteClass: any) {
		return new childRouteClass(path).Route;
	}
}

export default IndexRoute;
