
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Save, Eye, Wand2, RotateCcw } from "lucide-react";

const ContentEditPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Edit Content</h1>
          <p className="text-muted-foreground">Content ID: {id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter your article title..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Start writing your content..."
                  className="min-h-[400px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea 
                  id="excerpt" 
                  placeholder="Brief description..."
                  className="h-20"
                />
              </div>
            </div>
          </Card>

          {/* SEO Settings */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input id="metaTitle" placeholder="SEO title..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea 
                  id="metaDescription" 
                  placeholder="SEO description..."
                  className="h-20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="focusKeyword">Focus Keyword</Label>
                <Input id="focusKeyword" placeholder="primary keyword..." />
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Assistant */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">AI Assistant</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Wand2 className="h-4 w-4 mr-2" />
                Improve Content
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <RotateCcw className="h-4 w-4 mr-2" />
                Rewrite Section
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                SEO Analysis
              </Button>
            </div>
          </Card>

          {/* Content Status */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <Badge variant="outline">Draft</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Word Count:</span>
                <span className="text-sm text-muted-foreground">1,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">SEO Score:</span>
                <Badge className="bg-green-500/20 text-green-500">85/100</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Readability:</span>
                <Badge className="bg-blue-500/20 text-blue-500">Good</Badge>
              </div>
            </div>
          </Card>

          {/* Publishing */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Publishing</h3>
            <div className="space-y-3">
              <Button className="w-full">Publish to WordPress</Button>
              <Button variant="outline" className="w-full">Schedule Post</Button>
              <Button variant="outline" className="w-full">Save as Template</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentEditPage;
