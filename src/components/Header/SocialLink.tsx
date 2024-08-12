import React from "react";

function SocialLink({ icon, path }) {
	return (
		<a href={path} className=" text-2xl">
			{icon}
		</a>
	);
}

export default SocialLink;
