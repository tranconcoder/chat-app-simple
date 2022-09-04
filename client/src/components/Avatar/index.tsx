import classNames from 'classnames/bind';
import { CSSProperties } from 'react';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Avatar({
	src,
	size,
	active = false,
	styles,
}: {
	src: string;
	size: number;
	active?: boolean;
	styles?: CSSProperties;
}) {
	const style = {
		...styles,
		'--size': `${size}px`,
	} as CSSProperties;

	return (
		<div className={cx('avatar-container', { active })} style={style}>
			<img src={src} alt="avatar" />

			<div className={cx('active-dot')}></div>
		</div>
	);
}

export default Avatar;
