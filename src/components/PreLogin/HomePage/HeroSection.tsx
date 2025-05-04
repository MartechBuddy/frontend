
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Make Your Website <span className="text-primary">AI-Ready</span> & Automate Marketing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your website with AI-powered optimization tools and automate your marketing workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                See Demo
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg"></div>
            <div className="relative bg-black border border-white/10 rounded-lg p-6">
              <img 
                src="/placeholder.svg" 
                alt="MartechEngine.ai Dashboard" 
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
