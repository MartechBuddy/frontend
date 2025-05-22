
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle, Shield, ArrowUpRight } from "lucide-react";

const AiReadinessFeaturePage: React.FC = () => {
  const benefits = [
    {
      title: "AI-Optimized Content",
      description: "Ensure your content is structured to be easily consumed and cited by AI models.",
      icon: <Bot className="h-6 w-6 text-primary" />
    },
    {
      title: "Higher Search Visibility",
      description: "Position your site for top rankings in AI-driven search results.",
      icon: <ArrowUpRight className="h-6 w-6 text-primary" />
    },
    {
      title: "Actionable Recommendations",
      description: "Get specific fixes and improvements to boost your AI readiness score.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      title: "Future-Proof Strategy",
      description: "Adapt to the evolving landscape of AI-powered digital search.",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">AI Readiness</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Optimize your website for AI search engines and ensure your content is easily readable and cited by AI models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ai-readiness/free-check">
              <Button size="lg">Check Your Website Free</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg">Start Free Trial</Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-scale-in">
          <div className="glass-card border-white/10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800" 
              alt="AI Readiness Dashboard" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 transition hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-2xl p-8 mb-20 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-4">How AI Readiness Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold">Analyze</h3>
                  <p className="text-muted-foreground">We scan your site to evaluate how well it's structured for AI comprehension.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold">Identify</h3>
                  <p className="text-muted-foreground">Our AI identifies specific issues that affect your content's readability by AI models.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold">Fix</h3>
                  <p className="text-muted-foreground">We provide actionable recommendations to improve your AI readability score.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold">Monitor</h3>
                  <p className="text-muted-foreground">Continuous monitoring ensures your site stays optimized as AI algorithms evolve.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="md:w-1/3 p-4">
            <div className="bg-primary/10 p-6 rounded-xl text-center">
              <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Try Free AI Readiness Check</h3>
              <p className="text-sm text-muted-foreground mb-4">Get a basic score and top issues with your website's AI readiness</p>
              <Link to="/ai-readiness/free-check">
                <Button className="w-full">Check Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Ready to optimize for AI search?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start with a free AI Readiness check or sign up for a full analysis.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/ai-readiness/free-check">
            <Button size="lg">Free AI Check</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" size="lg">Sign Up Free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiReadinessFeaturePage;
