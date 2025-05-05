
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Ways AI Is Transforming Digital Marketing in 2025",
    excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and providing unprecedented insights into customer behavior.",
    image: "/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png",
    category: "AI",
    date: "May 1, 2025",
    author: "Sarah Johnson",
    tags: ["AI", "Marketing", "Technology"]
  },
  {
    id: "2",
    title: "The Complete Guide to SEO for AI-Driven Search",
    excerpt: "As search engines get smarter with AI, your SEO strategy needs to evolve. Learn how to optimize your content for AI-driven search algorithms.",
    image: "/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png",
    category: "SEO",
    date: "April 22, 2025",
    author: "Michael Chen",
    tags: ["SEO", "AI", "Search"]
  },
  {
    id: "3",
    title: "Content Optimization: Why AI Readability Matters",
    excerpt: "Learn how AI systems interpret and evaluate your content, and how to optimize for both human readers and AI algorithms.",
    image: "/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png",
    category: "Content",
    date: "April 15, 2025",
    author: "Alex Rodriguez",
    tags: ["Content", "Optimization", "Readability"]
  },
  {
    id: "4",
    title: "Measuring the ROI of Your AI Marketing Tools",
    excerpt: "Implementing AI tools in your marketing strategy represents an investment. Here's how to measure their effectiveness and ROI.",
    image: "/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png",
    category: "Analytics",
    date: "April 8, 2025",
    author: "Sarah Johnson",
    tags: ["Analytics", "ROI", "Tools"]
  },
  {
    id: "5",
    title: "Voice Search Optimization: The Next Frontier",
    excerpt: "With the rise of voice assistants, optimizing for voice search is becoming critical. Learn how to adapt your content for voice queries.",
    image: "/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png",
    category: "SEO",
    date: "April 1, 2025",
    author: "Michael Chen",
    tags: ["Voice", "SEO", "Search"]
  },
  {
    id: "6",
    title: "The Ethics of AI in Content Creation",
    excerpt: "As AI becomes more prevalent in content creation, ethical questions arise. Explore the ethical considerations and best practices.",
    image: "/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png",
    category: "Content",
    date: "March 25, 2025",
    author: "Alex Rodriguez",
    tags: ["Ethics", "AI", "Content"]
  }
];

const categories = ["All", "AI", "SEO", "Content", "Analytics"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Insights, tips, and news on AI marketing, SEO, and content optimization.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="glass-button pl-10 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex overflow-x-auto space-x-2 p-1 w-full md:w-auto">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-transparent text-foreground hover:bg-primary/20"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured post */}
        <div className="mb-12">
          <Card className="glass-card border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <span className="text-primary text-sm mb-2">{blogPosts[0].category}</span>
                <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6 mt-auto">
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar size={14} className="mr-1" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, idx) => (
            <Card 
              key={post.id} 
              className="glass-card border-white/10 overflow-hidden flex flex-col animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-primary text-sm mb-2">{post.category}</span>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-6">{post.excerpt}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-auto mb-4">
                  <User size={12} className="mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar size={12} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="text-primary text-sm hover:underline">
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or browsing a different category.</p>
          </div>
        )}

        {/* Newsletter signup */}
        <div className="mt-16 glass-card border-white/10 p-8 rounded-xl max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles, tips, and insights on AI marketing delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="glass-button border-white/10 flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Link to other resources */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold mb-4">Explore More Resources</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/docs">
              <Button variant="outline" className="glass-button">
                Documentation
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="outline" className="glass-button">
                Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
