import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import useNeedAuth from './hooks/useNeedAuth.hook';

function App() {
	useNeedAuth();

	const [chatList, setChatList] = useState<string[]>([]);
	const [messageInput, setMessageInput] = useState<string>('');

	const [socket] = useState(
		io('http://localhost:3000/', {
			path: '/socket',
		})
	);

	const handleChat = (e: any) => {
		socket.emit('say', messageInput);
	};

	useEffect(() => {
		socket.connect();
		socket.on('say', (newChatContent: string) => {
			setChatList((oldChatList) => [...oldChatList, newChatContent]);
		});
	}, []);

	return (
		<div className="App">
			<ul>
				{chatList.map((content, index) => (
					<li key={index}>{content}</li>
				))}
			</ul>

			<input
				type="text"
				value={messageInput}
				onChange={(e) => setMessageInput(e.target.value)}
			/>
			<button onClick={handleChat}>Send</button>
		</div>
	);
}

export default App;
