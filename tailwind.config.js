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
        auto: "repeat(auto-fill,minmax(380px,1fr))",
      },
    },
  },
  plugins: [],
};
