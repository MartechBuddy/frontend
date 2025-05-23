
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";

const BlogListPage: React.FC = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How AI Readiness Impacts Your SEO Strategy in 2024",
      excerpt: "Learn how AI-powered search engines are changing the SEO landscape and what you need to do to stay ahead.",
      category: "SEO",
      date: "May 15, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      slug: "ai-readiness-seo-strategy"
    },
    {
      id: 2,
      title: "10 Ways to Optimize Your Content for AI Search Engines",
      excerpt: "Practical tips and strategies to ensure your content is easily readable and cited by AI models.",
      category: "Content",
      date: "May 10, 2024",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      slug: "optimize-content-ai-search"
    },
    {
      id: 3,
      title: "The Future of Social Media Marketing: AI-Powered Strategies",
      excerpt: "Discover how AI is transforming social media marketing and how to leverage it for your business.",
      category: "Social Media",
      date: "May 5, 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      slug: "future-social-media-ai"
    },
    {
      id: 4,
      title: "Why Structured Data is Essential for AI Readiness",
      excerpt: "Understanding the role of structured data in making your website AI-friendly and improving visibility.",
      category: "Technical SEO",
      date: "April 28, 2024",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800",
      slug: "structured-data-ai-readiness"
    },
    {
      id: 5,
      title: "Content Automation: Balancing AI and Human Creativity",
      excerpt: "How to leverage AI for content creation while maintaining the human touch that audiences connect with.",
      category: "Content",
      date: "April 20, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
      slug: "content-automation-balance"
    },
    {
      id: 6,
      title: "Measuring Your AI Readiness: Key Metrics and Benchmarks",
      excerpt: "Learn how to assess your website's AI readiness and track progress with these essential metrics.",
      category: "Analytics",
      date: "April 15, 2024",
      readTime: "9 min read",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      slug: "measuring-ai-readiness"
    }
  ];
  
  const categories = ["All", "SEO", "Content", "Social Media", "Technical SEO", "Analytics"];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Insights, strategies, and expert advice on AI-powered marketing technology.
        </p>
      </div>
      
      <div className="mb-12 animate-fade-in">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "" : "glass-button"}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post, idx) => (
          <Link 
            key={post.id} 
            to={`/resources/blog/${post.slug}`}
            className="animate-scale-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/30 border border-white/5">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-3 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-primary mt-auto text-sm font-medium">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="glass-button">
          Load More Articles <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="mt-20 glass-card border-white/10 rounded-2xl p-8 max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Get the latest insights on AI marketing technology delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="glass-button rounded-md px-4 py-2 flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
