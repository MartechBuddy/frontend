
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link2, MapPin, AlertCircle, Target, Network, Zap } from "lucide-react";

const InternalLinkPlannerPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Internal Link Planner</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Map your site's link structure, detect orphan pages, and get AI-powered internal linking suggestions to boost your SEO performance.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Network className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Site Link Mapping</h3>
          <p className="text-muted-foreground">
            Visualize your entire internal link structure with interactive maps showing how pages connect to each other.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <AlertCircle className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Orphan Page Detection</h3>
          <p className="text-muted-foreground">
            Automatically find pages with no internal links pointing to them, helping you recover lost SEO value.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Link2 className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">AI Link Suggestions</h3>
          <p className="text-muted-foreground">
            Get intelligent suggestions for internal links with relevant anchor text that enhances user experience and SEO.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Target className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Link Equity Flow</h3>
          <p className="text-muted-foreground">
            Understand how PageRank flows through your site and optimize link placement for maximum SEO impact.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <MapPin className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Strategic Placement</h3>
          <p className="text-muted-foreground">
            AI recommends optimal placement for internal links based on content relevance and user journey mapping.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Automated Implementation</h3>
          <p className="text-muted-foreground">
            Apply link suggestions automatically through WordPress integration or export detailed implementation guides.
          </p>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">How Internal Link Planning Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Site Analysis</h3>
            <p className="text-muted-foreground">Our crawler maps your entire site structure, analyzing existing internal links and identifying connection patterns.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">AI Optimization</h3>
            <p className="text-muted-foreground">AI analyzes content relevance, user intent, and SEO potential to suggest strategic internal linking opportunities.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">Implementation</h3>
            <p className="text-muted-foreground">Review suggestions and implement them automatically via WordPress or follow detailed guides for manual implementation.</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Internal Linking Matters</h2>
        <Card className="glass-card border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">SEO Benefits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Distribute PageRank throughout your site</li>
                <li>• Help search engines discover new content</li>
                <li>• Establish topical authority and relevance</li>
                <li>• Reduce bounce rate and increase dwell time</li>
                <li>• Boost rankings for target pages</li>
                <li>• Create content hub and spoke structures</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">User Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Guide users through your content</li>
                <li>• Increase page views per session</li>
                <li>• Provide relevant additional information</li>
                <li>• Improve site navigation and discoverability</li>
                <li>• Support the user journey and conversions</li>
                <li>• Reduce exit rates on key pages</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Optimize Your Internal Link Strategy</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stop leaving SEO value on the table. Build a strategic internal linking structure that boosts rankings and improves user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Link Planning</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternalLinkPlannerPage;
