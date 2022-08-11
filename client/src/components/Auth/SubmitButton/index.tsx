import { useFormikContext } from 'formik';
import { ButtonHTMLAttributes } from 'react';

function SubmitButton({
	children,
     onClick: handleClick = () => {},
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	const { handleSubmit } = useFormikContext();

	return (
		<button
			{...props}
			type="submit"
			onClick={(e) => {
				handleSubmit();
				handleClick(e);
			}}
		>
			{children}
		</button>
	);
}

export default SubmitButton;
