/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(250,245,255)",
        myShadow2: "-4.1px -5px 0 0 rgb(250,245,255)",
      },
    },
  },
  plugins: [],
};
