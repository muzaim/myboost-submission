"use client";

import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseOptions: ToastOptions = {
	position: "top-right",
	autoClose: 1400,
	hideProgressBar: true,
	closeButton: false,
	className: () => "text-sm font-medium text-white",
};

export const CustomToast = {
	success: (message: string) => {
		toast(message, {
			...baseOptions,
			className:
				"bg-black border-l-4 border-green-400 text-white rounded-lg px-4 py-3 flex items-center shadow-lg",
		});
	},
	error: (message: string) => {
		toast(message, {
			...baseOptions,
			className:
				"bg-black border-l-4 border-red-500 text-white rounded-lg px-4 py-3 flex items-center shadow-lg",
		});
	},
	info: (message: string) => {
		toast(message, {
			...baseOptions,
			className:
				"bg-black border-l-4 border-gray-300 text-white rounded-lg px-4 py-3 flex items-center shadow-lg",
		});
	},
};

export const CustomToastContainer = () => (
	<ToastContainer
		toastClassName={() => "bg-black text-white"}
		className="text-white font-medium"
	/>

);
