/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 80%": { transform: "rotate(0deg)" },
          "15%, 45%": { transform: "rotate(8deg)" },
          "30%, 60%": { transform: "rotate(-6deg)" },
        },
      },
    },
  },
  plugins: [],
};
