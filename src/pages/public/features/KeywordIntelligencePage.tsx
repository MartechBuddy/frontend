
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Target, TrendingUp, Lightbulb, BarChart3, Users } from "lucide-react";

const KeywordIntelligencePage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Keyword Intelligence</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover high-impact keywords, analyze search intent, and find content opportunities with advanced AI clustering and competitor analysis.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Search className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Smart Keyword Discovery</h3>
          <p className="text-muted-foreground">
            AI-powered keyword research that goes beyond basic tools to find high-opportunity keywords your competitors miss.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Target className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Search Intent Analysis</h3>
          <p className="text-muted-foreground">
            Automatically categorize keywords by search intent (informational, commercial, transactional) to align with user behavior.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <BarChart3 className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Advanced Clustering</h3>
          <p className="text-muted-foreground">
            Group related keywords into topic clusters to build comprehensive content strategies and topic authority.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <TrendingUp className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Opportunity Scoring</h3>
          <p className="text-muted-foreground">
            AI calculates keyword opportunity scores based on search volume, competition, and your site's ranking potential.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Users className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Competitor Gaps</h3>
          <p className="text-muted-foreground">
            Identify keywords your competitors rank for but you don't, plus find content gaps in your niche.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Lightbulb className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Content Ideas</h3>
          <p className="text-muted-foreground">
            Generate content briefs and article outlines directly from keyword clusters with AI assistance.
          </p>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">How Keyword Intelligence Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Seed & Discover</h3>
            <p className="text-muted-foreground">Input seed keywords or topics. Our AI expands your list with related terms, long-tail variations, and question-based keywords.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">Analyze & Cluster</h3>
            <p className="text-muted-foreground">AI analyzes search intent, difficulty, and opportunity scores while automatically clustering related keywords into content themes.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">Execute & Track</h3>
            <p className="text-muted-foreground">Generate content briefs for each cluster, create optimized articles, and track ranking performance over time.</p>
          </div>
        </div>
      </div>

      {/* Features Deep Dive */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Advanced Features</h2>
        <Card className="glass-card border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">AI-Powered Analysis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Search volume and trend analysis</li>
                <li>• Keyword difficulty assessment</li>
                <li>• SERP feature opportunities</li>
                <li>• Seasonal trend detection</li>
                <li>• Related question discovery</li>
                <li>• Long-tail keyword expansion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Strategic Insights</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Content gap identification</li>
                <li>• Competitor keyword analysis</li>
                <li>• Topic authority mapping</li>
                <li>• User intent classification</li>
                <li>• Priority scoring algorithms</li>
                <li>• ROI potential calculation</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Unlock Hidden Keyword Opportunities</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stop guessing and start targeting keywords that actually drive results. Get AI-powered insights that traditional tools miss.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Finding Keywords</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeywordIntelligencePage;
