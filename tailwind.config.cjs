/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('/src/assets/images/icons/icon-cloud.svg')",
        signBlock: "url('/src/assets/images/sign/signBlock.svg')",
        reset: "url('/src/assets/images/sign/reset.svg)",
        hoverreset: "url('/src/assets/images/sign/hoverreset.svg)",
        save: "url('/src/assets/images/sign/save.svg)",
        hoversave: "url('/src/assets/images/sign/hoversave.svg)",
      },
      colors: {
        lakegreen: "#a6e2c5",
        lightgreen: "#20d371",
        lightpurple: "#ff00c9",
        red: "#ff4a03",
        yellow: "#fffa6f",
        purple: "#a9a9ff",
        darkgreen: "#004943",
        blue: "#0073f7",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
        loaded: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "finger-shake": "shake 0.5s linear infinite alternate",
        fadeIn: "fadeIn 3s linear infinite alternate",
        fadeOut: "fadeOut 3s linear infinite alternate",
        loaded: "loaded 3s linear alternate",
      },
      transitionProperty: {
        height: "height",
      },
    },
    fontFamily: {
      adobe: [
        "Adobe Myungjo",
        "Noto Serif TC",
        "serif",
        "system-ui",
        "sans-serif",
      ],
      chakra: ["Chakra Petch", "sans-serif"],
      padyakke: ["Padyakke Expanded One", "cursive"],
    },
  },
  plugins: [],
};
