
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Users, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebinarDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/resources/webinars">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Webinars
          </Button>
        </Link>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            AI-Powered SEO: The Future is Now
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>60 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1,247 attendees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Video Player */}
        <Card className="glass-card border-white/10">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
              <Button size="lg" className="gap-3">
                <Play className="h-6 w-6" />
                Watch Recording
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Webinar Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>About This Webinar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="mb-4">
                    Join our SEO experts as they explore how artificial intelligence is 
                    revolutionizing search engine optimization. Learn about the latest 
                    AI tools and techniques that can transform your SEO strategy.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">What You'll Learn:</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>How AI is changing the SEO landscape</li>
                    <li>Practical AI tools for keyword research and content optimization</li>
                    <li>Automated workflow strategies for technical SEO</li>
                    <li>Case studies showing real results from AI-powered SEO</li>
                    <li>Future trends and predictions for AI in SEO</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Featured Speakers:</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Head of SEO, MartechEngine</p>
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">AI Research Lead, MartechEngine</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Download Slides
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Get Transcript
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Related Blog Post
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Join Community Discussion
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/10 mt-6">
              <CardHeader>
                <CardTitle>Upcoming Webinars</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Technical SEO Deep Dive</p>
                    <p className="text-sm text-muted-foreground">July 20, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Content Strategy Workshop</p>
                    <p className="text-sm text-muted-foreground">August 10, 2025</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Webinars
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetailPage;
