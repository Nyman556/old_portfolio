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

	const navList = ["Home", "Work", "About"];

	return (
		<ul className="h-fit px-2 py-3 rounded-full flex space-x-8 bg-custom_dark">
			{navList.map((item, idx) => (
				<li key={idx}>
					<NavLink
						title={item}
						path={"#" + item}
						active={activePath === "#" + item}
						onClick={() => handleLinkClick("#" + item)}
					/>
				</li>
			))}
		</ul>
	);
}

export default Nav;
