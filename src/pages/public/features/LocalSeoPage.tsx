
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Phone, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Building,
  Search,
  Users,
  Zap
} from 'lucide-react';

const LocalSeoPage: React.FC = () => {
  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "NAP Consistency Check",
      description: "Verify Name, Address, Phone consistency across directories and citations"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Local Citations Management",
      description: "Track and manage your business listings across 50+ local directories"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Review Monitoring",
      description: "Monitor and respond to customer reviews across all platforms"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Local Keyword Tracking",
      description: "Track rankings for location-specific keywords and phrases"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Local Schema Markup",
      description: "Generate and implement LocalBusiness schema markup automatically"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Competitor Analysis",
      description: "Analyze local competitors and identify ranking opportunities"
    }
  ];

  const benefits = [
    "Increase local search visibility by up to 200%",
    "Improve Google My Business performance",
    "Generate more foot traffic and phone calls",
    "Build trust with consistent business information",
    "Outrank local competitors",
    "Track local SEO performance with detailed reports"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              Pro Feature
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Local SEO</span> Optimization
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dominate local search results with AI-powered local SEO tools designed for businesses that serve specific geographic areas.
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
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Local SEO Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to optimize your local presence and attract more customers in your area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Local SEO Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Local searches drive 78% of mobile searches to offline purchases. 
                  Make sure your business shows up when customers are ready to buy.
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
              <div className="relative">
                <Card className="glass-card p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                    <p className="text-muted-foreground mb-6">
                      See how MartechEngine can improve your local search rankings in just 30 days.
                    </p>
                    <Link to="/signup">
                      <Button className="w-full">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Available in Pro and Team Plans
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Local SEO tools are included in our Pro and Team plans, along with all other advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg">
                  View Pricing
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

export default LocalSeoPage;
