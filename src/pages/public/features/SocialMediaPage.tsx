
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, BarChart, Users, Send, Inbox } from "lucide-react";

const SocialMediaPage: React.FC = () => {
  const features = [
    {
      title: "Social Media Scheduler",
      description: "Plan and schedule your social media posts across multiple platforms from one dashboard.",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Engagement Inbox",
      description: "Manage all your social media interactions and messages in a unified inbox.",
      icon: <Inbox className="h-6 w-6 text-primary" />
    },
    {
      title: "AI-Powered Replies",
      description: "Generate intelligent responses to comments and messages with AI assistance.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      title: "Social Analytics",
      description: "Track performance metrics and gain insights to improve your social media strategy.",
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Audience Insights",
      description: "Understand your audience demographics and engagement patterns.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Content Distribution",
      description: "Automatically distribute your content across multiple social platforms.",
      icon: <Send className="h-6 w-6 text-primary" />
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Social Media Suite</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Schedule, manage, and analyze your social media presence with intelligent insights.
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
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" 
              alt="Social Media Dashboard" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <h2 className="text-2xl font-bold mb-6 text-center">Supported Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">X</span>
            </div>
            <h3 className="font-semibold">Twitter/X</h3>
          </div>
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">in</span>
            </div>
            <h3 className="font-semibold">LinkedIn</h3>
          </div>
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">f</span>
            </div>
            <h3 className="font-semibold">Facebook</h3>
          </div>
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">IG</span>
            </div>
            <h3 className="font-semibold">Instagram</h3>
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">AI-Powered Social Media Management</h2>
            <p className="text-muted-foreground mb-6">
              Our AI tools help you create, schedule, and optimize social media content that resonates with your audience.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Smart Content Generation</h4>
                  <p className="text-sm text-muted-foreground">Generate platform-specific content with AI assistance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Optimal Posting Times</h4>
                  <p className="text-sm text-muted-foreground">AI determines the best times to post for maximum engagement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Performance Prediction</h4>
                  <p className="text-sm text-muted-foreground">AI predicts post performance before publishing.</p>
                </div>
              </div>
            </div>
            <Link to="/signup">
              <Button>Try AI Social Tools</Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="glass-card border-white/10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800" 
                alt="AI Social Media Tools" 
                className="w-full h-auto rounded-xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Transform your social media strategy</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start using our comprehensive social media tools to improve engagement and save time.
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

export default SocialMediaPage;
