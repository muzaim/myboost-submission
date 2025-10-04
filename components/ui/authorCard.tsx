import Image from "next/image";

type Author = {
	id: number | string;
	name: string;
	img: string;
	job: string;
	city: string;
};

type AuthorCardProps = {
	author: Author;
	idx: number;
	total: number;
};

export default function AuthorCard({ author, idx }: AuthorCardProps) {
	return (
		<div
			className="flex items-center gap-5 p-4 border-gray-400 border"
			data-aos="fade-up"
			data-aos-delay={(idx * 200).toString()}
		>
			<Image
				src={author.img}
				width={120}
				height={120}
				alt={author.name}
				className="object-cover"
			/>
			<div className="flex flex-col">
				<h1 className="font-bold text-lg text-black">{author.name}</h1>
				<div className="flex flex-row gap-2">
					<span className="text-gray-700">Job: {author.job}</span>
					<span className="text-gray-700">City: {author.city}</span>
				</div>
			</div>
		</div>
	);
}
