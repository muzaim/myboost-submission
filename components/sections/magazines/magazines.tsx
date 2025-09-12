"use client";

import Link from "next/link";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";
import ArticleCardGrid from "../../ui/articleCardGrid";

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

					<Link
						href="/magazines/add"
						className="px-5 py-2 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-colors duration-300"
					>
						Add New Articles
					</Link>
				</div>
			</div>
			<div className="mb-40">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
					{articles.map((article, index) => (
						<ArticleCardGrid
							key={article.id}
							article={article}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Magazines;
