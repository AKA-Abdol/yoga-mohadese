/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#58423A",
        green: "#8CA780",
        ajori: "#D48B71",
        light: "#FEF4EA",
        white: "#FEFAF7",
        primary: {
          light: "#cf9b88",
          DEFAULT: "#FEFAF7",
        },
        secondary: "#F5EBE1",
        error: "#CC7E85",
      },
      padding: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
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
