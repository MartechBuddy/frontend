
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Bot, Calendar, ChevronRight, ExternalLink, LayoutDashboard, Plus, Target, Workflow, Zap, Activity } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import CampaignTable from "@/components/dashboard/CampaignTable";
import ActivityLog from "@/components/dashboard/ActivityLog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data for chart
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

const Index = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Active Campaigns"
          value="12"
          description="+2 this week"
          icon={LayoutDashboard}
          chart={miniChartData}
        />
        <StatsCard
          title="Running AI Agents"
          value="36"
          description="+5 from yesterday"
          icon={Bot}
          chart={miniChartData}
        />
        <StatsCard
          title="Total Leads"
          value="1,284"
          description="+128 this month"
          icon={Target}
          chart={miniChartData}
        />
        <StatsCard
          title="Conversion Rate"
          value="24.8%"
          description="+2.4% increase"
          icon={Zap}
          chart={miniChartData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Recent Campaigns</h3>
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                View All <ChevronRight size={14} />
              </Button>
            </div>
            <CampaignTable />
          </Card>
        </div>
        
        <div className="space-y-5">
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <Button className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Plus size={16} />
                <span>New Campaign</span>
              </div>
              <ChevronRight size={16} />
            </Button>
          </Card>
          
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Workflow size={16} />
                <span>Create Workflow</span>
              </div>
              <ChevronRight size={16} />
            </Button>
          </Card>
          
          <Card className="glass-card p-5 rounded-xl border-white/5 animate-fade-in">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Top Performing Agent</h3>
              </div>
              
              <div className="flex gap-3 items-center">
                <div className="p-2 rounded-full bg-amber-500/20 text-amber-400">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Lead Qualifier Pro</h4>
                  <p className="text-xs text-muted-foreground">86% success rate</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span>Leads Processed</span>
                    <span className="font-medium">478</span>
                  </div>
                  <Progress className="h-2" value={75} />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span>Conversion Rate</span>
                    <span className="font-medium">32.6%</span>
                  </div>
                  <Progress className="h-2" value={32.6} />
                </div>
              </div>
            </div>
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
            
            <div className="space-y-2 mt-2">
              {/* Placeholder for tasks - would be replaced with actual task components */}
              <div className="p-3 glass-button rounded-lg">
                <p className="text-sm font-medium">Campaign Review Meeting</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
              </div>
              
              <div className="p-3 glass-button rounded-lg">
                <p className="text-sm font-medium">Q2 Strategy Planning</p>
                <p className="text-xs text-muted-foreground">Friday, 2:30 PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-5">
        <Card className="glass-card rounded-xl border-white/5 animate-fade-in">
          <div className="p-5 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-primary" />
              <h3 className="text-lg font-medium">AI Workflow Activity</h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex items-center gap-1"
            >
              View All <ChevronRight size={14} />
            </Button>
          </div>
          <div className="p-5">
            <ActivityLog />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
