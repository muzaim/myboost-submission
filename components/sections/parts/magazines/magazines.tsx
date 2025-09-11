import Image from "next/image";
import React from "react";

const articles = [
	{
		id: 1,
		title: "Hope Die Last",
		author: "Bung Tedjo",
		place: "Soerabadja",
		date: "March, 1 1956",
		desc: "Dalam suasana pasca perang, harapan menjadi satu-satunya kekuatan yang menuntun masyarakat untuk terus melangkah. Artikel ini menggambarkan perjalanan batin seorang pejuang yang tak pernah menyerah, meskipun hidup penuh luka dan kehilangan. Kisahnya mengajarkan bahwa harapan tak pernah mati, justru tumbuh di tengah keterpurukan, menjadi cahaya kecil yang mampu menuntun banyak orang keluar dari kegelapan.",
		img: "/img/article/image1.png",
	},
	{
		id: 2,
		title: "Silent Journey",
		author: "Sari Dewi",
		place: "Bandung",
		date: "April, 12 1960",
		desc: "Perjalanan sunyi sering kali menyimpan cerita yang tak terucap. Di balik setiap langkah, ada beban, doa, dan rahasia yang hanya diketahui oleh hati. Artikel ini mengajak pembaca menelusuri keheningan, menemukan makna di antara jarak dan waktu, serta bagaimana keheningan bisa menjadi ruang refleksi terdalam bagi jiwa yang merindukan kedamaian.",
		img: "/img/article/image2.png",
	},
	{
		id: 3,
		title: "Red Horizon",
		author: "Agus Salim",
		place: "Jakarta",
		date: "May, 20 1970",
		desc: "Horizon merah menjadi simbol dari pergulatan panjang bangsa dalam meraih kebebasan. Warna merah bukan hanya melambangkan keberanian, tetapi juga pengorbanan yang tak terhitung jumlahnya. Artikel ini mengisahkan tentang generasi muda yang berani bermimpi besar, meski harus melewati badai tantangan, dan bagaimana semangat itu masih relevan hingga hari ini.",
		img: "/img/article/image3.png",
	},
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

const Magazines = () => {
	return (
		<div className="">
			<div className="w-full">
				<h1 className="w-full text-center font-bold uppercase text-[15vw] leading-none">
					magazines
				</h1>
				<div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4">
					<h1 className="uppercase text-xl font-bold tracking-wide">
						Categories
					</h1>

					<div className="flex flex-row gap-3">
						{["All", "Art", "Street Art", "Sculptures"].map(
							(cat, i) => (
								<button
									key={i}
									className="px-5 py-2 border border-black rounded-full text-sm font-medium uppercase
                   hover:bg-black hover:text-white transition-colors duration-300"
								>
									{cat}
								</button>
							)
						)}
					</div>
				</div>
			</div>
			<div className="mb-40">
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
	);
};

export default Magazines;
