
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, FileText, Cog, ArrowRight, BarChart, Workflow, Users } from "lucide-react";

const FeaturesOverviewPage: React.FC = () => {
  const aiFeatures = [
    {
      title: "AI SEO Platform",
      description: "All-in-one AI SEO overview with intelligent automation and real-time optimization.",
      icon: <Search className="h-7 w-7 text-primary" />,
      link: "/features-overview"
    },
    {
      title: "Automation Workflows", 
      description: "Fix site issues, optimize pages, plan clusters, and reclaim links automatically.",
      icon: <Workflow className="h-7 w-7 text-primary" />,
      link: "/features/automation-workflows"
    },
    {
      title: "WordPress Integration",
      description: "Live push, sync, and snippet preview directly to your WordPress site.",
      icon: <Cog className="h-7 w-7 text-primary" />,
      link: "/features/wordpress-integration"
    },
    {
      title: "Visual SEO Audit",
      description: "Playwright screenshots with Gemini Vision for comprehensive visual analysis.",
      icon: <BarChart className="h-7 w-7 text-primary" />,
      link: "/features/visual-seo-audit"
    }
  ];

  const technicalFeatures = [
    {
      title: "SEO Audit",
      description: "Crawl your site, identify issues, and get AI-powered fix suggestions.",
      icon: <Search className="h-7 w-7 text-primary" />,
      link: "/features/seo-audit"
    },
    {
      title: "Schema Markup",
      description: "JSON-LD generation, validation, and direct push to WordPress.",
      icon: <Cog className="h-7 w-7 text-primary" />,
      link: "/features/schema-markup"
    },
    {
      title: "Internal Link Planner",
      description: "Link mapping, orphan detection, and AI-generated link suggestions.",
      icon: <Workflow className="h-7 w-7 text-primary" />,
      link: "/features/internal-link-planner"
    },
    {
      title: "Local SEO",
      description: "NAP checking, citations management, and local schema generation.",
      icon: <Users className="h-7 w-7 text-primary" />,
      link: "/features/local-seo"
    }
  ];

  const contentFeatures = [
    {
      title: "Keyword Intelligence",
      description: "Metrics, clustering, and AI-powered opportunity identification.",
      icon: <Search className="h-7 w-7 text-primary" />,
      link: "/features/keyword-intelligence"
    },
    {
      title: "AI Content Writer",
      description: "Blog generation, content rewriting, and image integration.",
      icon: <FileText className="h-7 w-7 text-primary" />,
      link: "/features/ai-content-writer"
    },
    {
      title: "Backlink Insights",
      description: "GSC analysis, velocity tracking, and anchor text AI optimization.",
      icon: <BarChart className="h-7 w-7 text-primary" />,
      link: "/features/backlink-insights"
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Unleash the Power of AI for Your SEO</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          MartechEngine goes beyond traditional SEO tools with intelligent workflows, real-time AI optimization, and direct publishing capabilities.
        </p>
      </div>

      {/* AI SEO Platform Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">AI SEO Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <Button variant="ghost" className="p-0" asChild>
                <Link to={feature.link} className="flex items-center text-primary">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical SEO Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Technical SEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalFeatures.map((feature, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <Button variant="ghost" className="p-0" asChild>
                <Link to={feature.link} className="flex items-center text-primary">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Content & Keyword Intelligence Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Content & Keyword Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentFeatures.map((feature, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <Button variant="ghost" className="p-0" asChild>
                <Link to={feature.link} className="flex items-center text-primary">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Ready to See it in Action?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Experience the power of AI-driven SEO automation and take your website's performance to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link to="/features/comparison">
            <Button variant="outline" size="lg">View Full Comparison</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverviewPage;
