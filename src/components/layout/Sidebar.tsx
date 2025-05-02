
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Search,
  Boxes, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  User,
  FileStack,
  Globe,
  Map,
  MessageSquare,
  PenTool,
  BarChartHorizontal,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Boxes size={20} />,
    },
    {
      name: "Content Hub",
      path: "/content-hub",
      icon: <FileText size={20} />,
    },
    {
      name: "AI Readiness",
      path: "/ai-readiness",
      icon: <FileStack size={20} />,
    },
    {
      name: "Site Optimization",
      path: "/site-optimization",
      icon: <Globe size={20} />,
    },
    {
      name: "Local SEO",
      path: "/local-seo",
      icon: <Map size={20} />,
    },
    {
      name: "Social Media",
      path: "/social-media",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Content Studio",
      path: "/content-studio",
      icon: <PenTool size={20} />,
    },
    {
      name: "Insights & Reports",
      path: "/insights-reports",
      icon: <BarChartHorizontal size={20} />,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      className={cn(
        "h-screen glass-nav border-r border-white/5 transition-all duration-300 ease-in-out relative", 
        collapsed ? "w-[78px]" : "w-[250px] lg:w-[280px]"
      )}
    >
      <div className="py-6 px-3 flex flex-col h-full">
        <div className="flex items-center px-3 justify-between">
          {!collapsed ? (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png" 
                alt="MartechEngine.ai Logo" 
                className="h-10 w-auto logo-glow"
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <img 
                src="/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png" 
                alt="MartechEngine.ai" 
                className="h-10 w-auto logo-glow"
              />
            </div>
          )}

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSidebar}
            className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-primary/15 transition-all duration-300"
          >
            {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </Button>
        </div>

        {/* User profile section at the top */}
        <div className="mt-6 px-3">
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "justify-between"
          )}>
            {!collapsed ? (
              <>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 glass-card mr-2">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <div className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 p-0" size="icon">
                        <Bell size={16} />
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse-subtle" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-white/10" />
                      <DropdownMenuItem className="glass-button rounded-lg mb-1 mt-1 cursor-pointer">
                        <div className="flex flex-col space-y-1">
                          <span className="text-sm">Campaign completed</span>
                          <span className="text-xs text-muted-foreground">10 minutes ago</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ) : (
              <Avatar className="h-8 w-8 glass-card">
                <AvatarImage src="" />
                <AvatarFallback className="text-primary-foreground">JD</AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>

        {/* LLM Status indicator */}
        <div className={cn(
          "mt-4 px-3 py-2",
          collapsed ? "text-center" : ""
        )}>
          <div className={cn(
            "flex items-center rounded-md bg-white/5 px-3 py-2",
            collapsed ? "justify-center" : ""
          )}>
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            {!collapsed && <span className="text-xs text-muted-foreground">LLM Active</span>}
          </div>
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="mt-4 px-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
              <input
                placeholder="Search..."
                className="pl-10 glass-button py-2 px-4 rounded-md w-full bg-transparent border border-white/10 text-sm"
              />
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <div className="mt-6 flex flex-col gap-1 overflow-y-auto flex-grow">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) => 
                cn(
                  "flex items-center py-2.5 px-3 rounded-md transition duration-200",
                  "hover:bg-white/5",
                  isActive ? "bg-white/5 border-l-2 border-primary" : "border-l-2 border-transparent",
                  collapsed && "justify-center"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className={cn("transition", isActive ? "text-primary" : "text-muted-foreground")}>
                    {item.icon}
                  </div>
                  {!collapsed && (
                    <span className={cn(
                      "ml-3 tracking-tight whitespace-nowrap transition", 
                      isActive ? "font-medium text-foreground" : "text-muted-foreground"
                    )}>
                      {item.name}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="mt-auto">
          {!collapsed ? (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 glass-button"
            >
              <HelpCircle size={16} />
              Help and Support
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="icon" 
              className="w-10 h-10 mx-auto glass-button"
            >
              <HelpCircle size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
