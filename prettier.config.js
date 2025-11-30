// prettier.config.js

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 120,
  singleAttributePerLine: true,
  tabWidth: 2,
  semi: false,
  bracketSameLine: true,
  trailingComma: "es5",
  plugins: [import("prettier-plugin-tailwindcss")],
  tailwindAttributes: ["className"],
};
