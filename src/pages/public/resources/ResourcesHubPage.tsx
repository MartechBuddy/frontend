
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Users, 
  Video, 
  Code, 
  Search,
  ArrowRight,
  Calendar,
  Trophy
} from 'lucide-react';

const ResourcesHubPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Blog',
      description: 'Content marketing, AI SEO news, industry insights',
      icon: <FileText className="h-6 w-6" />,
      link: '/resources/blog',
      count: '50+ articles'
    },
    {
      title: 'Guides',
      description: 'Longform tactical articles, how-to\'s, advanced SEO strategies',
      icon: <BookOpen className="h-6 w-6" />,
      link: '/resources/guides',
      count: '25+ guides'
    },
    {
      title: 'Documentation',
      description: 'How to use MartechEngine features, step-by-step instructions',
      icon: <Code className="h-6 w-6" />,
      link: '/resources/documentation',
      count: 'Complete docs'
    },
    {
      title: 'API Documentation',
      description: 'Public API reference for developers',
      icon: <Code className="h-6 w-6" />,
      link: '/resources/api-documentation',
      count: 'Full reference'
    },
    {
      title: 'FAQ',
      description: 'General Q&A about the product, billing, support',
      icon: <HelpCircle className="h-6 w-6" />,
      link: '/resources/faq',
      count: '20+ questions'
    },
    {
      title: 'SEO Glossary',
      description: 'Terminology index for SEO concepts',
      icon: <Search className="h-6 w-6" />,
      link: '/resources/seo-glossary',
      count: '100+ terms'
    },
    {
      title: 'Community',
      description: 'Join our Discord and connect with other users',
      icon: <Users className="h-6 w-6" />,
      link: '/resources/community',
      count: '1000+ members'
    },
    {
      title: 'Webinars',
      description: 'Recordings and schedule of upcoming webinars',
      icon: <Video className="h-6 w-6" />,
      link: '/resources/webinars',
      count: '10+ sessions'
    },
    {
      title: 'Case Studies',
      description: 'Detailed success stories and client testimonials',
      icon: <Trophy className="h-6 w-6" />,
      link: '/resources/case-studies',
      count: '15+ stories'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete SEO Audit Checklist',
      type: 'Guide',
      readTime: '15 min read',
      link: '/resources/guides/seo-audit-checklist'
    },
    {
      title: 'AI-Powered Content Strategy',
      type: 'Blog',
      readTime: '8 min read',
      link: '/resources/blog/ai-content-strategy'
    },
    {
      title: 'Getting Started with MartechEngine',
      type: 'Documentation',
      readTime: '5 min read',
      link: '/resources/documentation/getting-started'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Grow Your SEO Knowledge</span>
              <br />& Master MartechEngine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to succeed with SEO and get the most out of MartechEngine's AI-powered tools.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {category.description}
                  </CardDescription>
                  <Link to={category.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{resource.type}</span>
                      <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link to={resource.link}>
                      <Button variant="ghost" className="p-0 h-auto text-primary">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="glass-card border-primary/20 p-8">
              <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you succeed with MartechEngine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/company/contact">
                  <Button>
                    Contact Support
                  </Button>
                </Link>
                <Link to="/resources/community">
                  <Button variant="outline">
                    Join Community
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHubPage;
