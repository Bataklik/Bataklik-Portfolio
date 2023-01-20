/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray-1": "#D9D9D9",
        "custom-gray-2": "#CBCBCB",
      },
    },
  },
  plugins: [],
};
