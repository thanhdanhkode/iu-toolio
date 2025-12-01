import ReactDOM from "react-dom/client"
import App from "./App"
import "@/assets/tailwind.css"

export default defineContentScript({
  matches: ["*://edusoftweb.hcmiu.edu.vn/*", "*://blackboard.hcmiu.edu.vn/*"],
  cssInjectionMode: "ui",
  main: async (ctx) => {
    const ui = await createShadowRootUi(ctx, {
      name: "iu-toolio-integration",
      position: "inline",
      anchor: "html",
      onMount: (container, shadow, shadowHost) => {
        const root = document.createElement("div")
        root.id = "iu-toolio-integration-root"
        container.appendChild(root)

        return ReactDOM.createRoot(container).render(<App />)
      },
      onRemove: (mounted: any) => {
        mounted?.unmount()
      },
    })

    ui.mount()
  },
})
