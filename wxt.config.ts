import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";
import packageJson from "./package.json";
import { makeId } from "./utils/index";

// cSpell:ignore IU Toolio
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: ({ browser, manifestVersion, mode, command }) => ({
    name: `IU Toolio ${mode === "development" ? "(Dev)" : ""}`,
    version: packageJson.version,
    version_name:
      packageJson.version +
      `${mode === "development" ? " dev-" : " build-"}${makeId(8)}`,
    description: "An app extension for IU students.",
    action: {
      default_title: "IU Toolio",
    },
    permissions: ["storage", "scripting", "tabs", "system.display"],
  }),
});
