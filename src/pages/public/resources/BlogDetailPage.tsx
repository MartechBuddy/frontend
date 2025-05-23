
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Mock blog post data - in a real app, this would come from an API
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: "The Future of SEO: How AI is Revolutionizing Search",
      content: `
        <p>Artificial intelligence is fundamentally changing how search engines understand and rank content. As we move into 2024 and beyond, understanding AI's impact on SEO isn't just beneficial—it's essential for maintaining and improving your search visibility.</p>
        
        <h2>The AI Search Revolution</h2>
        <p>Traditional SEO focused on keywords, backlinks, and technical optimization. While these elements remain important, AI-powered search engines like Google's SGE (Search Generative Experience) and ChatGPT are introducing new ranking factors that prioritize content quality, context, and user intent in unprecedented ways.</p>
        
        <h3>Key Changes in AI-Powered Search:</h3>
        <ul>
          <li><strong>Semantic Understanding:</strong> AI can now understand context and intent behind queries, not just keywords</li>
          <li><strong>Content Quality Over Quantity:</strong> AI favors well-researched, comprehensive content over keyword-stuffed articles</li>
          <li><strong>User Experience Signals:</strong> Page experience metrics are more important than ever</li>
          <li><strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):</strong> AI evaluates content credibility more sophisticatedly</li>
        </ul>
        
        <h2>Preparing for AI Search</h2>
        <p>To succeed in this new landscape, businesses need to adapt their SEO strategies. This means focusing on creating content that not only ranks well in traditional search but also gets cited and recommended by AI systems.</p>
        
        <blockquote>
          "The future belongs to websites that can effectively communicate with both human users and AI systems. This requires a fundamental shift in how we approach content creation and optimization."
        </blockquote>
        
        <h3>Actionable Steps for AI-Ready SEO:</h3>
        <ol>
          <li><strong>Implement Structured Data:</strong> Help AI understand your content with proper schema markup</li>
          <li><strong>Focus on Topic Clusters:</strong> Create comprehensive content that covers topics in depth</li>
          <li><strong>Optimize for Featured Snippets:</strong> AI often pulls information from featured snippets</li>
          <li><strong>Improve Page Experience:</strong> Fast loading times and mobile optimization are crucial</li>
          <li><strong>Create Answer-Focused Content:</strong> Write content that directly answers user questions</li>
        </ol>
        
        <h2>The Role of AI Tools in SEO</h2>
        <p>Paradoxically, AI tools are also becoming essential for SEO success. From content generation to keyword research, AI can help streamline many SEO processes while ensuring content meets the standards that AI search engines expect.</p>
        
        <p>However, it's important to use AI tools thoughtfully. The goal isn't to replace human creativity and expertise, but to augment it. AI can help with research, ideation, and optimization, but human insight remains crucial for creating truly valuable content.</p>
        
        <h2>Looking Ahead</h2>
        <p>As AI continues to evolve, so too will SEO best practices. The businesses that succeed will be those that embrace this change, continuously adapt their strategies, and focus on creating genuinely helpful content for their audiences.</p>
        
        <p>The future of SEO isn't about gaming the system—it's about creating content so valuable that both humans and AI systems naturally want to recommend it.</p>
      `,
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & SEO",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      tags: ["AI", "SEO", "Search", "Digital Marketing", "Content Strategy"]
    }
  };
  
  return posts[id as keyof typeof posts] || null;
};

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || '1');

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/resources/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* Back to Blog */}
      <div className="mb-8">
        <Link to="/resources/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="glass-card p-8 rounded-xl mb-8">
        <div className="mb-6">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-foreground 
            prose-p:text-muted-foreground 
            prose-strong:text-foreground
            prose-blockquote:border-l-primary
            prose-blockquote:text-muted-foreground
            prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <Card className="glass-card border-primary/20">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Enjoyed This Article?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get more insights like this delivered to your inbox. Join our newsletter for the latest in AI-powered marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles CTA */}
      <div className="mt-8 text-center">
        <Link to="/resources/blog">
          <Button variant="outline" size="lg">
            Read More Articles
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
