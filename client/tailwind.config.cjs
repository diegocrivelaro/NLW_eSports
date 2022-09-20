/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxBackground: "url('./assets/backgrounds/bg-galax.png')",
        titleGradient:
          "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      },
    },
  },
  plugins: [],
};
