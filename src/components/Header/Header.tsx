import React from "react";
import Nav from "./Nav";
import SocialLink from "./SocialLink";
import { socials } from "../../content/content";

function Header({ activeRef }) {
	return (
		<div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between px-16 py-8 z-50">
			<a href="/" className="py-2">
				JN Johan Nyman
			</a>
			<Nav activeRef={activeRef} />
			<div className="flex gap-6 py-2">
				{socials.map((social, idx) => (
					<SocialLink
						key={idx}
						icon={social.icon}
						path={social.path}
						desc={social.desc}
					/>
				))}
			</div>
		</div>
	);
}

export default Header;
