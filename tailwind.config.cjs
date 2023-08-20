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
				titleOne: 'showTitle 0s forwards 2s',
				titleTwo: 'showTitle 0s forwards 2.5s',
				titleThree: 'showTitle 0s forwards 3s',
				titleFour: 'showTitle 0s forwards 3.5s',
				titleFive: 'showTitle 0s forwards 4s',
				titleSix: 'showTitle 0s forwards 4.5s',
				titleSeven: 'showTitle 0s forwards 5s',
				titleEight: 'showTitle 0s forwards 5.5s',
				titleNine: 'showTitle 0s forwards 6s',
				titleTen: 'showTitle 0s forwards 6.5s',
				titleEleven: 'showTitle 0s forwards 7s',
				titleTwelve: 'showTitle 0s forwards 7.5s',
				titleThirteen: 'showTitle 0s forwards 8s',
				titleFourteen: 'showTitle 0s forwards 8.5s',
				titleFiveteen: 'showTitle 0s forwards 9s',
				titleSixteen: 'showTitle 0s forwards 9.5s',
				titleSeventeen: 'showTitle 0s forwards 10s',
				titleEightteen: 'showTitle 0s forwards 10.5s',
				titleNineteen: 'showTitle 0s forwards 11s',
				titleTwenty: 'showTitle 0s forwards 11.5s',
				titleTwentyOne: 'showTitle 0s forwards 12s',
				titleTwentyTwo: 'showTitle 0s forwards 12.5s',
				titleTwentyThree: 'showTitle 0s forwards 13s',
			}
		},
		
	},
	plugins: [require("daisyui"), require('flowbite/plugin')],
}
