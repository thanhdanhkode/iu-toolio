import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { ReactNode, useId } from "react"

const AppHeader = ({ sidebarTrigger }: { sidebarTrigger: ReactNode }) => {
  const id = useId()
  return (
    <header
      id={"app-header" + id}
      className="absolute top-0 right-0 left-0 z-10 flex flex-1 items-center gap-3 border-b p-2 shadow-sm backdrop-blur-md *:p-2 dark:border-neutral-800 dark:shadow-black/10">
      {sidebarTrigger}
      <div className="flex-1"></div>
      <div className="flex items-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="relative">
          <Bell />
          <div className="bg-destructive absolute top-0 right-0 aspect-square size-2 -translate-x-2.5 translate-y-2 rounded-full"></div>
        </Button>
      </div>
    </header>
  )
}

export default AppHeader
