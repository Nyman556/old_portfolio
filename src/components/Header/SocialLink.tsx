import React from "react";
import { Tooltip } from "react-tooltip";

function SocialLink({ icon, path, desc }) {
	return (
		<>
			<a href={path} id={desc} className="text-2xl">
				<p>{icon}</p>
			</a>
			<Tooltip anchorSelect={"#" + desc}>
				<p>{desc}</p>
			</Tooltip>
		</>
	);
}

export default SocialLink;
