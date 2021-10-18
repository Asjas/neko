module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/Leopard.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
