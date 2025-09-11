import Authors from "@/components/sections/parts/main/authors";
import Content from "@/components/sections/parts/podcasts/content";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "@/components/sections/parts/main/hero";
import Podcast from "@/components/sections/parts/main/podcast";

export default function Home() {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<Hero />
				<Content />
				<hr />
				<Podcast />
				<hr />
				<Authors />
			</div>
		</>
	);
}
