/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primero: "#99ccff",
        segundo: "#1494E2",
        tercero: "#155CCE",
        cuarto: "#061027",
      },
    },
  },
  plugins: [],
};