
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, User, Settings, CreditCard, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import ProjectSelector from "@/components/layout/ProjectSelector";
import GlobalTokenBar from "@/components/layout/GlobalTokenBar";

const AppHeader: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [notificationCount] = useState(2);

  const handleProjectSelect = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleCreateProject = () => {
    navigate('/projects/create');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Project Selector and Search */}
        <div className="flex items-center space-x-6">
          <ProjectSelector 
            onProjectSelect={handleProjectSelect}
            onCreateProject={handleCreateProject}
          />
          
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search across project..."
              className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              aria-label="Search content"
            />
          </div>
        </div>

        {/* Right side - Token bar, notifications, user menu */}
        <div className="flex items-center space-x-4">
          <GlobalTokenBar />
          
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                <Bell size={18} className="text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-gray-200 w-80 shadow-lg">
              <DropdownMenuLabel className="text-gray-900">Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3 hover:bg-gray-50">
                <span className="font-medium text-gray-900">Domain Citation Score Complete</span>
                <span className="text-xs text-gray-600">Your website scored 67/100. View detailed report.</span>
                <span className="text-xs text-gray-500">2 minutes ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3 hover:bg-gray-50">
                <span className="font-medium text-gray-900">New AI fix suggestions</span>
                <span className="text-xs text-gray-600">5 optimization opportunities found for your homepage.</span>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown size={14} className="text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-gray-200 w-48 shadow-lg">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-gray-900">{user?.name || 'User'}</span>
                  <span className="text-xs text-gray-600 font-normal">{user?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/settings/profile')} className="hover:bg-gray-50">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings')} className="hover:bg-gray-50">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings/billing')} className="hover:bg-gray-50">
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="hover:bg-gray-50 text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
