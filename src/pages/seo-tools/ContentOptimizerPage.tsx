
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wand2, CheckCircle, AlertCircle, Target, Copy, Sparkles } from 'lucide-react';

interface OptimizationSuggestion {
  type: 'improvement' | 'warning' | 'success';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

const ContentOptimizerPage: React.FC = () => {
  const [content, setContent] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const mockSuggestions: OptimizationSuggestion[] = [
    {
      type: 'improvement',
      title: 'Add target keyword to H1 tag',
      description: 'Include your primary keyword "AI marketing" in the main heading for better SEO relevance.',
      impact: 'high'
    },
    {
      type: 'warning',
      title: 'Content too short',
      description: 'Consider expanding to at least 300 words for better search engine visibility.',
      impact: 'medium'
    },
    {
      type: 'success',
      title: 'Good keyword density',
      description: 'Your keyword density is optimal at 2.1% - well within the recommended range.',
      impact: 'high'
    }
  ];

  const handleOptimize = async () => {
    if (!content.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setAnalysisResults({
      score: 78,
      wordCount: content.split(' ').length,
      readabilityScore: 85,
      seoScore: 72,
      suggestions: mockSuggestions
    });
    setIsAnalyzing(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'improvement': return <Target className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Optimizer</h1>
          <p className="text-muted-foreground">
            Optimize your content for better search engine rankings
          </p>
        </div>
      </div>

      {/* Input Section */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            Content Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Target Keywords</label>
            <Textarea
              placeholder="Enter your target keywords (e.g., AI marketing, content automation)"
              value={targetKeywords}
              onChange={(e) => setTargetKeywords(e.target.value)}
              rows={2}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <Textarea
              placeholder="Paste your content here for optimization analysis..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              AI Calls required: 1 | Word count: {content.split(' ').filter(word => word.length > 0).length}
            </div>
            <Button 
              onClick={handleOptimize}
              disabled={!content.trim() || isAnalyzing}
              className="glass-button"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Optimize Content
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {analysisResults && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scores */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Optimization Scores</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(analysisResults.score)}`}>
                  {analysisResults.score}
                </div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
                <Progress value={analysisResults.score} className="mt-2" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">SEO Score</span>
                  <span className={`font-medium ${getScoreColor(analysisResults.seoScore)}`}>
                    {analysisResults.seoScore}%
                  </span>
                </div>
                <Progress value={analysisResults.seoScore} />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Readability</span>
                  <span className={`font-medium ${getScoreColor(analysisResults.readabilityScore)}`}>
                    {analysisResults.readabilityScore}%
                  </span>
                </div>
                <Progress value={analysisResults.readabilityScore} />
              </div>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card className="glass-card border-white/10 lg:col-span-2">
            <CardHeader>
              <CardTitle>Optimization Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="suggestions" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  <TabsTrigger value="readability">Readability</TabsTrigger>
                </TabsList>
                
                <TabsContent value="suggestions" className="space-y-4">
                  {analysisResults.suggestions.map((suggestion: OptimizationSuggestion, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                      {getSuggestionIcon(suggestion.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{suggestion.title}</span>
                          <Badge className={`${getImpactColor(suggestion.impact)} text-white text-xs`}>
                            {suggestion.impact} impact
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="glass-button">
                        Apply Fix
                      </Button>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="keywords">
                  <div className="text-center py-8 text-muted-foreground">
                    Keyword analysis will be displayed here
                  </div>
                </TabsContent>
                
                <TabsContent value="readability">
                  <div className="text-center py-8 text-muted-foreground">
                    Readability analysis will be displayed here
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ContentOptimizerPage;
