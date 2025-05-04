
import React from "react";

const HowItWorksSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-2xl">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Scan</h3>
          <p className="text-muted-foreground">
            Analyze your website for AI optimization opportunities and content gaps.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-2xl">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Optimize</h3>
          <p className="text-muted-foreground">
            Apply AI-powered recommendations to improve your content and site structure.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-2xl">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Monitor</h3>
          <p className="text-muted-foreground">
            Track your progress and see real-time improvements in your marketing performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
