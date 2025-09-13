import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="h-[40rem] bg-black text-white flex flex-col justify-between">
			<div className="flex-1 flex items-center justify-center">
				<div className="grid grid-cols-12 gap-12 w-3/4">
					<h3 className="col-span-6 font-bold text-[5rem] uppercase leading-tight">
						Design News <br />
						To Your Inbox
					</h3>

					<div className="col-span-6 flex items-center">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 border-b border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
						/>
						<button className="ml-4 bg-white text-black font-bold px-6 py-3 uppercase tracking-wide hover:bg-gray-200 transition">
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700 py-8">
				<div className="grid grid-cols-4 gap-8 w-3/4 mx-auto text-sm uppercase tracking-wide">
					<div>
						<h4 className="font-bold mb-3 text-lg">
							Free Magazine
						</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Art</li>
							<li>Design</li>
							<li>Magazine</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-3 text-lg">Explore</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Magazine</li>
							<li>Podcast</li>
							<li>Authors</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-3 text-lg">More</h4>
						<ul className="space-y-2 text-gray-400">
							<li>Style</li>
							<li>Licensing</li>
							<li>Changelog</li>
						</ul>
					</div>
					<div className="flex items-center justify-end gap-4">
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaFacebookF size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaTwitter size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition"
						>
							<FaYoutube size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
