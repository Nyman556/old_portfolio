import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

function Nav({ activeRef }) {
	const [activePath, setActivePath] = useState("#Home");

	const handleLinkClick = (path) => {
		setActivePath(path);
	};

	useEffect(() => {
		setActivePath(activeRef);
	}, [activeRef]);

	return (
		<div className="h-fit px-2 py-3 rounded-full flex space-x-8 bg-custom_dark">
			<NavLink
				title={"Home"}
				path={"#Home"}
				active={activePath === "#Home"}
				onClick={() => handleLinkClick("#Home")}
			/>
			<NavLink
				title={"Work"}
				path={"#Work"}
				active={activePath === "#Work"}
				onClick={() => handleLinkClick("#Work")}
			/>
			<NavLink
				title={"About"}
				path={"#About"}
				active={activePath === "#About"}
				onClick={() => handleLinkClick("#About")}
			/>
		</div>
	);
}

export default Nav;
