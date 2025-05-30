
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Sparkles, FileText, Image, Globe, Zap, ArrowRight, BookOpen, Edit3, Wand2 } from "lucide-react";

const AiContentWriterPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="outline">
                  <PenTool className="w-3 h-3 mr-1" />
                  Pro Feature
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI <span className="text-gradient">Content Writer</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Generate full-length, SEO-optimized articles with AI. From outline to publication, 
                  create engaging content that ranks and converts your audience into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Generate Your First Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Watch Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4076&q=80"
                    alt="AI Content Creation Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-500" />
                    <span className="font-semibold">2,847 Words</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Generated in 3 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Content Creation Revolutionized
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From idea to published article in minutes. Our AI understands your brand voice, 
                target audience, and SEO requirements to create content that performs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Full Article Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Generate complete blog posts, guides, and articles with proper structure, 
                    headers, and SEO optimization that engages readers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                    <Edit3 className="h-6 w-6" />
                  </div>
                  <CardTitle>Smart Rewriting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Improve existing content with AI rewrites that enhance readability, tone, 
                    and search engine optimization while maintaining your brand voice.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-4">
                    <Image className="h-6 w-6" />
                  </div>
                  <CardTitle>AI Image Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Create custom images and graphics for your content with AI, complete 
                    with proper alt text and optimization for web performance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle>Content Briefs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Generate detailed content briefs with target keywords, structure, 
                    and key points to cover for any topic or industry.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle>Direct Publishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Publish content directly to WordPress with optimized meta descriptions, 
                    tags, and formatting without leaving the platform.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4">
                    <Wand2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Multiple Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Create various content types: blog posts, product descriptions, 
                    social media posts, email content, and landing pages.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Idea to Published Article
              </h2>
              <p className="text-xl text-muted-foreground">
                Streamlined workflow that turns concepts into high-performing content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Topic Input</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide a topic, keyword, or content brief. AI analyzes the topic, 
                  competition, and target audience requirements.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Outline Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI generates a comprehensive outline with headers, subheadings, 
                  and key points to cover for maximum engagement.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full article creation with proper SEO optimization, internal linking, 
                  and engaging copy that converts readers.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Publish & Optimize</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Review, edit, and publish directly to WordPress with all 
                  SEO elements perfectly configured for search engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Content Types We Generate
              </h2>
              <p className="text-xl text-muted-foreground">
                Versatile AI that adapts to any content format and industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-emerald-500 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Blog Content
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• How-to guides and tutorials</li>
                      <li>• Industry news and analysis</li>
                      <li>• Product reviews and comparisons</li>
                      <li>• List articles and roundups</li>
                      <li>• Opinion pieces and thought leadership</li>
                      <li>• Case studies and success stories</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-blue-500 flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Commercial Content
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Product descriptions</li>
                      <li>• Landing page copy</li>
                      <li>• Service pages</li>
                      <li>• FAQ sections</li>
                      <li>• About pages</li>
                      <li>• Sales emails</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-500 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Social & Email
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Social media posts</li>
                      <li>• Email newsletters</li>
                      <li>• Press releases</li>
                      <li>• Video scripts</li>
                      <li>• Podcast summaries</li>
                      <li>• LinkedIn articles</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=7952&q=80"
                    alt="Content Writing Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                </div>
                <div className="absolute top-6 right-6 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold text-emerald-600">5,247 Words</div>
                  <div className="text-xs text-muted-foreground">Published today</div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-semibold">SEO Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-primary/20 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Creating Content That Converts
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Generate high-quality, SEO-optimized content in minutes instead of hours. 
                  Let AI handle the writing while you focus on strategy and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Generate Your First Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Watch Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiContentWriterPage;
