/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('/src/assets/images/icons/icon-cloud.svg')",
      },
      colors: {
        lakegreen: "#a6e2c5",
        lightgreen: "#20d371",
        lightpurple: "#ff00c9",
        red: "#ff4a03",
        yellow: "#fffa6f",
        purple: "#a9a9ff",
        darkgreen: "#004943",
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
