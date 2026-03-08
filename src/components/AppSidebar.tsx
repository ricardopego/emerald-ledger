import { LayoutDashboard, ArrowLeftRight, FileText, Settings, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Transferências", url: "/transfers", icon: ArrowLeftRight },
  { title: "Extrato", url: "/statements", icon: FileText },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="pt-6">
        <div className="px-4 mb-8">
          {!collapsed ? (
            <h1 className="text-lg font-black uppercase tracking-widest text-sidebar-primary">
              Mini-Ledger
            </h1>
          ) : (
            <span className="text-lg font-black text-sidebar-primary">ML</span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-widest text-sidebar-foreground/50">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-colors">
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="font-medium text-sm">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex items-center gap-3 text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors w-full">
                <LogOut className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="text-sm">Sair</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
