/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				blue: '#26798E',
				green: '#63CAA7',
				yellow: '#FFC172',
				beige: '#FFE3B3',
				black: '#1D232A',
				white: '#FFFFFF',
				pink: "#D46170",
			}
		},
		
	},
	plugins: [require("daisyui"), require('flowbite/plugin')],
}
