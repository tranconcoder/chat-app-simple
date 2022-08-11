export interface AuthStore {
	googleId: string;
	userId: string;
	firstName: string;
	lastName: string;
	displayName: string;
	email: string;
	avatar: string;
	gender: 'Male' | 'Female' | '';
	dayOfBirth: {
		display: string;
		data?: {
			day: string;
			month: string;
			year: string;
		};
	};
}
