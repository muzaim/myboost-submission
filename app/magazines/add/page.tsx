"use client";

import Stage1 from "@/components/sections/magazines/add/stage1";
import Stage2 from "@/components/sections/magazines/add/stage2";
import Stage3 from "@/components/sections/magazines/add/stage3";
import Stage4 from "@/components/sections/magazines/add/stage4";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useArticleFormStore, useArticlesStore } from "@/store/articleStore";
import { Article } from "@/store/articleStore";
import FormButton from "@/components/ui/formButton";
import Link from "next/link";
import { CustomToast } from "@/components/common/customToast";
import { useRouter } from "next/navigation";

const AddMagazines = () => {
	const [stage, setStage] = useState(1);
	const [showConfirm, setShowConfirm] = useState(false);

	const addArticle = useArticlesStore((state) => state.addArticle);
	const clearArticles = useArticlesStore((state) => state.clearArticles);

	const formState = useArticleFormStore();
	const router = useRouter();

	const nextStage = () => {
		const currentStageFields = stageFields[stage];
		formik.setTouched(
			currentStageFields.reduce(
				(acc, field) => ({ ...acc, [field]: true }),
				{}
			),
			true
		);

		formik.validateForm().then((errors) => {
			const stageHasError = currentStageFields.some(
				(field) => errors[field]
			);
			if (!stageHasError) setStage((prev) => Math.min(prev + 1, 4));
		});
	};

	const prevStage = () => setStage((prev) => Math.max(prev - 1, 1));

	const stageFields: Record<number, string[]> = {
		1: ["title", "author"],
		2: ["summary", "category", "place"],
		3: ["content", "cover"],
	};

	const formik = useFormik({
		initialValues: {
			title: formState.title,
			author: formState.author,
			summary: formState.summary,
			category: formState.category,
			place: formState.place,
			content: formState.content,
			cover: formState.cover,
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is required").min(3),
			author: Yup.string().required("Author is required").min(3),
			summary: Yup.string().required("Summary is required").min(5),
			category: Yup.string().required("Category is required"),
			place: Yup.string().required("Pategory is required"),
			content: Yup.string().required("Content is required").min(3),
			cover: Yup.string().required("Cover is required"),
		}),
		onSubmit: (values) => {
			const newArticle: Article = {
				id: Date.now(),
				date: new Date().toISOString(),
				title: values.title,
				author: values.author,
				place: values.place,
				content: values.content,
				summary: values.summary,
				cover: values.cover,
				category: values.category,
			};

			addArticle(newArticle);
			CustomToast.success("Article submitted successfully!");
			formState.resetForm();
			setTimeout(() => {
				router.push("/magazines");
			}, 1500);
		},
	});

	const renderStage = () => {
		switch (stage) {
			case 1:
				return <Stage1 formik={formik} />;
			case 2:
				return <Stage2 formik={formik} />;
			case 3:
				return <Stage3 formik={formik} />;
			case 4:
				return <Stage4 formik={formik} />;
			default:
				return <Stage1 formik={formik} />;
		}
	};

	useEffect(() => {
		document.body.style.overflow = showConfirm ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showConfirm]);

	return (
		<div className="px-4 md:px-8 lg:px-16 ">
			<div className="bg-white-30 text-black grid grid-cols-2 pt-5 gap-6 pb-10">
				<Link
					href="/magazines"
					className="font-bold text-lg uppercase leading-none"
				>
					back
				</Link>
				<Link href="/magazines" className="flex flex-row justify-end">
					<span className="font-semibold uppercase">Magazines</span>
				</Link>
			</div>
			{/* Progress Indicator */}
			<div className="flex gap-4 mb-10">
				{[1, 2, 3, 4].map((s) => (
					<div
						key={s}
						className={`flex-1 h-2 rounded-full ${
							stage >= s ? "bg-black" : "bg-gray-300"
						} transition-all duration-300`}
					></div>
				))}
			</div>

			{/* Stage Content */}
			<form
				onSubmit={formik.handleSubmit}
				className="h-max w-full bg-gray-100 p-8 border border-black-300 rounded-xl flex flex-col justify-between my-10"
			>
				{renderStage()}

				{/* Navigation Buttons */}
				<div className="flex justify-between mt-6">
					{stage > 1 ? (
						<button
							type="button"
							onClick={prevStage}
							className="cursor-pointer px-6 py-3 border border-black rounded-full text-black font-medium uppercase hover:bg-black hover:text-white transition"
						>
							Back
						</button>
					) : (
						<div className="w-[100px]" />
					)}

					{stage < 4 ? (
						<FormButton
							variant="primary"
							shape="rounded"
							onClick={nextStage}
						>
							Next
						</FormButton>
					) : (
						<FormButton
							variant="primary"
							shape="rounded"
							onClick={() => setShowConfirm(true)}
						>
							Submit
						</FormButton>
					)}
				</div>

				{showConfirm && (
					<div className="fixed inset-0 z-50 flex items-center justify-center">
						<div className="absolute inset-0 bg-black/40"></div>
						<div
							role="dialog"
							aria-modal="true"
							className="relative z-20 w-96 bg-white p-6 rounded-xl border border-black"
						>
							<h2 className="text-lg font-medium mb-4">
								Make sure?
							</h2>
							<div className="flex justify-end gap-4">
								<FormButton
									variant="secondary"
									shape="rounded"
									onClick={() => setShowConfirm(false)}
								>
									Cancel
								</FormButton>
								<FormButton
									variant="primary"
									shape="rounded"
									onClick={() => {
										formik.submitForm();
										setShowConfirm(false);
									}}
								>
									Yes
								</FormButton>
							</div>
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default AddMagazines;
