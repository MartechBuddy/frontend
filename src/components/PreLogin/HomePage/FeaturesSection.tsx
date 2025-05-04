
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gauge, FileText, BarChart } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        AI-Powered Features for Modern Marketing
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Optimize your website, create content, and analyze performance with AI assistance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card border border-white/10 p-6 rounded-lg">
          <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
            <Gauge className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">AI Readiness</h3>
          <p className="text-muted-foreground mb-4">
            Assess your website's AI optimization level and get actionable recommendations.
          </p>
          <Link to="/features/ai-readiness">
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Link>
        </div>
        
        <div className="glass-card border border-white/10 p-6 rounded-lg">
          <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Content Automation</h3>
          <p className="text-muted-foreground mb-4">
            Generate, optimize, and schedule content across multiple platforms.
          </p>
          <Link to="/features/content-automation">
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Link>
        </div>
        
        <div className="glass-card border border-white/10 p-6 rounded-lg">
          <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">
            <BarChart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
          <p className="text-muted-foreground mb-4">
            Get insights on your content performance and audience engagement.
          </p>
          <Link to="/features/analytics">
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
