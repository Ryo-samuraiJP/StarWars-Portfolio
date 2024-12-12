import tailwindcssTextshadow from "tailwindcss-textshadow";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        starwars__opening: ["Trade Gothic", "sans-serif"],
      },
      animation: {
        "profile-effect": "profile__effect 8s ease-in-out infinite 1s",
        scrolldown: "scrolldown-guide 2s infinite",
        arrow: "arrow 500ms ease infinite alternate",
        "arrow-delay": "arrow 500ms ease infinite alternate 250ms",
        "meteor-effect": "meteor 5s linear infinite",
        "shining-effect": "shining 2s linear infinite",
      },
      keyframes: {
        profile__effect: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        "scrolldown-guide": {
          "0%": { opacity: 0, height: "6px" },
          "40%": { opacity: 1, height: "10px" },
          "80%": {
            transform: "translate(0, 20px)",
            height: "10px",
            opacity: 0,
          },
          "100%": { height: "3px", opacity: 0 },
        },
        arrow: {
          from: { opacity: 0 },
          to: { opacity: 0.5 },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shining: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      textShadow: {
        neon: "0 0 5px #1472ff, 0 0 10px #1472ff, 0 0 20px #1472ff, 0 0 30px #1472ff",
      },
      colors: {
        background: "#000",
        color: "#fff",
        neon: "rgba(20,114,255,0.5)",
      },
    },
  },
  plugins: [tailwindcssTextshadow],
};
