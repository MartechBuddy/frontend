
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
        Make Your Website AI-Ready & Automate Marketing
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
        Optimize your website for AI visibility, automate content creation, and enhance marketing performance with AI-driven insights.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/signup">
          <Button size="lg" className="px-8">
            Start Free Trial
          </Button>
        </Link>
        <Link to="/contact">
          <Button size="lg" variant="outline" className="px-8 glass-button">
            See Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
