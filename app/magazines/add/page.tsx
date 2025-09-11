"use client";

import Stage1 from "@/components/sections/magazines/add/stage1";
import Stage2 from "@/components/sections/magazines/add/stage2";
import Stage3 from "@/components/sections/magazines/add/stage3";
import Stage4 from "@/components/sections/magazines/add/stage4";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddMagazines = () => {
    const [stage, setStage] = useState(1);
    const [showModal, setShowModal] = useState(false);


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
        2: ["summary", "category"],
        3: ["content", "cover"],
        4: ["tags"],
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            summary: "",
            category: "",
            content: "",
            cover: "",
            tags: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            author: Yup.string().required("Author is required"),
            summary: Yup.string().required("summary is required"),
            category: Yup.string().required("category is required"),
            content: Yup.string().required("content is required"),
            cover: Yup.string().required("Cover is required"),
            tags: Yup.string().required("Tags are required"),
        }),
        onSubmit: (values) => {
            console.log("Submitted data:", values);
            alert("Form submitted successfully!");
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
                            type="submit"
                            onClick={() => {
                                formik.submitForm();
                                setShowModal(true);
                            }}
                            className="px-6 py-3 bg-black text-white font-medium uppercase rounded-full hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>
                    )}
                </div>

            </form>
        </div>
    );
};

export default AddMagazines;
