import { Logo } from "@/components/icons/logo"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

const SplashScreen = () => {
  const progressBarWrapper = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const [isReady, setReady] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const navigate = useNavigate()

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
    } catch (_) {
      console.error(_)
    }
  }, [progressValue])

  useEffect(() => {
    if (isReady) {
      navigate("/courses", { replace: true })
    }
  }, [isReady])

  useEffect(() => {
    if (progressBar.current && progressBarWrapper.current) {
      const wrapperWidth = progressBarWrapper.current.clientWidth
      progressBar.current.style.width = `${(progressValue / 100) * wrapperWidth}px`
    }
  }, [progressValue])

  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem>
      <div
        className={cn(
          "fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-9 bg-neutral-50 transition-opacity duration-500 ease-out dark:bg-neutral-950"
          // visible ? "opacity-100" : "pointer-events-none opacity-0"
        )}>
        <div className="relative flex w-full items-center justify-center has-[svg]:[&_svg]:size-40">
          <Logo />
          <div className="absolute -bottom-12 flex w-1/4 items-center justify-center">
            {/* <div
            ref={progressBarWrapper}
            className="flex w-full items-center overflow-hidden rounded-full bg-neutral-800">
            <div
              ref={progressBar}
              className="h-1.5 w-0 rounded-full bg-linear-to-r from-[#1ec8b0] via-[#2764e7] to-[#ff6ce8] transition-all"
            />
          </div> */}

            <Progress
              value={progressValue}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default SplashScreen
