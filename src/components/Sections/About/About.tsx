import React from "react";

function About({ viewRef }) {
	return (
		<div
			id="About"
			className="flex justify-center h-screen my-40"
			ref={viewRef}
		>
			<div>
				<h1 className="text-5xl font-bold leading-snug">About</h1>
			</div>
		</div>
	);
}

export default About;
