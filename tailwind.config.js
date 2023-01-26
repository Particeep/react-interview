/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				orange: {
					100: '#FF9691',
					200: '#FF857E',
					300: '#FF736C',
					400: '#FF6259',
					500: '#ff5047',
					600: '#E64840',
					700: '#CC4039',
					800: '#B33832',
					900: '#99302B',
				},
			},
		},
	},
	plugins: [],
}
