module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      fontFamily: { display: ["Manrope"], body: ["Manrope"] },
      colors: {
        primary: "hsl(37deg 100% 50%)",
        secondary: "hsl(0deg 0% 3%)",
      },
      backgroundImage: {
        "hero-image": "url('/images/Leopard.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  corePlugins: {
    preflight: false,
  },
};
