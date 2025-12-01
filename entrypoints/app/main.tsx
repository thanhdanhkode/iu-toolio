import "@/assets/tailwind.css"
import { StrictMode, useState } from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router"
import SplashScreen from "./components/splash-screen"
import { RootLayout } from "./layouts"
import { DefaultPage, CoursesPage, SettingPage, NotFound } from "./pages"
import AnnouncementPage from "./pages/annoucement"

const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "announcement",
        element: <AnnouncementPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
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
