
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Boxes, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  FileStack,
  Globe,
  MapPin,
  MessageSquare,
  PenTool,
  BarChart,
  HelpCircle,
  Search,
  Inbox
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
      name: "AI Readiness",
      path: "/ai-readiness",
      icon: <FileStack size={20} />,
    },
    {
      name: "Content Hub",
      path: "/content-hub",
      icon: <FileText size={20} />,
    },
    {
      name: "SEO Tools",
      path: "/seo-tools",
      icon: <Search size={20} />,
    },
    {
      name: "Social Media",
      path: "/social-media",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: <Inbox size={20} />,
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
                src="/lovable-uploads/0caa0ab7-c716-4409-a921-36af0d39b4ff.png" 
                alt="MartechEngine.ai Logo" 
                className="h-10 w-auto logo-glow"
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <img 
                src="/lovable-uploads/0caa0ab7-c716-4409-a921-36af0d39b4ff.png" 
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
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </Button>
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
        
        {/* Navigation */}
        <div className="mt-6 flex flex-col gap-1 overflow-y-auto flex-grow scrollbar-hide">
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
              aria-label="Help and Support"
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
