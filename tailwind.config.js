/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      direction: ['rtl'],
      colors: {
        primary: '#60BFC1',
        secondary: '#BADFD7',
        accent: '#F7E3DB',
      }
    },
  },
  plugins: [],
}
