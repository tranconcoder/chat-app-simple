import mongoose, { Schema } from 'mongoose';

const authSchema = new Schema({
	googleId: { type: String },
	userId: { type: String },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	gender: { type: String },
	avatar: {
		type: String,
		default: 'images/default-avatar.png',
	},
	birthDay: {
		day: { type: Number },
		month: { type: Number },
		year: { type: Number },
	},
	accountType: { type: String, required: true, enum: ['google', 'local'] },
});

export default mongoose.model('auth', authSchema);
