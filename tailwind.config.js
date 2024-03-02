/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1440px"
			},
			colors: {
				backgroundColor: "#b38693",
				secondaryBgColor: "#ffc0cb",
				mainText: "#ffffff",
				secondaryText: "#ffeff4",
				buttonColor: "#b38693",
				buttonTextColor: "#ffeff4"
			},
			fontFamily: {
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"]
			}
		}
	},
	plugins: []
};
