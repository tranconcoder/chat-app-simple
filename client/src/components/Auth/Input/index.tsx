import { FieldProps } from 'formik';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { BiErrorCircle } from 'react-icons/bi';
import { CSSProperties, InputHTMLAttributes, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Input({
	field,
	form,
	meta,
	showAndHidePassword = false,
	parentStyle = {},
	...props
}: FieldProps & {
	showAndHidePassword?: boolean;
	parentStyle?: CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>) {
	const [touched, setTouched] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => setShowPassword(!showPassword);
	const handleBlur = (e: any) => {
		field.onBlur(e);
		setTouched(true);
	};
	const handleChange = (e: any) => {
		field.onChange(e);
		setTouched(true);
	};

	return (
		<div className={cx('input-container')} style={parentStyle}>
			<div>
				<input
					{...props}
					{...field}
					type={
						showAndHidePassword
							? showPassword
								? 'text'
								: 'password'
							: props.type || 'text'
					}
					name={field.name}
					value={field.value}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{showAndHidePassword && (
					<div
						className={cx('toggle-password')}
						onClick={toggleShowPassword}
					>
						{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
					</div>
				)}
			</div>

			{form.errors[field.name] && !!(touched || form.submitCount) && (
				<p className={cx('error-message')}>
					<BiErrorCircle />
					<span>{form.errors[field.name] as string}</span>
				</p>
			)}
		</div>
	);
}

export default Input;
