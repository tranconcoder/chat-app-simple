import classNames from 'classnames/bind';

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import tapoLogo from '../../assets/images/logo.png';
import Input from '../../components/Auth/Input';
import SubmitButton from '../../components/Auth/SubmitButton';
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
			<header className={cx('header')}>
				<div className={cx('circle')}></div>

				<img src={tapoLogo} alt="logo" />
			</header>

			<div className={cx('body')}>
				<h2 className={cx('title')}>Đăng ký</h2>

				<Formik
					initialValues={registerInitValues}
					onSubmit={handleSubmit}
					validationSchema={registerValidationSchema}
				>
					<Form className={cx('form')}>
						<Field
							name="username"
							placeholder="Tên đăng nhập..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 40 }}
						/>

						<Field
							name="password"
							type="password"
							placeholder="Mật khẩu..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
						/>

						<Field
							name="confirmPassword"
							type="password"
							placeholder="Nhập lại mật khẩu..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
						/>

						<Field
							name="firstName"
							placeholder="Họ ..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
						/>

						<Field
							name="lastName"
							placeholder="Tên ..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
						/>

						<Field
							name="email"
							placeholder="Email ..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
						/>

						<label>
							<Field type="radio" value="male" name="gender" />
							<span>Nam</span>
						</label>

						<label>
							<Field type="radio" value="female" name="gender" />
							<span>Nữ</span>
						</label>

						<SubmitButton>
							<p>Đăng ký</p>
						</SubmitButton>

						<footer className={cx('form-footer')}>
							<Link to="/auth/login">
								<p>Đăng nhập</p>
							</Link>
						</footer>
					</Form>
				</Formik>
			</div>
		</div>
	);
}

export default RegisterPage;
