
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, LineChart, Megaphone, Search, Share2, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Bot className="h-12 w-12 text-primary" />,
    title: "AI Readiness Check",
    description: "Optimize your website for AI-powered search engines. Get detailed scores and actionable recommendations to improve AI visibility.",
    link: "/features/ai-readiness",
    highlight: true
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "Content Automation",
    description: "Generate high-quality, SEO-optimized content using advanced AI. Create blogs, social posts, and marketing copy in minutes.",
    link: "/features/content-automation",
    highlight: false
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "SEO Tools Suite",
    description: "Complete SEO toolkit including keyword research, site audits, competitor analysis, and technical optimization tools.",
    link: "/features/seo-tools",
    highlight: false
  },
  {
    icon: <Share2 className="h-12 w-12 text-primary" />,
    title: "Social Media Optimization",
    description: "Manage, schedule, and optimize your social media presence across multiple platforms with AI-powered insights.",
    link: "/features/social-media",
    highlight: false
  }
];

const additionalFeatures = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Campaign Management",
    description: "Create and manage multi-platform marketing campaigns"
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Analytics & Reporting",
    description: "Track performance with comprehensive analytics"
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Content Syndication",
    description: "Distribute content across multiple channels automatically"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "AI-Powered Automation",
    description: "Automate repetitive marketing tasks with intelligent AI"
  }
];

const FeaturesOverviewPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to master AI-powered digital marketing. 
          From AI readiness optimization to content automation and beyond.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, idx) => (
          <Card 
            key={idx} 
            className={`glass-card transition-all duration-300 hover:scale-105 ${
              feature.highlight ? 'border-primary/30 shadow-lg shadow-primary/10' : 'border-white/10'
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className={`rounded-full p-3 ${
                  feature.highlight ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  {feature.icon}
                </div>
                {feature.highlight && (
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              <CardTitle className="text-2xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Link to={feature.link}>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, idx) => (
            <Card key={idx} className="glass-card border-white/10">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using MartechEngine to optimize their digital presence for the AI era.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ai-readiness/free-check">
            <Button size="lg" className="w-full sm:w-auto">
              Try Free AI Check
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign Up Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverviewPage;
