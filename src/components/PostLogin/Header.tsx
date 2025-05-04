
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings, LogOut, User, CheckCircle } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const closeProfile = () => setIsProfileOpen(false);
  
  return (
    <header className="border-b border-white/10 bg-background/80 backdrop-blur-md h-16">
      <div className="container h-full flex items-center justify-between px-4">
        <div className="flex items-center flex-1">
          <div className="relative w-64 max-w-full">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search content, projects..."
              className="pl-9 glass-button border-white/10"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded">
            <CheckCircle size={12} />
            <span>AI active</span>
          </div>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="p-1"
              onClick={toggleProfile}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 glass-card border border-white/10 rounded-md shadow-md bg-background/80 backdrop-blur-md z-50">
                <div className="p-3 border-b border-white/10">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
                
                <div className="p-2">
                  <Link 
                    to="/settings/profile" 
                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                    onClick={closeProfile}
                  >
                    <User size={16} />
                    <span>View Profile</span>
                  </Link>
                  
                  <Link 
                    to="/settings" 
                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                    onClick={closeProfile}
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  
                  <button
                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors text-red-400"
                    onClick={() => {
                      logout();
                      closeProfile();
                    }}
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
