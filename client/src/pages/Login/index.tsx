import classNames from 'classnames/bind';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import LoginWithGoogleButton from '../../components/Common/LoginWithGoogleButton';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import tapoLogo from '../../assets/images/logo.png';
import { loginValidationSchema } from '../../config/validateSchema.config';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const authFormValues = {
	username: '',
	password: '',
};

function LoginPage() {
	const navigate = useNavigate();
	const googleId = useAppSelector((state) => state.auth.googleId);
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		// if (googleId) navigate(-1);
	}, [googleId]);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (
		value: typeof authFormValues,
		helper: FormikHelpers<typeof authFormValues>
	) => {
		console.log(value);
	};
	const handleRegister = async () => {
		navigate('/auth/register');
	};

	return (
		<div className={cx('login-page')}>
			<header className={cx('header-container')}>
				<div className={cx('circle')}></div>

				<img src={tapoLogo} alt="logo" />
			</header>

			<div className={cx('body')}>
				<Formik
					initialValues={authFormValues}
					validationSchema={loginValidationSchema}
					onSubmit={handleSubmit}
				>
					<Form className={cx('form')}>
						<LoginWithGoogleButton
							style={{ width: 320, maxWidth: '90vw' }}
						/>

						<p className={cx('separate')}>Hoặc</p>

						<Field name="username" placeholder="Tên đăng nhập..." />
						<ErrorMessage
							name="username"
							render={(message) => (
								<p className={cx('error-message')}>
									<BiErrorCircle />
									<span>{message}</span>
								</p>
							)}
						/>

						<div className={cx('password-input')}>
							<Field
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="Mật khẩu..."
							/>

							<div
								className={cx('toggle-password')}
								onClick={toggleShowPassword}
							>
								{showPassword ? (
									<AiFillEyeInvisible />
								) : (
									<AiFillEye />
								)}
							</div>
						</div>
						<ErrorMessage
							name="password"
							render={(message) => (
								<p className={cx('error-message')}>
									<BiErrorCircle />
									<span>{message}</span>
								</p>
							)}
						/>

						<button type="submit">
							<p>Đăng nhập</p>
						</button>

						<footer className={cx('form-footer')}>
							<span>Quên mật khẩu?</span>
							<span onClick={handleRegister}>Đăng ký</span>
						</footer>
					</Form>
				</Formik>
			</div>
		</div>
	);
}

export default LoginPage;
