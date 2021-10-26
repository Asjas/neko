module.exports = {
  plugins: [
    require("postcss-nested"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
    require("cssnano")({ preset: ["default", { discardComments: { removeAll: true } }] }),
  ],
};
