import classNames from 'classnames/bind';
import ChatPageHeader from '../../components/ChatPageHeader';
import PinnedChats from '../../components/PinnedChat';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function ChatPage() {
	return (
		<div className={cx('chat-page')}>
			<ChatPageHeader />

			<PinnedChats />
		</div>
	);
}

export default ChatPage;
