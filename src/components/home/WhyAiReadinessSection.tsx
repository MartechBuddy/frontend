
import React from "react";
import { Bot, Brain, LineChart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Be AI-Friendly",
    description: "Optimize content to be easily consumed and cited by AI models like ChatGPT and Google's Gemini."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Gain Visibility",
    description: "Position your site for top rankings in AI-driven search results and featured snippets."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Future-Proof Your SEO",
    description: "Adapt to the evolving landscape of digital search with AI-ready content strategies."
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Actionable Insights",
    description: "Get specific recommendations to improve AI readability and citability of your content."
  }
];

const WhyAiReadinessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Why AI Readiness is Your Next SEO Frontier</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With the rise of AI-powered search, structured and comprehensible content 
            is key for AI models to understand and recommend your website.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 hover:border-primary/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/features/ai-readiness">
            <Button size="lg" className="glass-button">
              Explore AI Readiness Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyAiReadinessSection;
