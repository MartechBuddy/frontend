
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ExternalLink, 
  AlertTriangle,
  CheckCircle,
  Zap,
  Eye
} from 'lucide-react';

const BrokenLinksPage: React.FC = () => {
  // Mock data
  const brokenLinks = [
    {
      url: 'https://oldexample.com/removed-page',
      sourcePage: '/blog/marketing-guide',
      linkText: 'Marketing Resources',
      statusCode: 404,
      lastChecked: '2 hours ago'
    },
    {
      url: 'https://deadsite.com/tool',
      sourcePage: '/resources/tools',
      linkText: 'SEO Tool',
      statusCode: 500,
      lastChecked: '2 hours ago'
    },
    {
      url: '/internal/old-page',
      sourcePage: '/blog/seo-tips',
      linkText: 'Internal Guide',
      statusCode: 404,
      lastChecked: '2 hours ago'
    }
  ];

  const getStatusColor = (statusCode: number) => {
    if (statusCode >= 400 && statusCode < 500) return 'text-red-500';
    if (statusCode >= 500) return 'text-orange-500';
    return 'text-gray-500';
  };

  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-red-500/20 text-red-500">{statusCode} Error</Badge>;
    }
    if (statusCode >= 500) {
      return <Badge className="bg-orange-500/20 text-orange-500">{statusCode} Error</Badge>;
    }
    return <Badge variant="outline">{statusCode}</Badge>;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Broken Link Scanner</h1>
          <p className="text-muted-foreground mt-2">
            Detect and fix dead internal or external links on your website
          </p>
        </div>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Run Scan
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">{brokenLinks.length}</div>
            <div className="text-sm text-muted-foreground">Broken Links</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">2</div>
            <div className="text-sm text-muted-foreground">External Links</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">1</div>
            <div className="text-sm text-muted-foreground">Internal Links</div>
          </CardContent>
        </Card>
      </div>

      {/* Broken Links List */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Broken Links Found
          </CardTitle>
          <CardDescription>
            Links that are returning error status codes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {brokenLinks.map((link, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-red-500/20">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {link.url.startsWith('http') ? (
                        <ExternalLink className="h-4 w-4 text-blue-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                      <div className="font-medium text-red-400">{link.url}</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Source: <span className="text-blue-400">{link.sourcePage}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Link text: "{link.linkText}" • Last checked: {link.lastChecked}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(link.statusCode)}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Zap className="h-3 w-3 mr-1" />
                    AI Fix Suggestion
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    View Source
                  </Button>
                  <Button size="sm" variant="outline">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Mark as Fixed
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scan Summary */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Last Scan Summary</CardTitle>
          <CardDescription>
            Overview of the most recent broken link scan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Scan Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Pages Scanned:</span>
                  <span>47</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Links Checked:</span>
                  <span>234</span>
                </div>
                <div className="flex justify-between">
                  <span>Broken Links Found:</span>
                  <span className="text-red-500">{brokenLinks.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scan Duration:</span>
                  <span>2 minutes 15 seconds</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Recommendations</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Update or remove broken external links</div>
                <div>• Fix internal link paths that return 404 errors</div>
                <div>• Consider adding redirects for moved content</div>
                <div>• Set up monitoring for critical pages</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrokenLinksPage;
