
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Search, Settings, Zap } from "lucide-react";

const DocumentationPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete documentation for MartechEngine features, API references, and integration guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Book className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            Quick start guide to set up your first project and run your initial SEO audit.
          </p>
          <Button variant="outline" size="sm">View Docs</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Search className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">SEO Tools</h3>
          <p className="text-muted-foreground mb-4">
            Detailed documentation for all SEO tools including site audit, keyword research, and more.
          </p>
          <Button variant="outline" size="sm">View Docs</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">AI Workflows</h3>
          <p className="text-muted-foreground mb-4">
            Learn how to set up and customize AI-powered automation workflows for your SEO tasks.
          </p>
          <Button variant="outline" size="sm">View Docs</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Settings className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Integrations</h3>
          <p className="text-muted-foreground mb-4">
            Connect MartechEngine with WordPress, Google Search Console, and other platforms.
          </p>
          <Button variant="outline" size="sm">View Docs</Button>
        </Card>
      </div>
    </div>
  );
};

export default DocumentationPage;
