/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0a192f",
        "dark-blue-2": "#040c16",
        "dark-charcoal": "#333333",
        aqua: "#6fc2b0",
        "light-grey": "#565f69",
      },
    },
  },
  plugins: [],
};
