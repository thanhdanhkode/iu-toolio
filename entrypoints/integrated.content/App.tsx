import { Toaster } from "@/components/ui/sonner"
import { Bell } from "lucide-react"
import { toast } from "sonner"

export default function App() {
  useEffect(() => {
    const shadow = document.querySelector("iu-toolio-integration")?.shadowRoot
    const head = shadow?.querySelector("head")
    if (!shadow) return
    document.head.querySelectorAll("style").forEach((styleEl) => {
      if (styleEl.textContent?.includes("[data-sonner-toaster]")) {
        head?.append(styleEl)
      }
    })
  }, [])

  useEffect(() => {
    toast("IU Toolio", {
      duration: Infinity,
      icon: <Bell className="mx-3 size-4" />,
      description:
        "Detected IU Toolio is installed on your browser. Do you want to switch to it for better experience?",
      action: {
        label: "Open IU Toolio",
        onClick: () => {
          console.log("Switching to IU Toolio...")
        },
      },
    })
  })

  return (
    <>
      <Toaster
        position="top-center"
        theme="light"
        closeButton
      />
    </>
  )
}
