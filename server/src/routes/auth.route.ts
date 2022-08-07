import { ChildRoute } from '../utils/route.utils';
import { Router } from 'express';
import passport from '../passport';

import authController from '../controllers/auth.controller';

class Auth extends ChildRoute {
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

		this.Route.get(
			'/google',
			passport.authenticate('google', {
				session: false,
				scope: ['profile', 'email'],
			})
		);

		this.Route.get(
			'/google/callback',
			passport.authenticate('google', {
				session: false,
				failureRedirect: '/login',
			}),
			authController.handleGenerateToken
		);
	}
}

export default Auth;
