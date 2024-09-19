/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070d06",
        btncolor: "#52c234",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(350px,1fr))",
      },
    },

    keyframes: {
      move: {
        "50%": { transform: "translateY(-0.3rem)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      scaleUp: {
        "0%": { tranform: "scale(1)" },
        "50%": { tranform: "scale(1.4)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      movingY: "move 2s linear infinite",
      rotating: "rotate 6s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
    },
  },
  plugins: [],
};
