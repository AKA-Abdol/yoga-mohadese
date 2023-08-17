/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /*  PUT YOUR VARIABLES HERE  */
        primary: {
          light: "#B5DDA4",
          DEFAULT: "#008148",
          dark: "#034732",
        },
        secondary: "#96C5F7",
        white: "#ecece0",
        error: "#bc4749",
      },
      padding: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      margin: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "15px",
      },
      borderWidth: {
        normal: "1px",
        lg: "3px",
      },
      fontSize: {
        title: "2rem",
        normal: "1rem",
        tiny: "0.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
