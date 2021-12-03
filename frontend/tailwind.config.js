module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      fontFamily: { display: ["Manrope"], body: ["Manrope"] },
      colors: {
        primary: "hsl(37deg 100% 50%)",
        secondary: "hsl(0deg 0% 0%)",
      },
      backgroundImage: {
        "hero-image": "url('/images/Leopard.jpg')",
        "tilted-frame": "url('/images/tilted-frame.jpg')",
      },
      screens: {
        "3xl": "2200px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
  corePlugins: {
    preflight: false,
  },
};
