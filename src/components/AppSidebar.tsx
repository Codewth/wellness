import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Heart,
  Users,
  FileText,
  BookOpen,
  BarChart3,
  ClipboardCheck,
  Settings,
  Home,
  Brain,
  MessageCircle
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  userType: 'user' | 'counsellor';
}

export function AppSidebar({ userType }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-smooth";

  const userItems = [
    { title: "Dashboard", url: "/user-dashboard", icon: Home },
    { title: "Peer Support", url: "/user-dashboard/peer-support", icon: Users },
    { title: "Screening Tests", url: "/user-dashboard/screening", icon: ClipboardCheck },
    { title: "Resource Hub", url: "/user-dashboard/resources", icon: BookOpen },
    { title: "My Journey", url: "/user-dashboard/journey", icon: Heart },
  ];

  const counsellorItems = [
    { title: "Dashboard", url: "/counsellor-dashboard", icon: Home },
    { title: "Student Statistics", url: "/counsellor-dashboard/statistics", icon: BarChart3 },
    { title: "Screening Results", url: "/counsellor-dashboard/results", icon: FileText },
    { title: "Analytics", url: "/counsellor-dashboard/analytics", icon: BarChart3 },
    { title: "Reports", url: "/counsellor-dashboard/reports", icon: ClipboardCheck },
  ];

  const items = userType === 'user' ? userItems : counsellorItems;
  const isExpanded = items.some((item) => isActive(item.url));

  return (
    <Sidebar
      className="border-r border-border/50"
      collapsible="icon"
    >
      <SidebarContent className="bg-card/50 backdrop-blur-sm">
        {/* Logo Section */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
              <Brain className="h-4 w-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-foreground">MindCare</h2>
                <p className="text-xs text-muted-foreground capitalize">{userType} Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {!collapsed && (userType === 'user' ? 'User Menu' : 'Counsellor Menu')}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings at bottom */}
        <div className="p-2 border-t border-border/50">
          <SidebarMenuButton asChild className="w-full">
            <NavLink 
              to={`/${userType}-dashboard/settings`}
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth ${getNavCls({ isActive })}`
              }
            >
              <Settings className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>Settings</span>}
            </NavLink>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}