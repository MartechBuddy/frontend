
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenTool, Sparkles, FileText, Image, Globe, Zap } from "lucide-react";

const AiContentWriterPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">AI Content Writer</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Generate full-length, SEO-optimized articles with AI. From outline to publication, create engaging content that ranks and converts.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6">
          <PenTool className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Full Article Generation</h3>
          <p className="text-muted-foreground">
            Generate complete blog posts, guides, and articles with proper structure, headers, and SEO optimization.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Sparkles className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Smart Rewriting</h3>
          <p className="text-muted-foreground">
            Improve existing content with AI rewrites that enhance readability, tone, and search engine optimization.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Image className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">AI Image Generation</h3>
          <p className="text-muted-foreground">
            Create custom images and graphics for your content with AI, complete with proper alt text and optimization.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <FileText className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Content Briefs</h3>
          <p className="text-muted-foreground">
            Generate detailed content briefs with target keywords, structure, and key points to cover for any topic.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Globe className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Direct Publishing</h3>
          <p className="text-muted-foreground">
            Publish content directly to WordPress with optimized meta descriptions, tags, and formatting.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold mb-3">Multiple Formats</h3>
          <p className="text-muted-foreground">
            Create various content types: blog posts, product descriptions, social media posts, and email content.
          </p>
        </Card>
      </div>

      {/* Content Creation Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">From Idea to Published Article</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Topic Input</h3>
            <p className="text-muted-foreground">Provide a topic, keyword, or content brief. AI analyzes the topic and target audience.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">Outline Creation</h3>
            <p className="text-muted-foreground">AI generates a comprehensive outline with headers, subheadings, and key points to cover.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">Content Generation</h3>
            <p className="text-muted-foreground">Full article creation with proper SEO optimization, internal linking, and engaging copy.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-semibold mb-2">Publish & Optimize</h3>
            <p className="text-muted-foreground">Review, edit, and publish directly to WordPress with all SEO elements included.</p>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Content Types We Generate</h2>
        <Card className="glass-card border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Blog Content</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• How-to guides and tutorials</li>
                <li>• Industry news and analysis</li>
                <li>• Product reviews and comparisons</li>
                <li>• List articles and roundups</li>
                <li>• Opinion pieces and thought leadership</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Commercial Content</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Product descriptions</li>
                <li>• Landing page copy</li>
                <li>• Service pages</li>
                <li>• FAQ sections</li>
                <li>• Case studies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Social & Email</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Social media posts</li>
                <li>• Email newsletters</li>
                <li>• Press releases</li>
                <li>• Video scripts</li>
                <li>• Podcast summaries</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Creating Content That Converts</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Generate high-quality, SEO-optimized content in minutes instead of hours. Let AI handle the writing while you focus on strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Generate Your First Article</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiContentWriterPage;
