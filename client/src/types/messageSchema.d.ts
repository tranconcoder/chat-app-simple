interface ChatPageMessageToRender {
	id: string;
	peopleId: string;
	messageList: {
		content: string;
		sendAt: number;
	}[];
}

export interface ChatPageMessageListToRender
	extends Array<ChatPageMessageToRender> {
	[index: number]: ChatPageMessageToRender;
}
