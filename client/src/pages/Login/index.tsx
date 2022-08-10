import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
	return (
		<div className={cx('login-page')}>
			<header className={cx('header-container')}>
				<div className={cx('circle')}></div>

				<img src="" alt="" />
			</header>
		</div>
	);
}

export default LoginPage;
