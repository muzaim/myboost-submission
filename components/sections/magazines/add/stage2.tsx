import React from "react";
import { FormikProps } from "formik";

interface Stage2Props {
    formik: FormikProps<{
        summary: string;
        category: string;
    }>;
}

const Stage2: React.FC<Stage2Props> = ({ formik }) => {
    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">
            {/* <h2 className="text-2xl font-bold uppercase">Stage 2: Details</h2> */}

            {/* Summary Input */}
            <div className="flex flex-col gap-2">
                <label htmlFor="summary" className="font-semibold text-black">
                    Summary
                </label>
                <textarea
                    id="summary"
                    name="summary"
                    placeholder="Enter summary"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.summary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.summary && formik.errors.summary && (
                    <p className="text-red-500 text-sm">{formik.errors.summary}</p>
                )}
            </div>

            {/* Category Input */}
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="font-semibold text-black">
                    Category
                </label>
                <select
                    id="category"
                    name="category"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Select category</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="sculptures">Sculptures</option>
                    <option value="photography">Photography</option>
                </select>
                {formik.touched.category && formik.errors.category && (
                    <p className="text-red-500 text-sm">{formik.errors.category}</p>
                )}
            </div>

        </div>
    );
};

export default Stage2;
