import React from "react";
import { HashLink } from "react-router-hash-link";

function NavLink({ title, path, active, onClick }) {
	const scrollWithOffset = (el) => {
		const yOffset = -150;
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
	};

	return (
		<div>
			<HashLink
				smooth
				to={path}
				scroll={scrollWithOffset} // Use the custom scroll function
				className={`${
					active ? "bg-custom_blue" : "bg-none"
				} hover:bg-custom_blue_x transition-colors p-2 px-6 rounded-3xl`}
				onClick={onClick}
			>
				{title}
			</HashLink>
		</div>
	);
}

export default NavLink;
