
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  Search,
  Star,
  Building,
  ShoppingCart,
  Calendar,
  BookOpen,
  Users
} from 'lucide-react';

const SchemaMarkupPage: React.FC = () => {
  const schemaTypes = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Article Schema",
      description: "Enhance blog posts and articles with rich snippets"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Product Schema",
      description: "Show prices, reviews, and availability in search results"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "LocalBusiness Schema",
      description: "Display business info, hours, and contact details"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Review Schema",
      description: "Show star ratings and review counts"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Schema",
      description: "Promote events with dates, locations, and ticket info"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Organization Schema",
      description: "Establish your brand identity and social profiles"
    }
  ];

  const features = [
    "AI-assisted schema generation",
    "JSON-LD format (Google recommended)",
    "Real-time validation and testing",
    "One-click WordPress integration",
    "Rich snippet preview",
    "Bulk schema implementation",
    "Schema monitoring and alerts",
    "Custom schema types support"
  ];

  const benefits = [
    "Increase click-through rates by up to 30%",
    "Improve search result visibility",
    "Stand out with rich snippets",
    "Boost local search performance",
    "Enhance brand credibility",
    "Drive more qualified traffic"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              All Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Schema Markup</span> Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Generate, validate, and implement schema markup with AI assistance. 
              Help search engines understand your content and earn rich snippets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
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
        </div>
      </section>

      {/* Schema Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Supported Schema Types
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Generate schema markup for all major content types with AI-powered automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schemaTypes.map((type, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Schema Markup Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Schema markup helps search engines understand your content better, 
                  leading to enhanced search results and higher click-through rates.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Powerful Features</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Generated Schema Markup
              </h2>
              <p className="text-xl text-muted-foreground">
                See how MartechEngine automatically generates clean, valid JSON-LD schema
              </p>
            </div>
            
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <span className="font-medium">Article Schema Example</span>
                <Badge variant="secondary">JSON-LD</Badge>
              </div>
              <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI-Powered SEO: The Future of Search Optimization",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MartechEngine",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "description": "Learn how AI is revolutionizing SEO..."
}`}
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Search Results?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start generating schema markup that helps your content stand out in search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg">
                  See All Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchemaMarkupPage;
