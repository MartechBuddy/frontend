
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Monitor, BarChart, FileText, Zap } from "lucide-react";

const DemoPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">See MartechEngine in Action</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch how MartechEngine's AI-powered SEO automation transforms your website optimization workflow in minutes, not hours.
        </p>
      </div>

      {/* Interactive Demo Video */}
      <div className="mb-16">
        <Card className="glass-card border-white/10 p-8 rounded-xl">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <Play className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Product Demo</h3>
              <p className="text-muted-foreground">Watch our 3-minute overview</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="mr-4">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
            <Button variant="outline" size="lg">
              <Monitor className="mr-2 h-4 w-4" />
              Live Product Tour
            </Button>
          </div>
        </Card>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <BarChart className="h-8 w-8 text-primary" />,
            title: "AI Site Audit",
            description: "Comprehensive analysis with actionable fixes"
          },
          {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: "Content Generation",
            description: "SEO-optimized articles in minutes"
          },
          {
            icon: <Zap className="h-8 w-8 text-primary" />,
            title: "Automation Workflows",
            description: "Set it and forget it optimization"
          },
          {
            icon: <Monitor className="h-8 w-8 text-primary" />,
            title: "WordPress Integration",
            description: "Direct publishing and sync"
          }
        ].map((feature, idx) => (
          <Card key={idx} className="glass-card border-white/10 p-6 text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your SEO?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          See how MartechEngine can automate your SEO workflow and boost your rankings with AI-powered optimization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Button variant="outline" size="lg">
            Request Personalized Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
