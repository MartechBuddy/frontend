
import React from "react";
import { Scan, Wrench, LineChart } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Scan className="h-12 w-12 text-primary" />,
      title: "Scan Your Website",
      description: "Our AI analyzes your website for optimization opportunities across SEO, content structure, and technical implementation.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Optimize & Create",
      description: "Apply our AI-powered recommendations and create new content optimized for both search engines and human readers.",
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: "Monitor Results",
      description: "Track your performance improvements with detailed analytics and continue optimizing based on data-driven insights.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        How It Works
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Three simple steps to transform your marketing strategy
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-6 rounded-full mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
