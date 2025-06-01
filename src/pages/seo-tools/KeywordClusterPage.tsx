
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Target, FileText, Search, TrendingUp } from "lucide-react";

const KeywordClusterPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Keyword Clusters</h1>
          <p className="text-muted-foreground">Group related keywords into content themes</p>
        </div>
        <Button>Create New Cluster</Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Search clusters..." />
          </div>
          <Button variant="outline">Filter</Button>
        </div>
      </Card>

      {/* Clusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Target className="h-8 w-8 text-blue-500" />
            <Badge className="bg-blue-500/20 text-blue-500">15 keywords</Badge>
          </div>
          <h3 className="font-semibold mb-2">SEO Fundamentals</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Basic SEO concepts and strategies for beginners
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Primary: seo basics</span>
              <span className="text-muted-foreground">1.2K/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Secondary: seo guide</span>
              <span className="text-muted-foreground">890/mo</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Generate Content
            </Button>
            <Button size="sm" variant="outline">View All</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Target className="h-8 w-8 text-green-500" />
            <Badge className="bg-green-500/20 text-green-500">23 keywords</Badge>
          </div>
          <h3 className="font-semibold mb-2">Technical SEO</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Advanced technical optimization strategies
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Primary: technical seo</span>
              <span className="text-muted-foreground">2.1K/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Secondary: core web vitals</span>
              <span className="text-muted-foreground">1.5K/mo</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Generate Content
            </Button>
            <Button size="sm" variant="outline">View All</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Target className="h-8 w-8 text-purple-500" />
            <Badge className="bg-purple-500/20 text-purple-500">18 keywords</Badge>
          </div>
          <h3 className="font-semibold mb-2">Local SEO</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Location-based optimization strategies
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Primary: local seo</span>
              <span className="text-muted-foreground">3.2K/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Secondary: google my business</span>
              <span className="text-muted-foreground">4.1K/mo</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Generate Content
            </Button>
            <Button size="sm" variant="outline">View All</Button>
          </div>
        </Card>
      </div>

      {/* Cluster Analysis */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Cluster Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">56</p>
            <p className="text-sm text-muted-foreground">Total Clusters</p>
          </div>
          <div className="text-center">
            <Search className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">1,247</p>
            <p className="text-sm text-muted-foreground">Total Keywords</p>
          </div>
          <div className="text-center">
            <FileText className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">23</p>
            <p className="text-sm text-muted-foreground">Content Created</p>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">89%</p>
            <p className="text-sm text-muted-foreground">Coverage Rate</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default KeywordClusterPage;
