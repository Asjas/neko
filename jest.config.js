/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
