import React from "react";
import { FormikProps } from "formik";

interface Stage1Props {
    formik: FormikProps<{
        title: string;
        author: string;
    }>;
}
const Stage1: React.FC<Stage1Props> = ({ formik }) => {
    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">
            {/* <h2 className="text-2xl font-bold uppercase">Stage 1: Basic Info</h2> */}

            {/* Title Input */}
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold text-black">
                    Magazine Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"   // <-- wajib ada agar Formik tahu ini field 'title'
                    placeholder="Enter magazine title"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.title}       // <-- ambil dari Formik state
                    onChange={formik.handleChange}    // <-- update Formik state
                    onBlur={formik.handleBlur}        // <-- menandai field touched
                />
                {formik.touched.title && formik.errors.title && (
                    <p className="text-red-500 text-sm">{formik.errors.title}</p>
                )}
            </div>

            {/* Author Input */}
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
                    onChange={formik.handleChange}
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
