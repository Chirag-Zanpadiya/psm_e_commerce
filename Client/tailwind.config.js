/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is still needed even if you use @/ in imports
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#edcf5d",
        customBlack: "#010101",
        customIsabelline: "#f2f0ea",
        customGray : "#a4a4a4"
      },
    },
  },
  plugins: [],
};
