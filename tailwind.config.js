/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Roboto'],
        font2: ['Playfair'],
        font3: ['Nunito'],
      }
    },
  },
  plugins: [],
}

