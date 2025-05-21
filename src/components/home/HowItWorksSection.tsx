
import React from "react";
import { Scan, Cog, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Analyze",
    description: "Run a deep AI Readiness scan of your site.",
    icon: <Scan className="h-8 w-8 text-primary" />,
  },
  {
    number: "02",
    title: "Optimize",
    description: "Use AI tools to generate AI-friendly content & fixes.",
    icon: <Cog className="h-8 w-8 text-primary" />,
  },
  {
    number: "03",
    title: "Grow",
    description: "Track improvements and boost your digital presence.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">How We Help You Win in AI Search</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get your website AI-ready in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col items-center text-center animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Connector line between steps (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5">
                  <div className="h-full w-full bg-gradient-to-r from-primary/50 to-primary/20"></div>
                </div>
              )}
              
              {/* Step number bubble */}
              <div className="rounded-full h-20 w-20 glass-card border border-white/10 shadow-lg flex items-center justify-center mb-6 relative z-10">
                <div className="rounded-full h-16 w-16 bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              
              <div className="mb-3 font-mono text-sm text-primary opacity-80">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/features-overview">
            <Button variant="outline" size="lg" className="glass-button">
              See All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
