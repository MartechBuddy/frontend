
import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SeoGlossaryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SEO Glossary</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete glossary of SEO terms, definitions, and concepts to help you navigate the world of search engine optimization.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search terms..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="glass-card border-white/10 p-6">
          <h3 className="font-semibold mb-2">Algorithm</h3>
          <p className="text-muted-foreground">
            A complex system used by search engines to retrieve data and deliver the best possible results for a query.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <h3 className="font-semibold mb-2">Backlink</h3>
          <p className="text-muted-foreground">
            A link from one website to another. Search engines view backlinks as votes of confidence.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <h3 className="font-semibold mb-2">Core Web Vitals</h3>
          <p className="text-muted-foreground">
            A set of metrics related to speed, responsiveness, and visual stability that Google considers important for user experience.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <h3 className="font-semibold mb-2">Domain Authority</h3>
          <p className="text-muted-foreground">
            A search engine ranking score that predicts how likely a website is to rank in search engine result pages.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SeoGlossaryPage;
