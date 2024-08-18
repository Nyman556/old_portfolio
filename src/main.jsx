import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import Blog from "./components/Projects/Blog.tsx";
import Ecommerce from "./components/Projects/Ecommerce.tsx";

const router = createBrowserRouter([
	{
		path: "/johan.nyman",
		element: <App />,
	},
	{
		path: "/johan.nyman/Blog",
		element: <Blog />,
	},
	{
		path: "/johan.nyman/Ecommerce",
		element: <Ecommerce />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
