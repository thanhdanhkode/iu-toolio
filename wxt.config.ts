import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";
import packageJson from "./package.json";

// cSpell:ignore IU Toolio
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
