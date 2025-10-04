import React, { useEffect, useRef } from "react";
import { FormikProps } from "formik";
import { useArticleFormStore } from "@/store/articleStore";

interface Stage2Props {
	formik: FormikProps<{
		title: string;
		author: string;
		summary: string;
		category: string;
		place: string;
		content: string;
		cover: string;
		city: string;

	}>;
}

const Stage2: React.FC<Stage2Props> = ({ formik }) => {
	const setField = useArticleFormStore((state) => state.setField);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height =
				textareaRef.current.scrollHeight + "px";
		}
	}, [formik.values.summary]);

	return (
		<div className="w-[80%] mx-auto flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<label htmlFor="summary" className="font-semibold text-black">
					Summary
				</label>
				<textarea
					ref={textareaRef}
					id="summary"
					name="summary"
					placeholder="Write the summary here..."
					className="border rounded-lg border-gray-400 p-2 text-black placeholder-gray-500 focus:outline-none w-full overflow-hidden"
					value={formik.values.summary}
					onChange={(e) => {
						formik.handleChange(e);
						setField("summary", e.target.value);
					}}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.summary && formik.errors.summary && (
					<p className="text-red-500 text-sm">
						{formik.errors.summary}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="category" className="font-semibold text-black">
					Category
				</label>
				<select
					id="category"
					name="category"
					className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
					value={formik.values.category}
					onChange={(e) => {
						formik.handleChange(e);
						setField("category", e.target.value);
					}}
					onBlur={formik.handleBlur}
				>
					<option value="">Select category</option>
					<option value="Art">Art</option>
					<option value="Sculptures">Sculptures</option>
					<option value="Photography">Photography</option>
					<option value="History">History</option>
				</select>
				{formik.touched.category && formik.errors.category && (
					<p className="text-red-500 text-sm">
						{formik.errors.category}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="place" className="font-semibold text-black">
					Place
				</label>
				<select
					id="place"
					name="place"
					className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
					value={formik.values.place}
					onChange={(e) => {
						formik.handleChange(e);
						setField("place", e.target.value);
					}}
					onBlur={formik.handleBlur}
				>
					<option value="">Select place</option>
					<option value="Yogyakarta">Yogyakarta</option>
					<option value="Surakarta">Surakarta</option>
					<option value="Jakarta">Jakarta</option>
					<option value="Bandung">Bandung</option>
				</select>
				{formik.touched.place && formik.errors.place && (
					<p className="text-red-500 text-sm">
						{formik.errors.place}
					</p>
				)}
			</div>
		</div>
	);
};

export default Stage2;
