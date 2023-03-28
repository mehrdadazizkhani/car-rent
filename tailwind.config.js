/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      light: {
        primary: "#ffffff",
        secondary: "#e0e0e0",
        accent: "#3563E9",
        heading: "#1A202C",
        content: "#596780",
        details: "#90A3BF",
        error: "#DB2719",
        warning: "#FBAD39",
      },
    },
    extend: {},
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
  ],
};
