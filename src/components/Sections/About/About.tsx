import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "/Images/profile.png";
function About({ viewRef }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("johan.nyman.dev@gmail.com");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	return (
		<div
			id="About"
			className="flex justify-center min-h-screen my-40 flex-col"
			ref={viewRef}
		>
			<div className="flex flex-col text-center relative">
				<h1 className="text-5xl font-bold leading-snug">About</h1>
				<h6 className="text-xl relative">
					<button onClick={handleCopy} className="hover:text-custom_steel_blue">
						johan.nyman.dev@gmail.com
					</button>
				</h6>
				<AnimatePresence>
					{copied && (
						<motion.span
							className=" rounded-md w-fit px-4 self-center mt-5 absolute top-20 bg-custom_dark"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							Copied to clipboard!
						</motion.span>
					)}
				</AnimatePresence>
			</div>
			<img src={profile} alt="me" className=" w-1/3 self-center my-16" />
			<div className="w-full grid grid-cols-[1fr,2fr] grid-rows-1 gap-9">
				<h2 className=" text-2xl">Background</h2>
				<p className=" text-xl">
					I am a frontend development student with a background as an IT
					technician, set to graduate in January 2025. My previous experience in
					IT has provided me with a strong technical foundation, which I’ve
					built upon through specialized studies in modern web technologies. I
					have a deep focus on React, creating dynamic and responsive user
					interfaces, and I’m also proficient in Angular, allowing me to work
					effectively in various frontend environments. I’m eager to leverage my
					combined IT and frontend development skills in collaborative and
					innovative projects.
				</p>
				<h2 className=" text-2xl">Education</h2>
				<p className=" text-xl">
					Frontend Development at EC, Higher Vocational Education (Graduating in
					January 2025)
				</p>
				<h2 className="text-2xl">Programming Languages</h2>
				<ul className=" text-xl list-disc">
					<li>Html & CSS</li>
					<li>Javascript/Typescript</li>
					<li>React</li>
					<li>Angular</li>
					<li>C#</li>
					<li>Python</li>
					<li>SQL</li>
				</ul>
				<h2 className="text-2xl">Upcoming Projects</h2>
				<ul className=" text-xl list-disc">
					<li>
						LIA (Learning in Action) Internship in Frontend Development:
						Starting April 2024, providing hands-on experience in a real-world
						environment.
					</li>
					<li>
						Final Thesis: Concluding project in Fall 2024, focusing on advanced
						frontend technologies and best practices.
					</li>
				</ul>
				<h2 className="text-2xl">Professional Experience</h2>
				<ul className=" text-xl list-disc">
					<li>
						IT Technician, Atea Logistics <br />
						<span className=" text-md">2016 - Present</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
