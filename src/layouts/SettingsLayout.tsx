
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Settings, UserRound, CreditCard, KeyRound, LayoutGrid, Bell, Shield, Users } from "lucide-react";
import { cn } from "../lib/utils";

const SettingsLayout: React.FC = () => {
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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-fit">
            <nav className="space-y-1">
              {settingsLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )
                  }
                >
                  <link.icon size={18} />
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
