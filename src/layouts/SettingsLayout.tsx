
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Settings, UserRound, CreditCard, KeyRound, LayoutGrid, Shield, Users } from "lucide-react";
import { cn } from "../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsLayout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const settingsLinks = [
    { name: "Profile", path: "/settings/profile", icon: UserRound },
    { name: "Billing", path: "/settings/billing", icon: CreditCard },
    { name: "Integrations", path: "/settings/integrations", icon: LayoutGrid },
    { name: "LLM Configuration", path: "/settings/llm", icon: KeyRound },
    { name: "Preferences", path: "/settings/preferences", icon: Settings },
    { name: "Permissions & Roles", path: "/settings/roles-permissions", icon: Shield },
    { name: "User Management", path: "/settings/user-management", icon: Users },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/5">
          <CardTitle className="text-xl">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={currentPath} className="w-full">
            <TabsList className="grid grid-cols-7 glass-card mx-4 mt-4">
              {settingsLinks.map((link) => (
                <TabsTrigger 
                  key={link.path} 
                  value={link.path}
                  asChild
                  className="flex items-center gap-2"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 w-full justify-center",
                        isActive
                          ? "text-primary"
                          : "text-gray-700 dark:text-gray-300"
                      )
                    }
                  >
                    <link.icon size={16} />
                    <span className="hidden md:inline">{link.name}</span>
                  </NavLink>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="p-6">
              <Outlet />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsLayout;
