"use client";

import Image from "next/image";
import React from "react";
import { useArticlesStore } from "@/store/articleStore";


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
					{articles.slice(0, 6).map((article) => (
						<div
							key={article.id}
							className="flex flex-row gap-8 py-8 border-b border-black-300 last:border-b-0"
						>
							{/* image */}
							<div className="flex-shrink-0">
								<Image
									src={article.img}
									width={250}
									height={250}
									alt={article.title}
									className="object-cover"
								/>
							</div>

							{/* content */}
							<div className="flex flex-col justify-between w-full">
								<div className="flex flex-col gap-3">
									<h1 className="font-bold text-3xl text-gray-900">
										{article.title}
									</h1>
									<p className="text-gray-600 leading-relaxed line-clamp-4">
										{article.desc}
									</p>
								</div>

								<div className="flex flex-row justify-between items-end mt-6">
									<div className="flex flex-row gap-6 text-sm text-gray-700">
										<div className="flex gap-2">
											<span className="font-semibold text-gray-500">
												Author :
											</span>
											<span>{article.author}</span>
										</div>
										<div className="flex gap-2">
											<span className="font-semibold text-gray-500">
												Place :
											</span>
											<span>{article.place}</span>
										</div>
										<div className="flex gap-2">
											<span className="font-semibold text-gray-500">
												Date :
											</span>
											<span>{article.date}</span>
										</div>
									</div>

									<button className="bg-white-300 text-black px-5 py-2 rounded-full border hover:bg-black hover:text-white transition">
										Read More
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="py-20 uppercase text-xl cursor-pointer font-semibold">
					All articles{" "}
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
