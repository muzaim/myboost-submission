import Image from "next/image";
import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaSpotify,
	FaSoundcloud,
	FaApple,
} from "react-icons/fa";
import LatestPodcast from "../../../components/sections/podcasts/latestPodcast";

const PodcastDetailPage = () => {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<div className="bg-white-30 text-black grid grid-cols-2 py-5 gap-6">
					<h3 className="font-bold text-lg uppercase leading-none">
						back
					</h3>
					<div className="flex flex-row justify-end">
						<span className="font-semibold uppercase">Podcast</span>
					</div>
				</div>
				<div className="grid grid-cols-12 py-20 gap-[3rem]">
					<div className="col-span-5 flex justify-end">
						<div className="w-max">
							<div className="flex flex-row gap-3 items-center">
								<Image
									src="/img/podcast/podcast3.png"
									alt="podcast"
									width={400}
									height={400}
									className="object-cover"
								/>
							</div>
							<div className="flex items-center justify-between text-sm mt-6">
								<span className="font-semibold uppercase tracking-wide text-gray-600">
									Listen on:
								</span>
								<div className="flex gap-3 text-black">
									<a href="#" className="">
										<FaSpotify size={18} />
									</a>
									<a href="#" className="">
										<FaApple size={18} />
									</a>
									<a href="#" className="">
										<FaSoundcloud size={18} />
									</a>
								</div>
							</div>

							<hr className="my-5" />
							<div className="space-y-4 text-sm">
								<div className="flex justify-between items-center">
									<span className="font-semibold text-gray-700">
										Date
									</span>
									<span className="text-gray-600">
										March, 1 1956
									</span>
								</div>

								<div className="flex justify-between items-center">
									<span className="font-semibold text-gray-700">
										Read
									</span>
									<span className="text-gray-600">2 min</span>
								</div>

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

					<div className="col-span-5 flex flex-col justify-start space-y-6 text-gray-800 leading-relaxed">
						<p className="text-2xl font-bold">Episode 01</p>
						<h3 className="text-[6rem] font-bold uppercase text-black tracking-tighter leading-none">
							save the world from ourself!
						</h3>
						<p className="text-lg font-semibold text-gray-800">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse animi pariatur ex eaque voluptas magni,
							eum est odio dolore possimus, voluptates laboriosam
							dignissimos, nam numquam eius error atque doloribus
							vitae libero iure architecto asperiores.
						</p>
						<p className="text-base">
							Atque, unde autem dolores incidunt reiciendis
							excepturi quaerat perferendis veritatis cupiditate
							velit! Quae odio excepturi beatae voluptas, quos
							eaque sequi id animi aliquid, sunt dolore hic
							inventore ab debitis repudiandae impedit laborum
							eligendi tenetur asperiores laudantium odit delectus
							iure. Laudantium dolorum temporibus, quam architecto
							error recusandae? Quod aliquam commodi nam corporis
							eveniet reiciendis rem optio perferendis, atque
							dolor sit facere quam veritatis quia, dolorum
							distinctio sapiente.
						</p>
						<p className="text-lg font-medium">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse animi pariatur ex eaque voluptas magni,
							eum est odio dolore possimus, voluptates laboriosam
							dignissimos, nam numquam eius error atque doloribus
							vitae libero iure architecto asperiores. Atque, unde
							autem dolores incidunt reiciendis excepturi quaerat
							perferendis veritatis cupiditate velit! Quae odio
							excepturi beatae voluptas, quos eaque sequi id animi
							aliquid, sunt dolore hic inventore ab debitis
							repudiandae impedit laborum eligendi tenetur
							asperiores laudantium odit delectus iure.
						</p>
						<p className="text-base">
							Laudantium dolorum temporibus, quam architecto error
							recusandae? Quod aliquam commodi nam corporis
							eveniet reiciendis rem optio perferendis, atque
							dolor sit facere quam veritatis quia, dolorum
							distinctio sapiente.
						</p>
						<hr />
						<p className="text-[2rem] text-black font-bold">
							The greatest glory in living lies not in never
							falling, but in rising every time we fall. —Nelson
							Mandela
						</p>
						<hr />
						<p className="text-lg font-medium">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse animi pariatur ex eaque voluptas magni,
							eum est odio dolore possimus, voluptates laboriosam
							dignissimos, nam numquam eius error atque doloribus
							vitae libero iure architecto asperiores. Atque, unde
							autem dolores incidunt reiciendis excepturi quaerat
							perferendis veritatis cupiditate velit! Quae odio
							excepturi beatae voluptas, quos eaque sequi id animi
							aliquid, sunt dolore hic inventore ab debitis
							repudiandae impedit laborum eligendi tenetur
							asperiores laudantium odit delectus iure.
						</p>
						<p className="text-base">
							Laudantium dolorum temporibus, quam architecto error
							recusandae? Quod aliquam commodi nam corporis
							eveniet reiciendis rem optio perferendis, atque
							dolor sit facere quam veritatis quia, dolorum
							distinctio sapiente. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Provident in quam
							libero itaque! Consequuntur, praesentium animi,
							dolores molestias doloremque et necessitatibus
							obcaecati veniam velit ut maiores, iure odit commodi
							magnam molestiae fuga consectetur tenetur eveniet
							voluptatem qui sint eum? Sit aut quos incidunt
							dolorem nisi eligendi dolor quae magni mollitia.
						</p>
					</div>

					<div className="col-span-3"></div>
				</div>

				<hr />
				<LatestPodcast />
			</div>
		</>
	);
};

export default PodcastDetailPage;
