import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Building2, Inbox, LayoutDashboard, Package } from "lucide-react";

import Link from "next/link";
import { SidebarFooterUser } from "@/components/layout/SidebarFooterUser";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-0">
        <div className="h-16 bg-gray-100 dark:bg-gray-900 border-b flex items-center px-4 gap-2 font-semibold">
          <Building2 className="w-5 h-5" />
          <div className="truncate">BLOK CONSULTING</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent className="px-2">
          <SidebarMenu className="font-semibold">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>DASHBOARD</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/customers">
                  <Building2 />
                  <span>CUSTOMERS</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Package />
                  <span>ARTICLES</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Inbox />
                  <span>INVOICES</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <div className="h-16 bg-gray-100 dark:bg-gray-900 border-t flex items-center px-4 gap-2">
          <SidebarFooterUser />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
