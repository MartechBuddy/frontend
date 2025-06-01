
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, AlertCircle, Target, FileText } from "lucide-react";

const ProjectDashboardPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <p className="text-muted-foreground">Overview of your SEO project performance</p>
        </div>
        <Button>Run New Audit</Button>
      </div>

      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">SEO Score</p>
              <p className="text-2xl font-bold">85</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-sm text-muted-foreground">Issues Found</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Keywords Tracked</p>
              <p className="text-2xl font-bold">247</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-muted-foreground">Content Items</p>
              <p className="text-2xl font-bold">38</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
            <TrendingUp className="h-6 w-6" />
            <span>Run Site Audit</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
            <Target className="h-6 w-6" />
            <span>Generate Keywords</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
            <FileText className="h-6 w-6" />
            <span>Create Content</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
            <AlertCircle className="h-6 w-6" />
            <span>Start Workflow</span>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm">Site audit completed - 12 issues found</span>
            <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <FileText className="h-4 w-4 text-blue-500" />
            <span className="text-sm">New blog post "SEO Best Practices" generated</span>
            <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Target className="h-4 w-4 text-purple-500" />
            <span className="text-sm">Keyword cluster analysis completed</span>
            <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDashboardPage;
