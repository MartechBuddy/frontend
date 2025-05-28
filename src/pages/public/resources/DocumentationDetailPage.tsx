
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Code, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DocumentationDetailPage: React.FC = () => {
  const { category, slug } = useParams();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/resources/documentation">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Button>
        </Link>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-2 capitalize">{category}</div>
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Getting Started with Site Audits
          </h1>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Quick Navigation */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" />
              On This Page
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-primary hover:underline">Overview</a></li>
              <li><a href="#setup" className="text-primary hover:underline">Setting Up Your First Audit</a></li>
              <li><a href="#reading-results" className="text-primary hover:underline">Reading Audit Results</a></li>
              <li><a href="#taking-action" className="text-primary hover:underline">Taking Action on Issues</a></li>
              <li><a href="#automation" className="text-primary hover:underline">Automation Options</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Documentation Content */}
        <Card className="glass-card border-white/10">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <section id="overview">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
                <p className="mb-6">
                  MartechEngine's Site Audit feature provides comprehensive technical SEO analysis 
                  of your website. It crawls your site, identifies issues, and provides AI-powered 
                  recommendations for fixes.
                </p>
              </section>
              
              <section id="setup" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Setting Up Your First Audit</h2>
                
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-400">Before You Start</p>
                      <p className="text-sm text-muted-foreground">
                        Ensure you have a project set up and your website is accessible to our crawlers.
                      </p>
                    </div>
                  </div>
                </div>
                
                <ol className="list-decimal pl-6 mb-6 space-y-3">
                  <li>Navigate to your project dashboard</li>
                  <li>Click on "SEO Tools" in the sidebar</li>
                  <li>Select "Site Audit" from the dropdown</li>
                  <li>Click "Run New Audit" to start the process</li>
                  <li>Wait for the crawl to complete (typically 5-10 minutes)</li>
                </ol>
              </section>
              
              <section id="reading-results" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Reading Audit Results</h2>
                <p className="mb-4">
                  Once your audit is complete, you'll see a comprehensive overview of your site's health:
                </p>
                
                <h3 className="text-xl font-medium mb-3 text-foreground">Health Score</h3>
                <p className="mb-4">
                  The overall health score (0-100) gives you a quick snapshot of your site's SEO status.
                </p>
                
                <h3 className="text-xl font-medium mb-3 text-foreground">Issue Categories</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><span className="text-red-400">Critical Issues:</span> Problems that need immediate attention</li>
                  <li><span className="text-yellow-400">Warnings:</span> Issues that should be addressed soon</li>
                  <li><span className="text-green-400">Opportunities:</span> Potential improvements for better performance</li>
                </ul>
              </section>

              <section id="taking-action" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Taking Action on Issues</h2>
                
                <div className="bg-muted/20 p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">AI-Powered Fixes</p>
                      <p className="text-sm text-muted-foreground">
                        Many issues can be automatically fixed using our AI workflows. 
                        Look for the "Apply AI Fix" button next to compatible issues.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="mb-6">
                  For each issue, you'll get detailed information about why it's important 
                  and specific steps to resolve it. Our AI can often generate the exact 
                  code or content changes needed.
                </p>
              </section>

              <section id="automation" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Automation Options</h2>
                <p className="mb-6">
                  Set up automated audits to run weekly or monthly, and get email notifications 
                  when new issues are detected. This ensures your site stays optimized over time.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentationDetailPage;
