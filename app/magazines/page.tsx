"use client";

import Link from "next/link";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";
import ArticleCardGrid from "../../components/ui/articleCardGrid";

const Magazine = () => {
	const articles = useArticlesStore((state) => state.articles);

	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<div className="w-full">
					<h1 className="w-full text-center font-bold uppercase text-[13vw] leading-none font-serif">
						magazines
					</h1>
					<div className="flex flex-row justify-between items-center  pb-4">
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
		</>
	);
};

export default Magazine;
