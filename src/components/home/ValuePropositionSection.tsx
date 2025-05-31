
import React from 'react';
import { Zap, Target, Globe, BarChart3 } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI-Powered SEO Automation",
      description: "Intelligent workflows that automatically optimize your website's SEO without manual intervention."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Real-Time Deep Internet Search",
      description: "Get live data and insights with our proprietary RTSIS technology for up-to-date SEO intelligence."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Visual SEO Audit",
      description: "See exactly what needs fixing with AI-generated visual overlays on your website screenshots."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Domain Citation Score",
      description: "Get a comprehensive 0-100 score of your website's SEO health with actionable insights."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Outsmart SEO Complexity</span> with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MartechEngine combines visual audits, real-time data, and intelligent automation 
              to deliver SEO results that traditional tools simply can't match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
