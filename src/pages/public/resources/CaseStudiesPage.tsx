
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target } from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how businesses like yours are achieving remarkable SEO results with MartechEngine's AI-powered platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="glass-card border-white/10 p-6">
          <div className="mb-4">
            <div className="text-sm text-primary font-medium mb-2">E-commerce</div>
            <h3 className="font-semibold text-lg">TechStore Increases Organic Traffic by 300%</h3>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm">300% increase in organic traffic</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm">150+ new keyword rankings</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-purple-500" />
              <span className="text-sm">$2M additional revenue</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Learn how TechStore used MartechEngine's AI workflows to identify content gaps and optimize their product pages.
          </p>
          <Button variant="outline" size="sm">Read Case Study</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <div className="mb-4">
            <div className="text-sm text-primary font-medium mb-2">SaaS</div>
            <h3 className="font-semibold text-lg">CloudCRM Dominates Competitive Keywords</h3>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm">500% increase in qualified leads</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Top 3 rankings for 50+ keywords</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-purple-500" />
              <span className="text-sm">40% reduction in CAC</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Discover how CloudCRM used AI-powered content generation to create a comprehensive resource hub.
          </p>
          <Button variant="outline" size="sm">Read Case Study</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <div className="mb-4">
            <div className="text-sm text-primary font-medium mb-2">Local Business</div>
            <h3 className="font-semibold text-lg">Denver Dental Practice Triples Local Visibility</h3>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm">200% increase in local traffic</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm">#1 rankings for dental services</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-purple-500" />
              <span className="text-sm">300+ new patients</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            See how a local dental practice used MartechEngine's local SEO tools to dominate their market.
          </p>
          <Button variant="outline" size="sm">Read Case Study</Button>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
