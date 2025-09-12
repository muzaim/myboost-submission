import Image from "next/image";
import React from "react";
import PodcastCard from "../../ui/podcastCard";
import Link from "next/link";

const podcasts = [
	{
		id: 1,
		title: "The Rise of Street Culture",
		date: "3 March 2023",
		duration: "45 min",
		img: "/img/podcast/podcast1.png",
	},
	{
		id: 2,
		title: "Voices from the Past",
		date: "10 March 2023",
		duration: "52 min",
		img: "/img/podcast/podcast2.png",
	},
	{
		id: 3,
		title: "Art in Motion",
		date: "17 March 2023",
		duration: "38 min",
		img: "/img/podcast/podcast3.png",
	},
];

const Podcast = () => {
	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-row justify-between items-center py-10">
				<h1 className="text-[8rem] font-bold uppercase">Podcast</h1>
				<Link
					href={`/podcast`}
					className="font-semibold text-lg uppercase"
				>
					All episodes &raquo;
				</Link>
			</div>
			<div>
				<div className="flex ">
					{podcasts.map((podcast, index) => (
						<PodcastCard
							key={podcast.id.toString()}
							podcast={podcast}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Podcast;
