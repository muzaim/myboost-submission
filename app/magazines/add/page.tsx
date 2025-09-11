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


const AddMagazines = () => {
    const [stage, setStage] = useState(1);
    const [showConfirm, setShowConfirm] = useState(false);

    const addArticle = useArticlesStore((state) => state.addArticle);
    const formState = useArticleFormStore();


    const nextStage = () => {
        const currentStageFields = stageFields[stage];
        formik.setTouched(
            currentStageFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}),
            true
        );

        formik.validateForm().then((errors) => {
            const stageHasError = currentStageFields.some((field) => errors[field]);
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
            title: Yup.string().required("Title is required"),
            author: Yup.string().required("Author is required"),
            summary: Yup.string().required("summary is required"),
            category: Yup.string().required("category is required"),
            place: Yup.string().required("category is required"),
            content: Yup.string().required("content is required"),
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

            console.log("Submitted data:", newArticle);
            addArticle(newArticle);
        }
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



    return (
        <div className="px-4 md:px-8 lg:px-16 py-10">
            {/* Progress Indicator */}
            <div className="flex gap-4 mb-10">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`flex-1 h-2 rounded-full ${stage >= s ? "bg-black" : "bg-gray-300"
                            } transition-all duration-300`}
                    ></div>
                ))}
            </div>

            {/* Stage Content */}
            <form

                onSubmit={formik.handleSubmit}
                className="h-max w-full bg-gray-100 p-8 border border-black-300 rounded-xl flex flex-col justify-between"
            >
                {renderStage()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    {stage > 1 ? (
                        <button
                            type="button"
                            onClick={prevStage}
                            className="px-6 py-3 border border-black rounded-full text-black font-medium uppercase hover:bg-black hover:text-white transition"
                        >
                            Back
                        </button>
                    ) : (
                        <div className="w-[100px]" />
                    )}

                    {stage < 4 ? (
                        <button
                            type="button"
                            onClick={nextStage}
                            className="px-6 py-3 bg-black text-white font-medium uppercase rounded-full hover:bg-gray-800 transition"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setShowConfirm(true)}
                            className="px-6 py-3 bg-black text-white font-medium uppercase rounded-full hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>
                    )}

                </div>
                {/* <div className="mt-4 p-4 border border-gray-300">
                    <h3>Debug Zustand State:</h3>
                    <pre>{JSON.stringify(formState, null, 2)}</pre>
                </div> */}

                {showConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
                        <div
                            className="bg-[#fff] p-6 rounded-xl border border-black w-96"
                        >
                            <h2 className="text-lg font-medium mb-4">Make sure?</h2>
                            <div className="flex justify-end gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                                    onClick={() => setShowConfirm(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                                    onClick={() => {
                                        formik.submitForm();
                                        setShowConfirm(false);
                                    }}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddMagazines;
