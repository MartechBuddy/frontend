
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-white/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to make your website AI-ready?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of marketers and website owners who are already leveraging AI to improve their online presence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="px-8">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="px-8 glass-button">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
