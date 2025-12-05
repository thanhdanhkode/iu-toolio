import { ReactNode, useId } from "react"

const AppHeader = ({ sidebarTrigger }: { sidebarTrigger: ReactNode }) => {
  return (
    <header
      id={useId()}
      className="absolute top-0 right-0 left-0 z-10 flex flex-1 items-center gap-3 border-b border-neutral-200 p-2 *:p-2 dark:border-neutral-800">
      {sidebarTrigger}
    </header>
  )
}

export default AppHeader
