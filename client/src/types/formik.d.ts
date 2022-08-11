export interface RegisterInitValues
	extends Pick<
		AuthStore,
		'firstName' | 'lastName' | 'dayOfBirth' | 'gender' | 'email'
	> {
	username: string;
	password: string;
	confirmPassword: string;
}
