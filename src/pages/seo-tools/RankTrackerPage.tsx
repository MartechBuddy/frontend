
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Plus,
  Search,
  BarChart3,
  Eye,
  Calendar
} from 'lucide-react';

const RankTrackerPage: React.FC = () => {
  const [newKeyword, setNewKeyword] = useState('');

  // Mock data
  const trackedKeywords = [
    { keyword: 'digital marketing', position: 3, change: 2, searchVolume: 18100, lastCheck: '2 hours ago' },
    { keyword: 'seo optimization', position: 7, change: -1, searchVolume: 12100, lastCheck: '2 hours ago' },
    { keyword: 'content marketing', position: 15, change: 3, searchVolume: 8200, lastCheck: '2 hours ago' },
    { keyword: 'social media marketing', position: 12, change: 0, searchVolume: 9900, lastCheck: '2 hours ago' }
  ];

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-500';
    if (change < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Keyword Rank Tracker</h1>
          <p className="text-muted-foreground mt-2">
            Track your keyword positions and monitor ranking changes over time
          </p>
        </div>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Manual Check
        </Button>
      </div>

      {/* Add New Keyword */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Add New Keyword</CardTitle>
          <CardDescription>
            Track new keywords for ranking monitoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter keyword to track"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Keyword
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="glass-card border-white/10">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{trackedKeywords.length}</div>
                <div className="text-sm text-muted-foreground">Tracked Keywords</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">2</div>
                <div className="text-sm text-muted-foreground">Top 3 Rankings</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500">3</div>
                <div className="text-sm text-muted-foreground">Improved</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-500">1</div>
                <div className="text-sm text-muted-foreground">Declined</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Changes */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Recent Ranking Changes</CardTitle>
              <CardDescription>
                Keywords with significant position changes in the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trackedKeywords.filter(k => k.change !== 0).map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Position {keyword.position}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getChangeIcon(keyword.change)}
                      <span className={`font-medium ${getChangeColor(keyword.change)}`}>
                        {keyword.change > 0 ? '+' : ''}{keyword.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>All Tracked Keywords</CardTitle>
              <CardDescription>
                Complete list of keywords being monitored
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trackedKeywords.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Volume: {keyword.searchVolume.toLocaleString()} • Last checked: {keyword.lastCheck}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{keyword.position}</div>
                        <div className="text-xs text-muted-foreground">Position</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getChangeIcon(keyword.change)}
                        <span className={`text-sm font-medium ${getChangeColor(keyword.change)}`}>
                          {keyword.change > 0 ? '+' : ''}{keyword.change}
                        </span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View SERP
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Ranking Analytics
              </CardTitle>
              <CardDescription>
                Historical ranking data and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-20">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Historical Data Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Start tracking keywords to see historical ranking trends and analytics
                </p>
                <Button>Add Keywords to Track</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RankTrackerPage;
