
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Brain, Rocket } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Connect Site',
      description: 'Add your website and connect Google Search Console in seconds',
      icon: <Globe className="h-12 w-12 text-primary" />
    },
    {
      step: 2, 
      title: 'AI Analyzes',
      description: 'Our AI crawls, audits, and identifies optimization opportunities',
      icon: <Brain className="h-12 w-12 text-primary" />
    },
    {
      step: 3,
      title: 'Automate & Publish',
      description: 'Apply fixes, generate content, and publish directly to WordPress',
      icon: <Rocket className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works: <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Visual representation of the core user journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="glass-card p-8 rounded-xl relative z-10 animate-fade-in">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="flex justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/signup">
            <Button size="lg">
              Get Started in 3 Steps
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
