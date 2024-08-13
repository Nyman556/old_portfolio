import React, { useRef } from "react";
import SkillTag from "../../General/SkillTag";
import profile from "/profile.png";
import { FiCode, FiFigma, FiSmartphone } from "react-icons/fi";
import Divider from "./Divider";
import Description from "./Description";

function Home({ viewRef }) {
	return (
		<div className="flex flex-col mt-40 mb-20 h-screen">
			<div
				className="flex justify-between items-center lg:flex-row md:flex-col"
				ref={viewRef}
				id="Home"
			>
				<div id="Home" className="flex flex-col space-y-6 max-w-lg">
					<h1 className="text-5xl font-bold leading-snug">
						Hello, my name is
						<br />
						<span className="text-6xl">Johan Nyman</span>
					</h1>
					<p className="text-lg max-w-96">
						I help businesses enhance their online performance with tailored web
						solutions.
					</p>
					<p className="text-lg">Based in Växjö, Sweden.</p>
					<div className="flex space-x-4">
						<SkillTag icon={<FiCode />} title="Frontend" />
						<SkillTag icon={<FiFigma />} title="Design" />
						<SkillTag icon={<FiSmartphone />} title="Responsivess" />
					</div>
				</div>
				<div>
					<img src={profile} alt="Me" className="rounded-3xl" />
				</div>
			</div>
			<Divider />
			<Description />
		</div>
	);
}

export default Home;
