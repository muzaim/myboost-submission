import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import LatestArticle from "./latestArticle";

const MagazineDetail = () => {
	return (
		<div>
			<div className="bg-white-30 text-black grid grid-cols-2 py-5 gap-6">
				<h3 className="font-bold text-lg uppercase leading-none">
					back
				</h3>
				<div className="flex flex-row justify-end">
					<span className="font-semibold uppercase">Magazines</span>
				</div>
			</div>
			<div className="bg-white-30  grid grid-cols-2 py-5 gap-6">
				<h3 className="font-bold text-[7rem] uppercase leading-none">
					Hope <br />
					Die Last
				</h3>
				<div className="flex flex-col justify-between">
					<span className="font-semibold text-gray-700">
						Lorem ipsum dolor sit dsadsa amet consectetur
						adipisicing elit. Autem asperiores sunt iure fugiat.
						Mollitia quidem voluptatem assumenda, quaerat natus nemo
						in praesentium iure eaque sint quas, aut temporibus? Ut
						minima quam distinctio tempora aut. Assumenda quia est
						harum iusto, eum animi maiores officiis nobis aliquid
						sit sequi commodi? Voluptatibus, voluptates!
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-between pb-12">
				<div className="flex flex-row gap-3 justify-between items-end mt-6 ">
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
			<div className="relative w-full h-[600px]">
				<Image
					src="/img/article/image6.png"
					alt="magazine"
					fill
					className="object-cover"
				/>
			</div>

			<div className="grid grid-cols-12 py-20 gap-6">
				{/* kiri (5 kolom) */}
				<div className="col-span-5 flex justify-end">
					<div className="w-[300px] ">
						<div className="flex flex-row gap-3 items-center">
							<Image
								src="/img/authors/author1.png"
								alt="authors"
								width={100}
								height={100}
								className="object-cover"
							/>
							<h1 className="font-bold text-3xl">
								Bung <br /> Tedjo
							</h1>
						</div>
						<hr className="my-5" />
						<div className="space-y-4 text-sm">
							{/* Date */}
							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Date
								</span>
								<span className="text-gray-600">
									March, 1 1956
								</span>
							</div>

							{/* Read */}
							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Read
								</span>
								<span className="text-gray-600">2 min</span>
							</div>

							{/* Share */}
							<div className="flex justify-between items-center">
								<span className="font-semibold text-gray-700">
									Share
								</span>
								<div className="flex items-center gap-4">
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaFacebookF size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaInstagram size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaTwitter size={18} />
									</a>
									<a
										href="#"
										className="hover:text-gray-500 transition"
									>
										<FaYoutube size={18} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* kanan (7 kolom) */}
				<div className="col-span-4 flex flex-col justify-start space-y-6 text-gray-800 leading-relaxed">
					<p className="text-lg font-medium">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Esse animi pariatur ex eaque voluptas magni, eum
						est odio dolore possimus, voluptates laboriosam
						dignissimos, nam numquam eius error atque doloribus
						vitae libero iure architecto asperiores.
					</p>
					<p className="text-base">
						Atque, unde autem dolores incidunt reiciendis excepturi
						quaerat perferendis veritatis cupiditate velit! Quae
						odio excepturi beatae voluptas, quos eaque sequi id
						animi aliquid, sunt dolore hic inventore ab debitis
						repudiandae impedit laborum eligendi tenetur asperiores
						laudantium odit delectus iure.
					</p>
					<p className="text-base">
						Laudantium dolorum temporibus, quam architecto error
						recusandae? Quod aliquam commodi nam corporis eveniet
						reiciendis rem optio perferendis, atque dolor sit facere
						quam veritatis quia, dolorum distinctio sapiente.
					</p>
					<p className="text-lg font-medium">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Esse animi pariatur ex eaque voluptas magni, eum
						est odio dolore possimus, voluptates laboriosam
						dignissimos, nam numquam eius error atque doloribus
						vitae libero iure architecto asperiores.
					</p>
					<p className="text-base">
						Atque, unde autem dolores incidunt reiciendis excepturi
						quaerat perferendis veritatis cupiditate velit! Quae
						odio excepturi beatae voluptas, quos eaque sequi id
						animi aliquid, sunt dolore hic inventore ab debitis
						repudiandae impedit laborum eligendi tenetur asperiores
						laudantium odit delectus iure.
					</p>
					<p className="text-base">
						Laudantium dolorum temporibus, quam architecto error
						recusandae? Quod aliquam commodi nam corporis eveniet
						reiciendis rem optio perferendis, atque dolor sit facere
						quam veritatis quia, dolorum distinctio sapiente.
					</p>
				</div>

				<div className="col-span-3"></div>
			</div>

			<hr />
			<LatestArticle />
		</div>
	);
};

export default MagazineDetail;
