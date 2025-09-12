"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ article, index }) => {
	return (
		<div
			className="flex flex-row gap-8 py-8 border-b border-gray-300 last:border-b-0"
			data-aos="fade-up"
			data-aos-delay={(index * 200).toString()}
		>
			{/* gambar cover */}
			<div className="">
				<Image
					src={article.cover}
					width={250}
					height={250}
					alt={article.title}
					className="object-cover"
				/>
			</div>

			{/* content */}
			<div className="flex flex-col justify-between w-full">
				<div className="flex flex-col gap-3">
					<h1 className="font-bold text-3xl text-gray-900 font-poppins">
						{article.title}
					</h1>
					<p className="text-gray-600 leading-relaxed line-clamp-4">
						{article.summary}
					</p>
				</div>

				<div className="flex flex-row justify-between items-end mt-6">
					<div className="flex flex-row gap-6 text-sm text-gray-700">
						<div className="flex gap-2">
							<span className="font-semibold text-gray-800">
								Author :
							</span>
							<span>{article.author}</span>
						</div>
						<div className="flex gap-2">
							<span className="font-semibold text-gray-800">
								Place :
							</span>
							<span>{article.place}</span>
						</div>
						<div className="flex gap-2">
							<span className="font-semibold text-gray-800">
								Date :
							</span>
							<span className="text-gray-600">
								{new Date(article.date).toLocaleDateString(
									"en-US",
									{
										year: "numeric",
										month: "long",
										day: "numeric",
									}
								)}
							</span>
						</div>
					</div>

					<Link
						href={`/magazines/${article.id}`}
						className="font-semibold text-black hover:text-gray-800 transition-colors duration-300"
					>
						Read More &raquo;
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
