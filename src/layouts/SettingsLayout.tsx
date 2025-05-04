
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const SettingsLayout = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1">
          <nav className="space-y-1 sticky top-20">
            <NavLink
              to="/settings/profile"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/settings/integrations"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Integrations
            </NavLink>
            <NavLink
              to="/settings/llm"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              LLM Configuration
            </NavLink>
            <NavLink
              to="/settings/preferences"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Preferences
            </NavLink>
            <NavLink
              to="/settings/projects"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/settings/notes"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/settings/licenses"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Licenses
            </NavLink>
            <NavLink
              to="/settings/enterprise-contact"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              Enterprise Contact
            </NavLink>
            <NavLink
              to="/settings/gdpr"
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                )
              }
            >
              GDPR Management
            </NavLink>
          </nav>
        </div>
        <div className="col-span-4 glass-card border border-white/10 p-6 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
