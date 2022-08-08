import classNames from 'classnames/bind';

import styles from './Login.page.module.scss';
import loginIllustration from '../../assets/images/login-illustration.svg';
import { FcGoogle } from 'react-icons/fc';
import { useLogin } from '../../hooks/useLogin';

const cx = classNames.bind(styles);

function Login() {
	const { triggerLogin } = useLogin();

	return (
		<div className={cx('login')}>
			<img src={loginIllustration} alt="" />

			<button className={cx('button')} onClick={triggerLogin}>
				<FcGoogle />
				<p>Đăng nhập bằng Google</p>
			</button>
		</div>
	);
}

export default Login;
