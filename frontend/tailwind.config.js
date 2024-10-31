/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseBorder: {
          "0%, 100%": { borderColor: "rgba(59, 130, 246, 0.5)" }, // initial & final color
          "50%": { borderColor: "rgba(59, 130, 246, 1)" }, // mid-pulse color
        },
      },
      animation: {
        pulseBorder: "pulseBorder 1s ease-in-out infinite", // define the animation
      },
      colors: {
        primary: "#6366F1",
      },
    },
  },
  plugins: [],
};
