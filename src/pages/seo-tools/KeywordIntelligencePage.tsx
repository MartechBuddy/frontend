
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Brain, 
  Zap,
  ArrowRight,
  Lock,
  Eye,
  BarChart3,
  Globe,
  Users
} from 'lucide-react';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const KeywordIntelligencePage: React.FC = () => {
  const [keywordInput, setKeywordInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data - would come from API
  const userTier: UserTier = 'Starter';

  const tierFeatures: Record<UserTier, {
    basicKeywordGen: boolean;
    semanticClustering: boolean;
    aiDifficulty: boolean;
    rtsisSerpAnalysis: boolean;
    competitorDiscovery: boolean;
    tokensPerGeneration: number;
    tokensPerRtsis: number;
  }> = {
    'Test': { 
      basicKeywordGen: true, 
      semanticClustering: false, 
      aiDifficulty: false, 
      rtsisSerpAnalysis: false, 
      competitorDiscovery: false,
      tokensPerGeneration: 2,
      tokensPerRtsis: 50
    },
    'Starter': { 
      basicKeywordGen: true, 
      semanticClustering: true, 
      aiDifficulty: false, 
      rtsisSerpAnalysis: true, 
      competitorDiscovery: false,
      tokensPerGeneration: 2,
      tokensPerRtsis: 50
    },
    'Pro': { 
      basicKeywordGen: true, 
      semanticClustering: true, 
      aiDifficulty: false, 
      rtsisSerpAnalysis: true, 
      competitorDiscovery: false,
      tokensPerGeneration: 2,
      tokensPerRtsis: 50
    },
    'Entrepreneur': { 
      basicKeywordGen: true, 
      semanticClustering: true, 
      aiDifficulty: true, 
      rtsisSerpAnalysis: true, 
      competitorDiscovery: true,
      tokensPerGeneration: 2,
      tokensPerRtsis: 50
    },
    'Enterprise': { 
      basicKeywordGen: true, 
      semanticClustering: true, 
      aiDifficulty: true, 
      rtsisSerpAnalysis: true, 
      competitorDiscovery: true,
      tokensPerGeneration: 2,
      tokensPerRtsis: 50
    }
  };

  const currentTierConfig = tierFeatures[userTier];

  // Mock keyword data
  const generatedKeywords = [
    { keyword: 'digital marketing', volume: 18100, difficulty: 'Medium', intent: 'Commercial', cluster: 'Marketing' },
    { keyword: 'content marketing strategy', volume: 5400, difficulty: 'Low', intent: 'Informational', cluster: 'Content' },
    { keyword: 'seo optimization', volume: 12100, difficulty: 'High', intent: 'Commercial', cluster: 'SEO' },
    { keyword: 'social media marketing', volume: 9900, difficulty: 'Medium', intent: 'Commercial', cluster: 'Social' }
  ];

  const semanticClusters = [
    { name: 'Marketing Strategy', keywords: 15, avgVolume: 8500, difficulty: 'Medium' },
    { name: 'Content Creation', keywords: 12, avgVolume: 6200, difficulty: 'Low' },
    { name: 'SEO Techniques', keywords: 18, avgVolume: 11200, difficulty: 'High' },
    { name: 'Social Media', keywords: 10, avgVolume: 7800, difficulty: 'Medium' }
  ];

  const handleGenerateKeywords = async () => {
    if (!keywordInput.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      console.log('Keywords generated for:', keywordInput);
    }, 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'bg-green-500/10 text-green-500';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500';
      case 'High': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Keyword Intelligence</h1>
          <p className="text-muted-foreground mt-2">
            Discover high-impact keywords with AI-powered insights and real-time data
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {userTier} Plan
        </Badge>
      </div>

      {/* Keyword Generator */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Keyword Generator
          </CardTitle>
          <CardDescription>
            Generate keyword ideas using advanced AI and semantic understanding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Input
              placeholder="Enter seed keyword or topic (e.g., 'digital marketing')"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleGenerateKeywords}
              disabled={!keywordInput.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <Search className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Generate Keywords
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4" />
            <span>Uses {currentTierConfig.tokensPerGeneration} Martech Tokens per generation</span>
          </div>
        </CardContent>
      </Card>

      {/* Results Tabs */}
      <Tabs defaultValue="keywords" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="clusters" disabled={!currentTierConfig.semanticClustering}>
            Semantic Clusters
          </TabsTrigger>
          <TabsTrigger value="difficulty" disabled={!currentTierConfig.aiDifficulty}>
            AI Difficulty
          </TabsTrigger>
          <TabsTrigger value="serp" disabled={!currentTierConfig.rtsisSerpAnalysis}>
            SERP Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="keywords" className="space-y-4">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Generated Keywords</CardTitle>
              <CardDescription>
                AI-generated keyword suggestions based on your input
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generatedKeywords.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Intent: {keyword.intent} • Cluster: {keyword.cluster}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-medium">{keyword.volume.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Monthly Volume</div>
                      </div>
                      <Badge className={getDifficultyColor(keyword.difficulty)}>
                        {keyword.difficulty}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clusters" className="space-y-4">
          {currentTierConfig.semanticClustering ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Semantic Keyword Clusters</CardTitle>
                <CardDescription>
                  Related keywords grouped by semantic meaning and intent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {semanticClusters.map((cluster, index) => (
                    <Card key={index} className="glass-card border-white/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{cluster.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Keywords:</span>
                            <span className="font-medium">{cluster.keywords}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Avg Volume:</span>
                            <span className="font-medium">{cluster.avgVolume.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Difficulty:</span>
                            <Badge size="sm" className={getDifficultyColor(cluster.difficulty)}>
                              {cluster.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-3">
                          View All Keywords
                        </Button>
                      </CardContent>
                    </Card>
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
                <h3 className="text-xl font-semibold mb-2">Semantic Clustering</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Starter to unlock semantic keyword clustering and grouping
                </p>
                <Button>
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="difficulty" className="space-y-4">
          {currentTierConfig.aiDifficulty ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>AI-Estimated Keyword Difficulty</CardTitle>
                <CardDescription>
                  Machine learning-powered difficulty scoring with competitor analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  This feature will show AI-estimated difficulty scores and ranking opportunities.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Keyword Difficulty</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Entrepreneur for AI-estimated keyword difficulty scores and competitor discovery
                </p>
                <Button>
                  Upgrade to Entrepreneur
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="serp" className="space-y-4">
          {currentTierConfig.rtsisSerpAnalysis ? (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Real-Time SERP Insights</CardTitle>
                <CardDescription>
                  Live search results analysis powered by RTSIS technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground space-y-4">
                  <Globe className="h-12 w-12 mx-auto text-primary/50" />
                  <p>
                    Enter a keyword above and generate suggestions to see real-time SERP analysis
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Zap className="h-4 w-4" />
                    <span>Uses {currentTierConfig.tokensPerRtsis} Martech Tokens per SERP scan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time SERP Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Upgrade to Starter to unlock real-time SERP insights and competitor analysis
                </p>
                <Button>
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KeywordIntelligencePage;
