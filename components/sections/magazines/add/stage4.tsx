import React from "react";
import { FormikProps } from "formik";
import Image from "next/image";

interface Stage4Props {
    formik: FormikProps<{
        title: string;
        author: string;
        content: string;
        summary: string;
        category?: string;
        city?: string;
        cover?: string;
    }>;
}

const Stage4: React.FC<Stage4Props> = ({ formik }) => {
    const { values } = formik;

    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">
            {/* <h2 className="text-3xl font-bold uppercase border-b border-black pb-2 mb-6">
                Stage 4: Summary
            </h2> */}

            <div className="flex flex-col lg:flex-row gap-6">
                {/* LEFT SIDE - INFO */}
                {values.cover && (
                    <div className="flex-1 flex justify-center items-start">
                        <Image
                            width={300}
                            height={300}
                            src={values.cover}
                            alt="Cover"
                            className="w-full max-w-md border border-black rounded-md"
                        />
                    </div>
                )}

                {/* RIGHT SIDE - COVER IMAGE */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between py-2 px-4 border-b border-black">
                        <span className="font-semibold">Title:</span>
                        <span>{values.title || "-"}</span>
                    </div>

                    <div className="flex justify-between py-2 px-4 border-b border-black">
                        <span className="font-semibold">Author:</span>
                        <span>{values.author || "-"}</span>
                    </div>

                    {values.category && (
                        <div className="flex justify-between py-2 px-4 border-b border-black">
                            <span className="font-semibold">Category:</span>
                            <span>{values.category}</span>
                        </div>
                    )}

                    {values.city && (
                        <div className="flex justify-between py-2 px-4 border-b border-black">
                            <span className="font-semibold">City:</span>
                            <span>{values.city}</span>
                        </div>
                    )}

                    <div className="flex flex-col py-2 px-4 border-b border-black">
                        <span className="font-semibold mb-1">Summary:</span>
                        <p>{values.summary || "-"}</p>
                    </div>

                    <div className="flex flex-col py-2 px-4 border-b border-black max-h-64 overflow-y-auto">
                        <span className="font-semibold mb-1">Content:</span>
                        <p className="whitespace-pre-line">{values.content || "-"}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Stage4;
