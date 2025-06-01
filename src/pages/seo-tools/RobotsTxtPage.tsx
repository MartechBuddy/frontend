
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileCode, 
  Check, 
  AlertTriangle, 
  Download,
  Save,
  Eye,
  History,
  RefreshCw
} from 'lucide-react';

interface RobotsIssue {
  type: 'error' | 'warning' | 'info';
  line: number;
  message: string;
  suggestion: string;
}

interface HistoryEntry {
  date: string;
  user: string;
  changes: string;
  version: string;
}

const RobotsTxtPage: React.FC = () => {
  const [currentRobots, setCurrentRobots] = useState(`# Robots.txt for example.com
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Allow: /public/

User-agent: Googlebot
Disallow: /search
Allow: /search/public

Crawl-delay: 1

Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-images.xml`);

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const issues: RobotsIssue[] = [
    {
      type: 'warning',
      line: 3,
      message: 'Disallow rule may be too broad',
      suggestion: 'Consider being more specific with /admin/ disallow rules'
    },
    {
      type: 'info', 
      line: 10,
      message: 'Crawl-delay directive found',
      suggestion: 'Crawl-delay may slow down indexing for some bots'
    },
    {
      type: 'error',
      line: 12,
      message: 'Sitemap URL returns 404',
      suggestion: 'Verify that https://example.com/sitemap-images.xml exists'
    }
  ];

  const history: HistoryEntry[] = [
    {
      date: '2024-01-15T10:30:00Z',
      user: 'John Doe',
      changes: 'Added new disallow rules for /temp/ directory',
      version: 'v1.3'
    },
    {
      date: '2024-01-10T14:20:00Z', 
      user: 'Jane Smith',
      changes: 'Updated sitemap references',
      version: 'v1.2'
    },
    {
      date: '2024-01-05T09:15:00Z',
      user: 'John Doe', 
      changes: 'Initial robots.txt configuration',
      version: 'v1.1'
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <FileCode className="h-4 w-4 text-blue-500" />;
      default:
        return <FileCode className="h-4 w-4 text-gray-500" />;
    }
  };

  const getIssueBadge = (type: string) => {
    const variants = {
      error: 'destructive',
      warning: 'default',
      info: 'secondary'
    } as const;
    
    return <Badge variant={variants[type as keyof typeof variants]}>{type}</Badge>;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Robots.txt Manager</h1>
          <p className="text-muted-foreground mt-2">
            Analyze and optimize your robots.txt file for better crawling control
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button onClick={handleAnalyze} disabled={isAnalyzing}>
            <FileCode className="h-4 w-4 mr-2" />
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="editor" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 glass-card">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="editor">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Robots.txt Editor</CardTitle>
                      <CardDescription>
                        Edit your robots.txt file directly
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                      <Button size="sm">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={currentRobots}
                    onChange={(e) => setCurrentRobots(e.target.value)}
                    className="min-h-[400px] font-mono text-sm glass-button border-white/10"
                    placeholder="Enter your robots.txt content here..."
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common robots.txt configurations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="h-4 w-4 mr-2" />
                      Block All Crawlers
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="h-4 w-4 mr-2" />
                      Allow All Crawlers
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="h-4 w-4 mr-2" />
                      Block Admin Areas
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="h-4 w-4 mr-2" />
                      Add Sitemap Reference
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="h-4 w-4 mr-2" />
                      Set Crawl Delay
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10 mt-6">
                <CardHeader>
                  <CardTitle>Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Include sitemap references</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Use specific disallow rules</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Test before deployment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Keep it simple and clear</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>
                Issues and recommendations for your robots.txt file
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <RefreshCw className="h-8 w-8 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">Analyzing robots.txt file...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {issues.map((issue, index) => (
                    <div key={index} className="flex items-start justify-between p-4 glass-button rounded-lg">
                      <div className="flex items-start space-x-3">
                        {getIssueIcon(issue.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">{issue.message}</span>
                            {getIssueBadge(issue.type)}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            Line {issue.line}
                          </div>
                          <div className="text-sm text-blue-400">
                            💡 {issue.suggestion}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Fix
                      </Button>
                    </div>
                  ))}
                  
                  {issues.length === 0 && (
                    <div className="text-center py-8">
                      <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                      <p className="text-muted-foreground">No issues found in your robots.txt file!</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Version History</CardTitle>
              <CardDescription>
                Track changes made to your robots.txt file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {history.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass-button rounded-lg">
                    <div className="flex items-center space-x-3">
                      <History className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{entry.changes}</div>
                        <div className="text-sm text-muted-foreground">
                          {entry.user} • {new Date(entry.date).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{entry.version}</Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Restore
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>
                How your robots.txt file will appear to search engines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{currentRobots}</pre>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    URL: https://example.com/robots.txt
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Test URL
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RobotsTxtPage;
