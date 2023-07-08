/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /*  PUT YOUR VARIABLES HERE  */
        primary: {
          light: "#dae9bd",
          DEFAULT: "#616e45",
          dark: "#222917",
        },
        secondary: {},
        white: "#ecece0",
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
