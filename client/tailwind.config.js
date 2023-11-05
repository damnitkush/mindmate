/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf6fc",
          100: "#fcebfb",
          200: "#f7d7f4",
          300: "#f1b6e9",
          400: "#eb9fdf",
          500: "#d75ec4",
          600: "#ba3fa3",
          700: "#9a3184",
          800: "#7e2a6c",
          900: "#682758",
          950: "#440e37",
        },
        // secondary: {
        //   50: "#f6f3ff",
        //   100: "#efe9fe",
        //   200: "#d9cafe",
        //   300: "#ccb5fd",
        //   400: "#b48afb",
        //   500: "#9d5bf7",
        //   600: "#9139ee",
        //   700: "#8127da",
        //   800: "#6c20b7",
        //   900: "#5a1c96",
        //   950: "#381065",
        // },
      },
    },
  },
  plugins: [],
};
