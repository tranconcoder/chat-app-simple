import styles from './index.module.scss';
import thumbnail from '../../../assets/images/start-page-slide-two-thumb.svg';
import { ReactComponent as MessageIcon } from '../../../assets/images/message-icon.svg';

import classNames from 'classnames/bind';

import ThumbnailContainer from '../LogoContainer';

const cx = classNames.bind(styles);

function SlideTwo() {
	return (
		<div className={cx('slide-two')}>
			<ThumbnailContainer
				Image={thumbnail}
				style={{
					width: 268,
					height: 338,
					transform: 'translate(45%, 90px)',
				}}
			/>

			<div className={cx('text-box')}>
				<h2>
					<MessageIcon />
					<span>Message</span>
				</h2>

				<p>Trò chuyện cùng tvconss (Trần Còn) {':>>'}</p>
			</div>
		</div>
	);
}

export default SlideTwo;
