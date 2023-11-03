/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf2ff",
          100: "#dde7ff",
          200: "#c2d2ff",
          300: "#9db4ff",
          400: "#758bff",
          500: "#5563ff",
          600: "#4040f5",
          700: "#2d2ad8",
          800: "#2525ae",
          900: "#262989",
          950: "#171650",
        },
        secondary: {
          50: "#fefbec",
          100: "#fcf2c9",
          200: "#fae38d",
          300: "#f7cf53",
          400: "#f5ba2a",
          500: "#ee9a12",
          600: "#d3750c",
          700: "#af520e",
          800: "#8e4012",
          900: "#753512",
          950: "#431a05",
        },
      },
    },
  },
  plugins: [],
};
