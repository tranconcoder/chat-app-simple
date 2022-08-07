import jwt, { JwtPayload } from 'jsonwebtoken';

export const generateToken = (
	payload: JwtPayload,
	type: 'access' | 'refresh'
) => {
	try {
		console.log(process.env.JWT_ACCESS_TOKEN_SECRET_KEY);

		const secretKey = (
			type === 'access'
				? process.env.JWT_ACCESS_TOKEN_SECRET_KEY
				: process.env.JWT_REFRESH_TOKEN_SECRET_KEY
		) as string;

		const token = jwt.sign(payload, secretKey);

		return token;
	} catch (err) {
		console.error(err);

		return err;
	}
};
