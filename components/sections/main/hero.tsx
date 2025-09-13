import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="bg-white-30 text-black p-0 w-full flex flex-col">
			<h1 className="text-[16rem] font-bold uppercase leading-none tracking-tight w-full text-center font-serif">
				art & life
			</h1>

			<div className="h-12 bg-black text-white flex items-center justify-center px-5 gap-4 text-center">
				<span className="font-bold">News Ticker+++</span>
				<span className="">
					Step into a world where time stands still, and every
					sculpture tells a story of artistry, tradition, and history.
					Ancient sculptures whisper the stories of art and history,
					frozen in time yet alive in imagination.
				</span>
			</div>

			<div className="bg-white-30 text-black grid grid-cols-2 p-5 gap-6">
				<h3 className="font-bold text-[7rem] uppercase leading-none font-serif">
					Dont Close <br />
					Your Eyes
				</h3>
				<div className="flex flex-col justify-between text-gray-600">
					<span>
						In the quiet halls of time, Ancient sculptures stand as
						guardians of forgotten stories, Their carved forms
						whispering secrets of artistry and human devotion, Each
						curve and contour reflecting the culture, passion, and
						history of civilizations past, Inviting us to journey
						through the echoes of creativity that shaped our world.
					</span>

					<div className="flex flex-row gap-3 justify-between items-end mt-6">
						<div className="flex flex-row gap-3">
							<div className="flex gap-2 text-black">
								<span className="font-bold ">Text</span>
								<span>Bung Tedjo</span>
							</div>
							<div className="flex gap-2 text-black">
								<span className="font-bold">Place</span>
								<span>Soerabadja</span>
							</div>
							<div className="flex gap-2 text-black">
								<span className="font-bold">Date</span>
								<span>March,1 1956</span>
							</div>
						</div>
						<button className="bg-white-30 text-black border px-5 py-2 rounded-full">
							Label
						</button>
					</div>
				</div>
			</div>

			<div className="mt-5 mb-5 h-[700px] overflow-hidden">
				<Image
					src="/img/hero.png"
					width={2000}
					height={400}
					alt="hero"
					className="w-full h-full object-cover object-center"
					data-aos="fade-up"
				/>
			</div>
		</div>
	);
};

export default Hero;
