import React from "react";

function SkillTag({ icon, title }) {
	return (
		<button className=" bg-custom_indigo px-4 py-1 rounded-full flex justify-center items-center gap-2 text-md hover:bg-custom_blue">
			{icon}
			<p>{title}</p>
		</button>
	);
}

export default SkillTag;
