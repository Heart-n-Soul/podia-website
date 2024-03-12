/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'purple': '#4b2aad',
      'white': '#ffffff',
      'off-white': '#fdfbf9',
      'soft-purple': '#9484c6',
      'dark-purple': '#201445',
      'footer-bg-cl': '#f5efeb',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'tiempos': ['tiempos', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
