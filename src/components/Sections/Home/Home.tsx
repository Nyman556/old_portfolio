import React from "react";
import SkillTag from "./SkillTag";
import profile from "/profile3.png";
import { FiCode, FiDatabase, FiFigma, FiSmartphone } from "react-icons/fi";

function Home() {
	return (
		<div className="flex justify-center items-center gap-16 mt-10">
			<div id="Home" className="flex flex-col space-y-6 max-w-lg">
				<h1 className="text-5xl font-bold leading-snug">
					Hello, my name is
					<br />
					<span className="text-6xl">Johan Nyman</span>
				</h1>
				<p className="text-lg">
					I help businesses enhance their online performance with tailored web
					solutions.
				</p>
				<p className="text-lg">Based in Sweden.</p>
				<div className="flex space-x-4">
					<SkillTag icon={<FiCode />} title="Frontend" />
					<SkillTag icon={<FiDatabase />} title="Backend" />
					<SkillTag icon={<FiFigma />} title="Design" />
					<SkillTag icon={<FiSmartphone />} title="Responsive" />
				</div>
			</div>
			<div>
				<img src={profile} alt="Me" className="rounded-3xl" />
			</div>
		</div>
	);
}

export default Home;
