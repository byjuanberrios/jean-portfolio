/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: '#322D2D',
				'red-gray-light': '#858484',
				'alt-black': '#1D1D1D',
			},
			fontFamily: {
				poppins: ['Poppins'],
				gt: ['GT Super Display']
			},
			screens: {
				'xs': '520px',
			}
		},
	},
	plugins: [],
}
