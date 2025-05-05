
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Bot, Calendar, ChevronRight, ExternalLink, LayoutDashboard, Plus, Target, Workflow, Zap, Activity, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

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

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ElementType;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon: Icon, trend, trendValue }) => {
  return (
    <Card className="glass-card border-white/5 animate-fade-in overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm text-muted-foreground font-medium">{title}</CardTitle>
          <div className="p-2 rounded-full bg-primary/10">
            <Icon size={18} className="text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-baseline">
          <h3 className="text-2xl font-semibold tracking-tight">{value}</h3>
          {trend && trendValue && (
            <div className={`ml-2 text-xs flex items-center ${
              trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"
            }`}>
              {trend === "up" && <ArrowUp size={12} className="mr-1" />}
              {trendValue}
            </div>
          )}
        </div>
        {description && (
          <CardDescription className="text-xs mt-1">{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-8">
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
          description="Last scan: Today"
          icon={LayoutDashboard}
          trend="up"
          trendValue="5%"
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
          trend="up"
          trendValue="12%"
        />
        <StatsCard
          title="Domain Authority"
          value="45"
          description="SEO strength indicator"
          icon={Zap}
          trend="up"
          trendValue="3 pts"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="glass-card border-white/5 animate-fade-in lg:col-span-2 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Website Traffic</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex items-center gap-1 glass-button"
            >
              View Details <ChevronRight size={14} />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px] p-4">
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
          </CardContent>
        </Card>
        
        <div className="space-y-5">
          <Card className="glass-card border-white/5 animate-fade-in overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">AI Readiness</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <a href="/ai-readiness">View</a>
              </Button>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
          
          <Card className="glass-card border-white/5 animate-fade-in overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Recent Images</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <a href="/projects/media">View All</a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-white/10 rounded-md"></div>
                <div className="aspect-square bg-white/10 rounded-md"></div>
                <div className="aspect-square bg-white/10 rounded-md"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="glass-card border-white/5 animate-fade-in overflow-hidden md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full text-xs flex items-center gap-1">
              View Calendar <Calendar size={14} />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="glass-card border-white/5 animate-fade-in overflow-hidden md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-primary" />
              <CardTitle className="text-lg font-medium">Project List</CardTitle>
            </div>
            <Button
              variant="default"
              size="sm"
              className="text-xs flex items-center gap-1"
            >
              <Plus size={14} /> New Project
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[240px]">
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
                      { name: "Product Site", website: "product.example.com", lastUpdated: "5 days ago" },
                    ].map((project, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
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
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
