
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, FileText, Link, Search, Settings, Cpu } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const WorkflowsPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState('');

  const workflows = [
    {
      name: 'Fix My Site',
      description: 'Crawl → Audit → AI Fix Suggestions → Push to WordPress',
      category: 'Technical',
      icon: <Settings className="h-6 w-6 text-blue-500" />,
      estimatedTime: '15-30 mins',
      aiCalls: '25-50'
    },
    {
      name: 'Optimize This Page',
      description: 'Input URL → AI analyzes content/SERP → Provides optimization suggestions',
      category: 'Content',
      icon: <Search className="h-6 w-6 text-green-500" />,
      estimatedTime: '5-10 mins',
      aiCalls: '10-20'
    },
    {
      name: 'Topic Cluster Planner',
      description: 'Keyword input → Cluster → Generate outlines for each cluster',
      category: 'Content',
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      estimatedTime: '20-45 mins',
      aiCalls: '30-75'
    },
    {
      name: 'Link Reclaimer',
      description: 'Identifies broken internal/external links → Suggests redirect fixes',
      category: 'Technical',
      icon: <Link className="h-6 w-6 text-orange-500" />,
      estimatedTime: '10-20 mins',
      aiCalls: '15-30'
    },
    {
      name: 'Weekly SEO Summary',
      description: 'Consolidates project data → AI generates human-readable report',
      category: 'Reporting',
      icon: <Cpu className="h-6 w-6 text-cyan-500" />,
      estimatedTime: '5 mins',
      aiCalls: '5-10'
    },
    {
      name: 'Custom Workflow',
      description: 'User-defined sequences of actions and AI agents',
      category: 'Custom',
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      estimatedTime: 'Variable',
      aiCalls: 'Variable',
      teamOnly: true
    }
  ];

  const handleRunWorkflow = (workflowName: string) => {
    setSelectedWorkflow(workflowName);
    setShowComingSoon(true);
  };

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">AI Workflows</h1>
            <p className="text-muted-foreground mt-2">
              Smart AI Agent Automation for complex, multi-step SEO tasks
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {workflow.icon}
                    <div>
                      <CardTitle className="text-lg">{workflow.name}</CardTitle>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        workflow.category === 'Technical' ? 'bg-blue-500/10 text-blue-500' :
                        workflow.category === 'Content' ? 'bg-green-500/10 text-green-500' :
                        workflow.category === 'Reporting' ? 'bg-cyan-500/10 text-cyan-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {workflow.category}
                      </span>
                    </div>
                  </div>

                  {workflow.teamOnly && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
                      Team
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="h-12 mb-4">
                  {workflow.description}
                </CardDescription>
                
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">Time:</span>
                    <span>{workflow.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">AI Calls:</span>
                    <span>{workflow.aiCalls}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => handleRunWorkflow(workflow.name)}
                >
                  Run Workflow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName={selectedWorkflow}
        description={`${selectedWorkflow} workflow is currently under development and will be available soon.`}
      />
    </>
  );
};

export default WorkflowsPage;
