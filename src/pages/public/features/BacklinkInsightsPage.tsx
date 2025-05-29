
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Link as LinkIcon, TrendingUp, Shield, ArrowRight, CheckCircle, BarChart3, AlertTriangle, Target } from "lucide-react";

const BacklinkInsightsPage = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "GSC Integration",
      description: "Analyze backlink data directly from Google Search Console for accurate insights."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Link Velocity",
      description: "Track how quickly you're gaining or losing backlinks over time."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Anchor Text AI",
      description: "AI-powered analysis of anchor text distribution and optimization opportunities."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Toxic Link Detection",
      description: "Identify potentially harmful backlinks that could hurt your rankings."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <LinkIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Backlink Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Understand your backlink profile with AI-powered analysis. Track link velocity, 
            analyze anchor text patterns, and identify opportunities for link building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Analyze My Backlinks <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Backlink Analysis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Backlink Metrics We Track
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Referring Domains</h3>
                <p className="text-muted-foreground">
                  Track the number of unique domains linking to your site and monitor growth over time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Link Quality Score</h3>
                <p className="text-muted-foreground">
                  AI-powered assessment of backlink quality based on domain authority, relevance, and trust signals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Anchor Text Distribution</h3>
                <p className="text-muted-foreground">
                  Analyze anchor text patterns to ensure natural link building and avoid over-optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Backlink Analysis Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Identify link building opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Monitor competitor backlink strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Protect against negative SEO attacks</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Track link building campaign success</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Optimize anchor text diversity</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Improve domain authority growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Unlock the Power of Your Backlink Profile
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get deep insights into your backlinks and discover opportunities to boost your search rankings.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Analysis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BacklinkInsightsPage;
