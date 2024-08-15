import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import trendfusionThumb from "/Images/trendFusionThumb.png";
import AngularBlogThumb from "/Images/AngularBlogThumb.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Work({ viewRef }) {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const projects = [
		{
			title: "Ecommerce",
			thumbnail: trendfusionThumb,
			tech: ["React", "Javascript", "CSS", "Responsive Design", "TailwindCSS"],
		},
		{
			title: "Blog",
			thumbnail: AngularBlogThumb,
			tech: ["Angular", "TypeScript", "Responsive Design", "TailwindCSS"],
		},
		{
			title: "Blog",
			thumbnail: AngularBlogThumb,
			tech: ["Angular", "TypeScript", "Responsive Design", "TailwindCSS"],
		},
		{
			title: "Blog",
			thumbnail: AngularBlogThumb,
			tech: ["Angular", "TypeScript", "Responsive Design", "TailwindCSS"],
		},
		{
			title: "Blog",
			thumbnail: AngularBlogThumb,
			tech: ["Angular", "TypeScript", "Responsive Design", "TailwindCSS"],
		},
		{
			title: "Blog",
			thumbnail: AngularBlogThumb,
			tech: ["Angular", "TypeScript", "Responsive Design", "TailwindCSS"],
		},
	];

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div id="Work" className="flex flex-col min-h-screen" ref={viewRef}>
			<div ref={ref}>
				<h1 className="text-5xl font-bold leading-snug">My Work</h1>
				<p>
					See my most recent projects below to get an idea of my past
					experience.
				</p>
			</div>
			<motion.ul
				className="grid lg:grid-cols-2 gap-6 my-16 odd:my-16 md:grid-cols-1"
				variants={container}
				initial="hidden"
				animate={controls}
			>
				{projects.map((project, idx) => (
					<motion.li key={idx} className="item" variants={item}>
						<ProjectCard project={project} />
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
}

export default Work;
