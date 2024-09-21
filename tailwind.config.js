/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D9CEC",
        accent: "#FBC02D",
        background: "#F5F5F5",
        textDark: "#2C3E50",
      },
    },
  },
  plugins: [],
};
