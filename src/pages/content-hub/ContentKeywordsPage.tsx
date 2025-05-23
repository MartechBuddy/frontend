
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Download, Target, TrendingUp, BarChart3 } from 'lucide-react';

interface Keyword {
  id: string;
  keyword: string;
  volume: number;
  difficulty: number;
  cluster: string;
  trending: boolean;
}

const mockKeywords: Keyword[] = [
  { id: '1', keyword: 'AI readiness', volume: 1200, difficulty: 65, cluster: 'AI Marketing', trending: true },
  { id: '2', keyword: 'content automation', volume: 850, difficulty: 58, cluster: 'Content Strategy', trending: false },
  { id: '3', keyword: 'SEO optimization', volume: 2400, difficulty: 72, cluster: 'SEO Tools', trending: true },
  { id: '4', keyword: 'social media management', volume: 1800, difficulty: 45, cluster: 'Social Media', trending: false },
  { id: '5', keyword: 'digital marketing AI', volume: 950, difficulty: 68, cluster: 'AI Marketing', trending: true },
];

const ContentKeywordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<string>('');

  const filteredKeywords = mockKeywords.filter(keyword => {
    const matchesSearch = keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCluster = !selectedCluster || keyword.cluster === selectedCluster;
    return matchesSearch && matchesCluster;
  });

  const clusters = Array.from(new Set(mockKeywords.map(k => k.cluster)));

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 40) return 'bg-green-500';
    if (difficulty < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keyword Manager</h1>
          <p className="text-muted-foreground">
            Manage and organize keywords for your content strategy
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/seo-tools/keyword-generator">
            <Button className="glass-button">
              <Plus className="h-4 w-4 mr-2" />
              Generate Keywords
            </Button>
          </Link>
          <Button variant="outline" className="glass-button">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card border-white/10">
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCluster}
              onChange={(e) => setSelectedCluster(e.target.value)}
              className="px-3 py-2 rounded-md border bg-background"
            >
              <option value="">All Clusters</option>
              {clusters.map(cluster => (
                <option key={cluster} value={cluster}>{cluster}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Keywords Table */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Keywords ({filteredKeywords.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredKeywords.map((keyword) => (
              <div key={keyword.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{keyword.keyword}</span>
                      {keyword.trending && (
                        <Badge variant="default" className="bg-primary/20 text-primary">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Cluster: {keyword.cluster}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <BarChart3 className="h-3 w-3" />
                      Volume
                    </div>
                    <div className="font-medium">{keyword.volume.toLocaleString()}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Difficulty</div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getDifficultyColor(keyword.difficulty)}`}></div>
                      <span className="font-medium">{keyword.difficulty}%</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="glass-button">
                    Use Keyword
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentKeywordsPage;
