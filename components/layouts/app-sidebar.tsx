import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, UserGroup } from "lucide-react";
import NavMain from "./nav-main";
import { ROUTES } from "@/constants/routes";

export function AppSidebar() {
  const data = {
    navMain: [
      {
        title: "Pelkat",
        url: "#",
        icon: UserGroup,
        isActive: true,
        items: [
          { title: "Persekutuan Teruna", url: ROUTES.DASHBOARD_PELKAT_PT },
          { title: "Gerakan Pemuda", url: "#" },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutDashboard />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <NavMain items={data.navMain} />

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
