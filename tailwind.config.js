/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        twister: ["TwistTwist", "san-serif"],
        superLagend: ["Super Lagend Boy", "san-serif"],
        quantico: ["Quantico", "san-serif"],
      },
      screens: {
        xxl: "1800px",
      },
    },
  },
  plugins: [],
};
