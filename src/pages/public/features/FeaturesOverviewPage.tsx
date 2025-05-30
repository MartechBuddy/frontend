
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  Link as LinkIcon, 
  Cog, 
  BarChart, 
  Eye,
  Database,
  MapPin,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Building
} from 'lucide-react';

const FeaturesOverviewPage: React.FC = () => {
  const featureCategories = [
    {
      title: "AI SEO Platform",
      description: "Intelligent automation and optimization tools",
      features: [
        {
          name: "Automation Workflows",
          description: "Fix Site, Optimize Page, Plan Cluster, Link Reclaimer",
          icon: <Cog className="h-5 w-5" />,
          link: "/features/automation-workflows",
          tier: "Pro"
        },
        {
          name: "WordPress Integration",
          description: "Live push, sync, snippet preview",
          icon: <Database className="h-5 w-5" />,
          link: "/features/wordpress-integration",
          tier: "Pro"
        },
        {
          name: "Visual SEO Audit",
          description: "Playwright screenshots + Gemini Vision",
          icon: <Eye className="h-5 w-5" />,
          link: "/features/visual-seo-audit",
          tier: "Pro"
        }
      ]
    },
    {
      title: "Technical SEO",
      description: "Comprehensive technical optimization",
      features: [
        {
          name: "SEO Audit",
          description: "Crawl, page insights, fix suggestions",
          icon: <Search className="h-5 w-5" />,
          link: "/features/seo-audit",
          tier: "Free"
        },
        {
          name: "Schema Markup",
          description: "JSON-LD generation, validation, push",
          icon: <Code className="h-5 w-5" />,
          link: "/features/schema-markup",
          tier: "Pro"
        },
        {
          name: "Internal Link Planner",
          description: "Link map, orphan detection, AI links",
          icon: <LinkIcon className="h-5 w-5" />,
          link: "/features/internal-link-planner",
          tier: "Pro"
        },
        {
          name: "Local SEO",
          description: "NAP check, citations, schema",
          icon: <MapPin className="h-5 w-5" />,
          link: "/features/local-seo",
          tier: "Pro"
        }
      ]
    },
    {
      title: "Content & Keyword Intelligence",
      description: "AI-powered content creation and keyword research",
      features: [
        {
          name: "Keyword Intelligence",
          description: "Metrics, clustering, opportunity AI",
          icon: <BarChart className="h-5 w-5" />,
          link: "/features/keyword-intelligence",
          tier: "Free"
        },
        {
          name: "AI Content Writer",
          description: "Blog generation, rewrite, images",
          icon: <FileText className="h-5 w-5" />,
          link: "/features/ai-content-writer",
          tier: "Pro"
        },
        {
          name: "Backlink Insights",
          description: "GSC analysis, velocity, anchor text AI",
          icon: <LinkIcon className="h-5 w-5" />,
          link: "/features/backlink-insights",
          tier: "Pro"
        }
      ]
    }
  ];

  const allFeatures = [
    "AI-powered content generation",
    "Advanced keyword clustering",
    "Technical SEO automation",
    "WordPress direct publishing",
    "Visual audit with screenshots",
    "Schema markup generation",
    "Internal link optimization",
    "Local SEO management",
    "Backlink analysis",
    "Competitor tracking",
    "SERP insights",
    "Custom workflows"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Unleash the Power of AI</span>
              <br />for Your SEO
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete suite of AI-powered SEO tools designed to automate, optimize, and scale your search engine presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Try All Features Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features/comparison">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Compare with Competitors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.features.map((feature, index) => (
                    <Card key={index} className="glass-card hover:border-primary/30 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {feature.icon}
                          </div>
                          <Badge variant={feature.tier === 'Free' ? 'secondary' : 'default'}>
                            {feature.tier}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm mb-4">
                          {feature.description}
                        </CardDescription>
                        <Link to={feature.link}>
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Everything You Need for SEO Success</h2>
              <p className="text-lg text-muted-foreground">
                MartechEngine combines the power of AI with proven SEO strategies to deliver results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-primary/20 p-8 md:p-12 text-center">
              <div className="mb-6">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Ready to See it in Action?</h2>
                <p className="text-lg text-muted-foreground">
                  Start optimizing your SEO with AI-powered automation today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" size="lg">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesOverviewPage;
