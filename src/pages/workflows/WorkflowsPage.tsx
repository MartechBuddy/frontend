
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Wand2, 
  Target, 
  Link, 
  FileText, 
  BarChart3,
  Clock,
  Lock,
  TrendingUp,
  Users,
  Globe,
  Search
} from 'lucide-react';

const WorkflowsPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Mock data - would come from API based on user tier
  const userTier = 'Starter'; // Test, Starter, Pro, Entrepreneur, Enterprise

  const workflows = [
    {
      id: 'fix-my-site',
      name: 'Fix My Site',
      description: 'Comprehensive AI site audit with automated fix suggestions',
      category: 'Technical',
      tokens: 50,
      duration: '5-10 min',
      icon: Wand2,
      tierRequired: 'Test',
      features: ['Technical SEO fixes', 'Meta optimization', 'Schema markup', 'Site speed improvements']
    },
    {
      id: 'optimize-page',
      name: 'Optimize This Page',
      description: 'Deep AI analysis and optimization for a specific page',
      category: 'Technical',
      tokens: 25,
      duration: '3-5 min',
      icon: Target,
      tierRequired: 'Starter',
      features: ['Content optimization', 'Keyword density', 'Internal linking', 'Meta tags']
    },
    {
      id: 'topic-cluster-planner',
      name: 'Topic Cluster Planner',
      description: 'AI-generated content cluster strategy with pillar content',
      category: 'Content',
      tokens: 75,
      duration: '10-15 min',
      icon: BarChart3,
      tierRequired: 'Starter',
      features: ['Keyword clustering', 'Content gaps', 'Pillar page strategy', 'Internal link planning']
    },
    {
      id: 'link-reclaimer',
      name: 'Link Reclaimer',
      description: 'Find and reclaim broken internal/external link opportunities',
      category: 'Link Building',
      tokens: 40,
      duration: '7-12 min',
      icon: Link,
      tierRequired: 'Pro',
      features: ['Broken link detection', 'Redirect suggestions', 'Link equity recovery', 'Outreach templates']
    },
    {
      id: 'content-expansion',
      name: 'Content Expansion AI',
      description: 'Expand thin content pages with AI-generated sections',
      category: 'Content',
      tokens: 60,
      duration: '8-15 min',
      icon: FileText,
      tierRequired: 'Pro',
      features: ['Content gap analysis', 'AI content generation', 'SEO optimization', 'Readability enhancement']
    },
    {
      id: 'competitor-analysis',
      name: 'Competitor SEO Analysis',
      description: 'Deep dive into competitor strategies and find opportunities',
      category: 'Analysis',
      tokens: 100,
      duration: '15-20 min',
      icon: TrendingUp,
      tierRequired: 'Entrepreneur',
      features: ['SERP analysis', 'Content gaps', 'Keyword opportunities', 'Backlink analysis']
    },
    {
      id: 'local-seo-optimizer',
      name: 'Local SEO Optimizer',
      description: 'Complete local business SEO optimization workflow',
      category: 'Local SEO',
      tokens: 80,
      duration: '10-18 min',
      icon: Globe,
      tierRequired: 'Entrepreneur',
      features: ['NAP optimization', 'Local citations', 'Google My Business', 'Local schema markup']
    },
    {
      id: 'custom-workflow',
      name: 'Custom Workflow Builder',
      description: 'Create your own AI-powered SEO workflows',
      category: 'Custom',
      tokens: 'Variable',
      duration: 'Variable',
      icon: Users,
      tierRequired: 'Enterprise',
      features: ['Custom AI prompts', 'Multi-step automation', 'API integrations', 'Team collaboration']
    }
  ];

  const getTierLevel = (tier: string) => {
    const levels = { 'Test': 1, 'Starter': 2, 'Pro': 3, 'Entrepreneur': 4, 'Enterprise': 5 };
    return levels[tier] || 0;
  };

  const canUseWorkflow = (workflow: any) => {
    return getTierLevel(userTier) >= getTierLevel(workflow.tierRequired);
  };

  const handleRunWorkflow = (workflowId: string) => {
    navigate(`/projects/${projectId}/workflows/${workflowId}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technical': return Wand2;
      case 'Content': return FileText;
      case 'Link Building': return Link;
      case 'Analysis': return Search;
      case 'Local SEO': return Globe;
      case 'Custom': return Users;
      default: return Zap;
    }
  };

  const categories = ['All', 'Technical', 'Content', 'Link Building', 'Analysis', 'Local SEO', 'Custom'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredWorkflows = selectedCategory === 'All' 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gradient">AI Workflows</h1>
        <p className="text-muted-foreground mt-2">
          Smart AI agent automation for complex SEO tasks
        </p>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Workflows Run</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tokens Used</p>
                <p className="text-2xl font-bold">450</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Issues Fixed</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card className="glass-card border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {category !== 'All' && React.createElement(getCategoryIcon(category), { size: 14 })}
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workflows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWorkflows.map((workflow) => {
          const Icon = workflow.icon;
          const canUse = canUseWorkflow(workflow);
          
          return (
            <Card key={workflow.id} className={`glass-card border-white/10 ${!canUse ? 'opacity-60' : 'hover:border-primary/20'} transition-all duration-200`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${canUse ? 'bg-primary/10' : 'bg-gray-500/10'}`}>
                      <Icon className={`h-6 w-6 ${canUse ? 'text-primary' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{workflow.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {workflow.category}
                      </Badge>
                    </div>
                  </div>
                  {!canUse && <Lock className="h-5 w-5 text-gray-500" />}
                </div>
                <CardDescription className="mt-3">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">What it does:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {workflow.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Zap size={12} />
                        <span>{workflow.tokens} tokens</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{workflow.duration}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {workflow.tierRequired}+
                    </Badge>
                  </div>

                  {/* Action Button */}
                  {canUse ? (
                    <Button 
                      onClick={() => handleRunWorkflow(workflow.id)}
                      className="w-full"
                    >
                      <Zap size={16} className="mr-2" />
                      Run Workflow
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <p className="text-xs text-yellow-700 font-medium">
                          Upgrade to {workflow.tierRequired} to unlock this workflow
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        Upgrade Plan
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Workflow Runs */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Recent Workflow Runs</CardTitle>
          <CardDescription>
            Your latest AI workflow executions and results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Fix My Site', status: 'completed', time: '2 hours ago', issues: 12, fixed: 8 },
              { name: 'Optimize This Page', status: 'completed', time: '1 day ago', issues: 5, fixed: 5 },
              { name: 'Topic Cluster Planner', status: 'running', time: '5 minutes ago', issues: 0, fixed: 0 }
            ].map((run, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    run.status === 'completed' ? 'bg-green-500' : 
                    run.status === 'running' ? 'bg-blue-500 animate-pulse' : 'bg-red-500'
                  }`} />
                  <div>
                    <h4 className="font-medium text-sm">{run.name}</h4>
                    <p className="text-xs text-muted-foreground">{run.time}</p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  {run.status === 'completed' ? (
                    <div>
                      <p className="font-medium">{run.fixed}/{run.issues} issues fixed</p>
                      <Button size="sm" variant="ghost" className="text-xs">
                        View Results
                      </Button>
                    </div>
                  ) : (
                    <Badge variant="outline">{run.status}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowsPage;
