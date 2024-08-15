import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Home from "./components/Sections/Home/Home";
import Work from "./components/Sections/Work/Work";

function App() {
	const homeRef = useRef(null);
	const workRef = useRef(null);
	const aboutRef = useRef(null);
	const [activeSection, setActiveSection] = useState("Home");

	useEffect(() => {
		const options = { threshold: 0.5 };

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection("#" + entry.target.id);
				}
			});
		}, options);

		const sections = [homeRef.current, workRef.current, aboutRef.current];
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<div className="w-full h-full bg-gradient-to-br from-gradient_light via-gradient_dark to-gradient_dark opacity-85">
				<Header activeRef={activeSection} />
				<div className="flex items-center flex-col 3xl:*:w-1/3 lg:*:w-1/2 md:*:w-2/3">
					<Home viewRef={homeRef} />
					<Work viewRef={workRef} />
					<About viewRef={aboutRef} />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
