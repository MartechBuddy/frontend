
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  LayoutGrid, 
  LineChart, 
  Settings, 
  FileText, 
  Target, 
  Globe, 
  MapPin, 
  MessageSquare, 
  PenTool, 
  Inbox,
  ChevronRight,
  BotIcon
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Projects", path: "/dashboard/projects", icon: LayoutGrid },
    { name: "Content Hub", path: "/dashboard/content-hub", icon: FileText },
    { name: "AI Readiness", path: "/dashboard/ai-readiness", icon: Target },
    { name: "Site Optimization", path: "/dashboard/site-optimization", icon: Globe },
    { name: "Local SEO", path: "/dashboard/local-seo", icon: MapPin },
    { name: "Social Media", path: "/dashboard/social-media", icon: MessageSquare },
    { name: "Content Studio", path: "/dashboard/content-studio", icon: PenTool },
    { name: "Insights & Reports", path: "/dashboard/insights-reports", icon: LineChart },
    { name: "Inbox", path: "/dashboard/inbox", icon: Inbox },
    { name: "Settings", path: "/settings/profile", icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-background/80 border-r border-white/10 pt-6 fixed left-0 top-0 bottom-0 z-10 overflow-y-auto">
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            ME
          </div>
          <div className="text-lg font-bold">MartechEngine.ai</div>
        </div>
      </div>

      <div className="px-3 mb-6">
        <div className="bg-white/5 rounded-md p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BotIcon size={18} className="text-green-400" />
            <span className="text-sm">LLM Connected</span>
          </div>
          <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">Active</div>
        </div>
      </div>

      <nav className="space-y-1 px-3">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center justify-between py-2 px-3 rounded-md transition-colors
              ${isActive ? 'bg-primary text-white font-medium' : 'hover:bg-white/5'}
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} />
              <span>{item.name}</span>
            </div>
            <ChevronRight size={16} className="opacity-60" />
          </NavLink>
        ))}
      </nav>

      <div className="px-3 mt-6 pt-6 border-t border-white/10">
        <div className="bg-white/5 rounded-md p-3">
          <div className="text-sm font-medium mb-1">Project: Company Website</div>
          <div className="text-xs text-muted-foreground">example.com</div>
          <button className="text-xs text-primary mt-2 flex items-center">
            Switch Project
            <ChevronRight size={12} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
