
import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { 
  LayoutDashboard, 
  Boxes, 
  Search, 
  FileText,
  BarChart,
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle,
  ChevronDown
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
      name: "Reports",
      path: "/reports",
      icon: <BarChart size={20} />,
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
        "h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out relative", 
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="py-6 px-4 flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed ? (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0caa0ab7-c716-4409-a921-36af0d39b4ff.png" 
                alt="MartechEngine.ai Logo" 
                className="h-8 w-auto"
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
            className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </Button>
        </div>

        {/* AI Status indicator */}
        {!collapsed && (
          <div className="mb-6">
            <div className="flex items-center rounded-lg bg-green-50 px-3 py-2 border border-green-200">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-green-700 font-medium">AI Active</span>
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <div className="flex flex-col gap-1 overflow-y-auto flex-grow">
          {navigationItems.map((item) => (
            <div key={item.path} className="flex flex-col">
              {/* Main menu item */}
              {item.subItems ? (
                // Items with subitems
                <button
                  onClick={() => toggleSection(item.path)}
                  className={cn(
                    "flex items-center py-3 px-3 rounded-lg transition duration-200 text-left w-full",
                    "hover:bg-gray-100",
                    (isPathActive(item.path) || isAnySubItemActive(item.subItems)) ? 
                      "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : 
                      "text-gray-700",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <div className={cn(
                    "transition flex-shrink-0", 
                    (isPathActive(item.path) || isAnySubItemActive(item.subItems)) ? 
                      "text-blue-600" : 
                      "text-gray-500"
                  )}>
                    {item.icon}
                  </div>
                  {!collapsed && (
                    <>
                      <span className="ml-3 font-medium flex-1">
                        {item.name}
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "transition-transform duration-200 text-gray-400",
                          expandedSections[item.path] ? "rotate-180" : ""
                        )} 
                      />
                    </>
                  )}
                </button>
              ) : (
                // Items without subitems
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) => 
                    cn(
                      "flex items-center py-3 px-3 rounded-lg transition duration-200",
                      "hover:bg-gray-100",
                      isActive ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700",
                      collapsed && "justify-center px-2"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={cn(
                        "transition flex-shrink-0", 
                        isActive ? "text-blue-600" : "text-gray-500"
                      )}>
                        {item.icon}
                      </div>
                      {!collapsed && (
                        <span className="ml-3 font-medium">
                          {item.name}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              )}
              
              {/* Subitems if not collapsed and section is expanded */}
              {!collapsed && item.subItems && expandedSections[item.path] && (
                <div className="ml-8 mt-1 mb-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) => 
                        cn(
                          "flex items-center py-2 px-3 rounded-md text-sm transition duration-200",
                          "hover:bg-gray-100",
                          isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600"
                        )
                      }
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          {!collapsed ? (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <HelpCircle size={16} />
              Help and Support
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="icon" 
              className="w-10 h-10 mx-auto border-gray-200 text-gray-700 hover:bg-gray-50"
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
