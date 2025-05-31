
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Network, 
  Search, 
  Target, 
  Link2, 
  Brain,
  Zap,
  Lock,
  AlertTriangle,
  TrendingDown,
  BarChart3,
  ArrowRight
} from 'lucide-react';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const InternalLinkingPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('');
  const [isGeneratingMap, setIsGeneratingMap] = useState(false);

  // Mock data - would come from API
  const userTier: UserTier = 'Pro';

  const tierFeatures: Record<UserTier, {
    hasBasicLinkCount: boolean;
    hasLinkPlanner: boolean;
    hasOrphanDetection: boolean;
    hasAiSuggestions: boolean;
    hasAdvancedMapping: boolean;
  }> = {
    'Test': { 
      hasBasicLinkCount: true, 
      hasLinkPlanner: false, 
      hasOrphanDetection: false, 
      hasAiSuggestions: false,
      hasAdvancedMapping: false
    },
    'Starter': { 
      hasBasicLinkCount: true, 
      hasLinkPlanner: true, 
      hasOrphanDetection: true, 
      hasAiSuggestions: false,
      hasAdvancedMapping: false
    },
    'Pro': { 
      hasBasicLinkCount: true, 
      hasLinkPlanner: true, 
      hasOrphanDetection: true, 
      hasAiSuggestions: true,
      hasAdvancedMapping: true
    },
    'Entrepreneur': { 
      hasBasicLinkCount: true, 
      hasLinkPlanner: true, 
      hasOrphanDetection: true, 
      hasAiSuggestions: true,
      hasAdvancedMapping: true
    },
    'Enterprise': { 
      hasBasicLinkCount: true, 
      hasLinkPlanner: true, 
      hasOrphanDetection: true, 
      hasAiSuggestions: true,
      hasAdvancedMapping: true
    }
  };

  const currentTierConfig = tierFeatures[userTier];

  // Mock internal linking data
  const linkingStats = {
    totalPages: 127,
    averageInternalLinks: 8.3,
    orphanedPages: 5,
    lowEquityPages: 23,
    topLinkedPages: 15
  };

  const orphanedPages = [
    { url: '/old-blog-post-2019', title: 'SEO Trends from 2019', internalLinks: 0, lastUpdated: '2019-12-15' },
    { url: '/unused-landing-page', title: 'Product Launch Page', internalLinks: 0, lastUpdated: '2020-03-20' },
    { url: '/test-page-draft', title: 'Draft Content Page', internalLinks: 0, lastUpdated: '2021-01-10' },
    { url: '/seasonal-campaign-2020', title: 'Holiday Campaign 2020', internalLinks: 0, lastUpdated: '2020-12-25' },
    { url: '/beta-feature-announcement', title: 'Beta Feature Launch', internalLinks: 0, lastUpdated: '2021-06-15' }
  ];

  const lowEquityPages = [
    { url: '/about-our-team', title: 'About Our Team', internalLinks: 2, potentialLinks: 8, authority: 'Medium' },
    { url: '/case-study-client-a', title: 'Client Success Story', internalLinks: 1, potentialLinks: 12, authority: 'High' },
    { url: '/feature-comparison', title: 'Feature Comparison', internalLinks: 3, potentialLinks: 15, authority: 'High' },
    { url: '/pricing-faq', title: 'Pricing FAQ', internalLinks: 2, potentialLinks: 6, authority: 'Medium' }
  ];

  const aiSuggestions = [
    {
      fromPage: '/blog/seo-best-practices',
      toPage: '/features/seo-audit',
      anchorText: 'comprehensive SEO audit tool',
      reason: 'Contextually relevant and supports conversion funnel',
      confidence: 92
    },
    {
      fromPage: '/blog/keyword-research-guide',
      toPage: '/features/keyword-intelligence',
      anchorText: 'AI-powered keyword research',
      reason: 'Direct topic match with high user intent',
      confidence: 88
    },
    {
      fromPage: '/case-studies/ecommerce-success',
      toPage: '/features/content-optimization',
      anchorText: 'content optimization strategies',
      reason: 'Supports case study claims with product features',
      confidence: 85
    }
  ];

  const handleGenerateMap = async () => {
    setIsGeneratingMap(true);
    setTimeout(() => {
      setIsGeneratingMap(false);
      console.log('Internal link map generated');
    }, 3000);
  };

  const getAuthorityColor = (authority: string) => {
    switch (authority) {
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
          <h1 className="text-3xl font-bold text-gradient">Internal Linking</h1>
          <p className="text-muted-foreground mt-2">
            Optimize your internal link structure for better SEO and user experience
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {userTier} Plan
        </Badge>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{linkingStats.totalPages}</div>
            <div className="text-xs text-muted-foreground">Total Pages</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{linkingStats.averageInternalLinks}</div>
            <div className="text-xs text-muted-foreground">Avg Links/Page</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">{linkingStats.orphanedPages}</div>
            <div className="text-xs text-muted-foreground">Orphaned Pages</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{linkingStats.lowEquityPages}</div>
            <div className="text-xs text-muted-foreground">Low Equity</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{linkingStats.topLinkedPages}</div>
            <div className="text-xs text-muted-foreground">Well Linked</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="map" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="map">Link Map</TabsTrigger>
          <TabsTrigger value="orphaned" disabled={!currentTierConfig.hasOrphanDetection}>
            Orphaned Pages
          </TabsTrigger>
          <TabsTrigger value="equity">Low Equity Pages</TabsTrigger>
          <TabsTrigger value="suggestions" disabled={!currentTierConfig.hasAiSuggestions}>
            AI Suggestions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-4">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                Internal Link Map Generator
              </CardTitle>
              <CardDescription>
                Visualize your internal link structure and identify optimization opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleGenerateMap}
                disabled={isGeneratingMap}
                className="w-full"
              >
                {isGeneratingMap ? (
                  <>
                    <BarChart3 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Link Map...
                  </>
                ) : (
                  <>
                    <Network className="mr-2 h-4 w-4" />
                    Generate Visual Link Map
                  </>
                )}
              </Button>

              {currentTierConfig.hasBasicLinkCount && (
                <div className="p-4 rounded-lg bg-white/5">
                  <h4 className="font-medium mb-2">Quick Stats from DCS Scan</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Pages with 0 internal links: <span className="font-medium text-red-500">5</span></div>
                    <div>Pages with 1-2 links: <span className="font-medium text-yellow-500">23</span></div>
                    <div>Pages with 3-5 links: <span className="font-medium text-green-500">67</span></div>
                    <div>Pages with 6+ links: <span className="font-medium text-blue-500">32</span></div>
                  </div>
                </div>
              )}

              {!currentTierConfig.hasAdvancedMapping && (
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="flex items-center gap-2 text-yellow-600 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="font-medium">Upgrade for Advanced Mapping</span>
                  </div>
                  <p className="text-sm text-yellow-600/80">
                    Pro and higher plans include visual link maps and advanced topology analysis.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orphaned" className="space-y-4">
          {currentTierConfig.hasOrphanDetection ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  Orphaned Pages
                </CardTitle>
                <CardDescription>
                  Pages with no internal links pointing to them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orphanedPages.map((page, index) => (
                    <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium">{page.title}</h4>
                          <p className="text-sm text-muted-foreground">{page.url}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last updated: {page.lastUpdated}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-red-500">
                            {page.internalLinks} links
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Link2 className="mr-2 h-3 w-3" />
                            Add Links
                          </Button>
                        </div>
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
                <h3 className="text-xl font-semibold mb-2">Orphaned Page Detection</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Starter to identify pages with no internal links
                </p>
                <Button>
                  Upgrade to Starter
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="equity" className="space-y-4">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Low Internal Link Equity Pages
              </CardTitle>
              <CardDescription>
                Pages that could benefit from more internal links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowEquityPages.map((page, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium">{page.title}</h4>
                        <p className="text-sm text-muted-foreground">{page.url}</p>
                      </div>
                      <Badge className={getAuthorityColor(page.authority)}>
                        {page.authority} Authority
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Current: {page.internalLinks} links • Potential: +{page.potentialLinks} more
                      </div>
                      <Button size="sm" variant="outline">
                        <Target className="mr-2 h-3 w-3" />
                        Plan Links
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          {currentTierConfig.hasAiSuggestions ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Anchor Text Suggestions
                </CardTitle>
                <CardDescription>
                  Intelligent suggestions for internal linking opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <ArrowRight className="h-4 w-4 text-primary" />
                            <span className="font-medium">Link Opportunity</span>
                            <Badge variant="outline" className="text-xs">
                              {suggestion.confidence}% confidence
                            </Badge>
                          </div>
                          <p className="text-sm mb-1">
                            <span className="text-muted-foreground">From:</span> {suggestion.fromPage}
                          </p>
                          <p className="text-sm mb-2">
                            <span className="text-muted-foreground">To:</span> {suggestion.toPage}
                          </p>
                          <div className="p-2 rounded bg-primary/10 text-sm">
                            <span className="text-muted-foreground">Suggested anchor:</span> 
                            <span className="font-medium text-primary ml-1">"{suggestion.anchorText}"</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">Reason:</span> {suggestion.reason}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Zap className="mr-2 h-3 w-3" />
                          Apply Suggestion
                        </Button>
                        <Button size="sm" variant="outline">
                          Customize
                        </Button>
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
                <h3 className="text-xl font-semibold mb-2">AI Anchor Text Suggestions</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Pro for AI-powered internal linking suggestions and anchor text optimization
                </p>
                <Button>
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InternalLinkingPage;
