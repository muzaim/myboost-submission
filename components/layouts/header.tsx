import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="w-full relative">
			<div className="px-4 md:px-8 lg:px-16">
				<div className="h-20 flex flex-row justify-between items-center">
					<Link href="/" className="text-lg font-bold">
						Soerdja Magazine
					</Link>
					<ul className="flex gap-4 text-sm">
						<Link href="/magazines">Magazine</Link>
						<Link href="/magazines/1">Author</Link>
						<Link href="/podcast">Podcast</Link>
					</ul>
				</div>
				{/* border custom */}
				<span className="block border-b border-black-300 w-full"></span>
			</div>
		</header>
	);
};

export default Header;
