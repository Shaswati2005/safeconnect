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
    <Sidebar className="bg-violet-10">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-skin-10"style={{ fontSize: 32 }}>
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
                  <Link href="/chatbox">
                    <Image
                      src={"/alerts.svg"}
                      alt="chat icon"
                      height={32}
                      width={32}
                      color={"skin-10"}
                    />
                    Intelligent chat interface
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>


              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/alerts">
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
                  <Link href="/notification">
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
                  <Link href="/dashboard">
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
