
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Eye, 
  Camera, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  Lock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Download
} from 'lucide-react';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const VisualAuditPage: React.FC = () => {
  const { projectId } = useParams();
  const [urlToAudit, setUrlToAudit] = useState('');
  
  // Mock data - would come from API based on user tier
  const userTier: UserTier = 'Pro';
  const auditsRemaining = 3;
  const projectDomain = 'example.com';

  const getTierLimits = () => {
    const tierConfig: Record<UserTier, { limit: number; description: string; canOnDemand: boolean }> = {
      'Test': { limit: 20, description: '20 pages from DCS only', canOnDemand: false },
      'Starter': { limit: 3, description: '3 on-demand audits/month', canOnDemand: true },
      'Pro': { limit: 5, description: '5 on-demand audits/month', canOnDemand: true },
      'Entrepreneur': { limit: 20, description: '20 on-demand audits/month', canOnDemand: true },
      'Enterprise': { limit: -1, description: 'Unlimited audits', canOnDemand: true }
    };
    return tierConfig[userTier];
  };

  const tierLimits = getTierLimits();
  const canRunAudit = tierLimits.limit === -1 || auditsRemaining > 0;

  const dcsPages = [
    { url: '/', title: 'Homepage', issues: 3, score: 85 },
    { url: '/about', title: 'About Page', issues: 1, score: 92 },
    { url: '/services', title: 'Services', issues: 5, score: 78 },
    { url: '/contact', title: 'Contact', issues: 2, score: 88 }
  ];

  const onDemandAudits = [
    { url: '/products/ai-tool', title: 'AI Tool Product Page', date: '2 hours ago', issues: 4 },
    { url: '/blog/latest-post', title: 'Latest Blog Post', date: '1 day ago', issues: 2 }
  ];

  const handleRunAudit = () => {
    if (!canRunAudit) return;
    console.log('Running visual audit for:', urlToAudit);
    // Would trigger API call
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Visual SEO Audit</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered visual analysis of your pages with overlay recommendations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Audits Remaining</p>
                <p className="text-2xl font-bold">
                  {tierLimits.limit === -1 ? '∞' : auditsRemaining}
                </p>
              </div>
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pages Analyzed</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Camera className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Issues Found</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold">86</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* On-Demand Audit Section */}
      {tierLimits.canOnDemand && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Run On-Demand Visual Audit
            </CardTitle>
            <CardDescription>
              {tierLimits.description} • 30 tokens per audit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter page URL to audit"
                value={urlToAudit}
                onChange={(e) => setUrlToAudit(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleRunAudit}
                disabled={!canRunAudit || !urlToAudit}
              >
                <Eye size={16} className="mr-2" />
                Run Audit
              </Button>
            </div>
            {!canRunAudit && tierLimits.limit !== -1 && (
              <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-yellow-700">
                  You've reached your visual audit limit. Upgrade for more audits!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* DCS Visual Analysis */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Domain Citation Score Visual Analysis</CardTitle>
          <CardDescription>
            Initial 20-page visual analysis from your Domain Citation Score report
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dcsPages.map((page, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center&sig=${index}`}
                    alt={page.title}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm">
                      <Eye size={14} className="mr-1" />
                      View Analysis
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className={page.issues > 3 ? 'bg-red-500' : page.issues > 1 ? 'bg-yellow-500' : 'bg-green-500'}>
                      Score: {page.score}
                    </Badge>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">{page.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {page.issues} AI suggestions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent On-Demand Audits */}
      {tierLimits.canOnDemand && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Recent On-Demand Audits</CardTitle>
            <CardDescription>
              Your latest visual audit results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {onDemandAudits.map((audit, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded"></div>
                    <div>
                      <h4 className="font-medium text-sm">{audit.title}</h4>
                      <p className="text-xs text-muted-foreground">{audit.url} • {audit.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {audit.issues} issues
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-xs ml-2">
                      View Results
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Device Analysis */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Multi-Device Analysis</CardTitle>
          <CardDescription>
            Visual SEO performance across different screen sizes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, name: 'Desktop', score: 92, issues: 2 },
              { icon: Tablet, name: 'Tablet', score: 88, issues: 3 },
              { icon: Smartphone, name: 'Mobile', score: 85, issues: 4 }
            ].map((device, index) => {
              const Icon = device.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{device.name}</h3>
                  <div className="space-y-2">
                    <Progress value={device.score} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Score: {device.score}/100
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {device.issues} issues
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upgrade CTA for lower tiers */}
      {userTier === 'Test' && (
        <Card className="glass-card border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Unlock Advanced Visual Audits
            </CardTitle>
            <CardDescription>
              Upgrade to Starter to run on-demand visual audits for any page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Upgrade to Starter - $29.99/mo
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VisualAuditPage;
