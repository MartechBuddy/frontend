
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Cog, RefreshCw, CheckCircle, Clock, Workflow } from "lucide-react";

const AutomationWorkflowsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Automation Workflows</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Set up intelligent SEO workflows that run automatically. From site fixes to content generation, let AI handle your SEO tasks 24/7.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <Workflow className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Pre-built Workflows</h3>
          <p className="text-muted-foreground">
            Start with proven workflows for common SEO tasks like site audits, content optimization, and link building.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Cog className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Custom Workflows</h3>
          <p className="text-muted-foreground">
            Build your own automated sequences combining multiple AI agents for complex, multi-step SEO processes.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <RefreshCw className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Scheduled Execution</h3>
          <p className="text-muted-foreground">
            Set workflows to run daily, weekly, or monthly. Keep your SEO optimized without manual intervention.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Auto-Implementation</h3>
          <p className="text-muted-foreground">
            Workflows can automatically apply fixes to your WordPress site or queue changes for your review.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Clock className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Real-time Monitoring</h3>
          <p className="text-muted-foreground">
            Track workflow execution in real-time with detailed logs and performance metrics for each step.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Trigger Conditions</h3>
          <p className="text-muted-foreground">
            Set smart triggers based on ranking changes, traffic drops, or new content publication to automate responses.
          </p>
        </Card>
      </div>

      {/* Popular Workflows */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Workflow Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Fix My Site</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive site audit → Issue prioritization → AI fix generation → Auto-apply to WordPress
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Technical SEO fixes</li>
              <li>• Meta description optimization</li>
              <li>• Schema markup generation</li>
              <li>• Image alt text updates</li>
            </ul>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Topic Cluster Planner</h3>
            <p className="text-muted-foreground mb-4">
              Keyword research → Content clustering → Outline generation → Content briefs
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Identify content gaps</li>
              <li>• Create topic clusters</li>
              <li>• Generate content calendars</li>
              <li>• Plan internal linking</li>
            </ul>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Optimize This Page</h3>
            <p className="text-muted-foreground mb-4">
              Page analysis → SERP competitor review → Content optimization → Implementation
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Content optimization</li>
              <li>• Header structure fixes</li>
              <li>• Internal link suggestions</li>
              <li>• Featured snippet optimization</li>
            </ul>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Link Reclaimer</h3>
            <p className="text-muted-foreground mb-4">
              Broken link detection → Fix recommendations → Redirect setup → Outreach templates
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Find broken internal links</li>
              <li>• Identify lost backlinks</li>
              <li>• Generate redirect rules</li>
              <li>• Create outreach emails</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">How Automation Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Choose Workflow</h3>
            <p className="text-muted-foreground">Select from pre-built templates or create custom workflows for your specific needs.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">Configure Settings</h3>
            <p className="text-muted-foreground">Set parameters, triggers, and approval levels for each workflow step.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">AI Execution</h3>
            <p className="text-muted-foreground">Multiple AI agents work together to complete complex SEO tasks automatically.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-semibold mb-2">Review & Apply</h3>
            <p className="text-muted-foreground">Review results and apply changes automatically or with your approval.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Automate Your SEO Success</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stop doing repetitive SEO tasks manually. Set up intelligent workflows that work around the clock to improve your rankings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Automating</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutomationWorkflowsPage;
