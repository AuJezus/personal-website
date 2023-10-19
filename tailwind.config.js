/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      hueRotate: {
        270: "270deg",
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
