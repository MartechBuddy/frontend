
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const CareersPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Help us revolutionize SEO with AI. We're looking for passionate individuals who want to shape the future of search engine optimization.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Open Positions</h2>
        <div className="space-y-6">
          <Card className="glass-card border-white/10 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Senior Frontend Developer</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Remote / San Francisco</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Engineering</span>
                  </div>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="text-muted-foreground">
              We're looking for an experienced React developer to help build the next generation of SEO tools. You'll work with AI APIs, complex data visualizations, and create intuitive user experiences.
            </p>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">AI/ML Engineer</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Remote / San Francisco</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>AI/ML</span>
                  </div>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="text-muted-foreground">
              Join our AI team to develop cutting-edge machine learning models for SEO analysis, content generation, and automated optimization workflows.
            </p>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">SEO Specialist</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="text-muted-foreground">
              Help shape our product roadmap and ensure our tools solve real SEO challenges. You'll work closely with engineering to define requirements and test new features.
            </p>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Don't See Your Role?</h2>
        <p className="text-muted-foreground mb-6">
          We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
        </p>
        <Button variant="outline">Contact Us</Button>
      </div>
    </div>
  );
};

export default CareersPage;
