
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  Brain, 
  FileText, 
  Zap,
  RefreshCw,
  Target,
  ArrowRight
} from 'lucide-react';

const AiContentWriterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4">AI Content Writer</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Create SEO-Optimized <span className="text-gradient">Content with AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality, SEO-optimized blog posts, articles, and web content 
            with our advanced AI writing assistant. From outline to publication.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <PenTool className="mr-2 h-5 w-5" />
              Start Writing
            </Button>
            <Button size="lg" variant="outline">
              View Sample Content
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <Brain className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI Blog Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Generate complete blog posts from just a topic or brief. 
                AI creates outlines, drafts, and optimized content.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <RefreshCw className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Content Repurposing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transform existing content into different formats - blogs to social posts, 
                articles to newsletters, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built-in SEO optimization with keyword integration, 
                meta descriptions, and readability scoring.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Writing Process */}
        <Card className="glass-card border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">AI Writing Process</CardTitle>
            <CardDescription>
              From idea to published content in just a few steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Topic & Brief</h3>
                <p className="text-muted-foreground">
                  Provide your topic, target keywords, and content brief
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. AI Generation</h3>
                <p className="text-muted-foreground">
                  AI creates outline, draft, and optimizes for SEO
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Publish</h3>
                <p className="text-muted-foreground">
                  Review, edit, and publish directly to WordPress
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Creating Amazing Content
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of content creators using AI to scale their content production
          </p>
          <Button size="lg">
            Create Your First Article
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiContentWriterPage;
