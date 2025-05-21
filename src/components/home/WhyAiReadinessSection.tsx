
import React from "react";
import { Bot, Search, LineChart, FileText } from "lucide-react";

const reasons = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Be AI-Friendly",
    description: "Optimize content to be easily consumed and cited by AI models."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Gain Visibility",
    description: "Position your site for top rankings in AI-driven search results."
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Future-Proof Your SEO",
    description: "Adapt to the evolving landscape of digital search."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Actionable Insights",
    description: "Get specific recommendations to improve AI readability and citability."
  }
];

const WhyAiReadinessSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Why AI Readiness is Your Next SEO Frontier</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With the rise of AI-powered search, structured and comprehensible content is key for AI models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 transition hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAiReadinessSection;
