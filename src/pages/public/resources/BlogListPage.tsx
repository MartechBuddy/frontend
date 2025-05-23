
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: "The Future of SEO: How AI is Revolutionizing Search",
    excerpt: "Discover how artificial intelligence is changing the landscape of search engine optimization and what it means for your digital strategy.",
    author: "Sarah Johnson",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "AI & SEO",
    featured: true,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "AI Readiness: Preparing Your Website for the Next Generation of Search",
    excerpt: "Learn the essential steps to optimize your website for AI-powered search engines and improve your visibility in AI-generated results.",
    author: "Michael Chen",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "AI Readiness",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Content Marketing in the Age of AI: Best Practices and Strategies",
    excerpt: "Explore how AI tools are transforming content creation and discover strategies to create content that resonates with both AI and human audiences.",
    author: "Emily Rodriguez",
    publishDate: "2024-01-10",
    readTime: "10 min read",
    category: "Content Marketing",
    featured: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Technical SEO for AI Search: Schema, Structured Data, and More",
    excerpt: "Deep dive into the technical aspects of SEO that matter most for AI search engines, including schema markup and structured data implementation.",
    author: "David Kim",
    publishDate: "2024-01-08",
    readTime: "12 min read",
    category: "Technical SEO",
    featured: false,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Social Media Automation: Leveraging AI for Better Engagement",
    excerpt: "Learn how to use AI-powered tools to automate your social media strategy while maintaining authentic engagement with your audience.",
    author: "Lisa Park",
    publishDate: "2024-01-05",
    readTime: "7 min read",
    category: "Social Media",
    featured: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Measuring AI Readiness: Key Metrics and KPIs to Track",
    excerpt: "Understand the most important metrics for measuring your website's AI readiness and track your progress over time.",
    author: "Robert Thompson",
    publishDate: "2024-01-03",
    readTime: "9 min read",
    category: "Analytics",
    featured: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "AI & SEO", "AI Readiness", "Content Marketing", "Technical SEO", "Social Media", "Analytics"];

const BlogListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">MartechEngine Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and best practices for AI-powered digital marketing.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <Card className="glass-card border-primary/30 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4">Featured Post</Badge>
              <CardTitle className="text-3xl mb-4">{featuredPost.title}</CardTitle>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(featuredPost.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link to={`/resources/blog/${featuredPost.id}`}>
                <Button className="w-fit">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300">
            <div className="aspect-video">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
              <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.publishDate).toLocaleDateString()}
                </span>
                <Link to={`/resources/blog/${post.id}`}>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="glass-card p-8 rounded-xl text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get the latest articles, insights, and updates delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
