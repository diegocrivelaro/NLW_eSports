/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxBackground: "url('./assets/backgrounds/bg-galax.png')",
      },
    },
  },
  plugins: [],
};
