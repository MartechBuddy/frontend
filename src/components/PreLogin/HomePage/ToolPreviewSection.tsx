
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ToolPreviewSection = () => {
  const [url, setUrl] = useState("");
  const [topic, setTopic] = useState("");
  const { toast } = useToast();
  
  const handleScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      toast({
        title: "AI Readiness Scan Started",
        description: "We're analyzing your website. Sign up to see the full results!",
      });
    }
  };
  
  const handleGenerateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic) {
      toast({
        title: "Content Ideas Generated",
        description: "Sign up to see all the AI-generated content ideas!",
      });
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-4">Try Our Free Tools</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Get a taste of what MartechEngine.ai can do for your website with these free tools. No signup required.
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="scanner" className="glass-card border border-white/10 rounded-xl overflow-hidden">
          <TabsList className="w-full grid grid-cols-2 bg-white/5 rounded-none">
            <TabsTrigger value="scanner" className="data-[state=active]:bg-background">AI Readiness Scanner</TabsTrigger>
            <TabsTrigger value="generator" className="data-[state=active]:bg-background">Content Generator</TabsTrigger>
          </TabsList>
          <div className="p-6">
            <TabsContent value="scanner">
              <form onSubmit={handleScanSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Enter your website URL</label>
                  <Input 
                    type="url" 
                    placeholder="https://example.com" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="glass-button border-white/10"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Scan Website
                </Button>
              </form>
              
              <div className="mt-8 bg-white/5 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Sample AI Readiness Score</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>Overall Score</span>
                  <span className="text-amber-400">72/100</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Content Quality</span>
                      <span>85/100</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Technical SEO</span>
                      <span>60/100</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>User Experience</span>
                      <span>70/100</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="generator">
              <form onSubmit={handleGenerateSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Enter a topic for content ideas</label>
                  <Input 
                    type="text" 
                    placeholder="e.g., AI in digital marketing" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="glass-button border-white/10"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Generate Ideas
                </Button>
              </form>
              
              <div className="mt-8 bg-white/5 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Sample Content Ideas</h3>
                <ul className="space-y-2">
                  <li className="text-sm">• 10 Ways AI is Transforming Digital Marketing in 2025</li>
                  <li className="text-sm">• How to Implement AI in Your Marketing Strategy: A Beginner's Guide</li>
                  <li className="text-sm">• Case Study: How Company X Increased Conversions by 30% with AI</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Sign up for free to generate more ideas and create full articles.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ToolPreviewSection;
