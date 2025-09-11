import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
	return (
		<header className="w-full relative">
			<div className="px-4 md:px-8 lg:px-16">
				<div className="h-20 flex flex-row justify-between items-center">
					<Link href="/" className="text-lg font-bold">
						Soerdja Magazine
					</Link>
					<ul className="flex gap-5 text-md">
						<Link href="/magazines" className="">
							Magazine
						</Link>
						<Link href="/author">Author</Link>
						<Link href="/podcast">Podcast</Link>
						<div>-</div>
						<div className="flex items-center justify-end gap-5">
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaFacebookF size={20} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaInstagram size={20} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaTwitter size={20} />
							</a>
							<a
								href="#"
								className="text-black hover:text-gray-400 transition"
							>
								<FaYoutube size={20} />
							</a>
						</div>
					</ul>
				</div>
				{/* border custom */}
				<span className="block border-b border-black-300 w-full"></span>
			</div>
		</header>
	);
};

export default Header;
