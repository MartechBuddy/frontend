
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Search, BarChart3, Download, Filter } from 'lucide-react';

interface TrafficKeyword {
  keyword: string;
  position: number;
  clicks: number;
  impressions: number;
  ctr: number;
  volume: number;
  trend: 'up' | 'down' | 'stable';
}

const mockTrafficData: TrafficKeyword[] = [
  { keyword: 'AI marketing tools', position: 3, clicks: 245, impressions: 8420, ctr: 2.91, volume: 2400, trend: 'up' },
  { keyword: 'content automation', position: 7, clicks: 89, impressions: 4200, ctr: 2.12, volume: 1800, trend: 'stable' },
  { keyword: 'SEO optimization', position: 12, clicks: 156, impressions: 6800, ctr: 2.29, volume: 3200, trend: 'down' },
  { keyword: 'AI readiness check', position: 5, clicks: 67, impressions: 1900, ctr: 3.53, volume: 890, trend: 'up' },
  { keyword: 'marketing analytics', position: 15, clicks: 34, impressions: 2100, ctr: 1.62, volume: 1500, trend: 'stable' },
];

const TrafficKeywordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗️' : trend === 'down' ? '↘️' : '➡️';
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-yellow-500';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Traffic Insights</h1>
          <p className="text-muted-foreground">
            Analyze your organic search traffic and keyword performance
          </p>
        </div>
        <Button className="glass-button">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Clicks</p>
                <p className="text-2xl font-bold">591</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-green-500 mt-2">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Impressions</p>
                <p className="text-2xl font-bold">23.4K</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-green-500 mt-2">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. CTR</p>
                <p className="text-2xl font-bold">2.53%</p>
              </div>
              <Search className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-red-500 mt-2">-0.3% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Position</p>
                <p className="text-2xl font-bold">8.4</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-xs text-green-500 mt-2">+1.2 improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Keyword Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Button variant="outline" className="glass-button">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="keywords" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="pages">Top Pages</TabsTrigger>
              <TabsTrigger value="queries">Search Queries</TabsTrigger>
            </TabsList>
            
            <TabsContent value="keywords" className="space-y-4">
              <div className="space-y-4">
                {mockTrafficData.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Volume: {keyword.volume.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Position</div>
                        <div className="font-medium">#{keyword.position}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Clicks</div>
                        <div className="font-medium">{keyword.clicks}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">CTR</div>
                        <div className="font-medium">{keyword.ctr}%</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Trend</div>
                        <div className={`font-medium ${getTrendColor(keyword.trend)}`}>
                          {getTrendIcon(keyword.trend)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pages">
              <div className="text-center py-8 text-muted-foreground">
                Top performing pages data will be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="queries">
              <div className="text-center py-8 text-muted-foreground">
                Search queries data will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficKeywordsPage;
