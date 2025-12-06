import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "wxt"
import packageJson from "./package.json"
import { makeId } from "./src/lib/make-id"

// cSpell:ignore IU Toolio
// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-react", "@wxt-dev/i18n/module", "@wxt-dev/auto-icons"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: ({ mode }) => ({
    name: `IU Toolio ${mode === "development" ? "(Dev)" : ""}`,
    version: packageJson.version,
    version_name: packageJson.version + `${mode === "development" ? " dev-" : " build-"}${makeId(8)}`,
    description: "An app extension for IU students.",
    default_locale: "en",
    action: {
      default_title: "IU Toolio",
    },
    permissions: ["storage", "scripting", "tabs", "system.display", "offscreen", "cookies"],
    host_permissions: ["https://edusoftweb.hcmiu.edu.vn/*"],
  }),
})
