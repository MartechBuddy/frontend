import React from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Workflow, 
  Bot, 
  Calendar, 
  Settings, 
  Boxes,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Campaigns",
      path: "/campaigns",
      icon: <Boxes size={20} />,
    },
    {
      name: "Workflows",
      path: "/workflows",
      icon: <Workflow size={20} />,
    },
    {
      name: "AI Agents",
      path: "/agents",
      icon: <Bot size={20} />,
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
        <div className={cn("flex items-center", collapsed ? "justify-center" : "px-3")}>
          {!collapsed ? (
            <div className="animate-fade-in flex items-center justify-center w-full">
              <img 
                src="/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png" 
                alt="MarTech Buddy Logo" 
                className="h-14 w-auto logo-glow"
              />
            </div>
          ) : (
            <div className="flex justify-center w-full animate-fade-in">
              <img 
                src="/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png" 
                alt="MarTech Buddy Logo" 
                className="h-10 w-auto logo-glow"
              />
            </div>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar}
          className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-primary/15 transition-all duration-300"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </Button>

        <div className="mt-12 flex flex-col gap-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
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
          {!collapsed && (
            <div className="glass-card p-4 rounded-xl animate-fade-in">
              <p className="text-sm font-medium mb-2">Pro Plan</p>
              <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                <div className="bg-primary h-2 rounded-full w-3/4" />
              </div>
              <p className="text-xs text-muted-foreground">
                75% of monthly usage
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
