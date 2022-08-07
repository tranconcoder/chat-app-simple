import type { Request, Response } from 'express';
import { Profile } from 'passport-google-oauth20';
import { profileTransformer } from '../transformers/auth.transformer';

import authSchemaDb from '../database/schema/auth.schema.db';

class Auth {
	public async handleGenerateToken(req: Request, res: Response) {
		try {
			const profile = profileTransformer(req.user as Profile);
			const userInDb = await authSchemaDb.findOne({
				googleId: profile.googleId,
			});

			if (!userInDb) await authSchemaDb.create(profile);
		} catch (err) {
			console.error(err);
		}
	}
}

export default new Auth();
