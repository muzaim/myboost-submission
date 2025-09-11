"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";

const Magazines = () => {
	const articles = useArticlesStore((state) => state.articles);

	return (
		<div className="">
			<div className="w-full">
				<h1 className="w-full text-center font-bold uppercase text-[15vw] leading-none">
					magazines
				</h1>
				<div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4">
					<h1 className="uppercase text-xl font-bold tracking-wide">
						Categories
					</h1>

					<Link href="/magazines/add" className="px-5 py-2 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-colors duration-300">
						Add New Articles
					</Link>
				</div>
			</div>
			<div className="mb-40">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
					{articles.map((article) => (
						<div
							key={article.id}
							className="p-6 flex flex-col border border-gray-400 last:col-span-1"
						>
							{/* Header */}
							<div className="flex flex-row justify-between items-center mb-4">
								<h1 className="text-sm text-gray-600">{article.date}</h1>
								<button
									className="px-4 py-1 border border-gray-400 rounded-full text-xs font-medium uppercase
          hover:bg-black hover:text-white transition-colors duration-300"
								>
									Art
								</button>
							</div>

							{/* Image */}
							<Image
								src={article.img}
								width={400}
								height={500}
								alt={article.title}
								className="object-cover w-full mb-4"
							/>

							{/* Title */}
							<h2 className="font-bold text-xl mb-2">{article.title}</h2>

							{/* Description */}
							<p className="text-gray-700 text-sm flex-grow leading-relaxed mb-4 line-clamp-4">
								{article.desc}
							</p>

							{/* Footer info */}
							<div className="flex flex-row text-xs text-gray-600 gap-6">
								<p>
									<span className="font-semibold text-black">Date:</span> {article.date}
								</p>
								<p>
									<span className="font-semibold text-black">Duration:</span> 20 min
								</p>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>
	);
};

export default Magazines;
