import { Logo } from "@/components/icons/logo"
import { Progress } from "@/components/ui/progress"
import { useEffect, useRef, useState } from "react"

const FADE_DURATION = 500 // ms — keep in sync with Tailwind duration

const SplashScreen = ({ visible, progressValue }: { visible: boolean; progressValue: number }) => {
  const progressBarWrapper = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
      return
    }

    const t = setTimeout(() => setShouldRender(false), FADE_DURATION)
    return () => clearTimeout(t)
  }, [visible])

  useEffect(() => {
    if (progressBar.current && progressBarWrapper.current) {
      const wrapperWidth = progressBarWrapper.current.clientWidth
      progressBar.current.style.width = `${(progressValue / 100) * wrapperWidth}px`
    }
  }, [progressValue])

  if (!shouldRender) return null

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-9 bg-neutral-950 transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}>
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
  )
}

export default SplashScreen
