
import React from 'react';
import { Search, Zap, Rocket } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "1. Connect Your Website",
      description: "Add your domain and get an instant Domain Citation Score analysis of your SEO health."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "2. AI Identifies Opportunities",
      description: "Our AI scans your site and identifies high-impact optimization opportunities using real-time data."
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "3. Automate & Optimize",
      description: "Apply AI fixes with one click, generate SEO content, and watch your rankings improve automatically."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How MartechEngine <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to transform your SEO performance with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="glass-card p-8 mb-6 hover:scale-105 transition-transform duration-200">
                  <div className="flex justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
