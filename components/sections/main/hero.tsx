import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="bg-white-30 text-black p-0 w-full flex flex-col">
			<h1 className="text-[18rem] font-bold uppercase leading-none tracking-tight w-full text-center">
				art & life
			</h1>

			{/* news ticker */}
			<div className="h-12 bg-black text-white flex items-center justify-start px-5 gap-4">
				<span className="font-bold">News Ticker+++</span>
				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				</span>
			</div>

			{/* content grid */}
			<div className="bg-white-30 text-black grid grid-cols-2 p-5 gap-6">
				<h3 className="font-bold text-[7rem] uppercase leading-none">
					Dont Close <br />
					Your Eyes
				</h3>
				<div className="flex flex-col justify-between">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Autem asperiores sunt iure fugiat. Mollitia quidem
						voluptatem assumenda, quaerat natus nemo in praesentium
						iure eaque sint quas, aut temporibus? Ut minima quam
						distinctio tempora aut. Assumenda quia est harum iusto,
						eum animi maiores officiis nobis aliquid sit sequi
						commodi? Voluptatibus, voluptates!
					</span>

					<div className="flex flex-row gap-3 justify-between items-end mt-6">
						<div className="flex flex-row gap-3">
							<div className="flex gap-2">
								<span className="font-bold">Text</span>
								<span>Bung Tedjo</span>
							</div>
							<div className="flex gap-2">
								<span className="font-bold">Place</span>
								<span>Soerabadja</span>
							</div>
							<div className="flex gap-2">
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

			{/* image di paling bawah */}
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
