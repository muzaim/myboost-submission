import React, { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import Image from "next/image";

interface Stage3Props {
    formik: FormikProps<{
        content: string;
        cover: string;
    }>;
}

const coverImages = [
    "/img/article/image1.png",
    "/img/article/image2.png",
    "/img/article/image3.png",
    "/img/article/image4.png",
    "/img/article/image5.png",
    "/img/article/image6.png",
    "/img/article/image7.png",
    "/img/article/image8.png",
    "/img/article/image9.png",
    "/img/article/image10.png",
    "/img/article/image11.png",
    "/img/article/image.png",
    "/img/article/image13.png",
    "/img/article/image14.png",
    "/img/article/image15.png",
];

const Stage3: React.FC<Stage3Props> = ({ formik }) => {
    const [selected, setSelected] = useState(formik.values.cover);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // reset
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; // set sesuai content
        }
    }, [formik.values.content]); // dijalankan setiap content berubah
    const handleSelect = (img: string) => {
        setSelected(img);
        formik.setFieldValue("cover", img);
        formik.setFieldTouched("cover", true); // <- ini penting
    };

    return (
        <div className="w-[80%] mx-auto flex flex-col gap-8">
            {/* <h2 className="text-2xl font-bold uppercase">Stage 3: Content</h2> */}

            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="font-semibold text-black">
                    Content
                </label>
                <textarea
                    ref={textareaRef}
                    id="content"
                    name="content"
                    placeholder="Write the content here..."
                    className="border-b border-black py-2 text-black placeholder-gray-500 focus:outline-none focus:border-gray-800 w-full overflow-hidden"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.content && formik.errors.content && (
                    <p className="text-red-500 text-sm">{formik.errors.content}</p>
                )}
            </div>

            <div className="grid grid-cols-5 gap-4">
                {coverImages.map((img) => (
                    <div
                        key={img}
                        onClick={() => handleSelect(img)}
                        className={`cursor-pointer border-4 ${selected === img ? "border-black" : "border-transparent"
                            } rounded-md overflow-hidden`}
                    >
                        <Image width={500} height={500} src={img} alt="cover" className="w-full h-40 object-cover" />
                    </div>
                ))}
            </div>

            {formik.touched.cover && formik.errors.cover && (
                <p className="text-red-500 text-sm">{formik.errors.cover}</p>
            )}
        </div>
    );
};

export default Stage3;
