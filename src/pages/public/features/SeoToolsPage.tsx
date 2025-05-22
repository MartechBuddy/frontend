
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, LineChart, Globe, FileCode, RefreshCw, Maximize } from "lucide-react";

const SeoToolsPage: React.FC = () => {
  const tools = [
    {
      title: "Keyword Research",
      description: "Discover high-value keywords for your content with volume and difficulty metrics.",
      icon: <Search className="h-6 w-6 text-primary" />
    },
    {
      title: "Site Audit",
      description: "Comprehensive technical SEO analysis to identify and fix issues affecting rankings.",
      icon: <RefreshCw className="h-6 w-6 text-primary" />
    },
    {
      title: "Schema Generator",
      description: "Create and implement structured data to improve search visibility and rich snippets.",
      icon: <FileCode className="h-6 w-6 text-primary" />
    },
    {
      title: "Competitor Analysis",
      description: "Track competitors' rankings and identify content gaps and opportunities.",
      icon: <Maximize className="h-6 w-6 text-primary" />
    },
    {
      title: "Rank Tracking",
      description: "Monitor your rankings for target keywords and track progress over time.",
      icon: <LineChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Backlink Analyzer",
      description: "Analyze your backlink profile and discover new link-building opportunities.",
      icon: <Globe className="h-6 w-6 text-primary" />
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">SEO Tools</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive suite of tools to improve your search engine rankings and visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-scale-in">
          <div className="glass-card border-white/10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800" 
              alt="SEO Tools Dashboard" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 transition hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-2xl p-8 mb-20 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">How Our SEO Tools Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyze</h3>
            <p className="text-muted-foreground">
              Our tools analyze your website and content to identify SEO issues and opportunities.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimize</h3>
            <p className="text-muted-foreground">
              Get actionable recommendations to optimize your website for better search rankings.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LineChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track</h3>
            <p className="text-muted-foreground">
              Monitor your progress and rankings over time to see the impact of your optimizations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">Integrated SEO & AI Readiness</h2>
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our SEO tools are integrated with our AI Readiness platform to ensure your website is optimized for both traditional search engines and AI-powered search.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-4">Traditional SEO</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Keyword optimization and placement</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Technical SEO and site performance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Backlink profile and authority building</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Content relevance and user engagement</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-4">AI Readiness</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Content structure for AI comprehension</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Entity recognition and semantic relationships</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Structured data for AI knowledge graphs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Contextual relevance for AI citation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Boost your search rankings today</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start using our comprehensive SEO tools to improve your website's visibility.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="lg">View Pricing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeoToolsPage;
