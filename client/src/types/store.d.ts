export interface AuthStore {
	googleId: string;
	userId: string;
	firstName: string;
	lastName: string;
	displayName: string;
	email: string;
	avatar: string;
	gender: 'Male' | 'Female' | '';
	birthDay: {
		day?: number;
		month?: number;
		year?: number;
	};
}
