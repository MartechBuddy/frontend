
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Target, TrendingUp } from "lucide-react";

const GuidesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SEO Guides & Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master SEO with our comprehensive guides, tutorials, and best practices. From beginner basics to advanced strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <BookOpen className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">SEO Fundamentals</h3>
          <p className="text-muted-foreground mb-4">
            Learn the basics of search engine optimization and how to get started with your SEO journey.
          </p>
          <Button variant="outline" size="sm">Read Guide</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Target className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Keyword Research Mastery</h3>
          <p className="text-muted-foreground mb-4">
            Advanced strategies for finding and targeting the right keywords for your business.
          </p>
          <Button variant="outline" size="sm">Read Guide</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <TrendingUp className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Technical SEO</h3>
          <p className="text-muted-foreground mb-4">
            Deep dive into technical aspects of SEO including site speed, crawling, and indexing.
          </p>
          <Button variant="outline" size="sm">Read Guide</Button>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-6">
          Can't find what you're looking for?
        </p>
        <Link to="/company/contact">
          <Button>Contact Support</Button>
        </Link>
      </div>
    </div>
  );
};

export default GuidesPage;
