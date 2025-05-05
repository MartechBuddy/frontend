
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, FileText, Edit, Book, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const ContentStudio = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Content Studio</h1>
        <p className="text-muted-foreground">
          Create, optimize, and manage your content with AI assistance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Idea Finder Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Idea Finder</CardTitle>
              <CardDescription>Generate content ideas for your niche</CardDescription>
            </div>
            <Lightbulb className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Topic or Keyword</label>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="e.g., AI Marketing or SEO Tips" 
                    className="glass-button border"
                  />
                  <Button>Generate</Button>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Generated Ideas</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>10 AI Marketing Tools to Boost Your Productivity</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>How to Create SEO-Friendly Content with AI Assistance</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>The Future of AI in Content Marketing: 2025 Trends</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="cursor-pointer">Content Marketing</Badge>
                <Badge className="cursor-pointer">SEO</Badge>
                <Badge className="cursor-pointer">Social Media</Badge>
                <Badge className="cursor-pointer">AI Tools</Badge>
                <Badge variant="outline" className="cursor-pointer">+ Add Topic</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Template Builder Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>SEO Template Builder</CardTitle>
              <CardDescription>Create optimized content structures</CardDescription>
            </div>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Main Keyword</label>
                  <Input 
                    placeholder="e.g., AI Content Creation" 
                    className="glass-button border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Type</label>
                  <select className="glass-button border w-full rounded-md px-3 py-1.5 bg-transparent">
                    <option value="blog">Blog Post</option>
                    <option value="landing">Landing Page</option>
                    <option value="product">Product Page</option>
                    <option value="guide">Guide</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Secondary Keywords (comma separated)</label>
                <Input 
                  placeholder="e.g., AI writing tools, content automation, content marketing" 
                  className="glass-button border"
                />
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Template Structure</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Introduction - What is AI Content Creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Benefits of AI in Content Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Top 5 AI Content Tools for Marketers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>How to Implement AI in Your Workflow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-primary" />
                    <span>Conclusion & Next Steps</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full">Build Template</Button>
            </div>
          </CardContent>
        </Card>

        {/* Writing Assistant Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Writing Assistant</CardTitle>
              <CardDescription>AI-powered content improvement</CardDescription>
            </div>
            <Edit className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea 
                placeholder="Write or paste your content here for improvement suggestions..." 
                className="glass-button border min-h-[150px]"
              />

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Improve
                </Button>
                <Button variant="outline" className="flex-1">
                  <CheckSquare className="h-4 w-4 mr-2" />
                  Check SEO
                </Button>
                <Button className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Complete
                </Button>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Improvement Suggestions</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-amber-400">Sentence variety could be improved</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Fix</Button>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-amber-400">Consider adding subheadings</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Fix</Button>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-green-400">Good keyword density</span>
                    <Button variant="link" size="sm" className="p-0 h-auto invisible">Fix</Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Audit Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Content Audit</CardTitle>
              <CardDescription>Analyze and improve existing content</CardDescription>
            </div>
            <Book className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Content Health Overview</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Analyzed Pages</p>
                    <p className="text-xl font-bold">42</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-xl font-bold">78%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Top Performer</p>
                    <p className="text-sm font-medium">SEO Guide</p>
                    <p className="text-xs text-green-400">98% score</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Needs Attention</p>
                    <p className="text-sm font-medium">Blog (8)</p>
                    <p className="text-xs text-amber-400">Below 60%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Content Improvement Priorities</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="block">Marketing Automation Guide</span>
                      <span className="text-xs text-muted-foreground">Missing H2, keyword density issues</span>
                    </div>
                    <Badge className="bg-red-500">48%</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="block">Social Media Platforms Comparison</span>
                      <span className="text-xs text-muted-foreground">Outdated content, thin content</span>
                    </div>
                    <Badge className="bg-amber-500">62%</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="block">Email Marketing Best Practices</span>
                      <span className="text-xs text-muted-foreground">Missing meta description</span>
                    </div>
                    <Badge className="bg-green-500">75%</Badge>
                  </li>
                </ul>
              </div>

              <Button className="w-full">Run Full Content Audit</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Create New Content</Button>
        <Button variant="outline">View Content Calendar</Button>
      </div>
    </div>
  );
};

export default ContentStudio;
