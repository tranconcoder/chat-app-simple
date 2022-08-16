import classNames from 'classnames/bind';
import { RecentChatsContentListProps } from '../../types/props';
import RecentChatsChatItem from '../RecentChatsChatItem';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function RecentChatsContentList({
	selectedFilter,
}: RecentChatsContentListProps) {
	return (
		<ul className={cx('recent-chats-content-list')}>
			<RecentChatsChatItem />
		</ul>
	);
}

export default RecentChatsContentList;
