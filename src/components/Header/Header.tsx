import React from "react";
import Nav from "./Nav";
import SocialLink from "./SocialLink";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

function Header() {
	return (
		<div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between px-16 py-8 z-50">
			<a href="/" className="py-2">
				JN Johan Nyman
			</a>
			<Nav />
			<div className="flex space-x-2 py-2">
				<SocialLink icon={<FiGithub />} path={"/"} />
				<SocialLink icon={<FiLinkedin />} path={"/"} />
				<SocialLink icon={<FiSend />} path={"/"} />
			</div>
		</div>
	);
}

export default Header;
