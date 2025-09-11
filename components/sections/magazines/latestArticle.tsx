import Image from "next/image";
import React from "react";

const articles = [
	{
		id: 4,
		title: "Whispering Wind",
		author: "Kartini",
		place: "Jepara",
		date: "June, 5 1945",
		desc: "Angin berbisik membawa cerita dari masa lalu, tentang perjuangan, cinta, dan doa-doa yang tak pernah berhenti dipanjatkan. Di Jepara, suara angin seolah masih menyampaikan pesan Kartini untuk terus memperjuangkan kesetaraan. Artikel ini merangkai kisah alam dan sejarah, menghubungkan pembaca dengan warisan nilai luhur yang tak lekang oleh waktu.",
		img: "/img/article/image4.png",
	},
	{
		id: 5,
		title: "Morning Glory",
		author: "Sudirman",
		place: "Yogyakarta",
		date: "July, 17 1958",
		desc: "Fajar yang merekah di ufuk timur selalu menghadirkan semangat baru. Artikel ini menggambarkan kehidupan masyarakat Yogyakarta pada masa pembangunan, bagaimana mereka memulai hari dengan doa, kerja keras, dan gotong royong. Morning Glory menjadi simbol harapan, bahwa setiap hari adalah kesempatan untuk bangkit dan melangkah maju bersama.",
		img: "/img/article/image5.png",
	},
	{
		id: 6,
		title: "Endless Path",
		author: "Cut Nyak",
		place: "Aceh",
		date: "August, 22 1965",
		desc: "Jalan yang panjang seolah tak berujung, namun di sanalah kehidupan menemukan maknanya. Perjuangan rakyat Aceh melawan penjajahan menjadi bukti bahwa tekad yang kuat mampu menembus batas. Artikel ini mengisahkan perjalanan tanpa henti, yang mengajarkan kepada kita bahwa meskipun jalan tampak melelahkan, setiap langkah adalah sejarah yang tak ternilai.",
		img: "/img/article/image6.png",
	},
];
const LatestArticle = () => {
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
						{articles.map((article) => (
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
									src={article.img}
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
									{article.desc}
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
