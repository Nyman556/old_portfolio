import React from "react";
import { AiFillRocket } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="flex justify-between mx-64 py-16 *:text-sm *:text-custom_dark_gray">
			<div className="flex gap-4">
				<a
					href=""
					className=" flex justify-center items-center gap-1 hover:text-custom_steel_blue"
				>
					<span>Johan Nyman</span> <BsRocketTakeoff />
				</a>
				<p>© 2024 Johan Nyman</p>
			</div>
			<div className="flex gap-4">
				<a href="" className="hover:text-custom_steel_blue">
					LinkedIn
				</a>
				<a href="" className="hover:text-custom_steel_blue">
					Github
				</a>
			</div>
		</div>
	);
}

export default Footer;
