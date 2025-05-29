
import React from "react";
import { Bell, Search, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const { logout } = useAuth();

  return (
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
          {/* AI Calls Remaining Indicator */}
          <div className="hidden md:flex items-center mr-2 px-3 py-1 bg-white/5 rounded-md">
            <span className="text-xs font-medium">AI Calls: <span className="text-primary">4</span>/5</span>
          </div>

          {/* Theme toggle */}
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
              <DropdownMenuItem className="glass-button rounded-lg mb-1 mt-1 cursor-pointer">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm">Campaign completed</span>
                  <span className="text-xs text-muted-foreground">10 minutes ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg cursor-pointer">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm">New agent available</span>
                  <span className="text-xs text-muted-foreground">30 minutes ago</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative p-0" size="icon" aria-label="User profile">
                <Avatar className="h-8 w-8 glass-card">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="text-primary-foreground">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="glass-button rounded-lg mt-1 mb-1 cursor-pointer">
                <Link to="/settings/profile" className="w-full flex items-center">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg mb-1 cursor-pointer">
                <Link to="/settings" className="w-full flex items-center">
                  <Settings size={16} className="mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg cursor-pointer" onClick={logout}>
                <LogOut size={16} className="mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
