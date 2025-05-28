
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuideDetailPage: React.FC = () => {
  const { slug } = useParams();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/resources/guides">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guides
          </Button>
        </Link>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Complete Guide to Technical SEO Audits
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Advanced</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-primary hover:underline">1. Introduction to Technical SEO</a></li>
              <li><a href="#crawling" className="text-primary hover:underline">2. Crawling and Indexing</a></li>
              <li><a href="#site-structure" className="text-primary hover:underline">3. Site Structure Optimization</a></li>
              <li><a href="#performance" className="text-primary hover:underline">4. Performance Optimization</a></li>
              <li><a href="#schema" className="text-primary hover:underline">5. Schema Markup Implementation</a></li>
              <li><a href="#monitoring" className="text-primary hover:underline">6. Monitoring and Maintenance</a></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <section id="introduction">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction to Technical SEO</h2>
                <p className="mb-6">
                  Technical SEO forms the foundation of your website's search engine visibility. 
                  This comprehensive guide will walk you through every aspect of conducting a 
                  thorough technical SEO audit.
                </p>
              </section>
              
              <section id="crawling" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Crawling and Indexing</h2>
                <p className="mb-4">
                  Search engines need to efficiently crawl and index your website. Key areas to focus on include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>XML sitemap optimization</li>
                  <li>Robots.txt configuration</li>
                  <li>Internal linking structure</li>
                  <li>URL structure and canonicalization</li>
                </ul>
              </section>
              
              <section id="site-structure" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Site Structure Optimization</h2>
                <p className="mb-4">
                  A well-organized site structure helps both users and search engines navigate your content:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Logical hierarchy and navigation</li>
                  <li>Breadcrumb implementation</li>
                  <li>Category and tag optimization</li>
                  <li>Pagination best practices</li>
                </ul>
              </section>

              <section id="performance" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Performance Optimization</h2>
                <p className="mb-4">
                  Page speed and Core Web Vitals are crucial ranking factors:
                </p>
                <div className="bg-muted/20 p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Pro Tip:</p>
                      <p className="text-sm text-muted-foreground">
                        Use MartechEngine's visual SEO audit to automatically identify 
                        performance issues and get AI-powered fix suggestions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="schema" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Schema Markup Implementation</h2>
                <p className="mb-6">
                  Structured data helps search engines understand your content better and can 
                  enable rich snippets in search results.
                </p>
              </section>

              <section id="monitoring" className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Monitoring and Maintenance</h2>
                <p className="mb-6">
                  Regular monitoring ensures your technical SEO improvements continue to work effectively. 
                  Set up automated alerts and schedule regular audits to maintain optimal performance.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuideDetailPage;
