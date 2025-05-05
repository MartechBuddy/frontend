
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DocCategory = {
  title: string;
  icon: string;
  articles: {
    title: string;
    description: string;
    link: string;
  }[];
};

const docCategories: DocCategory[] = [
  {
    title: "Getting Started",
    icon: "🚀",
    articles: [
      {
        title: "Quick Start Guide",
        description: "Learn how to set up your first project in under 5 minutes",
        link: "/docs/quick-start"
      },
      {
        title: "Platform Overview",
        description: "A high-level overview of MartechEngine.ai's capabilities",
        link: "/docs/platform-overview"
      },
      {
        title: "Understanding AI Readiness",
        description: "Learn about the AI Readiness score and why it matters",
        link: "/docs/ai-readiness"
      }
    ]
  },
  {
    title: "Feature Guides",
    icon: "📘",
    articles: [
      {
        title: "Content Automation",
        description: "Generate and optimize content with AI assistance",
        link: "/docs/content-automation"
      },
      {
        title: "SEO Tools",
        description: "Use our AI-powered SEO tools to improve rankings",
        link: "/docs/seo-tools"
      },
      {
        title: "Social Media Integration",
        description: "Automate your social media posts and engagement",
        link: "/docs/social-media"
      }
    ]
  },
  {
    title: "API Reference",
    icon: "🔌",
    articles: [
      {
        title: "Authentication",
        description: "Secure your API requests with OAuth2",
        link: "/docs/api/authentication"
      },
      {
        title: "Content Endpoints",
        description: "Endpoints for content creation and management",
        link: "/docs/api/content"
      },
      {
        title: "Analytics Endpoints",
        description: "Access analytics data via API",
        link: "/docs/api/analytics"
      }
    ]
  },
  {
    title: "Video Tutorials",
    icon: "🎥",
    articles: [
      {
        title: "Getting Started Walkthrough",
        description: "A visual guide to setting up your first project",
        link: "/docs/videos/getting-started"
      },
      {
        title: "Content Optimization Tutorial",
        description: "Learn how to optimize your content for AI readiness",
        link: "/docs/videos/content-optimization"
      },
      {
        title: "Advanced SEO Features",
        description: "Deep dive into our advanced SEO capabilities",
        link: "/docs/videos/advanced-seo"
      }
    ]
  }
];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Simple search functionality - in a real app, would be more sophisticated
  const filteredCategories = searchQuery 
    ? docCategories.map(category => ({
        ...category,
        articles: category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.articles.length > 0)
    : docCategories;

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how to make the most of MartechEngine.ai with our comprehensive documentation.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="glass-button pl-10 py-6 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/10 animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2" aria-hidden="true">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <Link 
                        to={article.link}
                        className="block glass-card border-white/5 p-4 rounded-lg hover:border-primary/30 transition-all"
                      >
                        <h3 className="font-semibold mb-1">{article.title}</h3>
                        <p className="text-sm text-muted-foreground">{article.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need more help?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Reach out to our support team or join our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="outline" className="glass-button">
                Contact Support
              </Button>
            </Link>
            <Link to="/community">
              <Button>
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
