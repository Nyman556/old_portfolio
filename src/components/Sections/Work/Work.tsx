import React from "react";
import ProjectCard from "./ProjectCard";

function Work({ viewRef }) {
	return (
		<div id="Work" className=" flex flex-col min-h-screen" ref={viewRef}>
			<div>
				<h1 className="text-5xl font-bold leading-snug">My Work</h1>
				<p>
					See my most recent projects below to get an idea of my past
					experience.
				</p>
			</div>
			<div className="grid lg:grid-cols-2 gap-6 my-16 odd:my-16 md:grid-cols-1">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}

export default Work;
