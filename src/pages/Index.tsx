
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Bot, LayoutDashboard, Target, Zap } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import CampaignTable from "@/components/dashboard/CampaignTable";
import ActivityLog from "@/components/dashboard/ActivityLog";
import { Button } from "@/components/ui/button";

// Mock data for chart
const data = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1800 },
  { name: "Mar", value: 1400 },
  { name: "Apr", value: 2200 },
  { name: "May", value: 1900 },
  { name: "Jun", value: 3200 },
  { name: "Jul", value: 2800 },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your AI agents today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="glass-button border-0">
            <Zap size={16} className="mr-2" /> Quick Actions
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Active Campaigns"
          value="14"
          trend={{ value: "2.5%", positive: true }}
          icon={LayoutDashboard}
        />
        <StatsCard
          title="Running AI Agents"
          value="28"
          trend={{ value: "4.1%", positive: true }}
          icon={Bot}
        />
        <StatsCard
          title="Total Leads"
          value="3,642"
          trend={{ value: "10.3%", positive: true }}
          icon={Target}
        />
        <StatsCard
          title="Conversion Rate"
          value="24.8%"
          trend={{ value: "1.2%", positive: false }}
          icon={Zap}
        />
      </div>

      <div className="glass-card rounded-xl p-5 animate-fade-in">
        <h3 className="text-lg font-medium mb-4">Lead Acquisition Overview</h3>
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                tickLine={false}
              />
              <YAxis 
                axisLine={false}
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(23, 23, 23, 0.8)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '0.5rem',
                  color: 'white',
                }}
              />
              <Bar 
                dataKey="value" 
                fill="url(#colorGradient)" 
                radius={[4, 4, 0, 0]} 
                barSize={30}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217.2, 91.2%, 59.8%)" stopOpacity={1} />
                  <stop offset="100%" stopColor="hsl(217.2, 91.2%, 40%)" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <CampaignTable />
        </div>
        <div>
          <ActivityLog />
        </div>
      </div>
    </div>
  );
};

export default Index;
