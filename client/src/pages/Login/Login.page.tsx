import classNames from 'classnames/bind';

import styles from './Login.page.module.scss';
import loginIllustration from '../../assets/images/login-illustration.svg';
import { FcGoogle } from 'react-icons/fc';

const cx = classNames.bind(styles);

function Login() {
	return (
		<div className={cx('login')}>
			<img src={loginIllustration} alt="" />

			<button className={cx('button')}>
				<FcGoogle />
				<p>Đăng nhập bằng Google</p>
			</button>
		</div>
	);
}

export default Login;
