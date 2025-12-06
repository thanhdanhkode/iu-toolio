import "@/assets/tailwind.css"
import { createRoot, Root } from "react-dom/client"
import App from "./App"

export default defineContentScript({
  matches: ["*://edusoftweb.hcmiu.edu.vn/*", "*://blackboard.hcmiu.edu.vn/*"],
  cssInjectionMode: "ui",
  main: async (ctx) => {
    const ui = await createShadowRootUi(ctx, {
      name: "iu-toolio-integration",
      position: "inline",
      anchor: "html",
      onMount: (container) => {
        container.appendChild(document.createElement("div"))

        const reactRoot = createRoot(container)
        reactRoot.render(<App />)

        return reactRoot
      },
      onRemove: (mounted?: Root | null) => {
        mounted?.unmount()
      },
    })

    ui.mount()
  },
})
