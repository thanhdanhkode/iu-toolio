import { Logo } from "@/components/icons/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Book, Home, Lock, Megaphone, Settings } from "lucide-react"
import { useId } from "react"

const NavigationItems = [
  {
    label: "Courses",
    icon: Book,
    href: "#/",
  },
]

export function AppSidebar() {
  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="select-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={{ children: "IU Toolio" }}>
              <Logo />
              <span className="truncate font-medium">IU Toolio</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {NavigationItems.map((item) => (
            <SidebarMenuItem key={useId()}>
              <SidebarMenuButton
                tooltip={{ children: item.label }}
                asChild>
                <a href={item.href}>
                  <item.icon className="size-4" />
                  <span className="truncate">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
