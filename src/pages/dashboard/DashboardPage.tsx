
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Globe, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Zap,
  Plus,
  Eye,
  PenTool,
  Search
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Mock data - would come from API
  const domainCitationScore = 67;
  const totalProjects = 3;
  const pendingFixes = 12;
  const lastAuditDate = '2 hours ago';

  const recentActivities = [
    {
      id: 1,
      type: 'audit',
      title: 'Domain Citation Score completed',
      description: 'Your website scored 67/100',
      time: '2 hours ago',
      projectName: 'My Website'
    },
    {
      id: 2,
      type: 'content',
      title: 'Blog post published',
      description: '10 SEO Best Practices for 2024',
      time: '1 day ago',
      projectName: 'My Website'
    },
    {
      id: 3,
      type: 'fix',
      title: 'AI fixes applied',
      description: '5 meta descriptions optimized',
      time: '2 days ago',
      projectName: 'E-commerce Store'
    }
  ];

  const topOpportunities = [
    {
      id: 1,
      title: 'Optimize homepage meta title',
      impact: 'High',
      effort: 'Low',
      tokens: 5
    },
    {
      id: 2,
      title: 'Fix broken internal links',
      impact: 'Medium',
      effort: 'Medium',
      tokens: 15
    },
    {
      id: 3,
      title: 'Add schema markup to product pages',
      impact: 'High',
      effort: 'Medium',
      tokens: 25
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="glass-card border-white/10 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your SEO performance across all projects.
            </p>
          </div>
          <div className="flex space-x-3">
            <Link to="/projects/create">
              <Button className="flex items-center space-x-2">
                <Plus size={16} />
                <span>New Project</span>
              </Button>
            </Link>
            <Link to="/content-hub/create">
              <Button variant="outline" className="flex items-center space-x-2">
                <PenTool size={16} />
                <span>Create Content</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Domain Citation Score Highlight */}
      <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Domain Citation Score</CardTitle>
            <CardDescription>Latest comprehensive SEO analysis</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{domainCitationScore}/100</div>
            <p className="text-sm text-muted-foreground">Updated {lastAuditDate}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <Progress value={domainCitationScore} className="h-3" />
            </div>
            <Link to="/projects/1/seo-tools/domain-citation-score">
              <Button>
                <Eye size={16} className="mr-2" />
                View Report
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Snapshot Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Citation Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending AI Fixes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingFixes}</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Created</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Opportunities */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Top Opportunities</span>
            </CardTitle>
            <CardDescription>
              AI-identified high-impact improvements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="flex-1">
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      opportunity.impact === 'High' ? 'bg-green-500/10 text-green-500' :
                      opportunity.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-gray-500/10 text-gray-500'
                    }`}>
                      {opportunity.impact} Impact
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {opportunity.tokens} tokens
                    </span>
                  </div>
                </div>
                <Button size="sm">
                  <Zap size={14} className="mr-1" />
                  Fix
                </Button>
              </div>
            ))}
            <Link to="/projects/1/workflows">
              <Button variant="outline" className="w-full">
                View All Opportunities
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest actions across your projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                <div className={`p-2 rounded-full ${
                  activity.type === 'audit' ? 'bg-blue-500/10' :
                  activity.type === 'content' ? 'bg-green-500/10' :
                  'bg-orange-500/10'
                }`}>
                  {activity.type === 'audit' && <Search size={14} className="text-blue-500" />}
                  {activity.type === 'content' && <FileText size={14} className="text-green-500" />}
                  {activity.type === 'fix' && <Zap size={14} className="text-orange-500" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">{activity.projectName}</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/projects/1/activity">
              <Button variant="outline" className="w-full">
                View Full Activity Log
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Jump into your most common SEO tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/projects/1/seo-tools/site-audit">
              <Button variant="outline" className="w-full h-auto p-4 flex flex-col space-y-2">
                <Search size={20} />
                <span>Run Site Audit</span>
              </Button>
            </Link>
            <Link to="/content-hub/create">
              <Button variant="outline" className="w-full h-auto p-4 flex flex-col space-y-2">
                <PenTool size={20} />
                <span>Generate Content</span>
              </Button>
            </Link>
            <Link to="/projects/1/seo-tools/keyword-intelligence">
              <Button variant="outline" className="w-full h-auto p-4 flex flex-col space-y-2">
                <BarChart3 size={20} />
                <span>Discover Keywords</span>
              </Button>
            </Link>
            <Link to="/projects/1/workflows">
              <Button variant="outline" className="w-full h-auto p-4 flex flex-col space-y-2">
                <Zap size={20} />
                <span>Run Workflow</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
