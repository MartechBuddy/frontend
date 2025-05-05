
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Lightbulb, Award, ExternalLink } from "lucide-react";

type DiscussionTopic = {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActive: string;
};

const recentDiscussions: DiscussionTopic[] = [
  {
    id: "1",
    title: "How to improve content readability score?",
    author: "marketer123",
    replies: 15,
    views: 203,
    lastActive: "2 hours ago"
  },
  {
    id: "2",
    title: "Issue with WordPress integration",
    author: "webdev88",
    replies: 7,
    views: 95,
    lastActive: "5 hours ago"
  },
  {
    id: "3",
    title: "What's your AI readiness score?",
    author: "seo_expert",
    replies: 23,
    views: 312,
    lastActive: "1 day ago"
  },
  {
    id: "4",
    title: "Social media scheduling best practices",
    author: "social_guru",
    replies: 18,
    views: 245,
    lastActive: "2 days ago"
  }
];

type FeatureRequest = {
  id: string;
  title: string;
  votes: number;
  status: "planned" | "under review" | "implemented";
};

const featureRequests: FeatureRequest[] = [
  {
    id: "1",
    title: "Instagram integration for social media feature",
    votes: 128,
    status: "planned"
  },
  {
    id: "2",
    title: "Bulk content analyzer",
    votes: 95,
    status: "under review"
  },
  {
    id: "3",
    title: "AI readiness score explanation",
    votes: 73,
    status: "implemented"
  },
  {
    id: "4",
    title: "PDF export for reports",
    votes: 65,
    status: "under review"
  }
];

type Showcase = {
  id: string;
  title: string;
  author: string;
  description: string;
  results: string;
};

const showcases: Showcase[] = [
  {
    id: "1",
    title: "50% Traffic Boost in 3 Months",
    author: "Tech Innovators Inc.",
    description: "How we used AI readiness to optimize our technical blog",
    results: "50% increase in organic traffic, 35% higher engagement"
  },
  {
    id: "2",
    title: "Content Strategy Transformation",
    author: "Global Marketing Agency",
    description: "Revamping our client's content strategy with AI-driven insights",
    results: "25% increase in conversions, 40% improvement in content engagement"
  },
  {
    id: "3",
    title: "Local Business SEO Success",
    author: "Downtown Bakery",
    description: "How a small business achieved big results with local SEO tools",
    results: "300% increase in local search visibility, 75% more foot traffic"
  }
];

const Community = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Community</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of marketers, SEO experts, and content creators in our vibrant community.
          </p>
          <Link to="/signup">
            <Button size="lg">Join the Community</Button>
          </Link>
        </div>

        {/* Community Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="glass-card border-white/10 text-center p-6 animate-scale-in">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">5,000+</h2>
              <p className="text-muted-foreground">Active Members</p>
            </div>
          </Card>
          
          <Card className="glass-card border-white/10 text-center p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">10,000+</h2>
              <p className="text-muted-foreground">Monthly Discussions</p>
            </div>
          </Card>
          
          <Card className="glass-card border-white/10 text-center p-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/20 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">250+</h2>
              <p className="text-muted-foreground">Feature Ideas</p>
            </div>
          </Card>
        </div>

        {/* Recent Discussions */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Discussions</h2>
            <a
              href="https://community.martechengine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              View All <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="glass-card border-white/10 overflow-hidden rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4">Topic</th>
                    <th className="text-center p-4 hidden sm:table-cell">Replies</th>
                    <th className="text-center p-4 hidden md:table-cell">Views</th>
                    <th className="text-right p-4">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDiscussions.map((topic) => (
                    <tr key={topic.id} className="border-b border-white/10 hover:bg-primary/5">
                      <td className="p-4">
                        <a href="#" className="font-medium hover:text-primary">
                          {topic.title}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">by {topic.author}</p>
                      </td>
                      <td className="text-center p-4 hidden sm:table-cell">{topic.replies}</td>
                      <td className="text-center p-4 hidden md:table-cell">{topic.views}</td>
                      <td className="text-right p-4 text-sm">{topic.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Feature Requests */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Feature Requests</h2>
            <a
              href="https://community.martechengine.ai/feature-requests"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              Submit Request <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureRequests.map((feature, idx) => (
              <Card 
                key={feature.id} 
                className="glass-card border-white/10 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-2">{feature.title}</h3>
                      <div className="flex items-center">
                        <span className="text-xl font-semibold mr-2">{feature.votes}</span>
                        <span className="text-sm text-muted-foreground">votes</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      feature.status === 'implemented' ? 'bg-green-500/20 text-green-400' :
                      feature.status === 'planned' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="glass-button w-full mt-4"
                    size="sm"
                  >
                    Vote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Showcases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcases.map((showcase, idx) => (
              <Card 
                key={showcase.id} 
                className="glass-card border-white/10 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{showcase.title}</CardTitle>
                  <p className="text-sm text-primary">{showcase.author}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{showcase.description}</p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm font-medium">Results:</p>
                    <p className="text-sm">{showcase.results}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 hover:bg-primary/20"
                    size="sm"
                  >
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card border-white/10 p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Join the Conversation?</h2>
          <p className="text-muted-foreground mb-6">
            Connect with fellow marketers, share your experiences, and learn from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg">Join Community</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="glass-button" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
