import React from "react";
import Nav from "./Nav";
import SocialLink from "./SocialLink";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

function Header({ activeRef }) {
	const socials = [
		{ icon: <FiGithub />, desc: "Github", path: "https://github.com/Nyman556" },
		{
			icon: <FiLinkedin />,
			desc: "LinkedIn",
			path: "https://www.linkedin.com/in/johan-nyman-b574831bb/",
		},
		{ icon: <FiSend />, desc: "Mail", path: "mailto:yourmail@domain.com" },
	];
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
