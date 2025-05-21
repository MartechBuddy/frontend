
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { LayoutDashboard, Settings, ChevronLeft, ChevronRight, Bell, Search, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div 
        className={cn(
          "h-screen glass-nav border-r border-white/5 transition-all duration-300 ease-in-out relative", 
          sidebarCollapsed ? "w-[78px]" : "w-[250px] lg:w-[280px]"
        )}
      >
        <div className="py-6 px-3 flex flex-col h-full">
          <div className="flex items-center px-3 justify-between">
            {!sidebarCollapsed ? (
              <div className="flex items-center">
                <span className="text-xl font-bold">MartechEngine</span>
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <span className="font-bold">ME</span>
              </div>
            )}

            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleSidebar}
              className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-primary/15 transition-all duration-300"
              aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
            </Button>
          </div>
          
          {/* Navigation */}
          <div className="mt-6 flex flex-col gap-1 overflow-y-auto flex-grow scrollbar-hide">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-2.5 px-3 rounded-md transition duration-200",
                  "hover:bg-white/5",
                  "border-l-2 border-transparent",
                  sidebarCollapsed && "justify-center"
                )}
              >
                <div className="text-muted-foreground">{item.icon}</div>
                {!sidebarCollapsed && (
                  <span className="ml-3 tracking-tight whitespace-nowrap text-muted-foreground">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="glass-nav border-b border-white/5 py-3 px-6 md:px-8 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-[400px] animate-fade-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
              <Input
                placeholder="Search content..."
                className="pl-10 glass-button py-4 border-0 focus-visible:ring-primary/40 focus-visible:ring-offset-0"
                aria-label="Search content"
              />
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-3 animate-fade-in">
              <ThemeToggle />

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative" size="icon" aria-label="Notifications">
                    <Bell size={18} />
                    <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse-subtle" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <div className="text-sm text-center py-2">No new notifications</div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative p-0" size="icon" aria-label="User profile">
                    <Avatar className="h-8 w-8 glass-card">
                      <AvatarFallback className="text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
                  <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="glass-button rounded-lg mt-1 mb-1 cursor-pointer">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="glass-button rounded-lg mb-1 cursor-pointer">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="glass-button rounded-lg cursor-pointer">
                    <LogOut size={16} className="mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
