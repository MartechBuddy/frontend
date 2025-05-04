
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <div className="bg-white/5 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">AI Readiness</h3>
            <p className="text-muted-foreground mb-4">
              Scan your website for AI optimization opportunities and prepare your content for the future of search.
            </p>
            <Link to="/features/ai-readiness" className="text-primary hover:underline text-sm">Learn more →</Link>
          </div>
          <div className="glass-card border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Content Automation</h3>
            <p className="text-muted-foreground mb-4">
              Generate SEO-optimized content and social media posts with AI that understands your brand voice.
            </p>
            <Link to="/features/content-automation" className="text-primary hover:underline text-sm">Learn more →</Link>
          </div>
          <div className="glass-card border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Analytics</h3>
            <p className="text-muted-foreground mb-4">
              Track your performance with advanced analytics that show real impact on traffic, engagement, and conversions.
            </p>
            <Link to="/features/analytics" className="text-primary hover:underline text-sm">Learn more →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
