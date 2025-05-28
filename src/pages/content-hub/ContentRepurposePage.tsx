
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Share2, Calendar, Video } from "lucide-react";

const ContentRepurposePage: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Repurpose Content</h1>
        <p className="text-muted-foreground">Transform your existing content into different formats and platforms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Source Content */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Source Content</h2>
          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose content to repurpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blog1">SEO Best Practices Guide</SelectItem>
                <SelectItem value="blog2">Content Marketing Strategy</SelectItem>
                <SelectItem value="blog3">Technical SEO Checklist</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">SEO Best Practices Guide</h3>
              <p className="text-sm text-muted-foreground mb-2">
                A comprehensive guide covering on-page optimization, keyword research, and technical SEO fundamentals...
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">1,247 words</Badge>
                <Badge variant="outline">Published</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Repurpose Options */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Repurpose Into</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Share2 className="h-6 w-6" />
              <span className="font-medium">Social Posts</span>
              <span className="text-xs text-muted-foreground">LinkedIn, Twitter, Facebook</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span className="font-medium">Email Newsletter</span>
              <span className="text-xs text-muted-foreground">Digest format</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Video className="h-6 w-6" />
              <span className="font-medium">Video Script</span>
              <span className="text-xs text-muted-foreground">YouTube, TikTok</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">Carousel</span>
              <span className="text-xs text-muted-foreground">LinkedIn slides</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Generated Content Preview */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Generated Content</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">LinkedIn Post</h3>
              <Badge>Generated</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              🚀 Want to boost your SEO rankings? Here are 5 proven strategies that actually work:

              1. Focus on search intent, not just keywords
              2. Optimize for Core Web Vitals
              3. Build topic clusters around pillar content
              4. Fix technical issues first
              5. Create content that answers real questions

              Which strategy has worked best for you? 👇

              #SEO #DigitalMarketing #ContentStrategy
            </p>
            <div className="flex gap-2">
              <Button size="sm">Copy</Button>
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm" variant="outline">Schedule</Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">Twitter Thread</h3>
              <Badge>Generated</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              🧵 SEO isn't just about keywords anymore. Here's what actually moves the needle in 2025:

              1/7 Search intent is everything. Google wants to understand what users REALLY want, not just match keywords...

              2/7 Core Web Vitals matter more than ever. A slow site = poor rankings, no matter how good your content is...
            </p>
            <div className="flex gap-2">
              <Button size="sm">Copy</Button>
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm" variant="outline">Schedule</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContentRepurposePage;
