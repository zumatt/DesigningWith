/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EDEDED",
        purple:"#B777F7",
        blue:"#72DAFB",
        grey:'#A1A1A1',
        green:"#8CD782",
        orange:'#EDAB2C',
        beige:"#F08B5F",
      }
    },
  },
  plugins: [],
};
