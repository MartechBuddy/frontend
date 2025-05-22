
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ResultSummaryProps {
  score: number;
  summary: string;
  issues: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  breakdown: {
    seoContent: number;
    technicalSeo: number;
    aiVisibility: number;
  };
}

const ResultSummary: React.FC<ResultSummaryProps> = ({
  score,
  summary,
  issues,
  breakdown
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Your AI Readiness Score</h2>
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              className="text-muted/20"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - score / 100)}`}
              className="text-primary"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold">{score}</span>
          </div>
        </div>
        <p className="text-lg max-w-2xl mx-auto">
          {summary}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">SEO Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-muted-foreground">{breakdown.seoContent}%</span>
              <Badge variant={breakdown.seoContent > 70 ? "default" : "outline"}>
                {breakdown.seoContent > 70 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>
            <Progress value={breakdown.seoContent} className="h-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Technical SEO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-muted-foreground">{breakdown.technicalSeo}%</span>
              <Badge variant={breakdown.technicalSeo > 70 ? "default" : "outline"}>
                {breakdown.technicalSeo > 70 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>
            <Progress value={breakdown.technicalSeo} className="h-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">AI Visibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-muted-foreground">{breakdown.aiVisibility}%</span>
              <Badge variant={breakdown.aiVisibility > 70 ? "default" : "outline"}>
                {breakdown.aiVisibility > 70 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>
            <Progress value={breakdown.aiVisibility} className="h-2" />
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Top Critical Issues</h3>
        
        {issues.map((issue, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6">
                <h4 className="text-lg font-medium mb-2">{issue.title}</h4>
                <p className="text-muted-foreground">{issue.description}</p>
              </div>
              <div className="bg-muted relative overflow-hidden min-h-[200px]">
                <img 
                  src={issue.image} 
                  alt={`Issue visualization: ${issue.title}`}
                  className="w-full h-full object-cover"
                />
                {/* Visualization overlay would go here in a real implementation */}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="rounded-lg bg-primary/10 p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Unlock Detailed Fixes & Advanced Insights</h3>
        <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
          Your free check gives you a glimpse. Sign up for a paid plan to get page-by-page analysis, 
          AI-powered solutions, continuous monitoring, and much more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/signup">Sign Up Free</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/pricing">
              See Paid Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
