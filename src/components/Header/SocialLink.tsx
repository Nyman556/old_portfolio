import React from "react";
import { Tooltip } from "react-tooltip";

function SocialLink({ icon, path, desc }) {
	return (
		<>
			<a
				href={path}
				id={desc}
				className="text-2xl hover:text-custom_steel_blue transition-colors"
			>
				{React.createElement(icon)}
			</a>
			<Tooltip anchorSelect={"#" + desc}>
				<p>{desc}</p>
			</Tooltip>
		</>
	);
}

export default SocialLink;
