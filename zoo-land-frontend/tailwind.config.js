/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',],
  theme: {
    // colors:{
    //   // green: {
		// 	// 	DEFAULT: '#20BD56',
		// 	// 	500: '#E5F7EB',
		// 	// 	700: '#20A74E',
		// 	// },
    // },
    extend: {},
  },
  plugins: [],
}

