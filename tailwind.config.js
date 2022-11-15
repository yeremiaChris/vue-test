/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-brand": "#4097DB",
        "blue-soft": "#53A7E9",
        "green-brand": "#00cbdb",
      },
    },
  },
  plugins: [],
};
