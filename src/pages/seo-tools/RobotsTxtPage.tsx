
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Search,
  Download,
  Upload
} from 'lucide-react';

const RobotsTxtPage: React.FC = () => {
  const [robotsContent, setRobotsContent] = useState(`User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /

Sitemap: https://example.com/sitemap.xml`);

  // Mock validation results
  const validationResults = [
    { type: 'success', message: 'robots.txt file is accessible' },
    { type: 'success', message: 'Valid syntax detected' },
    { type: 'warning', message: 'Consider adding more specific rules for search engines' },
    { type: 'error', message: 'Sitemap URL returns 404 error' }
  ];

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  const getResultColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500/20 bg-green-500/10';
      case 'warning': return 'border-yellow-500/20 bg-yellow-500/10';
      case 'error': return 'border-red-500/20 bg-red-500/10';
      default: return 'border-white/10 bg-white/5';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Robots.txt Manager</h1>
          <p className="text-muted-foreground mt-2">
            Parse, validate, and manage your robots.txt file
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Audit Robots.txt
          </Button>
        </div>
      </div>

      {/* Current Robots.txt */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Current robots.txt
          </CardTitle>
          <CardDescription>
            View and edit your current robots.txt configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">File Content</span>
              <Badge variant="outline">Located at: /robots.txt</Badge>
            </div>
            <Textarea
              value={robotsContent}
              onChange={(e) => setRobotsContent(e.target.value)}
              rows={10}
              className="font-mono text-sm"
              placeholder="Enter your robots.txt content..."
            />
          </div>
          
          <div className="flex gap-2">
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Update robots.txt
            </Button>
            <Button variant="outline">
              Validate Syntax
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Validation Results */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Validation Results</CardTitle>
          <CardDescription>
            Analysis of your robots.txt file for issues and optimization opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {validationResults.map((result, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${getResultColor(result.type)}`}>
                {getResultIcon(result.type)}
                <span className="flex-1">{result.message}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Rules */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Common robots.txt Rules</CardTitle>
          <CardDescription>
            Quick templates for common robots.txt configurations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Basic Configuration</h4>
              <div className="p-3 bg-white/5 rounded-lg font-mono text-sm">
                <div>User-agent: *</div>
                <div>Disallow: /admin/</div>
                <div>Disallow: /private/</div>
                <div>Allow: /</div>
                <div className="mt-2">Sitemap: https://example.com/sitemap.xml</div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Use This Template
              </Button>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">E-commerce Site</h4>
              <div className="p-3 bg-white/5 rounded-lg font-mono text-sm">
                <div>User-agent: *</div>
                <div>Disallow: /cart/</div>
                <div>Disallow: /checkout/</div>
                <div>Disallow: /account/</div>
                <div>Allow: /products/</div>
                <div className="mt-2">Sitemap: https://example.com/sitemap.xml</div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Use This Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
          <CardDescription>
            Guidelines for effective robots.txt management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-500">Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Include sitemap URL in robots.txt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Use specific disallow rules for sensitive areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Test robots.txt before implementing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Keep the file simple and readable</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-red-500">Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>Don't block important content accidentally</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>Don't use robots.txt for security purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>Don't forget to update after site changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  <span>Don't use wildcards incorrectly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RobotsTxtPage;
