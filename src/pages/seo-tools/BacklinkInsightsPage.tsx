
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Link2, 
  TrendingUp, 
  Search, 
  Mail, 
  ExternalLink,
  Award,
  Target,
  Zap,
  Lock,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const BacklinkInsightsPage: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  // Mock data - would come from API
  const userTier: UserTier = 'Starter';
  const openPageRankScore = 3.2;
  const aiLinkOpportunityScore = 67;

  const tierFeatures: Record<UserTier, {
    hasOpenPageRank: boolean;
    hasAiLinkScore: boolean;
    hasUnlinkedMentions: boolean;
    hasBrokenLinks: boolean;
    hasOutreachDrafts: boolean;
    hasAdvancedProfiling: boolean;
  }> = {
    'Test': { 
      hasOpenPageRank: true, 
      hasAiLinkScore: false, 
      hasUnlinkedMentions: false, 
      hasBrokenLinks: false, 
      hasOutreachDrafts: false,
      hasAdvancedProfiling: false
    },
    'Starter': { 
      hasOpenPageRank: true, 
      hasAiLinkScore: true, 
      hasUnlinkedMentions: false, 
      hasBrokenLinks: false, 
      hasOutreachDrafts: false,
      hasAdvancedProfiling: false
    },
    'Pro': { 
      hasOpenPageRank: true, 
      hasAiLinkScore: true, 
      hasUnlinkedMentions: false, 
      hasBrokenLinks: false, 
      hasOutreachDrafts: false,
      hasAdvancedProfiling: false
    },
    'Entrepreneur': { 
      hasOpenPageRank: true, 
      hasAiLinkScore: true, 
      hasUnlinkedMentions: true, 
      hasBrokenLinks: true, 
      hasOutreachDrafts: true,
      hasAdvancedProfiling: false
    },
    'Enterprise': { 
      hasOpenPageRank: true, 
      hasAiLinkScore: true, 
      hasUnlinkedMentions: true, 
      hasBrokenLinks: true, 
      hasOutreachDrafts: true,
      hasAdvancedProfiling: true
    }
  };

  const currentTierConfig = tierFeatures[userTier];

  // Mock backlink data
  const linkOpportunities = [
    { 
      type: 'Unlinked Mention',
      domain: 'techcrunch.com',
      authority: 92,
      mention: 'MartechEngine provides powerful SEO insights...',
      opportunity: 'High',
      estimatedValue: 8.5
    },
    { 
      type: 'Broken Link',
      domain: 'marketingland.com',
      authority: 78,
      mention: 'Link to SEO tool comparison (404)',
      opportunity: 'Medium',
      estimatedValue: 6.2
    },
    { 
      type: 'Competitor Backlink',
      domain: 'searchengineland.com',
      authority: 85,
      mention: 'Similar tool mentioned in article',
      opportunity: 'High',
      estimatedValue: 7.8
    }
  ];

  const handleRunScan = async () => {
    setIsScanning(true);
    // Simulate API call
    setTimeout(() => {
      setIsScanning(false);
      console.log('Backlink scan completed');
    }, 3000);
  };

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case 'High': return 'bg-green-500/10 text-green-500';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500';
      case 'Low': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Backlink Insights</h1>
          <p className="text-muted-foreground mt-2">
            Analyze your backlink profile and discover new link opportunities
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {userTier} Plan
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Open PageRank Score */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Open PageRank Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {openPageRankScore}/10
              </div>
              <Progress value={openPageRankScore * 10} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Domain authority based on backlink analysis
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Link Opportunity Score */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              AI Link Opportunity Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentTierConfig.hasAiLinkScore ? (
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {aiLinkOpportunityScore}/100
                </div>
                <Progress value={aiLinkOpportunityScore} className="mb-3" />
                <p className="text-sm text-muted-foreground">
                  AI-calculated link building potential
                </p>
              </div>
            ) : (
              <div className="text-center">
                <Lock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Upgrade to Starter for AI opportunity scoring
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Link Opportunities Found */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Opportunities Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {currentTierConfig.hasUnlinkedMentions ? linkOpportunities.length : 0}
              </div>
              <p className="text-sm text-muted-foreground">
                Active link building opportunities
              </p>
              <Button 
                size="sm" 
                variant="outline" 
                className="mt-3"
                onClick={handleRunScan}
                disabled={isScanning}
              >
                {isScanning ? 'Scanning...' : 'Run New Scan'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Link Opportunities Tabs */}
      <Tabs defaultValue="opportunities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="opportunities">Link Opportunities</TabsTrigger>
          <TabsTrigger value="mentions" disabled={!currentTierConfig.hasUnlinkedMentions}>
            Unlinked Mentions
          </TabsTrigger>
          <TabsTrigger value="broken" disabled={!currentTierConfig.hasBrokenLinks}>
            Broken Links
          </TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="space-y-4">
          {currentTierConfig.hasUnlinkedMentions ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Link Building Opportunities</CardTitle>
                <CardDescription>
                  AI-discovered opportunities ranked by potential value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {linkOpportunities.map((opportunity, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {opportunity.type}
                            </Badge>
                            <Badge className={getOpportunityColor(opportunity.opportunity)}>
                              {opportunity.opportunity} Priority
                            </Badge>
                          </div>
                          <h4 className="font-semibold">{opportunity.domain}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {opportunity.mention}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">DA: {opportunity.authority}</div>
                          <div className="text-xs text-muted-foreground">Value: {opportunity.estimatedValue}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Page
                        </Button>
                        {currentTierConfig.hasOutreachDrafts && (
                          <Button size="sm">
                            <Mail className="mr-2 h-3 w-3" />
                            Draft Outreach
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Link Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Entrepreneur to unlock full unlinked mentions and broken link opportunities powered by RTSIS
                </p>
                <Button>
                  Upgrade to Entrepreneur
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="mentions" className="space-y-4">
          {currentTierConfig.hasUnlinkedMentions ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Unlinked Mentions</CardTitle>
                <CardDescription>
                  Find websites mentioning your brand without linking back
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                  <p>Run a scan to discover unlinked mentions of your brand</p>
                  <Button className="mt-4" onClick={handleRunScan} disabled={isScanning}>
                    <Search className="mr-2 h-4 w-4" />
                    {isScanning ? 'Scanning...' : 'Scan for Mentions'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unlinked Mentions</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Entrepreneur to discover unlinked brand mentions using RTSIS technology
                </p>
                <Button>
                  Upgrade to Entrepreneur
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="broken" className="space-y-4">
          {currentTierConfig.hasBrokenLinks ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Broken Link Opportunities</CardTitle>
                <CardDescription>
                  Find broken links in your niche for link building opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground">
                  <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                  <p>Scan for broken links in your industry to find replacement opportunities</p>
                  <Button className="mt-4" onClick={handleRunScan} disabled={isScanning}>
                    <Search className="mr-2 h-4 w-4" />
                    {isScanning ? 'Scanning...' : 'Find Broken Links'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Broken Link Building</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Entrepreneur to discover broken link opportunities using RTSIS
                </p>
                <Button>
                  Upgrade to Entrepreneur
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BacklinkInsightsPage;
