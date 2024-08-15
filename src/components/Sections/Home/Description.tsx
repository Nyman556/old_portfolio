import React from "react";
import {
	FiTrendingUp,
	FiStar,
	FiDatabase,
	FiCode,
	FiFigma,
	FiSmartphone,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { descriptions } from "../../../content/content";

function Description({ activeDesc }) {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.ul
			className="w-full rounded-full h-2 self-center mt-8 flex md:flex-col lg:flex-row justify-between"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.li
				key={activeDesc[0] ? "frontend" : "ux-ui-seo"}
				className="max-w-64 space-y-4"
				variants={item}
			>
				<h3 className="text-2xl">
					{React.createElement(
						activeDesc[0] ? descriptions.uiDev.icon : descriptions.uxUiSeo.icon,
						{ className: "text-custom_dark_gray" }
					)}
					<br />
					{activeDesc[0]
						? descriptions.uiDev.engContent.title
						: descriptions.uxUiSeo.engContent.title}
				</h3>
				<p className="text-custom_dark_gray">
					{activeDesc[0]
						? descriptions.uiDev.engContent.content
						: descriptions.uxUiSeo.engContent.content}
				</p>
			</motion.li>

			<motion.li
				key={activeDesc[1] ? "design-excellence" : "full-stack"}
				className="max-w-64 space-y-4"
				variants={item}
			>
				<h3 className="text-2xl">
					{React.createElement(
						activeDesc[1]
							? descriptions.designExcellence.icon
							: descriptions.fullStack.icon,
						{ className: "text-custom_dark_gray" }
					)}
					<br />
					{activeDesc[1]
						? descriptions.designExcellence.engContent.title
						: descriptions.fullStack.engContent.title}
				</h3>
				<p className="text-custom_dark_gray">
					{activeDesc[1]
						? descriptions.designExcellence.engContent.content
						: descriptions.fullStack.engContent.content}
				</p>
			</motion.li>

			<motion.li
				key={activeDesc[2] ? "responsive-design" : "cloud-based"}
				className="max-w-64 space-y-4"
				variants={item}
			>
				<h3 className="text-2xl">
					{React.createElement(
						activeDesc[2]
							? descriptions.responsiveDesign.icon
							: descriptions.cloudBased.icon,
						{ className: "text-custom_dark_gray" }
					)}
					<br />
					{activeDesc[2]
						? descriptions.responsiveDesign.engContent.title
						: descriptions.cloudBased.engContent.title}
				</h3>
				<p className="text-custom_dark_gray">
					{activeDesc[2]
						? descriptions.responsiveDesign.engContent.content
						: descriptions.cloudBased.engContent.content}
				</p>
			</motion.li>
		</motion.ul>
	);
}

export default Description;
