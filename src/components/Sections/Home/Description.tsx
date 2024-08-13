import React from "react";
import { FiTrendingUp, FiStar, FiDatabase } from "react-icons/fi";

function Description() {
	return (
		<div className=" w-full rounded-full h-2 self-center mt-8 flex md:flex-col lg:flex-row justify-between">
			<div className="max-w-64 space-y-4">
				<h3 className=" text-2xl">
					<FiTrendingUp className="text-custom_dark_gray" />
					<br />
					UX/UI and SEO
				</h3>
				<p className="text-custom_dark_gray">
					I create intuitive user experiences and optimize search engine
					rankings to ensure your business stands out online.
				</p>
			</div>
			<div className="max-w-64 space-y-4">
				<h3 className=" text-2xl">
					<FiStar className="text-custom_dark_gray" />
					<br />
					Full Stack
				</h3>
				<p className="text-custom_dark_gray">
					I offer comprehensive full-stack development services, building robust
					and scalable web applications.
				</p>
			</div>
			<div className="max-w-64 space-y-4">
				<h3 className=" text-2xl">
					<FiDatabase className="text-custom_dark_gray" />
					<br />
					Cloudbased
				</h3>
				<p className="text-custom_dark_gray">
					I leverage cloud-based technologies to build flexible and efficient
					web solutions that grow with your business.
				</p>
			</div>
		</div>
	);
}

export default Description;
