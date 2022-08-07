import { ChildRoute } from '../utils/route.utils';
import { Router } from 'express';

class Home extends ChildRoute {
	public Route: Router;

	constructor(parentPath: string) {
		super(parentPath);

		this.Route = Router();

		this.handleRoute();
	}

	private handleRoute() {
		this.Route.get('/', (req, res) => {
			res.json('Hello world!');
		});
	}
}

export default Home;
