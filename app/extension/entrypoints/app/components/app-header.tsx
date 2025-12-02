import { ReactNode, useId } from "react"

const AppHeader = ({ sidebarTrigger }: { sidebarTrigger: ReactNode }) => {
  return (
    <header
      id={useId()}
      className="absolute top-0 right-0 left-0 z-10 flex flex-1 items-center gap-3 border-b p-2 shadow-sm backdrop-blur-md *:p-2 dark:border-neutral-800 dark:shadow-black/10">
      {sidebarTrigger}
    </header>
  )
}

export default AppHeader
