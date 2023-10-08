/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        latop: "30px 1fr",
      },
      colors: {
        white: "whitesmoke",
      },
    },
  },
  plugins: [],
};
