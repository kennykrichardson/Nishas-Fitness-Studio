/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        gym: ["Bebas Neue", "sans-serif"],
      },
    },
  },

  plugins: [],
};