import classNames from 'classnames/bind';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import LoginWithGoogleButton from '../../components/Common/LoginWithGoogleButton';

import tapoLogo from '../../assets/images/logo.png';
import Input from '../../components/Auth/Input';
import SubmitButton from '../../components/Auth/SubmitButton';
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
	const userId = useAppSelector((state) => state.auth.userId);

	useEffect(() => {
		if (googleId || userId) navigate("/chat");
	}, [googleId]);

	const handleSubmit = (
		value: typeof authFormValues,
		helper: FormikHelpers<typeof authFormValues>
	) => {
		console.log(value);
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

						<Field
							name="username"
							placeholder="Tên đăng nhập..."
							component={Input}
							style={{ height: 50 }}
						/>

						<Field
							name="password"
							placeholder="Mật khẩu..."
							component={Input}
							style={{ height: 50 }}
							parentStyle={{ marginTop: 20 }}
							showAndHidePassword
						/>

						<SubmitButton>
							<p>Đăng nhập</p>
						</SubmitButton>

						<footer className={cx('form-footer')}>
							<Link to="/auth/login">Quên mật khẩu?</Link>
							<Link to="/auth/register">Đăng ký</Link>
						</footer>
					</Form>
				</Formik>
			</div>
		</div>
	);
}

export default LoginPage;
