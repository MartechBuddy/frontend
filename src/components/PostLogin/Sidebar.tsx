
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Folders, 
  Library, 
  Gauge, 
  Globe, 
  MapPin, 
  Share, 
  Pencil, 
  BarChart, 
  MessageSquare, 
  Settings,
  ChevronDown,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  end?: boolean;
};

const SidebarItem = ({ to, icon, children, end }: SidebarItemProps) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5 transition-colors",
        isActive ? "bg-white/10 text-primary" : "text-muted-foreground"
      )
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);

type SidebarGroupProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const SidebarGroup = ({ title, children, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-2">
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-muted-foreground hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      
      {isOpen && <div className="mt-1 ml-2 border-l border-white/10 pl-2">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  const [isProjectSwitcherOpen, setIsProjectSwitcherOpen] = useState(false);
  
  return (
    <aside className="w-64 border-r border-white/10 h-full overflow-y-auto py-4 bg-background/80 backdrop-blur-sm">
      <div className="px-3 mb-6">
        <button
          className="glass-card w-full border border-white/10 rounded-md px-3 py-2 flex items-center justify-between"
          onClick={() => setIsProjectSwitcherOpen(!isProjectSwitcherOpen)}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Main Website</span>
          </div>
          <ChevronDown size={16} className="text-muted-foreground" />
        </button>
        
        {isProjectSwitcherOpen && (
          <div className="mt-2 glass-card border border-white/10 rounded-md p-2 text-sm">
            <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-md">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Main Website</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-md">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Blog</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-md">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span>Landing Page</span>
            </div>
            <div className="border-t border-white/10 mt-2 pt-2">
              <button className="w-full text-left p-2 hover:bg-white/5 rounded-md text-primary">
                + Create New Project
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="px-3 space-y-1 mb-6">
        <SidebarItem to="/dashboard" icon={<LayoutDashboard size={18} />} end>
          Dashboard
        </SidebarItem>
        <SidebarItem to="/dashboard/projects" icon={<Folders size={18} />}>
          Projects
        </SidebarItem>
        <SidebarItem to="/dashboard/content-hub" icon={<Library size={18} />}>
          Content Hub
        </SidebarItem>
      </div>
      
      <div className="px-4 mb-2">
        <p className="text-xs uppercase text-muted-foreground font-medium tracking-wider">Tools</p>
      </div>
      
      <div className="px-3 space-y-1 mb-6">
        <SidebarItem to="/dashboard/ai-readiness" icon={<Gauge size={18} />}>
          AI Readiness
        </SidebarItem>
        <SidebarItem to="/dashboard/site-optimization" icon={<Globe size={18} />}>
          Site Optimization
        </SidebarItem>
        <SidebarItem to="/dashboard/local-seo" icon={<MapPin size={18} />}>
          Local SEO
        </SidebarItem>
        <SidebarItem to="/dashboard/social-media" icon={<Share size={18} />}>
          Social Media
        </SidebarItem>
        <SidebarItem to="/dashboard/content-studio" icon={<Pencil size={18} />}>
          Content Studio
        </SidebarItem>
        <SidebarItem to="/dashboard/insights-reports" icon={<BarChart size={18} />}>
          Insights & Reports
        </SidebarItem>
      </div>
      
      <div className="px-4 mb-2">
        <p className="text-xs uppercase text-muted-foreground font-medium tracking-wider">Communication</p>
      </div>
      
      <div className="px-3 space-y-1">
        <SidebarItem to="/dashboard/inbox" icon={<MessageSquare size={18} />}>
          Inbox
        </SidebarItem>
      </div>
      
      <div className="mt-auto pt-6 px-3">
        <SidebarItem to="/settings" icon={<Settings size={18} />}>
          Settings
        </SidebarItem>
        
        <div className="mt-4 glass-card border border-white/10 rounded-md p-3">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} className="text-green-500" />
            <span className="text-xs">LLM Connected</span>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            Using OpenAI GPT-4
          </div>
          <button className="text-xs text-primary hover:underline">
            Change LLM settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
