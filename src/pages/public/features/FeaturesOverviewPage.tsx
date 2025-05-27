
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Search, BarChart, ArrowRight } from "lucide-react";

const FeaturesOverviewPage: React.FC = () => {
  const features = [
    {
      title: "Content Automation",
      description: "Generate, optimize, and manage content with AI-powered tools to save time and improve quality.",
      icon: <FileText className="h-7 w-7 text-primary" />,
      link: "/features/content-automation"
    },
    {
      title: "SEO Tools",
      description: "Comprehensive suite of tools to improve your search engine rankings and visibility.",
      icon: <Search className="h-7 w-7 text-primary" />,
      link: "/features/seo-tools"
    },
    {
      title: "Social Media",
      description: "Schedule, manage, and analyze your social media presence with intelligent insights.",
      icon: <BarChart className="h-7 w-7 text-primary" />,
      link: "/features/social-media"
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">MartechEngine Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our comprehensive suite of marketing technology tools powered by AI
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, idx) => (
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
      
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your digital marketing?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of businesses using MartechEngine to stay ahead in the AI-driven digital landscape.
        </p>
        <Link to="/signup">
          <Button size="lg">Start Your Free Trial</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesOverviewPage;
