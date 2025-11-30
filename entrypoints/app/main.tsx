import "@/assets/tailwind.css"
import { StrictMode, useState } from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router"
import { DefaultPage } from "./pages"

const router = createHashRouter([
  {
    path: "/",
    element: <DefaultPage />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
])

const App = () => {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => setReady(true), 1000)
  }, [])

  return isReady ? <div>Loading...</div> : <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
