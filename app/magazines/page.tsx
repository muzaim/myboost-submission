import React from "react";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Magazines from "@/components/sections/parts/magazines/magazines";

const Magazine = () => {
	return (
		<>
			<div className="px-4 md:px-8 lg:px-16">
				<Magazines />
			</div>
		</>
	);
};

export default Magazine;
