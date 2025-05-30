
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Target, TrendingUp, Lightbulb, BarChart3, Users, ArrowRight, Zap, Brain, Eye } from "lucide-react";

const KeywordIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="outline">
                  <Search className="w-3 h-3 mr-1" />
                  Free Feature
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-Powered <span className="text-gradient">Keyword Intelligence</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover high-impact keywords, analyze search intent, and find content opportunities with 
                  advanced AI clustering and competitor analysis. Go beyond basic keyword tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Finding Keywords
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      See Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                    alt="Keyword Research Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">2,847 Keywords</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Discovered</div>
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
                Beyond Traditional Keyword Research
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered keyword intelligence goes deeper than search volume and competition, 
                uncovering opportunities your competitors miss.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle>Smart Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    AI-powered keyword research that uncovers high-opportunity keywords your competitors 
                    miss, including semantic variations and emerging trends.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Intent Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Automatically categorize keywords by search intent (informational, commercial, 
                    transactional) to align perfectly with user behavior.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-4">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <CardTitle>Advanced Clustering</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Group related keywords into topic clusters automatically to build comprehensive 
                    content strategies and establish topic authority.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Opportunity Scoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    AI calculates keyword opportunity scores based on search volume, competition, 
                    and your site's ranking potential for maximum ROI.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Competitor Gaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Identify keywords your competitors rank for but you don't, plus find content 
                    gaps and underserved niches in your industry.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle>Content Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Generate content briefs and article outlines directly from keyword clusters 
                    with AI assistance for streamlined content creation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Seed Keywords to Content Strategy
              </h2>
              <p className="text-xl text-muted-foreground">
                Our intelligent workflow turns keyword research into actionable content plans
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Seed & Discover</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Input seed keywords or topics. Our AI expands your list with related terms, 
                  long-tail variations, and question-based keywords that users actually search for.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analyze & Cluster</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI analyzes search intent, difficulty, and opportunity scores while automatically 
                  clustering related keywords into coherent content themes and topics.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Execute & Track</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate content briefs for each cluster, create optimized articles with our 
                  AI writer, and track ranking performance over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Intelligence Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Go beyond basic metrics with AI-powered insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                    alt="Keyword Analytics Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-semibold">Intent: Commercial</span>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold text-green-600">Opportunity: High</div>
                  <div className="text-xs text-muted-foreground">87% Score</div>
                </div>
              </div>
              
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      AI-Powered Analysis
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Search volume trends and seasonality patterns</li>
                      <li>• Keyword difficulty assessment with ranking probability</li>
                      <li>• SERP feature opportunities (Featured snippets, PAA)</li>
                      <li>• Semantic keyword expansion and LSI terms</li>
                      <li>• Related question discovery from search suggestions</li>
                      <li>• Long-tail keyword mining and analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-500 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Strategic Insights
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Content gap identification and opportunity mapping</li>
                      <li>• Competitor keyword analysis and strategy reverse-engineering</li>
                      <li>• Topic authority mapping and content hub planning</li>
                      <li>• User intent classification and search journey mapping</li>
                      <li>• Priority scoring algorithms for maximum ROI</li>
                      <li>• Revenue potential calculation and traffic forecasting</li>
                    </ul>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Unlock Hidden Keyword Opportunities
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Stop guessing and start targeting keywords that actually drive results. Get AI-powered 
                  insights that traditional tools miss and dominate your niche.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Finding Keywords
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      See Demo
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

export default KeywordIntelligencePage;
