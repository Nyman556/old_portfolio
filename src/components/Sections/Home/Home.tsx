import React, { useRef, useState } from "react";
import SkillTag from "../../General/SkillTag";
import profile from "/Images/profile.png";
import { FiCode, FiFigma, FiSmartphone } from "react-icons/fi";
import Divider from "../../General/Divider";
import Description from "./Description";
import { motion } from "framer-motion";

function Home({ viewRef }) {
	const [activeDesc, setActiveDesc] = useState([false, false, false]);

	const handleSkillClick = (idx) => {
		const newActiveDesc = activeDesc.map((active, i) =>
			i === idx ? !active : active
		);
		setActiveDesc(newActiveDesc);
	};

	const skillItems = [
		{ title: "Frontend", icon: <FiCode /> },
		{ title: "Design", icon: <FiFigma /> },
		{ title: "Responsiveness", icon: <FiSmartphone /> },
	];

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
						{skillItems.map((skill, idx) => (
							<SkillTag
								key={idx}
								icon={skill.icon}
								title={skill.title}
								onClick={() => handleSkillClick(idx)}
								active={activeDesc[idx]}
							/>
						))}
					</div>
				</div>
				<img src={profile} alt="Me" className="rounded-3xl" />
			</div>
			<Divider />
			<Description activeDesc={activeDesc} />
		</div>
	);
}

export default Home;
