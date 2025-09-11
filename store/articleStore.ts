import { create } from "zustand";

export interface Article {
	id: number;
	title: string;
	author: string;
	place: string;
	date: string;
	desc: string;
	img: string;
}

interface ArticlesStore {
	articles: Article[];
	addArticle: (article: Article) => void;
	updateArticle: (id: number, updated: Partial<Article>) => void;
	removeArticle: (id: number) => void;
}

const initialArticles: Article[] = [
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
	{
		id: 7,
		title: "Endless Path",
		author: "Cut Nyak",
		place: "Aceh",
		date: "August, 22 1965",
		desc: "Jalan yang panjang seolah tak berujung, namun di sanalah kehidupan menemukan maknanya. Perjuangan rakyat Aceh melawan penjajahan menjadi bukti bahwa tekad yang kuat mampu menembus batas. Artikel ini mengisahkan perjalanan tanpa henti, yang mengajarkan kepada kita bahwa meskipun jalan tampak melelahkan, setiap langkah adalah sejarah yang tak ternilai.",
		img: "/img/article/image6.png",
	},
];

export const useArticlesStore = create<ArticlesStore>((set) => ({
	articles: initialArticles,

	addArticle: (article) =>
		set((state) => ({ articles: [...state.articles, article] })),

	updateArticle: (id, updated) =>
		set((state) => ({
			articles: state.articles.map((art) =>
				art.id === id ? { ...art, ...updated } : art
			),
		})),

	removeArticle: (id) =>
		set((state) => ({
			articles: state.articles.filter((art) => art.id !== id),
		})),
}));
