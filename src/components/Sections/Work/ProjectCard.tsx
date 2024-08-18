import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
	return (
		<Link
			to={project.path}
			className=" w-full min-h-52 h-72 bg-custom_blue rounded-xl transition-all hover:scale-110 p-2 flex flex-col"
			style={{
				backgroundImage: `url(${project.thumbnail})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<p className=" bg-custom_dark w-fit px-2 py-1 rounded-md">
				{project.title}
			</p>
			<div className="flex gap-2 justify-end align-bottom w-full h-full">
				{project.tech.map((tech, idx) => (
					<span key={idx} className=" bg-custom_dark rounded-lg p-1 self-end">
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}

export default ProjectCard;
