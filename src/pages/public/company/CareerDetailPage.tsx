
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Calendar, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/company/careers">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Button>
        </Link>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Senior Frontend Engineer
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Remote / San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Posted 3 days ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">About the Role</h2>
                  <p className="mb-6">
                    Join our engineering team to build the next generation of AI-powered SEO tools. 
                    You'll work on cutting-edge technologies, creating intuitive user interfaces 
                    that make complex SEO data accessible to everyone.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">What You'll Do</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Build responsive web applications using React, TypeScript, and modern CSS</li>
                    <li>Collaborate with designers to implement pixel-perfect UI components</li>
                    <li>Optimize application performance and ensure excellent user experience</li>
                    <li>Work with backend engineers to integrate APIs and real-time data</li>
                    <li>Contribute to our design system and component library</li>
                    <li>Participate in code reviews and technical architecture discussions</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Requirements</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>5+ years of experience in frontend development</li>
                    <li>Expert knowledge of React, TypeScript, and modern JavaScript</li>
                    <li>Experience with CSS-in-JS solutions and responsive design</li>
                    <li>Familiarity with testing frameworks (Jest, Cypress, etc.)</li>
                    <li>Understanding of web performance optimization techniques</li>
                    <li>Experience with Git and collaborative development workflows</li>
                    <li>Strong communication skills and team collaboration experience</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Nice to Have</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Experience with data visualization libraries (D3.js, Chart.js)</li>
                    <li>Knowledge of SEO principles and web analytics</li>
                    <li>Experience with AI/ML integration in web applications</li>
                    <li>Familiarity with design systems and component libraries</li>
                    <li>Experience with server-side rendering (Next.js)</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Offer</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>Flexible PTO and sabbatical opportunities</li>
                    <li>Remote-first culture with optional office access</li>
                    <li>Professional development budget ($2,000/year)</li>
                    <li>Latest equipment and tools</li>
                    <li>Regular team retreats and company events</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Apply Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ready to join our team? Send us your resume and we'll get back to you soon.
                </p>
                <Button className="w-full">
                  Apply for this Position
                </Button>
                <Button variant="outline" className="w-full">
                  Refer a Friend
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/10 mt-6">
              <CardHeader>
                <CardTitle>Team & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our engineering team values collaboration, innovation, and continuous learning. 
                  We believe in building products that make a real difference for our users.
                </p>
                <Button variant="outline" className="w-full">
                  Meet the Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailPage;
