
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams();

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/resources/case-studies">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Button>
        </Link>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            How TechCorp Increased Organic Traffic by 300%
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>6 month project</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>B2B SaaS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Results Overview */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Key Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Organic Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">450%</div>
                <div className="text-sm text-muted-foreground">Lead Generation Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Improvement in Rankings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Study Content */}
        <Card className="glass-card border-white/10">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">The Challenge</h2>
              <p className="mb-6">
                TechCorp, a leading B2B SaaS company, was struggling with declining organic 
                search visibility. Despite having quality products, their website wasn't 
                ranking for important industry keywords, leading to missed opportunities 
                and increased customer acquisition costs.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="mb-4">We implemented a comprehensive SEO strategy using MartechEngine's AI-powered tools:</p>
              
              <h3 className="text-xl font-medium mb-3 text-foreground">1. Technical SEO Audit</h3>
              <p className="mb-4">
                Our initial audit revealed several critical issues including slow page load times, 
                broken internal links, and missing schema markup. Using MartechEngine's visual 
                audit tool, we identified and prioritized fixes.
              </p>
              
              <h3 className="text-xl font-medium mb-3 text-foreground">2. Content Strategy Overhaul</h3>
              <p className="mb-4">
                We leveraged MartechEngine's keyword intelligence and AI content writer to 
                create a data-driven content strategy targeting high-intent keywords in 
                the B2B SaaS space.
              </p>
              
              <h3 className="text-xl font-medium mb-3 text-foreground">3. Automation Implementation</h3>
              <p className="mb-6">
                Using MartechEngine's workflow automation, we set up recurring tasks for 
                content optimization, internal link building, and technical monitoring.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Timeline</h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="font-medium text-primary min-w-[100px]">Month 1-2:</div>
                  <div>Technical foundation improvements, 40% increase in crawlability</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-medium text-primary min-w-[100px]">Month 3-4:</div>
                  <div>Content strategy implementation, 120% increase in organic traffic</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-medium text-primary min-w-[100px]">Month 5-6:</div>
                  <div>Automation optimization, final 300% traffic increase achieved</div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AI-powered SEO tools can dramatically accelerate results</li>
                <li>Technical SEO fixes provide the foundation for content success</li>
                <li>Automation ensures consistent optimization efforts</li>
                <li>Data-driven keyword strategy is crucial for B2B success</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
