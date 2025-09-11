import React from "react";
import { FormikProps } from "formik";
import { useArticleFormStore } from "@/store/articleStore";

interface Stage2Props {
    formik: FormikProps<{
        summary: string;
        category: string;
        place: string;
    }>;
}

const Stage2: React.FC<Stage2Props> = ({ formik }) => {
    const setField = useArticleFormStore((state) => state.setField);

    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">

            {/* Summary Input */}
            <div className="flex flex-col gap-2">
                <label htmlFor="summary" className="font-semibold text-black">
                    Summary
                </label>
                <input
                    id="summary"
                    name="summary"
                    placeholder="Enter summary"
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800"
                    value={formik.values.summary}
                    onChange={(e) => {
                        formik.handleChange(e);
                        setField("summary", e.target.value);
                    }}
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
                    onChange={(e) => {
                        formik.handleChange(e);
                        setField("category", e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Select category</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="sculptures">Sculptures</option>
                    <option value="photography">Photography</option>
                    <option value="history">History</option>
                </select>
                {formik.touched.category && formik.errors.category && (
                    <p className="text-red-500 text-sm">{formik.errors.category}</p>
                )}
            </div>

            {/* Place Input */}
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
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="surakarta">Surakarta</option>
                </select>
                {formik.touched.place && formik.errors.place && (
                    <p className="text-red-500 text-sm">{formik.errors.place}</p>
                )}
            </div>

        </div>
    );
};

export default Stage2;
