
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  Eye,
  Zap,
  ArrowRight
} from 'lucide-react';

const SeoAuditPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4">SEO Audit Tool</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Complete SEO Analysis & <span className="text-gradient">Site Audit</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get comprehensive insights into your website's SEO health with our AI-powered audit tool. 
            Identify issues, track performance, and get actionable recommendations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Search className="mr-2 h-5 w-5" />
              Start Free Audit
            </Button>
            <Button size="lg" variant="outline">
              View Sample Report
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Technical SEO Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive crawl analysis identifying technical issues, broken links, 
                and optimization opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Visual SEO Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI-powered visual analysis of your pages with overlay insights 
                and UI/UX recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI-Powered Fixes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get instant AI-generated solutions and one-click fixes 
                for common SEO issues.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Report Preview */}
        <Card className="glass-card border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Sample Audit Report</CardTitle>
            <CardDescription>
              See what insights you'll get from our comprehensive SEO audit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">85</div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">12</div>
                <div className="text-sm text-muted-foreground">Issues Found</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">47</div>
                <div className="text-sm text-muted-foreground">Pages Crawled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">A</div>
                <div className="text-sm text-muted-foreground">SEO Grade</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Audit Your Website?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get started with your free SEO audit today
          </p>
          <Button size="lg">
            Start Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeoAuditPage;
