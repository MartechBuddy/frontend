
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, FileText } from "lucide-react";

const ToolPreviewSection = () => {
  const [url, setUrl] = useState("");
  const [topic, setTopic] = useState("");
  
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Try Our Tools for Free
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Get a taste of what our AI-powered tools can do for your business
      </p>
      
      <div className="glass-card border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
        <Tabs defaultValue="ai-readiness">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="ai-readiness" className="flex items-center gap-2">
              <Gauge className="h-4 w-4" />
              <span>AI Readiness Scanner</span>
            </TabsTrigger>
            <TabsTrigger value="content-generator" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Content Generator</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai-readiness">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Enter your website URL</label>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="https://yourdomain.com"
                    className="flex-1"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button>Analyze</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Free scan shows basic AI readiness score. Full report available with account.</p>
              </div>
              
              <div className="bg-background/50 rounded-md p-6 border border-white/5">
                <h3 className="text-lg font-medium mb-2">Sample Result</h3>
                <div className="mb-4">
                  <p className="text-sm mb-1">AI Readiness Score</p>
                  <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-amber-500 w-3/5"></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>0</span>
                    <span className="font-medium">58/100</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">SEO Optimization</p>
                    <p className="text-xs text-muted-foreground mt-1">Missing structured data for key pages</p>
                  </div>
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">Content Structure</p>
                    <p className="text-xs text-muted-foreground mt-1">Improve heading hierarchy for better AI parsing</p>
                  </div>
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">AI Readability</p>
                    <p className="text-xs text-muted-foreground mt-1">Use more semantic HTML for improved AI understanding</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="content-generator">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">What topic would you like content ideas for?</label>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="E.g., Digital Marketing Trends"
                    className="flex-1"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                  <Button>Generate</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Free tool shows sample ideas. Full content generation available with account.</p>
              </div>
              
              <div className="bg-background/50 rounded-md p-6 border border-white/5">
                <h3 className="text-lg font-medium mb-2">Sample Ideas</h3>
                <div className="space-y-3">
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">Blog Post</p>
                    <p className="text-xs text-muted-foreground mt-1">10 Digital Marketing Trends That Will Define 2025</p>
                  </div>
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">Social Media Post</p>
                    <p className="text-xs text-muted-foreground mt-1">The one digital marketing strategy you can't ignore this year #marketingtrends</p>
                  </div>
                  <div className="glass-card p-3 rounded-md border border-white/5">
                    <p className="text-sm font-medium">Email Newsletter</p>
                    <p className="text-xs text-muted-foreground mt-1">Breaking Down the Latest Marketing Innovations for Q2 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ToolPreviewSection;
