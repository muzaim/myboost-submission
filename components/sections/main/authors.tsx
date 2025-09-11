import Image from "next/image";
import React from "react";

const authors = [
	{
		id: 1,
		name: "Jakob",
		job: "Artist",
		city: "Berlin",
		img: "/img/authors/author1.png",
	},
	{
		id: 2,
		name: "Sophia",
		job: "Photographer",
		city: "Paris",
		img: "/img/authors/author2.png",
	},
	{
		id: 3,
		name: "Liam",
		job: "Writer",
		city: "London",
		img: "/img/authors/author3.png",
	},
	{
		id: 4,
		name: "Emma",
		job: "Designer",
		city: "New York",
		img: "/img/authors/author4.png",
	},
	{
		id: 5,
		name: "Noah",
		job: "Painter",
		city: "Tokyo",
		img: "/img/authors/author5.png",
	},
	{
		id: 6,
		name: "Olivia",
		job: "Musician",
		city: "Amsterdam",
		img: "/img/authors/author6.png",
	},
];

const Authors = () => {
	return (
		<div className=" h-full w-full pb-40">
			<div className="flex flex-row justify-between items-center py-10">
				<h1 className="text-[8rem] font-bold uppercase">Authors</h1>
				<span className="font-semibold text-lg uppercase">
					All authors
				</span>
			</div>
			<div>
				<div className="grid grid-cols-2 border border-black">
					{authors.map((author, idx) => (
						<div
							key={author.id}
							className={`flex items-center gap-5 p-4 border-black
            ${idx % 2 === 0 ? "border-r" : ""}   /* garis vertikal */
            ${idx < authors.length - 2 ? "border-b" : ""} /* garis horizontal */
          `}
						>
							<Image
								src={author.img}
								width={120}
								height={120}
								alt={author.name}
								className="object-cover"
							/>
							<div className="flex flex-col">
								<h1 className="font-bold text-lg text-black">
									{author.name}
								</h1>
								<div className="flex flex-row gap-2">
									<span className="text-gray-700">
										Job: {author.job}
									</span>
									<span className="text-gray-700">
										City: {author.city}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Authors;
