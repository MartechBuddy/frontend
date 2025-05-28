
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Play, Clock } from "lucide-react";

const WebinarsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SEO Webinars</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our expert-led webinars to learn advanced SEO strategies, master MartechEngine features, and stay ahead of industry trends.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Upcoming Webinars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card border-white/10 p-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-8 w-8 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">AI-Powered SEO: The Future is Now</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Learn how to leverage AI for keyword research, content optimization, and technical SEO.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>March 15, 2025</span>
                  <span>2:00 PM EST</span>
                </div>
                <Button size="sm">Register Now</Button>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-8 w-8 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Technical SEO Masterclass</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Deep dive into Core Web Vitals, site architecture, and advanced technical optimization.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>March 22, 2025</span>
                  <span>1:00 PM EST</span>
                </div>
                <Button size="sm">Register Now</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Past Webinars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card border-white/10 p-6">
            <Play className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Keyword Research Revolution</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Advanced strategies for finding profitable keywords in 2025.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Clock className="h-3 w-3" />
              <span>45 minutes</span>
            </div>
            <Button variant="outline" size="sm">Watch Recording</Button>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <Play className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Content That Converts</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Creating SEO-optimized content that drives traffic and conversions.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Clock className="h-3 w-3" />
              <span>52 minutes</span>
            </div>
            <Button variant="outline" size="sm">Watch Recording</Button>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <Play className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Local SEO Success</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Dominate local search results with proven strategies and tools.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Clock className="h-3 w-3" />
              <span>38 minutes</span>
            </div>
            <Button variant="outline" size="sm">Watch Recording</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;
