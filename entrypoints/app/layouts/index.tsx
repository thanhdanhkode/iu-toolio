import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "next-themes"
import { Outlet } from "react-router"
import { AppSidebar } from "../components/app-sidebar"
import AppHeader from "../components/header"

const RootLayout = () => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="relative flex flex-1 flex-col items-center overflow-hidden rounded-lg dark:bg-neutral-950 dark:text-white">
            <AppHeader sidebarTrigger={<SidebarTrigger />} />
            <div className="scrollbar-hidden absolute top-0 right-0 bottom-0 left-0 flex flex-1 flex-col overflow-x-hidden">
              <div className="m-auto mt-20 flex h-full w-3/4 flex-col">
                <Outlet />
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export { RootLayout }
