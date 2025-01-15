/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60BFC1',
        secondary: '#BADFD7',
        accent: '#F7E3DB',
      }
    },
  },
  plugins: [],
}
