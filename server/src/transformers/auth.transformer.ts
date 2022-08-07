import type { ProfileTransformed } from '../types/transformers';

import { Profile } from 'passport-google-oauth20';

export const profileTransformer = (profile: Profile): ProfileTransformed => {
	return {
		googleId: profile.id,
		firstName: profile.name?.familyName,
		lastName: profile.name?.givenName,
		displayName: profile.displayName,
		email: profile.emails?.at(0)?.value,
		avatar: profile.photos?.at(0)?.value,
	};
};
