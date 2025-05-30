
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Download, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Eye,
  Smartphone,
  Globe,
  Search
} from 'lucide-react';

const DomainCitationScorePage: React.FC = () => {
  const { projectId } = useParams();
  
  // Mock data - would come from API
  const domainScore = 67;
  const lastScanDate = '2 hours ago';
  const projectDomain = 'example.com';
  
  const metrics = [
    { name: 'Core Web Vitals', score: 75, status: 'good', icon: TrendingUp },
    { name: 'On-Page SEO', score: 82, status: 'excellent', icon: CheckCircle },
    { name: 'Content Quality', score: 58, status: 'needs-work', icon: AlertTriangle },
    { name: 'Mobile Responsiveness', score: 91, status: 'excellent', icon: Smartphone },
    { name: 'Domain Authority', score: 45, status: 'average', icon: Globe },
    { name: 'Technical SEO', score: 73, status: 'good', icon: Search }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-500 bg-green-500/10';
      case 'good': return 'text-blue-500 bg-blue-500/10';
      case 'average': return 'text-yellow-500 bg-yellow-500/10';
      case 'needs-work': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const quickFixes = [
    {
      id: 1,
      title: 'Optimize Homepage Meta Title',
      impact: 'High',
      tokens: 5,
      description: 'Current meta title is too long and missing primary keyword'
    },
    {
      id: 2,
      title: 'Add Missing Alt Tags',
      impact: 'Medium',
      tokens: 3,
      description: '12 images are missing descriptive alt text'
    },
    {
      id: 3,
      title: 'Fix Schema Markup',
      impact: 'Medium',
      tokens: 8,
      description: 'Add structured data for better search visibility'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Domain Citation Score</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive SEO analysis for {projectDomain}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            Download Report
          </Button>
          <Button>
            <Eye size={16} className="mr-2" />
            Run New Scan
          </Button>
        </div>
      </div>

      {/* Overall Score Card */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Overall Domain Citation Score</CardTitle>
              <CardDescription>
                Last updated {lastScanDate} • Based on 20 page analysis
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-primary">{domainScore}</div>
              <div className="text-sm text-muted-foreground">/100</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={domainScore} className="h-4 mb-4" />
          <div className="glass-card p-4 rounded-lg bg-primary/5">
            <h4 className="font-semibold mb-2 text-primary">AI Executive Summary</h4>
            <p className="text-sm text-muted-foreground">
              Your website shows strong on-page optimization and mobile responsiveness. However, 
              there are opportunities to improve content quality and technical SEO implementation. 
              Focus on optimizing meta titles, adding structured data, and enhancing content depth 
              to boost your overall domain authority.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.name} className="glass-card border-white/10">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-primary" />
                  <Badge className={getStatusColor(metric.status)}>
                    {metric.status.replace('-', ' ')}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{metric.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">{metric.score}</span>
                  <span className="text-sm text-muted-foreground">/100</span>
                </div>
                <Progress value={metric.score} className="h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick AI Fixes */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            1-Click AI Fixes Available
          </CardTitle>
          <CardDescription>
            Apply these AI-powered optimizations to improve your score instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickFixes.map((fix) => (
            <div key={fix.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div className="flex-1">
                <h4 className="font-medium">{fix.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{fix.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={fix.impact === 'High' ? 'default' : 'secondary'}>
                    {fix.impact} Impact
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {fix.tokens} tokens
                  </span>
                </div>
              </div>
              <Button size="sm" className="flex items-center gap-1">
                <Zap size={14} />
                Fix Now
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Visual Analysis Preview */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Visual SEO Analysis</CardTitle>
          <CardDescription>
            AI-powered visual analysis of your pages with overlay recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center`}
                    alt={`Page ${i} preview`}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm">
                      <Eye size={14} className="mr-1" />
                      View Analysis
                    </Button>
                  </div>
                </div>
                <p className="text-sm font-medium mt-2">Homepage</p>
                <p className="text-xs text-muted-foreground">3 AI suggestions</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Recommended Next Steps
          </CardTitle>
          <CardDescription>
            Prioritized actions to improve your Domain Citation Score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h4 className="font-medium text-green-700">Fix Critical Technical Issues</h4>
                <p className="text-sm text-green-600/80">Address the 3 high-impact technical SEO problems identified</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h4 className="font-medium text-blue-700">Enhance Content Quality</h4>
                <p className="text-sm text-blue-600/80">Expand thin content pages and add more valuable information</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h4 className="font-medium text-yellow-700">Build Domain Authority</h4>
                <p className="text-sm text-yellow-600/80">Improve internal linking and acquire quality backlinks</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainCitationScorePage;
