
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Download, 
  Eye,
  Zap,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const WorkflowResultsPage: React.FC = () => {
  const { runId } = useParams();

  // Mock workflow results data
  const workflowResults = {
    id: runId,
    workflowName: 'Fix My Page',
    status: 'completed',
    completedAt: '2024-05-31T10:30:00Z',
    tokensUsed: 25,
    fixes: [
      {
        type: 'Meta Title',
        issue: 'Missing target keyword',
        fix: 'Added "Digital Marketing" to title',
        impact: 'High',
        applied: true
      },
      {
        type: 'Meta Description',
        issue: 'Too short (89 characters)',
        fix: 'Expanded to 155 characters with compelling copy',
        impact: 'Medium',
        applied: true
      },
      {
        type: 'H1 Tag',
        issue: 'Not optimized for target keyword',
        fix: 'Updated H1 to include primary keyword',
        impact: 'High',
        applied: false
      },
      {
        type: 'Image Alt Text',
        issue: '3 images missing alt text',
        fix: 'Generated descriptive alt text for all images',
        impact: 'Medium',
        applied: true
      }
    ],
    recommendations: [
      'Consider adding internal links to related content',
      'Optimize page loading speed by compressing images',
      'Add schema markup for better rich snippets'
    ]
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-500';
      case 'Medium': return 'text-yellow-500';
      case 'Low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'High': return <Badge className="bg-red-500/20 text-red-500">{impact}</Badge>;
      case 'Medium': return <Badge className="bg-yellow-500/20 text-yellow-500">{impact}</Badge>;
      case 'Low': return <Badge className="bg-green-500/20 text-green-500">{impact}</Badge>;
      default: return <Badge variant="outline">{impact}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Workflow Results</h1>
          <p className="text-muted-foreground mt-2">
            {workflowResults.workflowName} • Run ID: {runId}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Badge className="bg-green-500/20 text-green-500">
            <CheckCircle className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        </div>
      </div>

      {/* Summary */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Execution Summary</CardTitle>
          <CardDescription>
            Overview of the workflow execution and results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">4</div>
              <div className="text-sm text-muted-foreground">Issues Fixed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">3</div>
              <div className="text-sm text-muted-foreground">Applied Fixes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{workflowResults.tokensUsed}</div>
              <div className="text-sm text-muted-foreground">Tokens Used</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">3</div>
              <div className="text-sm text-muted-foreground">Recommendations</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applied Fixes */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Applied Fixes
          </CardTitle>
          <CardDescription>
            AI-generated fixes that have been implemented
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflowResults.fixes.map((fix, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {fix.applied ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                      <div className="font-medium">{fix.type}</div>
                      {getImpactBadge(fix.impact)}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Issue: {fix.issue}
                    </div>
                    <div className="text-sm text-green-400">
                      Fix: {fix.fix}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!fix.applied && (
                      <Button size="sm">
                        <Zap className="h-3 w-3 mr-1" />
                        Apply Fix
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Additional Recommendations
          </CardTitle>
          <CardDescription>
            AI suggestions for further optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {workflowResults.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="flex-1">{recommendation}</span>
                <Button size="sm" variant="outline">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowResultsPage;
