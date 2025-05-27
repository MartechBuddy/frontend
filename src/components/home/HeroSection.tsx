
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI-Powered SEO Automation</span>
            <br />
            for Unrivaled Growth
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            MartechEngine goes beyond traditional tools with intelligent workflows, 
            real-time AI optimization, and direct publishing.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-4 group">
                Try MartechEngine Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass-button group">
                <Play className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
            </Link>
          </div>
          
          {/* Mini Login Link */}
          <div className="text-sm text-muted-foreground">
            Already have an account? 
            <Link to="/login" className="text-primary hover:underline ml-1">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
