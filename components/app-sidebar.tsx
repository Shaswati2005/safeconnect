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
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-8">
          <SidebarGroupLabel style={{ fontSize: 32 }}>
            <h1>SafeConnect</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard" className="text-xl">
                    <Image
                      src={"/home.svg"}
                      alt="home icon"
                      height={32}
                      width={32}
                      color={"black"}
                    />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/chatbox" className="text-xl">
                    <Image
                      src={"/alerts.svg"}
                      alt="chat icon"
                      height={32}
                      width={32}
                      color={"skin-10"}
                    />
                    AI Mitra
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/alerts" className="text-xl">
                    <Image
                      src={"/alerts2.svg"}
                      alt="alert2 icon"
                      height={32}
                      width={32}
                      color={"skin-10"}
                    />
                    geolocation alerts
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notification" className="text-xl">
                    <Image
                      src={"/notification.svg"}
                      alt="noitification icon"
                      height={32}
                      width={32}
                      color={"skin-10"}
                    />
                    notification
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard" className="text-xl">
                    <Image
                      src={"/setting.svg"}
                      alt="setting icon"
                      height={32}
                      width={32}
                      color={"skin-10"}
                    />
                    settings
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
