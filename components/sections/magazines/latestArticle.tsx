import { useArticlesStore } from "@/store/articleStore";
import Image from "next/image";
import React from "react";


const LatestArticle = () => {
	const articles = useArticlesStore((state) => state.articles);

	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-row justify-between items-center py-10">
				<h1 className="text-[6rem] font-bold uppercase">
					Latest Article
				</h1>
				<span className="font-semibold text-lg uppercase">
					All articles
				</span>
			</div>
			<div>
				<div className="flex border border-gray-400 divide-x divide-gray-400">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-gray-400 border border-gray-400">
						{articles.slice(0, 3).map((article) => (
							<div key={article.id} className="p-6 flex flex-col">
								{/* Header (date + tag) */}
								<div className="flex flex-row justify-between items-center mb-4">
									<h1 className="text-sm text-gray-600">
										{article.date}
									</h1>
									<button
										className="px-4 py-1 border border-gray-400 rounded-full text-xs font-medium uppercase
						  hover:bg-black hover:text-white transition-colors duration-300"
									>
										Art
									</button>
								</div>

								{/* Image */}
								<Image
									src={article.cover}
									width={400}
									height={500}
									alt={article.title}
									className="object-cover w-full mb-4"
								/>

								{/* Title */}
								<h2 className="font-bold text-xl mb-2">
									{article.title}
								</h2>

								{/* Description */}
								<p className="text-gray-700 text-sm flex-grow leading-relaxed mb-4 line-clamp-4">
									{article.summary}
								</p>

								{/* Footer info */}
								<div className="flex flex-row text-xs text-gray-600 gap-6">
									<p>
										<span className="font-semibold text-black">
											Date:
										</span>{" "}
										{article.date}
									</p>
									<p>
										<span className="font-semibold text-black">
											Duration:
										</span>{" "}
										20 min
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

export default LatestArticle;
