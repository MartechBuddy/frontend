
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Search, 
  TrendingUp, 
  Target,
  Globe,
  BarChart3,
  ArrowRight,
  Zap
} from 'lucide-react';

const KeywordIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Keyword Intelligence</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered <span className="text-gradient">Keyword Research</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover high-impact keywords with advanced AI analysis, semantic clustering, 
            and real-time SERP insights to dominate search rankings.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Brain className="mr-2 h-5 w-5" />
              Generate Keywords
            </Button>
            <Button size="lg" variant="outline">
              View Sample Analysis
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <Brain className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI Keyword Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced AI generates thousands of relevant keywords based on semantic 
                understanding and search intent analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Semantic Clustering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Intelligent grouping of related keywords by topic and intent 
                for better content planning and strategy.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Real-Time SERP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Live search results analysis powered by RTSIS technology 
                for current ranking opportunities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Results */}
        <Card className="glass-card border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Sample Keyword Analysis</CardTitle>
            <CardDescription>
              See the depth of insights you'll get from our AI keyword research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { keyword: 'digital marketing strategy', volume: '18,100', difficulty: 'Medium', intent: 'Commercial' },
                { keyword: 'content marketing tips', volume: '8,200', difficulty: 'Low', intent: 'Informational' },
                { keyword: 'seo optimization guide', volume: '12,400', difficulty: 'High', intent: 'Informational' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <div className="font-medium text-white">{item.keyword}</div>
                    <div className="text-sm text-muted-foreground">Intent: {item.intent}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">{item.volume}</div>
                      <div className="text-xs text-muted-foreground">Monthly Volume</div>
                    </div>
                    <Badge variant="outline">{item.difficulty}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Unlock Keyword Opportunities
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start discovering high-impact keywords for your content strategy
          </p>
          <Button size="lg">
            Start Keyword Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeywordIntelligencePage;
