// Mirrors the React site's tailwind.config.ts (only what the theme uses).
module.exports = {
	content: [
		'./src/blocks/**/*.{php,js}',
		'./inc/**/*.php',
		'./parts/**/*.html',
		'./templates/**/*.html',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: { '2xl': '1400px' },
		},
		extend: {
			fontFamily: {
				sans: [
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			colors: {
				blue: {
					50: '#f1f4f9',
					100: '#e2e9f3',
					200: '#c5d3e7',
					300: '#a8bddb',
					400: '#6d91c2',
					500: '#18448F',
					600: '#153d81',
					700: '#11336c',
					800: '#0e2956',
					900: '#0b2146',
					950: '#07162f',
				},
				'brand-navy': '#18448F',
			},
		},
	},
	plugins: [ require( 'tailwindcss-animate' ) ],
};
