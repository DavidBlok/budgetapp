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
        <div className="h-16 bg-blue-200 dark:bg-blue-800 border-b flex items-center justify-center px-4 gap-2 font-semibold">
          <div className="truncate">BUDGET APP</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent className="px-2 py-4">
          <SidebarMenu className="font-semibold">
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12">
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>DASHBOARD</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12">
                <Link href="/customers">
                  <Building2 />
                  <span>CUSTOMERS</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12">
                <Link href="/">
                  <Package />
                  <span>ARTICLES</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12">
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
