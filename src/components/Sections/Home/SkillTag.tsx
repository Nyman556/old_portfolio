import React from "react";

function SkillTag({ icon, title }) {
	return (
		<div className=" bg-custom_indigo px-4 py-1 rounded-full flex justify-center items-center gap-2 text-md">
			{icon}
			<p>{title}</p>
		</div>
	);
}

export default SkillTag;
