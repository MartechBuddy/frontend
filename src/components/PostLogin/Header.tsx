
import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="border-b border-white/10 py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white/5 border border-white/10 rounded-md py-1.5 px-10 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="h-8 w-px bg-white/10"></div>
          
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">Administrator</span>
            </div>
            <div className="relative">
              <button 
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-white/10"
                onClick={handleLogout}
              >
                <User className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
