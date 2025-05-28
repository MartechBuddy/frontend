
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, FileText, Target, AlertCircle, Settings, Users } from "lucide-react";

const ProjectActivityPage: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'audit',
      title: 'Site audit completed',
      description: 'Found 12 issues across 147 pages',
      timestamp: '2 hours ago',
      user: 'AI System',
      status: 'completed',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'content',
      title: 'Blog post generated',
      description: '"10 SEO Tips for E-commerce" - 1,247 words',
      timestamp: '5 hours ago',
      user: 'John Doe',
      status: 'draft',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'workflow',
      title: 'Fix My Site workflow started',
      description: 'Automated optimization workflow initiated',
      timestamp: '1 day ago',
      user: 'Jane Smith',
      status: 'running',
      icon: Settings,
      color: 'text-yellow-500'
    },
    {
      id: 4,
      type: 'keywords',
      title: 'Keyword cluster analysis',
      description: 'Generated 5 content clusters from 150 keywords',
      timestamp: '2 days ago',
      user: 'AI System',
      status: 'completed',
      icon: Target,
      color: 'text-purple-500'
    },
    {
      id: 5,
      type: 'issue',
      title: 'Critical issue detected',
      description: 'Broken internal links found on 23 pages',
      timestamp: '3 days ago',
      user: 'AI System',
      status: 'requires_action',
      icon: AlertCircle,
      color: 'text-red-500'
    },
    {
      id: 6,
      type: 'team',
      title: 'Team member added',
      description: 'Sarah Wilson joined as Editor',
      timestamp: '1 week ago',
      user: 'John Doe',
      status: 'completed',
      icon: Users,
      color: 'text-indigo-500'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500/20 text-green-500">Completed</Badge>;
      case 'running':
        return <Badge variant="default" className="bg-yellow-500/20 text-yellow-500">Running</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      case 'requires_action':
        return <Badge variant="destructive">Requires Action</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Project Activity</h1>
        <p className="text-muted-foreground">Track all actions and changes in your project</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{activity.title}</h3>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Activity Filters */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Filter Activity</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">All</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Audits</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Content</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Workflows</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Keywords</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Issues</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Team</Badge>
        </div>
      </Card>
    </div>
  );
};

export default ProjectActivityPage;
