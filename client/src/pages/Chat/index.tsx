import styles from './index.module.scss';

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ChatPageHeader from '../../components/ChatPageHeader';
import ChatPageMessageList from '../../components/ChatPageMessageList';
import ChatPageTyping from '../../components/ChatPageTyping';
import useSocket from '../../hooks/useSocket.hook';
import instance from '../../services/axios/index.axios';
import { SendMessageResponse } from '../../types/socket';
import { ChatPageMessageListToRender } from '../../types/messageSchema';
import { v4 as uuidv4 } from 'uuid';
import { useCheckMyId } from '../../hooks/useCheckMyId.hook';

const cx = classNames.bind(styles);

function ChatPage() {
	const params = useParams();
	const socket = useSocket();
	const [searchParams] = useSearchParams();
	const peopleChatAvatar = searchParams.get('avatar') as string;

	const [messageList, setMessageList] = useState<ChatPageMessageListToRender>(
		[]
	);

	const addMessageToNewGroup = (newMessage: SendMessageResponse) => {
		setMessageList((messageList) => [
			...messageList,
			{
				id: uuidv4(),
				peopleId: newMessage.from,
				messageList: [
					{
						content: newMessage.content,
						sendAt: newMessage.sendTime,
					},
				],
			},
		]);
	};

	const addNewMessage = (newMessage: SendMessageResponse) => {
		const lastMessageGroup = messageList.at(-1);
		const currentTime = new Date().getTime();

		if (lastMessageGroup?.peopleId === newMessage.from) {
			const lastMessage = lastMessageGroup.messageList.at(-1);
			const lastMessageSendAt = lastMessage?.sendAt || currentTime;

			if (newMessage.sendTime - lastMessageSendAt > 5 * 60 * 1000) {
				addMessageToNewGroup(newMessage);
			} else {
				setMessageList((state) => {
					const messageList = [...state];

					messageList.at(-1)?.messageList.push({
						content: newMessage.content,
						sendAt: newMessage.sendTime,
					});

					return messageList;
				});
			}
		} else {
			addMessageToNewGroup(newMessage);
		}
	};
	const renderMessages = (messageList: SendMessageResponse[]) => {
		const messageListToRender: ChatPageMessageListToRender = [];

		messageList.forEach((message, index) => {
			const lastMessage = messageList[index - 1];

			if (!lastMessage) {
				return messageListToRender.push({
					id: uuidv4(),
					peopleId: message.from,
					messageList: [
						{
							content: message.content,
							sendAt: message.sendTime,
						},
					],
				});
			}

			const lastMessageSendTime = lastMessage.sendTime;
			const newMessageSendTime = message.sendTime;

			if (
				newMessageSendTime - lastMessageSendTime > 5 * 60 * 1000 ||
				message.from !== messageListToRender.at(-1)?.peopleId
			) {
				return messageListToRender.push({
					id: uuidv4(),
					peopleId: message.from,
					messageList: [
						{
							content: message.content,
							sendAt: message.sendTime,
						},
					],
				});
			}

			messageListToRender.at(-1)?.messageList.push({
				content: message.content,
				sendAt: message.sendTime,
			});
		});

		setMessageList(messageListToRender);
	};

	useEffect(() => {
		instance
			.get('/api/chat/get-chats', {
				params: {
					peopleChatId: params.id,
				},
			})
			.then((data) => {
				const messageList = data.data;

				renderMessages(messageList);
			});
	}, []);

	useEffect(() => {
		const handleReceiveMessage = (data: SendMessageResponse) => {
			console.log(data);
			addNewMessage(data);
		};

		socket.on('receive-message', handleReceiveMessage);

		return () => {
			socket.removeListener('receive-message', handleReceiveMessage);
		};
	}, []);

	return (
		<div className={cx('chat-page')}>
			<ChatPageHeader
				avatar={peopleChatAvatar}
				active
				name="Trần Văn Còn"
			/>

			<ChatPageMessageList
				avatar={peopleChatAvatar}
				messageGroupList={messageList}
			/>

			<ChatPageTyping handleAddNewMessage={addNewMessage} />
		</div>
	);
}

export default ChatPage;
