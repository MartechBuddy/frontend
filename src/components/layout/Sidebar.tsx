
import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { 
  LayoutDashboard, 
  Boxes, 
  Search, 
  FileText,
  Inbox,
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle,
  Cog,
  BarChart
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { id: projectId } = useParams();

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Boxes size={20} />,
    },
    {
      name: "SEO Tools",
      path: "/seo-tools",
      icon: <Search size={20} />,
      subItems: [
        { name: "Domain Citation Score", path: projectId ? `/projects/${projectId}/seo-tools/domain-citation-score` : "/seo-tools/domain-citation-score" },
        { name: "Site Audit", path: projectId ? `/projects/${projectId}/seo-tools/site-audit` : "/seo-tools/site-audit" },
        { name: "Visual Audit", path: projectId ? `/projects/${projectId}/seo-tools/visual-audit` : "/seo-tools/visual-audit" },
        { name: "Keyword Intelligence", path: projectId ? `/projects/${projectId}/seo-tools/keyword-intelligence` : "/seo-tools/keyword-intelligence" },
        { name: "Backlink Insights", path: projectId ? `/projects/${projectId}/seo-tools/backlinks` : "/seo-tools/backlinks" },
        { name: "Internal Linking", path: projectId ? `/projects/${projectId}/seo-tools/internal-links` : "/seo-tools/internal-links" },
        { name: "Sitemap Audit", path: projectId ? `/projects/${projectId}/seo-tools/sitemap-audit` : "/seo-tools/sitemap-audit" },
        { name: "Robots.txt", path: projectId ? `/projects/${projectId}/seo-tools/robots-txt` : "/seo-tools/robots-txt" },
        { name: "Local SEO", path: projectId ? `/projects/${projectId}/seo-tools/local-seo` : "/seo-tools/local-seo" }
      ]
    },
    {
      name: "Content Hub",
      path: "/content-hub",
      icon: <FileText size={20} />,
      subItems: [
        { name: "Overview", path: "/content-hub" },
        { name: "Create Content", path: "/content-hub/create" },
        { name: "Content Library", path: "/content-hub/library" },
        { name: "Repurpose", path: "/content-hub/repurpose" },
        { name: "Scheduler", path: "/content-hub/scheduler" },
        { name: "Media Library", path: "/content-hub/media" }
      ]
    },
    {
      name: "Workflows",
      path: "/workflows",
      icon: <Cog size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart size={20} />,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: <Inbox size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
      subItems: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Billing", path: "/settings/billing" },
        { name: "AI Usage", path: "/settings/ai-usage" },
        { name: "Preferences", path: "/settings/preferences" },
        { name: "Team Management", path: "/settings/team" },
        { name: "Integrations", path: "/settings/integrations" }
      ]
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const isPathActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/dashboard' && location.pathname.startsWith(path));
  };

  const isAnySubItemActive = (subItems?: Array<{name: string, path: string}>) => {
    if (!subItems) return false;
    return subItems.some(item => location.pathname === item.path);
  };

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (path: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <div 
      className={cn(
        "h-screen glass-nav border-r border-white/5 transition-all duration-300 ease-in-out relative", 
        collapsed ? "w-[78px]" : "w-[250px] lg:w-[280px]"
      )}
    >
      <div className="py-6 px-3 flex flex-col h-full">
        <div className="flex items-center px-3 justify-between">
          {!collapsed ? (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0caa0ab7-c716-4409-a921-36af0d39b4ff.png" 
                alt="MartechEngine.ai Logo" 
                className="h-10 w-auto"
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <img 
                src="/lovable-uploads/930155f5-bc69-4113-a0f3-3e443cbe200e.png" 
                alt="MartechEngine.ai" 
                className="h-8 w-8"
              />
            </div>
          )}

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSidebar}
            className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-primary/15 transition-all duration-300"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </Button>
        </div>

        {/* AI Status indicator */}
        <div className={cn(
          "mt-4 px-3 py-2",
          collapsed ? "text-center" : ""
        )}>
          <div className={cn(
            "flex items-center rounded-md bg-white/5 px-3 py-2",
            collapsed ? "justify-center" : ""
          )}>
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            {!collapsed && <span className="text-xs text-muted-foreground">AI Active</span>}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-6 flex flex-col gap-1 overflow-y-auto flex-grow scrollbar-hide">
          {navigationItems.map((item) => (
            <div key={item.path} className="flex flex-col">
              {/* Main menu item */}
              {item.subItems ? (
                // Items with subitems
                <button
                  onClick={() => toggleSection(item.path)}
                  className={cn(
                    "flex items-center py-2.5 px-3 rounded-md transition duration-200",
                    "hover:bg-white/5",
                    (isPathActive(item.path) || isAnySubItemActive(item.subItems)) ? 
                      "bg-white/5 border-l-2 border-primary" : 
                      "border-l-2 border-transparent",
                    collapsed && "justify-center"
                  )}
                >
                  <div className={cn(
                    "transition", 
                    (isPathActive(item.path) || isAnySubItemActive(item.subItems)) ? 
                      "text-primary" : 
                      "text-muted-foreground"
                  )}>
                    {item.icon}
                  </div>
                  {!collapsed && (
                    <span className={cn(
                      "ml-3 tracking-tight whitespace-nowrap transition flex-1 text-left", 
                      (isPathActive(item.path) || isAnySubItemActive(item.subItems)) ? 
                        "font-medium text-foreground" : 
                        "text-muted-foreground"
                    )}>
                      {item.name}
                    </span>
                  )}
                  {!collapsed && item.subItems && (
                    <ChevronRight 
                      size={16} 
                      className={cn(
                        "transition-transform duration-200",
                        expandedSections[item.path] ? "rotate-90" : ""
                      )} 
                    />
                  )}
                </button>
              ) : (
                // Items without subitems
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) => 
                    cn(
                      "flex items-center py-2.5 px-3 rounded-md transition duration-200",
                      "hover:bg-white/5",
                      isActive ? "bg-white/5 border-l-2 border-primary" : "border-l-2 border-transparent",
                      collapsed && "justify-center"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={cn("transition", isActive ? "text-primary" : "text-muted-foreground")}>
                        {item.icon}
                      </div>
                      {!collapsed && (
                        <span className={cn(
                          "ml-3 tracking-tight whitespace-nowrap transition", 
                          isActive ? "font-medium text-foreground" : "text-muted-foreground"
                        )}>
                          {item.name}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              )}
              
              {/* Subitems if not collapsed and section is expanded */}
              {!collapsed && item.subItems && expandedSections[item.path] && (
                <div className="ml-8 mt-1 mb-1 border-l border-white/10 pl-3 space-y-1">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) => 
                        cn(
                          "flex items-center py-2 px-3 rounded-md text-sm transition duration-200",
                          "hover:bg-white/5",
                          isActive ? "bg-white/5 text-foreground" : "text-muted-foreground"
                        )
                      }
                    >
                      {({ isActive }) => (
                        <span className={cn(
                          "tracking-tight whitespace-nowrap transition",
                          isActive ? "font-medium" : ""
                        )}>
                          {subItem.name}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto">
          {!collapsed ? (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 glass-button"
            >
              <HelpCircle size={16} />
              Help and Support
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="icon" 
              className="w-10 h-10 mx-auto glass-button"
              aria-label="Help and Support"
            >
              <HelpCircle size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
