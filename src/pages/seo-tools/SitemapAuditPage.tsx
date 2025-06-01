
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ExternalLink,
  Download,
  RefreshCw
} from 'lucide-react';

interface SitemapIssue {
  type: 'error' | 'warning' | 'info';
  description: string;
  affectedUrls: number;
  priority: 'high' | 'medium' | 'low';
}

interface SitemapUrl {
  url: string;
  status: 'indexed' | 'excluded' | 'pending' | 'error';
  lastModified: string;
  priority: number;
  changeFreq: string;
}

const SitemapAuditPage: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Mock data - in real implementation this would come from API
  const sitemapOverview = {
    totalSitemaps: 3,
    totalUrls: 247,
    indexedUrls: 198,
    excludedUrls: 32,
    errorUrls: 17,
    lastScanDate: '2024-01-15T10:30:00Z'
  };

  const issues: SitemapIssue[] = [
    {
      type: 'error',
      description: 'URLs returning 404 status codes',
      affectedUrls: 12,
      priority: 'high'
    },
    {
      type: 'warning', 
      description: 'URLs with missing lastmod dates',
      affectedUrls: 23,
      priority: 'medium'
    },
    {
      type: 'warning',
      description: 'URLs not found in sitemap but discovered during crawl',
      affectedUrls: 8,
      priority: 'medium'
    },
    {
      type: 'info',
      description: 'URLs with outdated priority values',
      affectedUrls: 15,
      priority: 'low'
    }
  ];

  const orphanedPages: string[] = [
    '/blog/old-article-2023',
    '/products/discontinued-item',
    '/services/legacy-service',
    '/about/old-team-member',
    '/news/archived-announcement'
  ];

  const sitemapUrls: SitemapUrl[] = [
    {
      url: 'https://example.com/',
      status: 'indexed',
      lastModified: '2024-01-15',
      priority: 1.0,
      changeFreq: 'daily'
    },
    {
      url: 'https://example.com/about',
      status: 'indexed', 
      lastModified: '2024-01-10',
      priority: 0.8,
      changeFreq: 'monthly'
    },
    {
      url: 'https://example.com/blog/recent-post',
      status: 'pending',
      lastModified: '2024-01-14',
      priority: 0.6,
      changeFreq: 'weekly'
    }
  ];

  const handleScanSitemap = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'indexed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'excluded':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <RefreshCw className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <FileText className="h-4 w-4 text-blue-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: 'destructive',
      medium: 'default', 
      low: 'secondary'
    } as const;
    
    return <Badge variant={variants[priority as keyof typeof variants]}>{priority}</Badge>;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Sitemap Audit</h1>
          <p className="text-muted-foreground mt-2">
            Analyze your XML sitemaps for issues and optimization opportunities
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button onClick={handleScanSitemap} disabled={isScanning}>
            <Search className="h-4 w-4 mr-2" />
            {isScanning ? 'Scanning...' : 'Re-scan Sitemap'}
          </Button>
        </div>
      </div>

      {isScanning && (
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Scanning sitemap...</span>
                <span className="text-sm text-muted-foreground">{scanProgress}%</span>
              </div>
              <Progress value={scanProgress} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sitemap Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{sitemapOverview.totalSitemaps}</div>
              <div className="text-sm text-muted-foreground">Sitemaps Found</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{sitemapOverview.totalUrls}</div>
              <div className="text-sm text-muted-foreground">Total URLs</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">{sitemapOverview.indexedUrls}</div>
              <div className="text-sm text-muted-foreground">Indexed</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">{sitemapOverview.excludedUrls}</div>
              <div className="text-sm text-muted-foreground">Excluded</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{sitemapOverview.errorUrls}</div>
              <div className="text-sm text-muted-foreground">Errors</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="issues" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 glass-card">
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="urls">URLs in Sitemap</TabsTrigger>
          <TabsTrigger value="orphaned">Orphaned Pages</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="issues">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Sitemap Issues</CardTitle>
              <CardDescription>
                Issues found in your XML sitemaps that need attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {issues.map((issue, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass-button rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getIssueIcon(issue.type)}
                      <div>
                        <div className="font-medium">{issue.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {issue.affectedUrls} URLs affected
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getPriorityBadge(issue.priority)}
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="urls">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>URLs in Sitemap</CardTitle>
              <CardDescription>
                All URLs found in your XML sitemaps with their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sitemapUrls.map((url, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-button rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(url.status)}
                      <div className="flex-1">
                        <div className="font-medium truncate">{url.url}</div>
                        <div className="text-sm text-muted-foreground">
                          Priority: {url.priority} • Frequency: {url.changeFreq} • Modified: {url.lastModified}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={url.status === 'indexed' ? 'default' : 'secondary'}>
                        {url.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orphaned">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Orphaned Pages</CardTitle>
              <CardDescription>
                Pages found during crawl that are not included in your sitemap
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {orphanedPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-button rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{page}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Add to Sitemap
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Sitemap Overview</CardTitle>
              <CardDescription>
                Detailed information about your XML sitemaps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Found Sitemaps</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 glass-button rounded-lg">
                      <span>/sitemap.xml</span>
                      <Badge>Main</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-button rounded-lg">
                      <span>/sitemap-posts.xml</span>
                      <Badge variant="secondary">Posts</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-button rounded-lg">
                      <span>/sitemap-pages.xml</span>
                      <Badge variant="secondary">Pages</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Last Scan</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(sitemapOverview.lastScanDate).toLocaleString()}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Recommendations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Fix 404 errors in sitemap URLs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Add missing lastmod dates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Include orphaned pages in sitemap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SitemapAuditPage;
