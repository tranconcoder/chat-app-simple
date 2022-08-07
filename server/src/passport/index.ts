import passport from 'passport';
import GoogleOAuth from 'passport-google-oauth20';

const GoogleStrategy = GoogleOAuth.Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'183225402615-81tj44dnfbegfanc6buloccineqlsd85.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: 'http://localhost:3000/auth/google/callback',
		},
		(accessToken, refreshToken, profile, cb) => {
			cb(null, profile);
		}
	)
);

export default passport;
