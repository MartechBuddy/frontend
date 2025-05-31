
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Eye, 
  Camera, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Zap, 
  ArrowRight, 
  Lock,
  Sparkles,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const VisualAuditPage: React.FC = () => {
  const [auditUrl, setAuditUrl] = useState('');
  const [isRunningAudit, setIsRunningAudit] = useState(false);

  // Mock data - would come from API
  const userTier: UserTier = 'Pro';
  const visualAuditsRemaining = 3;

  const tierLimits: Record<UserTier, { 
    monthly: number; 
    description: string; 
    hasOnDemand: boolean;
    tokensPerAudit: number;
  }> = {
    'Test': { monthly: 0, description: '20 pages from DCS only', hasOnDemand: false, tokensPerAudit: 0 },
    'Starter': { monthly: 3, description: '3 visual audits per month', hasOnDemand: true, tokensPerAudit: 30 },
    'Pro': { monthly: 5, description: '5 visual audits per month', hasOnDemand: true, tokensPerAudit: 30 },
    'Entrepreneur': { monthly: 20, description: '20 visual audits per month', hasOnDemand: true, tokensPerAudit: 30 },
    'Enterprise': { monthly: -1, description: 'Unlimited visual audits', hasOnDemand: true, tokensPerAudit: 30 }
  };

  const currentTierConfig = tierLimits[userTier];
  const canRunOnDemandAudit = currentTierConfig.hasOnDemand && (currentTierConfig.monthly === -1 || visualAuditsRemaining > 0);

  // Mock crawled pages from DCS report
  const crawledPages = [
    { 
      url: 'https://example.com/', 
      title: 'Homepage', 
      screenshot: '/placeholder.svg',
      issues: ['CLS issues detected', 'Button contrast low'],
      lastAudit: '2 hours ago'
    },
    { 
      url: 'https://example.com/about', 
      title: 'About Page', 
      screenshot: '/placeholder.svg',
      issues: ['Mobile nav overlap', 'Font too small'],
      lastAudit: '2 hours ago'
    },
    { 
      url: 'https://example.com/contact', 
      title: 'Contact Page', 
      screenshot: '/placeholder.svg',
      issues: ['Form not responsive'],
      lastAudit: '2 hours ago'
    }
  ];

  const handleRunAudit = async () => {
    if (!auditUrl.trim()) return;
    
    setIsRunningAudit(true);
    // Simulate API call
    setTimeout(() => {
      setIsRunningAudit(false);
      console.log('Visual audit completed for:', auditUrl);
    }, 3000);
  };

  const deviceTypes = [
    { icon: <Monitor className="h-6 w-6" />, name: "Desktop", viewport: "1920x1080" },
    { icon: <Tablet className="h-6 w-6" />, name: "Tablet", viewport: "1024x768" },
    { icon: <Smartphone className="h-6 w-6" />, name: "Mobile", viewport: "375x667" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Visual SEO Audit</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered visual analysis of your pages across devices
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {currentTierConfig.monthly === -1 ? 'Unlimited' : `${visualAuditsRemaining}/${currentTierConfig.monthly} remaining`}
        </Badge>
      </div>

      {/* On-Demand Visual Audit Section */}
      {currentTierConfig.hasOnDemand ? (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              On-Demand Visual Audit
            </CardTitle>
            <CardDescription>
              Run a comprehensive visual analysis on any page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter page URL to audit (e.g., https://example.com/page)"
                value={auditUrl}
                onChange={(e) => setAuditUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleRunAudit}
                disabled={!auditUrl.trim() || isRunningAudit || !canRunOnDemandAudit}
              >
                {isRunningAudit ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Camera className="mr-2 h-4 w-4" />
                    Run Visual Audit
                  </>
                )}
              </Button>
            </div>

            {!canRunOnDemandAudit && (
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-2 text-yellow-600 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="font-medium">Upgrade Required</span>
                </div>
                <p className="text-sm text-yellow-600/80">
                  You've reached your visual audit limit. Upgrade for more audits per month.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Upgrade Plan
                </Button>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span>Each audit uses {currentTierConfig.tokensPerAudit} Martech Tokens</span>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="glass-card border-white/10">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">On-Demand Visual Audits</h3>
            <p className="text-muted-foreground mb-4">
              Upgrade to Starter to unlock on-demand visual audits for any page
            </p>
            <Button>
              Upgrade to Starter
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Crawled Pages from DCS */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Pages from Domain Citation Score Report
          </CardTitle>
          <CardDescription>
            Visual analysis from your initial 20-page scan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crawledPages.map((page, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-3">
                    <img 
                      src={page.screenshot} 
                      alt={`Screenshot of ${page.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-base truncate">{page.title}</CardTitle>
                  <CardDescription className="text-xs truncate">{page.url}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {page.issues.slice(0, 2).map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-center gap-2 text-xs">
                        <AlertTriangle className="h-3 w-3 text-yellow-500" />
                        <span className="text-muted-foreground truncate">{issue}</span>
                      </div>
                    ))}
                    {page.issues.length > 2 && (
                      <p className="text-xs text-muted-foreground">
                        +{page.issues.length - 2} more issues
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                    <span className="text-xs text-muted-foreground">{page.lastAudit}</span>
                    <Button size="sm" variant="ghost" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Testing Info */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Multi-Device Analysis
          </CardTitle>
          <CardDescription>
            Every visual audit captures screenshots across multiple viewports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {deviceTypes.map((device, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="text-primary">{device.icon}</div>
                <div>
                  <h4 className="font-medium">{device.name}</h4>
                  <p className="text-sm text-muted-foreground">{device.viewport}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What We Analyze */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>AI Visual Analysis Capabilities</CardTitle>
          <CardDescription>
            Gemini Vision AI analyzes every visual element for SEO and UX issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Layout shifts and CLS issues</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mobile responsiveness problems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Button and CTA visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Font readability and contrast</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Image optimization opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Navigation usability issues</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Above-the-fold content analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cross-browser compatibility</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisualAuditPage;
