/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2c3f6e",
        "g": "#E2EAEB",
        "light-g": "#FAF6EE"
      },
    },
  },
  plugins: [],
};
