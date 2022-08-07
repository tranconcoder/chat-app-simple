import mongoose, { Schema } from 'mongoose';

const authSchema = new Schema({
	googleId: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	displayName: { type: String, required: true },
	email: { type: String, required: true },
	avatar: {
		type: String,
		default: 'images/default-avatar.png',
	},
});

export default mongoose.model('auth', authSchema);
