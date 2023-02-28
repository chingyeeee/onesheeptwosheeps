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
          "30%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeOut: {
          "0%": { opacity: 100 },
          "70%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        loaded: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        lightening: {
          "0%": { boxShadow: "0 0 12px rgba(0, 115, 247, 0.5)" },
          "100%": {
            boxShadow:
              "0 0 5px rgba(0, 115, 247, 0.9),0 0 18px rgba(0, 115, 247, 0.9)",
          },
        },
        zoomIn: {
          "0%": { opacity: "0%", scale: "3" },
          "100%": { opacity: "100%", scale: "1" },
        },
        slideDown: {
          "0%": { height: "10%", opacity: 0.3 },
          "100%": { height: "80%", opacity: 1 },
        },
        slideUp: {
          "0%": { height: "80%", opacity: 1 },
          "100%": { height: "10%", opacity: 0 },
        },
        slideUp: {
          "0%": { height: "80%", opacity: 1 },
          "100%": { height: "10%", opacity: 0 },
        },
        shake: {
          "0%": {
            transform: "translateX(5px)",
          },
          "50%": {
            transform: "translateX(-5px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100% ": {
            transform: "translateX(-50%)",
          },
        },
        marqueeV: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100% ": {
            transform: "translateY(0)",
          },
        },
        expandFromLeftTop: {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "top left",
            opacity: "0",
          },
          "100% ": {
            transform: "scale(1)",
            "transform-origin": "top left",
            opacity: "1",
          },
        },
        expandFromRightTop: {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "top right",
            opacity: "0",
          },
          "100% ": {
            transform: "scale(1)",
            "transform-origin": "top right",
            opacity: "1",
          },
        },
      },
      animation: {
        "finger-shake": "shake 0.5s linear infinite alternate",
        fadeIn: "fadeIn 1.8s linear infinite alternate",
        fadeOut: "fadeOut 1.8s linear infinite alternate",
        loaded: "loaded 3s linear alternate",
        "remind-lightening": "lightening 2s 6s linear infinite alternate",
        lightening: "lightening 0.5s linear infinite alternate",
        zoomIn: "zoomIn 1s linear",
        slideDown: "slideDown 0.8s linear",
        slideUp: "slideUp 0.8s linear",
        shake: "shake 0.15s 20s linear infinite",
        marquee: "marquee 10s linear infinite",
        marqueeV: "marqueeV 10s linear infinite",
        expandLT: "expandFromLeftTop .5s linear",
        expandRT: "expandFromRightTop .5s linear",
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
      nanum: ["Nanum Myeongjo", "serif"],
      courier: ["Courier Prime", "monospace"],
    },
  },
  plugins: [],
};
