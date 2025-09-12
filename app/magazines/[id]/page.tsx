"use client";

import React, { useEffect, useState } from "react";
import { useArticlesStore } from "@/store/articleStore";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import LatestArticle from "@/components/sections/magazines/latestArticle";
import Image from "next/image";

interface Props {
	params: Promise<{ id: string }>;
}

const MagazineDetailPage: React.FC<Props> = ({ params }) => {
	const { id } = React.use(params);
	const articles = useArticlesStore((state) => state.articles);
	const article = articles.find((a) => a.id.toString() === id);
	const [img, setImg] = useState("/img/authors/author1.png");

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 6) + 1;
		setImg(`/img/authors/author${randomIndex}.png`);
	}, []);

	if (!article) {
		return <p>Article not found</p>;
	}

	return (
		<div className="px-4 md:px-8 lg:px-16">
			<div className="bg-white-30 text-black grid grid-cols-2 py-5 gap-6">
				<Link
					href="/magazines"
					className="font-bold text-lg uppercase leading-none"
				>
					back
				</Link>
				<div className="flex flex-row justify-end">
					<span className="font-semibold uppercase">Magazines</span>
				</div>
			</div>
			<div className="bg-white-30  grid grid-cols-2 py-5 gap-6">
				<h3 className="font-bold text-[7rem] uppercase leading-none">
					{article.title}
				</h3>
				<div className="flex flex-col justify-between">
					{article.summary}
				</div>
			</div>
			<div className="flex flex-col justify-between pb-12">
				<div className="flex flex-row gap-3 justify-between items-end mt-6 ">
					<div className="flex flex-row gap-3">
						<div className="flex gap-2">
							<span className="font-bold">Text</span>
							<span>{article.author}</span>
						</div>
						<div className="flex gap-2">
							<span className="font-bold">Place</span>
							<span>{article.place}</span>
						</div>
						<div className="flex gap-2">
							<span className="font-bold">Date</span>
							<span>
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
					<button className="bg-white-30 text-black border px-5 py-2 rounded-full">
						Label
					</button>
				</div>
			</div>
			<div className="relative w-full h-[600px]">
				<Image
					src={article.cover}
					alt="magazine"
					fill
					className="object-cover"
				/>
			</div>

			<div className="grid grid-cols-12 py-20 gap-6">
				<div className="col-span-5 flex justify-end">
					<div className="w-[300px] ">
						<div className="flex flex-row gap-3 items-center">
							<Image
								src={img}
								alt="authors"
								width={100}
								height={100}
								className="object-cover"
							/>
							<h1 className="font-bold text-3xl w-[12rem] break-words capitalize">
								{article.author}
							</h1>
						</div>
						<hr className="my-5" />
						<div className="space-y-4 text-sm">
							{/* Date */}
							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Date
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

							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Read
								</span>
								<span className="text-gray-600">2 min</span>
							</div>

							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Share
								</span>
								<div className="flex items-center gap-4">
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaFacebookF size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaInstagram size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaTwitter size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaYoutube size={18} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-4 flex flex-col justify-start space-y-6 text-gray-800 leading-relaxed">
					{article.content}
				</div>

				<div className="col-span-3"></div>
			</div>

			<hr />
			<LatestArticle />
		</div>
	);
};

export default MagazineDetailPage;
