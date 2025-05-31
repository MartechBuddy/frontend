
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Zap, 
  Settings,
  Clock,
  CheckCircle
} from 'lucide-react';

const WorkflowExecutionPage: React.FC = () => {
  const { workflowName } = useParams();
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const workflowConfig = {
    'fix-my-page': {
      title: 'Fix My Page',
      description: 'AI-powered page optimization workflow',
      estimatedTokens: 25,
      steps: [
        'Analyze page content',
        'Check technical SEO',
        'Generate recommendations',
        'Apply fixes'
      ]
    }
  };

  const currentWorkflow = workflowConfig[workflowName as keyof typeof workflowConfig];

  const handleRunWorkflow = () => {
    setIsRunning(true);
    setProgress(0);
    
    // Simulate workflow execution
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  if (!currentWorkflow) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Workflow Not Found</h1>
        <p className="text-muted-foreground">The requested workflow does not exist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">{currentWorkflow.title}</h1>
          <p className="text-muted-foreground mt-2">
            {currentWorkflow.description}
          </p>
        </div>
        <Badge variant="outline">
          <Zap className="mr-1 h-3 w-3" />
          {currentWorkflow.estimatedTokens} tokens
        </Badge>
      </div>

      {/* Workflow Configuration */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Workflow Configuration
          </CardTitle>
          <CardDescription>
            Configure the parameters for this workflow
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Target Page URL</Label>
            <Input placeholder="Enter the page URL to optimize" />
          </div>
          
          <div className="space-y-2">
            <Label>Focus Keywords</Label>
            <Input placeholder="Enter target keywords (comma-separated)" />
          </div>

          <div className="space-y-2">
            <Label>Optimization Priority</Label>
            <select className="w-full p-2 bg-white/5 border border-white/10 rounded-md">
              <option value="balanced">Balanced (SEO + UX)</option>
              <option value="seo-focused">SEO Focused</option>
              <option value="conversion-focused">Conversion Focused</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Steps */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Workflow Steps</CardTitle>
          <CardDescription>
            The AI will perform these steps in sequence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentWorkflow.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <span>{step}</span>
                {isRunning && progress > (index * 25) && (
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Execution */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Execute Workflow</CardTitle>
          <CardDescription>
            Run the AI workflow with your configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isRunning && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 animate-spin" />
                <span className="text-sm">Running workflow...</span>
              </div>
              <Progress value={progress} className="w-full" />
              <div className="text-sm text-muted-foreground">
                {progress}% complete
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleRunWorkflow} 
            disabled={isRunning}
            className="w-full"
          >
            {isRunning ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Running Workflow...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Run Workflow ({currentWorkflow.estimatedTokens} tokens)
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowExecutionPage;
