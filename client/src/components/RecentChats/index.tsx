import classNames from 'classnames/bind';
import { useState } from 'react';
import { SelectedFilter } from '../../types/props';
import RecentChatsContentList from '../RecentChatsContentList';
import RecentChatsFilters from '../RecentChatsFilter';
import RecentChatsHeader from '../RecentChatsHeader';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function RecentChats() {
	const filterList: SelectedFilter[] = ['Chats', 'Status', 'Calls'];
	const [selectedFilter, setSelectedFilter] = useState(filterList[0]);

	return (
		<div className={cx('recent-chats-wrapper')}>
			<RecentChatsHeader />

			<RecentChatsFilters
				selectedFilter={selectedFilter}
				setSelectedFilter={setSelectedFilter}
				filterList={filterList}
			/>

			<RecentChatsContentList selectedFilter={selectedFilter}/>
		</div>
	);
}

export default RecentChats;
