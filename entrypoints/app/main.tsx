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

const App = () => {
  const [isReady, setReady] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setProgressValue((prevProgress) => {
          const newProgress = Math.min(prevProgress + Math.random() * 10, 100)
          return newProgress
        })
      }, 100)
      if (progressValue >= 100) setTimeout(() => setReady(true), 1000)
      return () => clearInterval(interval)
    } catch (error) {}
  }, [progressValue])

  return isReady ? <RouterProvider router={router} /> : <SplashScreen progressValue={progressValue} />
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
