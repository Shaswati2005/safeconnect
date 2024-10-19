import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Profile",
    url: "/profile",
    icon: "/profile.svg",
  },
  {
    title: "Alert",
    url: "/alerts",
    icon: "/alerts.svg",
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: "/notification.svg",
  },
  {
    title: "AI Guide",
    url: "/aiguide",
    icon: "/alerts2.svg",
  },
  {
    title: "Setting",
    url: "/settings",
    icon: "/home.svg",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar style={{ accentColor: "blue" }}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel style={{ fontSize: 24 }}>
            SafeConnect
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Image
                      src={"/home.svg"}
                      alt="home icon"
                      height={24}
                      width={24}
                      color={"black"}
                    />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
