import type { RecentChatsChatItemProps } from '../../types/props';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function RecentChatsChatItem({
	avatar,
	name,
	lastMessage,
	lastMessageSendTime,
	unSeenCount,
}: RecentChatsChatItemProps) {
	return (
		<li className={cx('chat-item')}>
			<img src={avatar} alt="" />

               <div className={cx("info-container")}>
                    <span>{name}</span>

                    <p>{lastMessage}</p>
               </div>

               <span className={cx("time")}></span>
		</li>
	);
}

export default RecentChatsChatItem;
