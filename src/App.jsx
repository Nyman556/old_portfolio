import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Home from "./components/Sections/Home/Home";
import Work from "./components/Sections/Work/Work";
import gradient from "/gradient.svg";

function App() {
	return (
		<>
			<Header />
			<div className=" flex flex-col *:p-32 *:h-screen *:w-screen">
				<Home />
				<Work />
				<About />
			</div>
		</>
	);
}

export default App;
