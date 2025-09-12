import React from "react";

const FormButton = ({
	children,
	onClick,
	type = "button",
	variant = "primary",
	shape = "default",
	className = "",
}) => {
	const baseStyle =
		"px-4 py-2 font-medium transition focus:outline-none disabled:opacity-50";

	const variants = {
		primary: "bg-black text-white hover:bg-gray-800",
		secondary: "bg-gray-300 hover:bg-gray-400",
	};

	const shapes = {
		default: "rounded",
		rounded: "rounded-full px-6 py-3 uppercase",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			className={`${baseStyle} ${variants[variant]} ${shapes[shape]} ${className}`}
		>
			{children}
		</button>
	);
};

export default FormButton;
