
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  TrendingUp, 
  Users, 
  Globe,
  BarChart3,
  Eye,
  Target
} from 'lucide-react';

const CompetitorTrackerPage: React.FC = () => {
  const [newCompetitor, setNewCompetitor] = useState('');

  // Mock data
  const competitors = [
    { 
      domain: 'competitor1.com', 
      estimatedTraffic: '125K', 
      topKeywords: 1250, 
      averagePosition: 8.2,
      status: 'tracking'
    },
    { 
      domain: 'competitor2.com', 
      estimatedTraffic: '89K', 
      topKeywords: 980, 
      averagePosition: 12.5,
      status: 'tracking'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Competitor Tracker</h1>
          <p className="text-muted-foreground mt-2">
            Monitor competitor performance and discover new opportunities
          </p>
        </div>
        <Badge variant="outline">Entrepreneur+</Badge>
      </div>

      {/* Add Competitor */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Add Competitor</CardTitle>
          <CardDescription>
            Track a new competitor's SEO performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter competitor domain (e.g., example.com)"
              value={newCompetitor}
              onChange={(e) => setNewCompetitor(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Competitor
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Competitors List */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Tracked Competitors
          </CardTitle>
          <CardDescription>
            Overview of all competitors being monitored
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{competitor.domain}</div>
                      <div className="text-sm text-muted-foreground">
                        Status: <Badge variant="outline">{competitor.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Search className="h-3 w-3 mr-1" />
                      Scan Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{competitor.estimatedTraffic}</div>
                    <div className="text-xs text-muted-foreground">Est. Monthly Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-500">{competitor.topKeywords}</div>
                    <div className="text-xs text-muted-foreground">Top Keywords</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-500">{competitor.averagePosition}</div>
                    <div className="text-xs text-muted-foreground">Avg Position</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitor Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Keyword Gaps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="font-medium">Content Marketing Strategy</div>
                <div className="text-sm text-muted-foreground">
                  Competitor ranks #3, you rank #15
                </div>
              </div>
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="font-medium">SEO Best Practices</div>
                <div className="text-sm text-muted-foreground">
                  Competitor ranks #5, you're not ranking
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Your Site</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm">67%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>competitor1.com</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-20 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">83%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>competitor2.com</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-14 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">58%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetitorTrackerPage;
