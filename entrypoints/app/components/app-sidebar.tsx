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
    label: "Home",
    icon: Home,
    href: "#/",
  },
  {
    label: "Announcements",
    icon: Megaphone,
    href: "#/announcement",
  },
  {
    label: "Courses",
    icon: Book,
    href: "#/courses",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "#/settings",
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={{ children: "Lock App" }}>
              <Lock />
              <span className="truncate">Lock App</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="size-8 rounded-lg">
                <AvatarImage
                  src="https://heucollege.edu.vn/upload/2025/02/avatar-nam-ngau-anime-8.webp"
                  alt="user.name"
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">IU Toolio Demo</span>
                <span className="truncate text-xs">iu.toolio@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
