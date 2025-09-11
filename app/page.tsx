import Authors from "@/components/sections/main/authors";
import Content from "@/components/sections/podcasts/content";
import Hero from "@/components/sections/main/hero";
import Podcast from "@/components/sections/main/podcast";

export default function Home() {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16 ">
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
