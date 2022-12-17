/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Press Start 2P"', 'ui-sans-serif', 'system-ui'],
				serif: ['"Press Start 2P"', 'ui-serif', 'Georgia']
			},
			colors: {
				wood: '#342010',
				woodlight: '#ba9d58'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')]
};
