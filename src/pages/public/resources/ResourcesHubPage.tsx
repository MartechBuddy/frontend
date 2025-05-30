
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Users, 
  Code, 
  Lightbulb,
  Search,
  Video,
  Award,
  Book
} from 'lucide-react';

const ResourcesHubPage: React.FC = () => {
  const resourceCategories = [
    {
      title: "Blog",
      description: "Content marketing, AI SEO news, industry insights",
      icon: <FileText className="h-6 w-6" />,
      link: "/resources/blog",
      count: "50+ articles",
      color: "bg-blue-500"
    },
    {
      title: "Guides",
      description: "Longform tactical articles, how-to's, advanced SEO strategies",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/resources/guides",
      count: "25+ guides",
      color: "bg-green-500"
    },
    {
      title: "Documentation",
      description: "How to use MartechEngine features, step-by-step instructions",
      icon: <Book className="h-6 w-6" />,
      link: "/resources/documentation",
      count: "100+ docs",
      color: "bg-purple-500"
    },
    {
      title: "API Documentation",
      description: "Public API reference for developers",
      icon: <Code className="h-6 w-6" />,
      link: "/resources/api-documentation",
      count: "Coming soon",
      color: "bg-orange-500"
    },
    {
      title: "FAQ",
      description: "General Q&A about the product, billing, support",
      icon: <HelpCircle className="h-6 w-6" />,
      link: "/resources/faq",
      count: "30+ questions",
      color: "bg-red-500"
    },
    {
      title: "SEO Glossary",
      description: "Terminology index for SEO concepts",
      icon: <Lightbulb className="h-6 w-6" />,
      link: "/resources/seo-glossary",
      count: "200+ terms",
      color: "bg-yellow-500"
    },
    {
      title: "Community",
      description: "Connect with other SEO professionals",
      icon: <Users className="h-6 w-6" />,
      link: "/resources/community",
      count: "Join Discord",
      color: "bg-indigo-500"
    },
    {
      title: "Webinars",
      description: "Recordings and schedule of upcoming webinars",
      icon: <Video className="h-6 w-6" />,
      link: "/resources/webinars",
      count: "10+ sessions",
      color: "bg-pink-500"
    },
    {
      title: "Case Studies",
      description: "Detailed success stories and client testimonials",
      icon: <Award className="h-6 w-6" />,
      link: "/resources/case-studies",
      count: "15+ stories",
      color: "bg-teal-500"
    }
  ];

  const featuredResources = [
    {
      title: "Complete SEO Audit Checklist",
      description: "A comprehensive guide to auditing your website's SEO performance",
      type: "Guide",
      readTime: "15 min read",
      link: "/resources/guides/seo-audit-checklist"
    },
    {
      title: "AI-Powered Content Strategy",
      description: "How to leverage AI for creating SEO-optimized content at scale",
      type: "Blog",
      readTime: "8 min read",
      link: "/resources/blog/ai-content-strategy"
    },
    {
      title: "Technical SEO Fundamentals",
      description: "Master the technical aspects of SEO with this detailed guide",
      type: "Guide",
      readTime: "20 min read",
      link: "/resources/guides/technical-seo"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your <span className="text-gradient">SEO Knowledge</span> & Master MartechEngine
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to become an SEO expert and get the most out of our AI-powered platform
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Resource Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <Link key={index} to={resource.link}>
                  <Card className="glass-card h-full hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {resource.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Can't Find What You're Looking For?</CardTitle>
                <CardDescription className="text-lg mb-6">
                  Our support team is here to help you succeed with MartechEngine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/company/contact">
                    <Button size="lg">Contact Support</Button>
                  </Link>
                  <Link to="/resources/community">
                    <Button variant="outline" size="lg">Join Community</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesHubPage;
