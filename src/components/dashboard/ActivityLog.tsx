
import React from "react";
import { Activity, Bot, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for activities
const activities = [
  {
    id: 1,
    agent: "Email Bot",
    action: "Sent follow-up email to john@example.com",
    time: "10 minutes ago",
    icon: <Mail size={14} />,
    iconClass: "bg-blue-500/20 text-blue-400",
  },
  {
    id: 2,
    agent: "GPT Agent",
    action: "Generated content for LinkedIn outreach",
    time: "25 minutes ago",
    icon: <Bot size={14} />,
    iconClass: "bg-purple-500/20 text-purple-400",
  },
  {
    id: 3,
    agent: "Voice Assistant",
    action: "Scheduled call with lead #1028",
    time: "1 hour ago",
    icon: <Phone size={14} />,
    iconClass: "bg-green-500/20 text-green-400",
  },
  {
    id: 4,
    agent: "Lead Qualifier",
    action: "Qualified lead from website form",
    time: "3 hours ago",
    icon: <User size={14} />,
    iconClass: "bg-amber-500/20 text-amber-400",
  },
];

const ActivityLog = () => {
  return (
    <div className="glass-card rounded-xl animate-fade-in h-full">
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-primary" />
          <h3 className="text-lg font-medium">AI Workflow Activity</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${activity.id * 0.1}s` }}>
              <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", activity.iconClass)}>
                {activity.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{activity.agent}</p>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
