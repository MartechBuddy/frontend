
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock,
  Plus,
  Eye,
  AlertTriangle
} from 'lucide-react';

const IndexingMonitorPage: React.FC = () => {
  // Mock data
  const trackedUrls = [
    { 
      url: '/blog/seo-tips-2024', 
      status: 'indexed', 
      lastChecked: '2 hours ago',
      indexedDate: '2024-05-20'
    },
    { 
      url: '/products/enterprise-solution', 
      status: 'not-indexed', 
      lastChecked: '2 hours ago',
      indexedDate: null
    },
    { 
      url: '/resources/case-study-1', 
      status: 'pending', 
      lastChecked: '2 hours ago',
      indexedDate: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'indexed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'not-indexed': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'indexed': return 'text-green-500';
      case 'not-indexed': return 'text-red-500';
      case 'pending': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'indexed': return <Badge className="bg-green-500/20 text-green-500">Indexed</Badge>;
      case 'not-indexed': return <Badge className="bg-red-500/20 text-red-500">Not Indexed</Badge>;
      case 'pending': return <Badge className="bg-yellow-500/20 text-yellow-500">Pending</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Live Indexing Monitor</h1>
          <p className="text-muted-foreground mt-2">
            Track URL indexing status and get alerts for de-indexing
          </p>
        </div>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Manual Check
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">1</div>
            <div className="text-sm text-muted-foreground">Indexed</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">1</div>
            <div className="text-sm text-muted-foreground">Not Indexed</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">1</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
      </div>

      {/* Add New URL */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Add URL for Tracking</CardTitle>
          <CardDescription>
            Monitor new URLs for indexing status changes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter URL path (e.g., /blog/new-post)"
              className="flex-1"
            />
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add URL
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tracked URLs */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Tracked URLs</CardTitle>
          <CardDescription>
            Current indexing status of monitored URLs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackedUrls.map((url, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getStatusIcon(url.status)}
                    <div className="font-medium">{url.url}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Last checked: {url.lastChecked}
                    {url.indexedDate && ` • Indexed: ${url.indexedDate}`}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(url.status)}
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    Check Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Indexing Issues */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Potential Issues
          </CardTitle>
          <CardDescription>
            AI analysis of possible indexing problems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="font-medium">/products/enterprise-solution</div>
              <div className="text-sm text-muted-foreground">
                Possible cause: Page may be blocked by robots.txt or have noindex meta tag
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndexingMonitorPage;
