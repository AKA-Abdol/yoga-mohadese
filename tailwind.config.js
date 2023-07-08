/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        /*  PUT YOUR VARIABLES HERE  */
        primary: {

          DEFAULT: "rgb(173,192,128)"
        }
      }
    },
  },
  plugins: [require("daisyui")],
};
