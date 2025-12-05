import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "next-themes"
import { Outlet } from "react-router"
import AppHeader from "../components/app-header"
import { AppSidebar } from "../components/app-sidebar"

const RootLayout = () => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <main className="relative flex flex-1 flex-col items-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <AppHeader sidebarTrigger={<SidebarTrigger />} />
            <div className="m-auto mt-20 flex h-full w-3/4 flex-col">
              <Outlet />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export { RootLayout }
