import { Logo } from "@/components/icons/logo"

const SplashScreen = ({ progressValue }: { progressValue: number }) => {
  const progressBarWrapper = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progressBar.current && progressBarWrapper.current) {
      const wrapperWidth = progressBarWrapper.current.clientWidth
      progressBar.current.style.width = `${(progressValue / 100) * wrapperWidth}px`
    }
  }, [progressValue])

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-9 bg-neutral-950">
      <div className="relative flex w-full items-center justify-center has-[svg]:[&_svg]:size-32">
        <Logo />
        <div className="absolute -bottom-12 flex w-1/4 items-center justify-center">
          <div
            ref={progressBarWrapper}
            className="flex w-full items-center overflow-hidden rounded-full bg-neutral-800">
            <div
              ref={progressBar}
              className="h-1.5 w-0 rounded-full bg-linear-to-r from-[#1ec8b0] via-[#2764e7] to-[#ff6ce8] transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
