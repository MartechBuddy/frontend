
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileText, PenTool, BarChart2, Repeat, Sparkles } from "lucide-react";

const ContentAutomationPage: React.FC = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create high-quality blog posts, articles, and social media content with AI assistance.",
      icon: <PenTool className="h-6 w-6 text-primary" />
    },
    {
      title: "Content Optimization",
      description: "Automatically optimize your content for both human readers and AI algorithms.",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      title: "Content Repurposing",
      description: "Transform existing content into multiple formats for different platforms and channels.",
      icon: <Repeat className="h-6 w-6 text-primary" />
    },
    {
      title: "Performance Analytics",
      description: "Track content performance and get insights to improve engagement and conversion.",
      icon: <BarChart2 className="h-6 w-6 text-primary" />
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Content Automation</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Generate, optimize, and manage content with AI-powered tools to save time and improve quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-scale-in">
          <div className="glass-card border-white/10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" 
              alt="Content Automation Dashboard" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 transition hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-2xl p-8 mb-20 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Content Hub</h2>
            <p className="text-muted-foreground mb-4">
              A centralized platform for all your content creation, management, and distribution needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Create long-form blog posts and articles</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Manage content versions and revisions</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Schedule content publication</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Integrate with your CMS and social platforms</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Campaign Management</h2>
            <p className="text-muted-foreground mb-4">
              Plan, execute, and analyze your content marketing campaigns with ease.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Create multi-channel content campaigns</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Automate content syndication</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Track campaign performance metrics</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>A/B test different content variations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Ready to revolutionize your content strategy?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start creating AI-powered content that resonates with both humans and algorithms.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="lg">View Pricing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentAutomationPage;
