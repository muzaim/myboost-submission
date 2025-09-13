import React from "react";
import { FormikProps } from "formik";
import { useArticleFormStore } from "@/store/articleStore";

interface Stage1Props {
    formik: FormikProps<{
        title: string;
        author: string;
    }>;
}
const Stage1: React.FC<Stage1Props> = ({ formik }) => {
    const setField = useArticleFormStore((state) => state.setField);

    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">

            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold text-black">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter magazine title"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.title}
                    onChange={(e) => {
                        formik.handleChange(e);
                        setField("title", e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                    <p className="text-red-500 text-sm">{formik.errors.title}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="author" className="font-semibold text-black">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Enter author name"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.author}
                    onChange={(e) => {
                        formik.handleChange(e);
                        setField("author", e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.author && formik.errors.author && (
                    <p className="text-red-500 text-sm">{formik.errors.author}</p>
                )}
            </div>

        </div>
    );
};

export default Stage1;
