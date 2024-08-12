/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			gradient_light: "#304182",
			gradient_dark: "#080A0D",

			custom_dark: "#1A202E",
			custom_blue: "#25495C",
			custom_blue_x: "	rgba(37,73,92,0.500)",
			custom_indigo: "#283669",
		},
		extend: {
			backgroundImage: {
				"gradient-pattern": "url('/gradient.svg')",
			},
		},
	},
	plugins: [],
};
