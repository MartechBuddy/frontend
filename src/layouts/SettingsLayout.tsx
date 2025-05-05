
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { 
  UserRound, 
  Settings, 
  Plug,
  Bot, 
  PanelLeft, 
  LayoutGrid,
  BookOpenText,
  Building,
  ShieldAlert
} from "lucide-react";

const SettingsLayout = () => {
  const settingsLinks = [
    { name: "Profile", path: "/settings/profile", icon: <UserRound size={16} /> },
    { name: "Integrations", path: "/settings/integrations", icon: <Plug size={16} /> },
    { name: "LLM Configuration", path: "/settings/llm", icon: <Bot size={16} /> },
    { name: "Preferences", path: "/settings/preferences", icon: <Settings size={16} /> },
    { name: "Licenses", path: "/settings/licenses", icon: <BookOpenText size={16} /> },
    { name: "Notes", path: "/settings/notes", icon: <PanelLeft size={16} /> },
    { name: "Enterprise Contact", path: "/settings/enterprise-contact", icon: <Building size={16} /> },
    { name: "GDPR Management", path: "/settings/gdpr", icon: <ShieldAlert size={16} /> },
  ];

  return (
    <div className="flex flex-col space-y-8 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-1">
          <nav className="sticky top-20">
            <ul className="space-y-1">
              {settingsLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-white/5 ${
                        isActive ? "bg-white/10 text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
