import type { ReactElement } from 'react';

export interface HandleLoginProps {}

export interface ToastMessageItemProps {
     id: string;
	state: 'showing' | 'normal' | 'closing';
	type: 'success' | 'warning' | 'danger' | "paragraph";
	title: string;
	content?: string;
	duration?: number
	createTime?: Date
}


export interface PinnedChatItemProps {
	seen?: boolean
}