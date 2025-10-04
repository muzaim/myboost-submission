import { create } from "zustand";

export interface Article {
	id: number;
	title: string;
	author: string;
	place: string;
	date: string;
	content: string;
	summary: string;
	category: string;
	cover: string;
	city: string;
}

export interface ArticlesStore {
	articles: Article[];
	addArticle: (article: Article) => void;
	clearArticles: () => void;
}

export interface ArticleForm {
	title: string;
	author: string;
	summary: string;
	category: string;
	place: string;
	content: string;
	city: string;
	cover: string;
	setField: (field: string, value: string) => void;
	resetForm: () => void;
}

const initialArticles: Article[] = [
	{
		id: 182317427,
		title: "Hope Never Dies",
		author: "Bung Tedjo",
		place: "Surabaya",
		date: "March 1, 1956",
		category: "Art",
		content:
			"In the post-war atmosphere, hope became the only force guiding society to keep moving forward. This article portrays the inner journey of a fighter who never gave up, even amidst pain and loss. His story teaches that hope never dies; instead, it grows in adversity, becoming a small light capable of leading many out of darkness.",
		summary:
			"In the post-war atmosphere, hope became the only force guiding society to keep moving forward. This article portrays the inner journey of a fighter who never gave up, even amidst pain and loss. His story teaches that hope never dies; instead, it grows in adversity, becoming a small light capable of leading many out of darkness.",
		cover: "/img/article/image1.png",
		city: "Surabaya",
	},
	{
		id: 9928172326,
		title: "Silent Journey",
		author: "Sari Dewi",
		place: "Bandung",
		date: "April 12, 1960",
		category: "History",
		content:
			"A silent journey often holds untold stories. Behind every step lies burdens, prayers, and secrets known only to the heart. This article invites readers to explore silence, find meaning across distance and time, and discover how stillness can become the deepest space for reflection for those seeking peace.",
		summary:
			"A silent journey often holds untold stories. Behind every step lies burdens, prayers, and secrets known only to the heart. This article invites readers to explore silence, find meaning across distance and time, and discover how stillness can become the deepest space for reflection for those seeking peace.",
		cover: "/img/article/image2.png",
		city: "Bandung",
	},
	{
		id: 332221569,
		title: "Red Horizon",
		author: "Agus Salim",
		place: "Jakarta",
		date: "May 20, 1970",
		category: "Sculpture",
		content:
			"The red horizon symbolizes the long struggle of a nation striving for freedom. Red not only represents courage but also countless sacrifices. This article tells the story of young generations daring to dream big despite facing storms of challenges, and how that spirit remains relevant today.",
		summary:
			"The red horizon symbolizes the long struggle of a nation striving for freedom. Red not only represents courage but also countless sacrifices. This article tells the story of young generations daring to dream big despite facing storms of challenges, and how that spirit remains relevant today.",
		cover: "/img/article/image3.png",
		city: "Jakarta",
	},
	{
		id: 8273647829,
		title: "Whispering Wind",
		author: "Kartini",
		place: "Jepara",
		date: "June 5, 1945",
		category: "History",
		content:
			"The whispering wind carries stories from the past, about struggles, love, and unceasing prayers. In Jepara, the wind still seems to convey Kartini's message to continue fighting for equality. This article weaves together tales of nature and history, connecting readers with timeless values.",
		summary:
			"The whispering wind carries stories from the past, about struggles, love, and unceasing prayers. In Jepara, the wind still seems to convey Kartini's message to continue fighting for equality. This article weaves together tales of nature and history, connecting readers with timeless values.",
		cover: "/img/article/image4.png",
		city: "Jepara",
	},
	{
		id: 263748271,
		title: "Morning Glory",
		author: "Sudirman",
		place: "Yogyakarta",
		date: "July 17, 1958",
		category: "Art",
		content:
			"The dawn breaking in the eastern horizon always brings new energy. This article depicts the lives of Yogyakarta communities during the reconstruction period, how they started their day with prayers, hard work, and mutual cooperation. Morning Glory symbolizes hope, reminding us that every day is a chance to rise and move forward together.",
		summary:
			"The dawn breaking in the eastern horizon always brings new energy. This article depicts the lives of Yogyakarta communities during the reconstruction period, how they started their day with prayers, hard work, and mutual cooperation. Morning Glory symbolizes hope, reminding us that every day is a chance to rise and move forward together.",
		cover: "/img/article/image5.png",
		city: "Yogyakarta",
	},
	{
		id: 339281993,
		title: "Endless Path",
		author: "Cut Nyak Dien",
		place: "Aceh",
		date: "August 22, 1965",
		category: "Art",
		content:
			"The long road seems endless, yet it is where life finds its meaning. The struggle of Acehnese people against colonization proves that a strong will can break through limits. This article narrates an unceasing journey, teaching us that even when the path feels exhausting, every step is invaluable history.",
		summary:
			"The long road seems endless, yet it is where life finds its meaning. The struggle of Acehnese people against colonization proves that a strong will can break through limits. This article narrates an unceasing journey, teaching us that even when the path feels exhausting, every step is invaluable history.",
		cover: "/img/article/image6.png",
		city: "Aceh",
	},
];

export const useArticleFormStore = create<ArticleForm>((set) => ({
	title: "",
	author: "",
	summary: "",
	category: "",
	place: "",
	content: "",
	cover: "",
	city: "",

	setField: (field, value) => set((state) => ({ ...state, [field]: value })),
	resetForm: () =>
		set({
			title: "",
			author: "",
			summary: "",
			category: "",
			place: "",
			content: "",
			cover: "",
		}),
}));

export const useArticlesStore = create<ArticlesStore>((set) => ({
	articles: initialArticles,

	addArticle: (article) =>
		set((state) => ({ articles: [...state.articles, article] })),
	clearArticles: () => set({ articles: [] }),
}));
