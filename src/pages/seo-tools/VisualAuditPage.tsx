import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Camera, 
  Zap, 
  Upload, 
  ExternalLink,
  Layers,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';

const VisualAuditPage: React.FC = () => {
  const { projectId } = useParams();
  const [urlToAudit, setUrlToAudit] = useState('');
  
  // Mock data - would come from API based on user tier
  const userTier = 'Pro'; // Test, Starter, Pro, Entrepreneur, Enterprise
  const visualAuditsRemaining = 3;
  const maxVisualAudits = 5;
  
  const existingAudits = [
    {
      id: 1,
      url: 'https://example.com/',
      title: 'Homepage',
      date: '2 hours ago',
      issues: 4,
      suggestions: 7,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      url: 'https://example.com/about',
      title: 'About Page',
      date: '1 day ago',
      issues: 2,
      suggestions: 3,
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      url: 'https://example.com/contact',
      title: 'Contact Page',
      date: '3 days ago',
      issues: 1,
      suggestions: 5,
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
    }
  ];

  const handleRunVisualAudit = () => {
    if (!urlToAudit) return;
    console.log('Running visual audit for:', urlToAudit);
    // Would trigger API call
  };

  const getTierLimits = () => {
    switch (userTier) {
      case 'Test': return { max: 0, description: 'Access DCS visual reports only' };
      case 'Starter': return { max: 3, description: '3 on-demand visual audits per month' };
      case 'Pro': return { max: 5, description: '5 on-demand visual audits per month' };
      case 'Entrepreneur': return { max: 20, description: '20 visual audits per month' };
      case 'Enterprise': return { max: -1, description: 'Unlimited visual audits' };
      default: return { max: 0, description: '' };
    }
  };

  const tierLimits = getTierLimits();
  const canRunAudit = userTier !== 'Test' && (tierLimits.max === -1 || visualAuditsRemaining > 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gradient">Visual SEO Audit</h1>
        <p className="text-muted-foreground mt-2">
          AI-powered visual analysis with overlay recommendations on page screenshots
        </p>
      </div>

      {/* Usage & Limits Card */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Visual Audit Usage
              </CardTitle>
              <CardDescription>{tierLimits.description}</CardDescription>
            </div>
            {userTier !== 'Enterprise' && (
              <Badge variant="outline" className="text-sm">
                {tierLimits.max === -1 ? 'Unlimited' : `${visualAuditsRemaining}/${tierLimits.max} remaining`}
              </Badge>
            )}
          </div>
        </CardHeader>
        {!canRunAudit && (
          <CardContent>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-medium text-yellow-700">
                  {userTier === 'Test' 
                    ? 'Upgrade to Starter for On-Demand Visual Audits' 
                    : 'Visual Audit Limit Reached'}
                </p>
                <p className="text-sm text-yellow-600/80">
                  {userTier === 'Test'
                    ? 'Access your Domain Citation Score visual analysis, or upgrade for custom page audits.'
                    : 'Upgrade your plan for more visual audits or wait for next month\'s reset.'}
                </p>
              </div>
              <Button size="sm" variant="outline">
                Upgrade Plan
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* On-Demand Audit Section */}
      {canRunAudit && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Run New Visual Audit
            </CardTitle>
            <CardDescription>
              Enter any URL to get AI-powered visual SEO analysis (30 tokens)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="https://example.com/page-to-audit"
                value={urlToAudit}
                onChange={(e) => setUrlToAudit(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleRunVisualAudit} disabled={!urlToAudit}>
                <Camera size={16} className="mr-2" />
                Run Audit
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <Zap size={12} />
              <span>Costs 30 Martech Tokens • Takes 30-60 seconds</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Existing Visual Audits */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            Your Visual Audits
          </CardTitle>
          <CardDescription>
            Previously generated visual SEO analyses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {existingAudits.map((audit) => (
              <div key={audit.id} className="group relative">
                <Card className="glass-card border-white/10 hover:border-primary/20 transition-all duration-200">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden">
                      <img 
                        src={audit.thumbnail}
                        alt={`${audit.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm">
                          <Eye size={14} className="mr-1" />
                          View Analysis
                        </Button>
                      </div>
                      {/* AI Overlay Indicators */}
                      <div className="absolute top-2 left-2 flex gap-1">
                        {[...Array(audit.issues)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-red-500 rounded-full" />
                        ))}
                      </div>
                      <div className="absolute top-2 right-2 flex gap-1">
                        {[...Array(audit.suggestions)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-green-500 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{audit.title}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <ExternalLink size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground truncate">{audit.url}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{audit.date}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <AlertCircle size={12} className="text-red-500" />
                          <span>{audit.issues}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle size={12} className="text-green-500" />
                          <span>{audit.suggestions}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            How Visual SEO Audit Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Screenshot Capture</h3>
              <p className="text-sm text-muted-foreground">
                We capture high-resolution screenshots of your page across different devices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. AI Visual Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes layout, accessibility, mobile-friendliness, and SEO elements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Interactive Overlays</h3>
              <p className="text-sm text-muted-foreground">
                View issues and suggestions directly overlaid on your page screenshot
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisualAuditPage;
