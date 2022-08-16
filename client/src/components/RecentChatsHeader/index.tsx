import classNames from 'classnames/bind';

import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function RecentChatsHeader() {
	return (
		<>
			<div className={cx('separate')}></div>
			<header className={cx('header')}>
				<span>Recent Chats</span>

				<SearchIcon />
			</header>
		</>
	);
}

export default RecentChatsHeader;
