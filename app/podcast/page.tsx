import Image from "next/image";
import Link from "next/link";
import React from "react";

const podcasts = [
	{
		id: 1,
		title: "The New York Times",
		image: "/img/podcast/podcast1.png",
		date: "2023",
		duration: "20 min",
	},
	{
		id: 2,
		title: "Art & Culture Talks",
		image: "/img/podcast/podcast2.png",
		date: "2023",
		duration: "35 min",
	},
	{
		id: 3,
		title: "History Revisited",
		image: "/img/podcast/podcast3.png",
		date: "2022",
		duration: "25 min",
	},
	{
		id: 4,
		title: "Future of Design",
		image: "/img/podcast/podcast4.png",
		date: "2022",
		duration: "40 min",
	},
	{
		id: 5,
		title: "Street Art Voices",
		image: "/img/podcast/podcast5.png",
		date: "2021",
		duration: "18 min",
	},
];

const Podcast = () => {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<div className="space-y-6">
					<div className="w-full">
						<h1 className="w-full text-center font-bold uppercase text-[15vw] leading-none font-serif">
							Podcast
						</h1>
					</div>
					{podcasts.map((podcast, index) => (
						<div
							key={podcast.id}
							className="grid grid-cols-12 items-center border-b border-black py-6 last:border-b-0 gap-4"
						>
							<span className="col-span-1 text-2xl font-bold text-gray-400 text-center">
								{String(index + 1).padStart(2, "0")}
							</span>

							<div className="col-span-3 flex justify-center">
								<Image
									src={podcast.image}
									width={300}
									height={300}
									alt={podcast.title}
									className="object-cover rounded-md"
								/>
							</div>

							<Link
								href={`/podcast/${podcast.id}`}
								className="col-span-4 font-semibold text-lg"
							>
								{podcast.title}
							</Link>

							<div className="col-span-2 text-sm text-gray-600 flex gap-5">
								<p>
									<span className="font-semibold text-black">
										Date:
									</span>{" "}
									{podcast.date}
								</p>
								<p>
									<span className="font-semibold text-black">
										Duration:
									</span>{" "}
									{podcast.duration}
								</p>
							</div>

							<div className="col-span-2 flex justify-center">
								<button className=" cursor-pointer px-5 py-2 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-colors duration-300">
									play
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Podcast;
