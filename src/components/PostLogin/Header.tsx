
import React from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  Sun, 
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { logout } = useAuth();
  
  return (
    <header className="h-16 border-b border-white/10 bg-background/80 backdrop-blur-md fixed top-0 right-0 left-64 z-20">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 w-full bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/settings/profile" className="flex items-center w-full">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="flex items-center w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
