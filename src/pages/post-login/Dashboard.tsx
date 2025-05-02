
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Bot, Calendar, ChevronRight, ExternalLink, LayoutDashboard, Plus, Target, Workflow, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data for charts
const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 650 },
  { name: "Jun", value: 800 },
  { name: "Jul", value: 950 },
];

// Mock mini chart data for stat cards
const miniChartData = Array(12).fill(0).map(() => ({ 
  value: Math.floor(Math.random() * 100) + 20 
}));

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ElementType;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon: Icon }) => {
  return (
    <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-2xl font-semibold tracking-tight">{value}</h3>
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {Icon && (
          <div className="p-2 rounded-full bg-primary/10">
            <Icon size={18} className="text-primary" />
          </div>
        )}
      </div>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back, John</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Site Health"
          value="82%"
          description="Up 5% from last week"
          icon={LayoutDashboard}
        />
        <StatsCard
          title="AI Readiness"
          value="75/100"
          description="10 issues to fix"
          icon={Bot}
        />
        <StatsCard
          title="Traffic Estimate"
          value="1,245"
          description="visits/month"
          icon={Target}
        />
        <StatsCard
          title="Domain Authority"
          value="45"
          description="Up 3 points this month"
          icon={Zap}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Website Traffic</h3>
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1 glass-button"
              >
                View Details <ChevronRight size={14} />
              </Button>
            </div>
            
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar 
                    dataKey="value" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        <div className="space-y-5">
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">AI Readiness</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 p-0"
                asChild
              >
                <a href="/ai-readiness">View</a>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>SEO</span>
                  <span className="font-medium">70/100</span>
                </div>
                <Progress className="h-2" value={70} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Content</span>
                  <span className="font-medium">85/100</span>
                </div>
                <Progress className="h-2" value={85} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Technical</span>
                  <span className="font-medium">60/100</span>
                </div>
                <Progress className="h-2" value={60} />
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <h3 className="text-lg font-medium mb-4">Recent Images</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-white/10 rounded-md"></div>
              <div className="aspect-square bg-white/10 rounded-md"></div>
              <div className="aspect-square bg-white/10 rounded-md"></div>
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-3 text-xs" asChild>
              <a href="/projects/media">View All Images</a>
            </Button>
          </Card>
          
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium">Upcoming Tasks</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1 p-0"
              >
                View Calendar <Calendar size={14} />
              </Button>
            </div>
            
            <div className="space-y-2">
              <div className="p-3 glass-button rounded-lg">
                <p className="text-sm font-medium">Content Review</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
              </div>
              
              <div className="p-3 glass-button rounded-lg">
                <p className="text-sm font-medium">SEO Check</p>
                <p className="text-xs text-muted-foreground">Friday, 2:30 PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Card className="glass-card rounded-xl border-white/5 animate-fade-in overflow-hidden">
        <div className="p-5 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-primary" />
            <h3 className="text-lg font-medium">Project List</h3>
          </div>
          <Button
            variant="default"
            size="sm"
            className="text-xs flex items-center gap-1"
          >
            <Plus size={14} /> New Project
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Name</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Website</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Last Updated</th>
                <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Main Website", website: "example.com", lastUpdated: "2 hours ago" },
                { name: "Blog", website: "blog.example.com", lastUpdated: "1 day ago" },
                { name: "Landing Page", website: "landing.example.com", lastUpdated: "3 days ago" },
              ].map((project, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 px-4 font-medium">{project.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{project.website}</td>
                  <td className="py-3 px-4 text-muted-foreground">{project.lastUpdated}</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 mr-2" asChild>
                      <a href={`/projects/${i}`}>View</a>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 glass-button" asChild>
                      <a href={`/projects/${i}/edit`}>Edit</a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
