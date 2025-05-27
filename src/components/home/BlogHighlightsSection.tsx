
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogHighlightsSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'How AI is Revolutionizing SEO in 2024',
      excerpt: 'Discover the latest AI trends and how they are transforming search engine optimization strategies.',
      date: '2024-01-15',
      image: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png',
      slug: 'ai-revolutionizing-seo-2024'
    },
    {
      title: 'Complete Guide to WordPress SEO Automation',
      excerpt: 'Learn how to automate your WordPress SEO workflow and save hours of manual work every week.',
      date: '2024-01-10', 
      image: '/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png',
      slug: 'wordpress-seo-automation-guide'
    },
    {
      title: 'Content Marketing with AI: Best Practices',
      excerpt: 'Master the art of AI-powered content creation with these proven strategies and techniques.',
      date: '2024-01-05',
      image: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png', 
      slug: 'content-marketing-ai-best-practices'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Latest from Our <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest SEO trends, AI insights, and industry best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/resources/blog">
              <Button variant="outline" className="glass-button">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;
