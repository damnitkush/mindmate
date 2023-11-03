/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff2f1",
          100: "#ffe3e1",
          200: "#ffcbc7",
          300: "#ffa8a0",
          400: "#ff8c82",
          500: "#f84a3b",
          600: "#e52d1d",
          700: "#c12214",
          800: "#a01f14",
          900: "#842118",
          950: "#480c07",
        },
        secondary: {
          50: "#f6f3ff",
          100: "#efe9fe",
          200: "#d9cafe",
          300: "#ccb5fd",
          400: "#b48afb",
          500: "#9d5bf7",
          600: "#9139ee",
          700: "#8127da",
          800: "#6c20b7",
          900: "#5a1c96",
          950: "#381065",
        },
      },
    },
  },
  plugins: [],
};
