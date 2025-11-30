// prettier.config.js

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  printWidth: 120,
  singleAttributePerLine: true,
  tabWidth: 2,
  semi: false,
  bracketSameLine: true,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
}
