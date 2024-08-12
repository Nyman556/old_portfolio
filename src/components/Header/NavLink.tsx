import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function NavLink({ title, path, active, onClick }) {
	return (
		<div>
			<HashLink
				smooth
				to={path}
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
