
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Make Your Website 
            <span className="text-gradient block mt-2">AI-Ready & Automate Marketing</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Boost your website's performance with AI-powered tools. 
            Optimize content, automate marketing, and get actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="text-base"
              >
                Start Free Trial
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button text-base"
              >
                See Demo <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-screen overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-subtle" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl opacity-20 animate-pulse-subtle" style={{ animationDelay: "0.5s" }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
