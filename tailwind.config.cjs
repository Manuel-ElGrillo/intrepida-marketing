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
				purple: "#661866",
				grey: "#C4C2C2",
			},
			keyframes: {
				showTitle: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			},
			animation: {
				titleOne: 'showTitle 0s forwards 6s',
				titleTwo: 'showTitle 0s forwards 6.5s',
				titleThree: 'showTitle 0s forwards 7s',
				titleFour: 'showTitle 0s forwards 7.5s',
				titleFive: 'showTitle 0s forwards 8s',
				titleSix: 'showTitle 0s forwards 8.5s',
				titleSeven: 'showTitle 0s forwards 9s',
				titleEight: 'showTitle 0s forwards 9.5s',
				titleNine: 'showTitle 0s forwards 10s',
				titleTen: 'showTitle 0s forwards 10.5s',
				titleEleven: 'showTitle 0s forwards 11s',
				titleTwelve: 'showTitle 0s forwards 11.5s',
				titleThirteen: 'showTitle 0s forwards 12s',
				titleFourteen: 'showTitle 0s forwards 12.5s',
				titleFiveteen: 'showTitle 0s forwards 13s',
				titleSixteen: 'showTitle 0s forwards 13.5s',
				titleSeventeen: 'showTitle 0s forwards 14s',
				titleEightteen: 'showTitle 0s forwards 14.5s',
				titleNineteen: 'showTitle 0s forwards 15s',
				titleTwenty: 'showTitle 0s forwards 15.5s',
				titleTwentyOne: 'showTitle 0s forwards 16s',
				titleTwentyTwo: 'showTitle 0s forwards 16.5s',
				titleTwentyThree: 'showTitle 0s forwards 17s',
			}
		},
		
	},
	plugins: [require("daisyui"), require('flowbite/plugin')],
}
