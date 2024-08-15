import React from "react";

function SkillTag({ icon, title, onClick, active }) {
	return (
		<button
			className={`px-4 py-1 rounded-full flex justify-center items-center gap-2 text-md border border-custom_indigo ${
				active
					? "bg-custom_steel_blue text-white"
					: "hover:bg-custom_steel_blue"
			}`}
			onClick={onClick}
		>
			{icon}
			<p>{title}</p>
		</button>
	);
}

export default SkillTag;
