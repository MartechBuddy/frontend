
import React, { useState } from "react";
import { ArrowRight, Copy, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Mock data for AI readiness
const seoSuggestions = [
  {
    id: "seo-1",
    title: "Missing meta descriptions",
    description: "12 pages are missing meta descriptions.",
    impact: "high",
    solution: "Add unique, descriptive meta descriptions to each page."
  },
  {
    id: "seo-2",
    title: "Keyword cannibalization",
    description: "3 pages are targeting the same primary keyword 'AI marketing tools'.",
    impact: "medium",
    solution: "Diversify keywords across pages to prevent competition."
  },
  {
    id: "seo-3",
    title: "Slow page load time",
    description: "Average load time is 4.2 seconds, which is above the recommended 2 seconds.",
    impact: "high",
    solution: "Optimize images, leverage browser caching, and minimize code."
  },
  {
    id: "seo-4",
    title: "Missing alt text",
    description: "24 images are missing alternative text.",
    impact: "medium",
    solution: "Add descriptive alt text to all images for better accessibility and SEO."
  }
];

const contentSuggestions = [
  {
    id: "content-1",
    title: "Low content word count",
    description: "5 key pages have less than 300 words of content.",
    impact: "medium",
    solution: "Expand content to at least 800 words with relevant information."
  },
  {
    id: "content-2",
    title: "Lack of structured data",
    description: "No schema markup is implemented on product or article pages.",
    impact: "high",
    solution: "Implement appropriate schema markup for products, articles, FAQs, etc."
  },
  {
    id: "content-3",
    title: "Low readability score",
    description: "Content averages at 12th grade reading level, which may be difficult for general audience.",
    impact: "low",
    solution: "Simplify language to aim for 8th-9th grade reading level."
  }
];

const technicalSuggestions = [
  {
    id: "tech-1",
    title: "Not mobile responsive",
    description: "3 pages fail mobile responsiveness test.",
    impact: "high",
    solution: "Implement responsive design principles to all pages."
  },
  {
    id: "tech-2",
    title: "Missing HTTPS",
    description: "Site is not using secure HTTPS protocol.",
    impact: "high",
    solution: "Install SSL certificate and redirect all traffic to HTTPS."
  },
  {
    id: "tech-3",
    title: "Broken links",
    description: "Found 7 broken internal links.",
    impact: "medium",
    solution: "Fix or remove broken links to improve user experience and SEO."
  },
  {
    id: "tech-4",
    title: "No XML sitemap",
    description: "Site is missing an XML sitemap.",
    impact: "medium",
    solution: "Generate and submit an XML sitemap to search engines."
  },
  {
    id: "tech-5",
    title: "JavaScript errors",
    description: "3 JavaScript errors detected on homepage.",
    impact: "medium",
    solution: "Fix JavaScript errors to improve functionality and user experience."
  }
];

const AiReadiness = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const handleCopySuggestion = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Suggestion has been copied to clipboard.",
    });
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-400 bg-red-500/10";
      case "medium":
        return "text-yellow-400 bg-yellow-500/10";
      case "low":
        return "text-green-400 bg-green-500/10";
      default:
        return "text-blue-400 bg-blue-500/10";
    }
  };

  const getTotalScore = () => {
    // Calculate scores based on suggestions
    const seoScore = 70;
    const contentScore = 85;
    const technicalScore = 60;
    
    // Average the scores
    return Math.round((seoScore + contentScore + technicalScore) / 3);
  };

  const renderSuggestions = (suggestions: any[]) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {suggestions.map((suggestion) => (
          <AccordionItem key={suggestion.id} value={suggestion.id} className="border-white/10">
            <AccordionTrigger className="hover:bg-white/5 px-4">
              <div className="flex items-start gap-4">
                {suggestion.impact === "high" ? (
                  <AlertCircle className="text-red-400 h-5 w-5 mt-0.5" />
                ) : (
                  <Lightbulb className="text-yellow-400 h-5 w-5 mt-0.5" />
                )}
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span>{suggestion.title}</span>
                    <Badge className={`${getImpactColor(suggestion.impact)}`}>
                      {suggestion.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-normal">
                    {suggestion.description}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium mb-1">Recommended Solution</p>
                    <p className="text-sm text-muted-foreground">{suggestion.solution}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-button"
                    onClick={() => handleCopySuggestion(suggestion.solution)}
                  >
                    <Copy size={14} className="mr-1" /> Copy
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">AI Readiness</h1>
        <p className="text-muted-foreground">
          Optimize your website for AI discoverability and improve your overall score.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="glass-card border-white/5 col-span-1 md:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Overall AI Readiness Score</CardTitle>
                <CardDescription>Based on SEO, content, and technical factors</CardDescription>
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center">
                <span className="text-3xl font-bold">{getTotalScore()}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>SEO Readiness</span>
                  <span className="font-medium">70/100</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Content Readiness</span>
                  <span className="font-medium">85/100</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Technical Readiness</span>
                  <span className="font-medium">60/100</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-white/5">
        <CardHeader className="border-b border-white/10">
          <CardTitle>Improvement Suggestions</CardTitle>
          <CardDescription>Apply these suggestions to improve your AI readiness score</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 glass-card mx-4 mt-4">
              <TabsTrigger value="seo">
                SEO
                <Badge className="ml-2 bg-white/10">4</Badge>
              </TabsTrigger>
              <TabsTrigger value="content">
                Content
                <Badge className="ml-2 bg-white/10">3</Badge>
              </TabsTrigger>
              <TabsTrigger value="technical">
                Technical
                <Badge className="ml-2 bg-white/10">5</Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="seo" className="p-4">
              {renderSuggestions(seoSuggestions)}
            </TabsContent>
            <TabsContent value="content" className="p-4">
              {renderSuggestions(contentSuggestions)}
            </TabsContent>
            <TabsContent value="technical" className="p-4">
              {renderSuggestions(technicalSuggestions)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="glass-card border-white/5">
          <CardHeader>
            <CardTitle>Next Steps to Improve</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span className="text-muted-foreground">Fix high impact issues first</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span className="text-muted-foreground">Schedule regular site health checks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span className="text-muted-foreground">Implement structured data markup</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span className="text-muted-foreground">Optimize images and media files</span>
              </li>
            </ul>
            <Button className="w-full mt-4">
              Generate Improvement Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/5">
          <CardHeader>
            <CardTitle>AI Readiness Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[240px] flex items-center justify-center">
            <p className="text-muted-foreground">
              Score tracking charts will appear here after your first re-scan.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AiReadiness;
