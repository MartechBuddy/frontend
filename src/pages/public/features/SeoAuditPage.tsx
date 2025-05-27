
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react";

const SeoAuditPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">AI-Powered SEO Audit</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive website analysis with AI-generated fix suggestions that go beyond traditional crawling.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Search className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Deep Site Crawling</h3>
          <p className="text-muted-foreground">
            Crawl your entire website to identify technical SEO issues, broken links, and optimization opportunities.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <AlertTriangle className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Issue Prioritization</h3>
          <p className="text-muted-foreground">
            AI ranks issues by impact, showing you which fixes will deliver the biggest SEO improvements first.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Automated Fixes</h3>
          <p className="text-muted-foreground">
            Generate code snippets and meta descriptions that can be applied automatically via WordPress integration.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Core Web Vitals</h3>
          <p className="text-muted-foreground">
            Monitor page speed, loading performance, and user experience metrics that Google uses for ranking.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <TrendingUp className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Progress Tracking</h3>
          <p className="text-muted-foreground">
            Track your SEO health score over time and see the impact of implemented fixes on your rankings.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Search className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Visual Analysis</h3>
          <p className="text-muted-foreground">
            AI-powered visual analysis shows how Google sees your pages, identifying layout and content issues.
          </p>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">How Our SEO Audit Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Comprehensive Crawl</h3>
            <p className="text-muted-foreground">Our AI crawls your website, analyzing every page for technical SEO issues, content problems, and optimization opportunities.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-muted-foreground">Advanced AI algorithms prioritize issues by impact and generate specific, actionable recommendations for each problem found.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">Automated Fixes</h3>
            <p className="text-muted-foreground">Apply fixes automatically through our WordPress integration or export detailed reports for manual implementation.</p>
          </div>
        </div>
      </div>

      {/* What Gets Analyzed */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">What We Analyze</h2>
        <Card className="glass-card border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Technical SEO</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Page load speed and Core Web Vitals</li>
                <li>• Mobile responsiveness</li>
                <li>• URL structure and redirects</li>
                <li>• XML sitemaps and robots.txt</li>
                <li>• Schema markup validation</li>
                <li>• Internal linking structure</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Content & On-Page</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Title tags and meta descriptions</li>
                <li>• Header structure (H1, H2, H3)</li>
                <li>• Image optimization and alt text</li>
                <li>• Content length and quality</li>
                <li>• Keyword optimization</li>
                <li>• Duplicate content detection</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Audit Your Website?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get a comprehensive SEO audit with AI-powered recommendations in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Free Audit</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeoAuditPage;
