/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			blue: '#26798E',
			green: '#63CAA7',
			yellow: '#FFC172',
			beige: '#FFE3B3',
			black: '#1D232A',
			white: '#FFFFFF'
		}
	},
	plugins: [require("daisyui")],
}
