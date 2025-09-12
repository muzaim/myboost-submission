"use client";

import Image from "next/image";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";
import ArticleCard from "../../ui/articleCard";
import Link from "next/link";

const popularArticles = [
	{
		id: 1,
		title: "Street Art Festival",
		author: "Christian",
	},
	{
		id: 2,
		title: "Modern Architecture",
		author: "Sinta Dewi",
	},
	{
		id: 3,
		title: "Poetry in Motion",
		author: "Agus Salim",
	},
];

const Content = () => {
	const articles = useArticlesStore((state) => state.articles);

	return (
		<div className="w-full grid grid-cols-12 gap-4">
			<div className="col-span-9">
				<div className="flex flex-col">
					{articles.slice(0, 6).map((article, index) => (
						<ArticleCard
							key={article.id}
							article={article}
							index={index}
						/>
					))}
				</div>
				<div className="my-20">
					<Link
						href={`/magazines`}
						className="font-semibold text-xl  text-black hover:text-gray-700 transition-colors duration-300 uppercase"
					>
						all articles &raquo;
					</Link>
				</div>
			</div>
			<div className="col-span-3 flex flex-col gap-10">
				<div>
					<div className="flex flex-col gap-3 mt-4">
						<h1 className="text-2xl font-semibold text-gray-800 uppercase">
							Print Magazine
						</h1>
						<h3 className="text-5xl text-black font-bold uppercase">
							March,1 1952
						</h3>
					</div>
					<div className="flex flex-col gap-3 mt-4">
						<div>
							<Image
								src="/img/magazin-cover.png"
								width={300}
								height={300}
								alt="cover"
							/>
						</div>
						<button className="w-max bg-black text-white px-5 py-2 uppercase font-semibold shadow hover:bg-gray-800 transition">
							buy now
						</button>
					</div>
				</div>

				<div>
					<h1 className="text-xl font-semibold uppercase mb-6">
						most popular
					</h1>

					<div className="flex flex-col divide-y divide-black">
						{popularArticles.map((article, index) => (
							<div
								key={article.id}
								className="flex flex-row gap-4 py-4 items-start"
							>
								<span className="text-2xl font-bold text-black w-10">
									{String(index + 1).padStart(2, "0")}
								</span>
								<div className="flex flex-col">
									<span className="font-bold text-lg text-black">
										{article.title}
									</span>
									<p className="text-gray-600 text-sm mt-5 mb-3">
										<span className="font-semibold text-black">
											Text:{" "}
										</span>
										{article.author}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
