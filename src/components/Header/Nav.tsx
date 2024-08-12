import React, { useState } from "react";
import NavLink from "./NavLink";

function Nav() {
	const [activePath, setActivePath] = useState("/");

	const handleLinkClick = (path) => {
		setActivePath(path);
	};

	return (
		<div className="h-fit px-2 py-3 rounded-full flex space-x-8 bg-custom_dark">
			<NavLink
				title={"Home"}
				path={"#Home"}
				active={activePath === "/"}
				onClick={() => handleLinkClick("/")}
			/>
			<NavLink
				title={"Work"}
				path={"#Work"}
				active={activePath === "/work"}
				onClick={() => handleLinkClick("/work")}
			/>
			<NavLink
				title={"About"}
				path={"#About"}
				active={activePath === "/about"}
				onClick={() => handleLinkClick("/about")}
			/>
		</div>
	);
}

export default Nav;
