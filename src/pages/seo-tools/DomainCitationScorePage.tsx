
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Eye, 
  Smartphone, 
  Globe, 
  Award, 
  Download,
  Zap,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3
} from 'lucide-react';

const DomainCitationScorePage: React.FC = () => {
  // Mock data - would come from API
  const domainScore = 78;
  const reportData = {
    domain: 'example.com',
    lastScan: '2 hours ago',
    pagesCrawled: 20,
    issuesFound: 12,
    fixesApplied: 3
  };

  const metrics = [
    { 
      title: 'Core Web Vitals', 
      score: 85, 
      status: 'good',
      issues: ['LCP: 2.1s', 'FID: 89ms', 'CLS: 0.08']
    },
    { 
      title: 'On-Page SEO', 
      score: 72, 
      status: 'warning',
      issues: ['Missing meta descriptions', 'H1 tag issues', 'Image alt text']
    },
    { 
      title: 'Mobile Responsiveness', 
      score: 91, 
      status: 'good',
      issues: ['Tap target spacing', 'Viewport configuration']
    },
    { 
      title: 'Domain Authority', 
      score: 68, 
      status: 'warning',
      issues: ['Open PageRank: 3.2/10', 'Backlink profile needs improvement']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Domain Citation Score Report</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive SEO analysis for {reportData.domain}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button>
            <Zap className="mr-2 h-4 w-4" />
            Try AI Fix
          </Button>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="glass-card border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4">Domain Citation Score</CardTitle>
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-8 border-primary/20"></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-primary border-r-transparent border-b-transparent transform -rotate-90"
              style={{ clipPath: `polygon(0 0, ${domainScore}% 0, ${domainScore}% 100%, 0% 100%)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{domainScore}</span>
            </div>
          </div>
          <CardDescription>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              Last updated: {reportData.lastScan}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{reportData.pagesCrawled}</div>
              <div className="text-sm text-muted-foreground">Pages Crawled</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-500">{reportData.issuesFound}</div>
              <div className="text-sm text-muted-foreground">Issues Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{reportData.fixesApplied}</div>
              <div className="text-sm text-muted-foreground">Fixes Applied</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">A</div>
              <div className="text-sm text-muted-foreground">Overall Grade</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Executive Summary */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            AI Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Your website shows strong performance in mobile responsiveness and core web vitals, 
            achieving an overall Domain Citation Score of {domainScore}/100. However, there are 
            opportunities to improve on-page SEO elements and domain authority metrics.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-green-500">Strengths</h4>
              <ul className="text-sm space-y-1">
                <li>• Excellent mobile responsiveness</li>
                <li>• Good Core Web Vitals performance</li>
                <li>• Fast loading speeds</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-yellow-500">Opportunities</h4>
              <ul className="text-sm space-y-1">
                <li>• Add missing meta descriptions</li>
                <li>• Fix H1 tag structure</li>
                <li>• Improve backlink profile</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <div className="grid md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {getStatusIcon(metric.status)}
                  {metric.title}
                </span>
                <Badge variant="outline" className={getStatusColor(metric.status)}>
                  {metric.score}/100
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={metric.score} className="mb-4" />
              <div className="space-y-2">
                {metric.issues.map((issue, issueIndex) => (
                  <div key={issueIndex} className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-3 w-3 text-yellow-500" />
                    <span className="text-muted-foreground">{issue}</span>
                  </div>
                ))}
              </div>
              <Button size="sm" variant="outline" className="mt-3">
                <Zap className="mr-2 h-3 w-3" />
                Fix Issues (5 tokens)
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Recommended Next Steps</CardTitle>
          <CardDescription>
            AI-powered suggestions to improve your Domain Citation Score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Fix Meta Titles</div>
                <div className="text-sm text-muted-foreground">5 tokens</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Optimize Images</div>
                <div className="text-sm text-muted-foreground">10 tokens</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Generate Schema</div>
                <div className="text-sm text-muted-foreground">5 tokens</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainCitationScorePage;
