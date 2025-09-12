import Image from "next/image";
import Link from "next/link";

type ArticleCardGridProps = {
	article: {
		id: number;
		title: string;
		summary: string;
		cover: string;
		date: string;
		category: string;
	};
	index: number;
};

const ArticleCardGrid = ({ article, index }: ArticleCardGridProps) => {
	return (
		<div
			className="p-10 flex flex-col border border-gray-400 last:col-span-1 "
			data-aos="fade-up"
			data-aos-delay={(index * 200).toString()}
		>
			<div className="flex flex-row justify-between items-center mb-10">
				<h1 className="text-sm text-gray-600">
					{new Date(article.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</h1>
				<button
					className="px-4 py-1 border border-gray-400 rounded-full text-xs font-medium uppercase
            hover:bg-black hover:text-white transition-colors duration-300"
				>
					{article.category}
				</button>
			</div>

			<Image
				src={article.cover}
				width={400}
				height={500}
				alt={article.title}
				className="object-cover w-full mb-4"
			/>

			<h2 className="font-bold text-3xl font-poppins">{article.title}</h2>

			<p className="text-gray-700 text-sm flex-grow leading-relaxed mb-4 line-clamp-4 my-7">
				{article.summary}
			</p>

			<div className="flex flex-row text-xs text-gray-600 gap-6 justify-between mt-7 mb-5">
				<div className="flex flex-row gap-8">
					<p>
						<span className="font-semibold text-black">Date:</span>{" "}
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
					</p>
					<p>
						<span className="font-semibold text-black">
							Duration:
						</span>{" "}
						20 min
					</p>
				</div>

				<Link
					href={`/magazines/${article.id}`}
					className="font-semibold text-black hover:text-gray-800 transition-colors duration-300"
				>
					Read More &raquo;
				</Link>
			</div>
		</div>
	);
};

export default ArticleCardGrid;
