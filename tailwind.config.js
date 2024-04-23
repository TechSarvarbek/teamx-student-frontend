/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow":"#f5de0c",
        "custom-purple":"#7d28b5"
      }
    },
  },
  plugins: [],
})