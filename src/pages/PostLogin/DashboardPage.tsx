
import React from "react";
import { BarChart3, FileText, Globe, Gauge, ChevronRight } from "lucide-react";
import StatsCard from "@/components/PostLogin/DashboardPage/StatsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back to your MartechEngine.ai dashboard!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Site Health"
          value="82%"
          icon={<Globe size={18} className="text-primary" />}
          description="Based on last crawl: 3 days ago"
          trend={{ direction: "up", value: "+5%" }}
        />
        
        <StatsCard
          title="Traffic Estimate"
          value="1,245"
          description="Monthly visits"
          icon={<BarChart3 size={18} className="text-primary" />}
          trend={{ direction: "up", value: "+12.3%" }}
        />
        
        <StatsCard
          title="AI Readiness"
          value="75/100"
          description="Overall optimization score"
          icon={<Gauge size={18} className="text-primary" />}
          trend={{ direction: "up", value: "+8 pts" }}
        />
        
        <StatsCard
          title="Domain Authority"
          value="45"
          description="Moz DA score"
          icon={<Globe size={18} className="text-primary" />}
          trend={{ direction: "neutral", value: "No change" }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Content Progress</CardTitle>
            <CardDescription>Your content creation progress this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Blog Posts</span>
                  <span className="text-sm font-medium">4/8</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Social Media Posts</span>
                  <span className="text-sm font-medium">12/20</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">SEO Optimizations</span>
                  <span className="text-sm font-medium">7/15</span>
                </div>
                <Progress value={46.67} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Newsletters</span>
                  <span className="text-sm font-medium">2/4</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              
              <Link to="/content-hub" className="flex items-center text-primary text-sm hover:underline">
                Go to Content Hub <ChevronRight size={16} />
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>AI Readiness Breakdown</CardTitle>
            <CardDescription>Optimization scores by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">SEO Structure</span>
                  <span className="text-sm font-medium">82/100</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Quality</span>
                  <span className="text-sm font-medium">68/100</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Technical Implementation</span>
                  <span className="text-sm font-medium">75/100</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Schema Markup</span>
                  <span className="text-sm font-medium">58/100</span>
                </div>
                <Progress value={58} className="h-2" />
              </div>
              
              <Link to="/ai-readiness" className="flex items-center text-primary text-sm hover:underline">
                View AI Readiness <ChevronRight size={16} />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link to="/dashboard/projects">Create Project</Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link to="/dashboard/content-hub">Edit Content</Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link to="/dashboard/social-media">Generate Social Post</Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link to="/dashboard/content-hub/scheduler">Schedule Post</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
