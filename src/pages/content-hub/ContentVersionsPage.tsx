
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, RotateCcw, Eye, GitBranch } from "lucide-react";

const ContentVersionsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Versions</h1>
        <p className="text-muted-foreground">Version history for content ID: {id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Version List */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Version History</h2>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg bg-primary/5 border-primary">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">Current</Badge>
                  <span className="text-xs text-muted-foreground">v1.3</span>
                </div>
                <p className="text-sm font-medium mb-1">Added SEO optimizations</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>2 hours ago</span>
                  <span>•</span>
                  <span>John Doe</span>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">v1.2</Badge>
                  <Button size="sm" variant="ghost">
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm font-medium mb-1">Content restructure</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>1 day ago</span>
                  <span>•</span>
                  <span>Jane Smith</span>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">v1.1</Badge>
                  <Button size="sm" variant="ghost">
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm font-medium mb-1">Fixed typos and grammar</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>2 days ago</span>
                  <span>•</span>
                  <span>AI Assistant</span>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">v1.0</Badge>
                  <Button size="sm" variant="ghost">
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm font-medium mb-1">Initial version</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>1 week ago</span>
                  <span>•</span>
                  <span>John Doe</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Version Comparison */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Version Comparison</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Compare
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  Previous Version (v1.2)
                  <Badge variant="outline">1 day ago</Badge>
                </h3>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-medium mb-2">SEO Best Practices Guide</h4>
                  <p className="text-sm text-muted-foreground">
                    Search engine optimization is crucial for businesses looking to improve their online visibility. Here are some key strategies to consider...
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  Current Version (v1.3)
                  <Badge className="bg-primary text-primary-foreground">Current</Badge>
                </h3>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium mb-2">SEO Best Practices Guide: 2025 Edition</h4>
                  <p className="text-sm text-muted-foreground">
                    Search engine optimization remains crucial for businesses seeking to improve their online visibility and drive organic traffic. Here are proven strategies that deliver results in 2025...
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Changes Summary</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">+</span>
                  <span>Added "2025 Edition" to title for better relevancy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">+</span>
                  <span>Enhanced introduction with traffic-focused language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">+</span>
                  <span>Improved meta description for better CTR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">~</span>
                  <span>Updated keyword density for target phrase</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentVersionsPage;
