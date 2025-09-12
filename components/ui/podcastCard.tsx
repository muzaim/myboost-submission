import Image from "next/image";

type Podcast = {
	id: number | string;
	title: string;
	img: string;
	date: string;
	duration: string;
};

type PodcastCardProps = {
	podcast: Podcast;
	index: number;
};

export default function PodcastCard({ podcast, index }: PodcastCardProps) {
	return (
		<div
			className="w-1/3 p-6 flex flex-col gap-4 border border-gray-400 divide-x divide-gray-400"
			data-aos="fade-up"
			data-aos-delay={(index * 200).toString()}
		>
			<Image
				src={podcast.img}
				width={500}
				height={500}
				alt={podcast.title}
				className="object-cover"
			/>
			<h1 className="font-bold text-xl text-black hover:underline leading-snug">
				{podcast.title}
			</h1>
			<div className="flex flex-row text-sm text-gray-600 gap-6">
				<p>
					<span className="font-semibold text-black">Date:</span>{" "}
					{podcast.date}
				</p>
				<p>
					<span className="font-semibold text-black">Duration:</span>{" "}
					{podcast.duration}
				</p>
			</div>
		</div>
	);
}
