
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, TrendingUp, Globe, Download } from "lucide-react";

const BacklinkAnalyzerPage: React.FC = () => {
  const [url, setUrl] = React.useState('');
  
  const mockBacklinks = [
    {
      domain: "example.com",
      url: "https://example.com/blog/seo-tips",
      authority: 75,
      anchorText: "SEO best practices",
      type: "dofollow",
      discovered: "2024-01-15"
    },
    {
      domain: "marketing-blog.net",
      url: "https://marketing-blog.net/resources",
      authority: 68,
      anchorText: "digital marketing tools",
      type: "dofollow",
      discovered: "2024-01-10"
    },
    {
      domain: "tech-news.com",
      url: "https://tech-news.com/ai-tools",
      authority: 82,
      anchorText: "AI marketing platform",
      type: "dofollow",
      discovered: "2024-01-08"
    }
  ];

  const stats = {
    totalBacklinks: 247,
    referringDomains: 89,
    averageAuthority: 72,
    newThisMonth: 15
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Backlink Analyzer</h1>
        <p className="text-muted-foreground">
          Analyze your backlink profile and discover new link-building opportunities.
        </p>
      </div>

      <Card className="glass-card border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Analyze Website</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter website URL (e.g., yourcompany.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Globe className="h-4 w-4 mr-2" />
              Analyze Backlinks
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Backlinks</p>
                <p className="text-2xl font-bold">{stats.totalBacklinks}</p>
              </div>
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Referring Domains</p>
                <p className="text-2xl font-bold">{stats.referringDomains}</p>
              </div>
              <Globe className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Authority</p>
                <p className="text-2xl font-bold">{stats.averageAuthority}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">New This Month</p>
                <p className="text-2xl font-bold text-green-500">+{stats.newThisMonth}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Backlink Profile</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Page URL</TableHead>
                <TableHead>Authority</TableHead>
                <TableHead>Anchor Text</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Discovered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBacklinks.map((backlink, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{backlink.domain}</TableCell>
                  <TableCell>
                    <a 
                      href={backlink.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center"
                    >
                      View Page
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <Badge variant={backlink.authority > 70 ? "default" : "secondary"}>
                      {backlink.authority}
                    </Badge>
                  </TableCell>
                  <TableCell>{backlink.anchorText}</TableCell>
                  <TableCell>
                    <Badge variant={backlink.type === "dofollow" ? "default" : "outline"}>
                      {backlink.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{backlink.discovered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BacklinkAnalyzerPage;
