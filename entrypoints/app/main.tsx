import "@/assets/tailwind.css"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router"
import { RootLayout } from "./layouts"
import { CoursesPage, NotFound } from "./pages"

const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
