import classNames from 'classnames/bind';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import tapoLogo from '../../assets/images/logo.png';
import { registerValidationSchema } from '../../config/validateSchema.config';
import type { RegisterInitValues } from '../../types/formik';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
	const registerInitValues: RegisterInitValues = {
		username: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		dayOfBirth: {
			display: '',
			data: {
				day: '',
				month: '',
				year: '',
			},
		},
	};

	const handleSubmit = (
		values: typeof registerInitValues,
		helpers: FormikHelpers<typeof registerInitValues>
	) => {
		console.log(values);
	};

	return (
		<div className={cx('register-page')}>
			<header className={cx('header-container')}>
				<div className={cx('circle')}></div>

				<img src={tapoLogo} alt="logo" />
			</header>

			<div className={cx('body')}>
				<h2>Đăng ký</h2>

				<Formik
					initialValues={registerInitValues}
					onSubmit={handleSubmit}
					validationSchema={registerValidationSchema}
				>
					<Form>
						<Field name="username" placeholder="Tên đăng nhập..." />

						<Field
							name="password"
							type="password"
							placeholder="Mật khẩu..."
						/>

						<Field
							name="confirmPassword"
							type="password"
							placeholder="Nhập lại mật khẩu..."
						/>

						<ErrorMessage name="confirmPassword" />

						<Field name="firstName" placeholder="Họ ..." />

						<Field name="lastName" placeholder="Tên ..." />
					</Form>
				</Formik>
			</div>
		</div>
	);
}

export default RegisterPage;
