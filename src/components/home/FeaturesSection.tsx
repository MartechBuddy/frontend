
import React from "react";
import { Bot, BarChartHorizontal, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "AI Readiness Score",
    description: "Get a complete assessment of how AI-ready your website is, with actionable steps to improve.",
    icon: <Bot className="h-7 w-7 text-primary" />,
    link: "/features/ai-readiness"
  },
  {
    title: "Content Automation",
    description: "Automatically generate and optimize content for your website, blog, and social media.",
    icon: <Search className="h-7 w-7 text-primary" />,
    link: "/features/content-automation"
  },
  {
    title: "Analytics & Insights",
    description: "Track your website's performance and get insights to improve your SEO rankings.",
    icon: <BarChartHorizontal className="h-7 w-7 text-primary" />,
    link: "/features/analytics"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our suite of AI-powered tools helps you optimize your website, create content, and automate marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <Button variant="ghost" className="p-0" asChild>
                <a href={feature.link} className="flex items-center text-primary">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
