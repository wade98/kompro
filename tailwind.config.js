/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	important: '#__next',
	theme: {
		extend: {
			backgroundImage: {
				'blackwatch': "url('../public/blackwatch.webp')",
				'whitewatch': "url('../public/whitewatch.webp')",
			}
		},
	},
	plugins: [],
};
