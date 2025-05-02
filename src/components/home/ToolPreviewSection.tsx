
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, XCircle } from "lucide-react";

const ToolPreviewSection = () => {
  const [scanUrl, setScanUrl] = useState("");
  const [contentTopic, setContentTopic] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [scanResult, setScanResult] = useState<null | {score: number, issues: string[]}>(null);
  const [contentIdeas, setContentIdeas] = useState<string[]>([]);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setScanResult(null);
    
    // Mock scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        score: 72,
        issues: [
          "Missing schema markup on key product pages",
          "Inconsistent heading structure on blog pages",
          "Slow page load time on mobile devices",
          "Images missing alt text"
        ]
      });
    }, 1500);
  };

  const handleGenerateContent = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setContentIdeas([]);
    
    // Mock content generation process
    setTimeout(() => {
      setIsGenerating(false);
      setContentIdeas([
        "10 Ways to Optimize Your Website for AI Search Engines",
        "How to Create Content That Both Humans and AI Love",
        "The Ultimate Guide to Schema Markup for Better SEO",
        "AI-Friendly Content: Best Practices for 2025",
        "Why Traditional SEO Strategies Are Failing in the AI Era"
      ]);
    }, 1500);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Try Our Free Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a taste of our platform's capabilities with these free tools
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ai-readiness" className="glass-card border-white/10 rounded-xl p-6 animate-scale-in">
            <TabsList className="glass-card p-1 rounded-xl border-white/10 mb-6">
              <TabsTrigger value="ai-readiness" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
                AI Readiness Scanner
              </TabsTrigger>
              <TabsTrigger value="content-generator" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
                Content Generator
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai-readiness" className="mt-0">
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">Check your website's AI readiness</h3>
                <p className="text-muted-foreground">
                  Enter your website URL to get a free AI readiness score and suggestions.
                </p>
              </div>
              
              <form onSubmit={handleScan} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
                    <input 
                      type="url" 
                      placeholder="https://example.com" 
                      className="w-full pl-10 py-3 px-4 glass-button rounded-md"
                      value={scanUrl}
                      onChange={(e) => setScanUrl(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isScanning} className="whitespace-nowrap">
                    {isScanning ? "Scanning..." : "Scan Website"}
                  </Button>
                </div>
              </form>
              
              {scanResult && (
                <div className="bg-white/5 rounded-xl p-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-medium">AI Readiness Score</h4>
                      <p className="text-muted-foreground text-sm">Based on our analysis of {scanUrl}</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <div className="h-24 w-24 rounded-full border-4 border-primary flex items-center justify-center">
                        <span className="text-3xl font-bold">{scanResult.score}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">Issues to Address</h4>
                    <ul className="space-y-2">
                      {scanResult.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <XCircle size={16} className="text-red-400 shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Sign up to receive a detailed report with actionable recommendations.
                    </p>
                    <Button>Get Full Report</Button>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="content-generator" className="mt-0">
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">Generate content ideas</h3>
                <p className="text-muted-foreground">
                  Enter a topic to get AI-generated content ideas for your blog or social media.
                </p>
              </div>
              
              <form onSubmit={handleGenerateContent} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter a topic (e.g., AI SEO)" 
                    className="w-full py-3 px-4 glass-button rounded-md"
                    value={contentTopic}
                    onChange={(e) => setContentTopic(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isGenerating} className="whitespace-nowrap">
                    {isGenerating ? "Generating..." : "Generate Ideas"}
                  </Button>
                </div>
              </form>
              
              {contentIdeas.length > 0 && (
                <div className="bg-white/5 rounded-xl p-6 animate-fade-in">
                  <h4 className="text-lg font-medium mb-4">Content Ideas for "{contentTopic}"</h4>
                  <ul className="space-y-3">
                    {contentIdeas.map((idea, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-primary shrink-0 mt-1" />
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Sign up to access our full content generation and optimization suite.
                    </p>
                    <Button>Try Full Features</Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ToolPreviewSection;
