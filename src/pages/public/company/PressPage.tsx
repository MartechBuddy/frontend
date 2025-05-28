
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calendar, ExternalLink } from "lucide-react";

const PressPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Latest news, press releases, and media resources for MartechEngine. Download our media kit and stay updated with company announcements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Download className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Media Kit</h3>
          <p className="text-muted-foreground mb-6">
            Download our complete media kit including logos, product screenshots, company information, and executive bios.
          </p>
          <Button>Download Media Kit</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <ExternalLink className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Press Contact</h3>
          <p className="text-muted-foreground mb-6">
            For media inquiries, interviews, and press-related questions, please contact our press team.
          </p>
          <Button variant="outline">Contact Press Team</Button>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Recent Press Releases</h2>
        <div className="space-y-6">
          <Card className="glass-card border-white/10 p-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">MartechEngine Raises $10M Series A to Accelerate AI-Powered SEO Innovation</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Funding will fuel product development and help businesses achieve better search rankings through advanced AI automation.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">January 15, 2025</span>
                  <Button variant="link" size="sm" className="h-auto p-0">Read More</Button>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">MartechEngine Launches Revolutionary Visual SEO Audit Feature</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  New AI-powered visual analysis helps identify SEO issues that traditional crawlers miss.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">December 8, 2024</span>
                  <Button variant="link" size="sm" className="h-auto p-0">Read More</Button>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">MartechEngine Partners with Leading WordPress Hosting Providers</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Strategic partnerships enable seamless integration and one-click SEO optimization for millions of websites.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">November 22, 2024</span>
                  <Button variant="link" size="sm" className="h-auto p-0">Read More</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8">Media Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card border-white/10 p-6">
            <h4 className="font-semibold mb-2">TechCrunch</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "MartechEngine's AI approach to SEO is changing how businesses think about search optimization."
            </p>
            <Button variant="link" size="sm" className="h-auto p-0">Read Article</Button>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <h4 className="font-semibold mb-2">Search Engine Journal</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "The future of SEO is automated, and MartechEngine is leading the charge."
            </p>
            <Button variant="link" size="sm" className="h-auto p-0">Read Article</Button>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <h4 className="font-semibold mb-2">MarTech Today</h4>
            <p className="text-sm text-muted-foreground mb-3">
              "How AI is revolutionizing SEO workflows and driving better results."
            </p>
            <Button variant="link" size="sm" className="h-auto p-0">Read Article</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
