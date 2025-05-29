
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, FileText, Link as LinkIcon, Cog, BarChart } from 'lucide-react';

const FeatureShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      id: 'seo-audit',
      title: 'SEO Audit',
      description: 'Crawl your site, identify issues, get AI fix suggestions.',
      icon: <Search className="h-6 w-6" />,
      link: '/features/seo-audit',
      preview: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png'
    },
    {
      id: 'keyword-planner',
      title: 'Keyword Planner', 
      description: 'Discover high-impact keywords, cluster by intent, find opportunities.',
      icon: <BarChart className="h-6 w-6" />,
      link: '/features/keyword-intelligence',
      preview: '/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png'
    },
    {
      id: 'blog-generator',
      title: 'Blog Generator',
      description: 'Generate full-length SEO-optimized articles with AI.',
      icon: <FileText className="h-6 w-6" />,
      link: '/features/ai-content-writer', 
      preview: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png'
    },
    {
      id: 'internal-linking',
      title: 'Internal Linking',
      description: 'Map your site, fix orphans, get AI link suggestions.',
      icon: <LinkIcon className="h-6 w-6" />,
      link: '/features/internal-link-planner',
      preview: '/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png'
    },
    {
      id: 'automation',
      title: 'Automation',
      description: 'Automate fixes, content generation, and entire SEO workflows.',
      icon: <Cog className="h-6 w-6" />,
      link: '/features/automation-workflows',
      preview: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png'
    }
  ];

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Live Preview</span> Feature Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive tabs for core features. Click each tab to see a mini-preview and key benefits.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className="inline-flex bg-muted/30 rounded-lg p-1 backdrop-blur-sm border border-white/10">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === index 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <div className="h-4 w-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="hidden sm:inline">{feature.title}</span>
                  <span className="sm:hidden">{feature.title.split(' ')[0]}</span>
                  
                  {/* Active indicator */}
                  {activeTab === index && (
                    <div className="absolute inset-0 rounded-md bg-primary/20 -z-10 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="glass-card p-8 rounded-xl min-h-[400px] relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4 animate-fade-in">
                  <div className="text-primary mr-3 bg-primary/10 p-2 rounded-lg">
                    {features[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold">{features[activeTab].title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed animate-fade-in">
                  {features[activeTab].description}
                </p>
                <Link to={features[activeTab].link} className="animate-fade-in inline-block">
                  <Button className="bg-primary/90 hover:bg-primary">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative group">
                  <img 
                    key={activeTab} // Force re-render for animation
                    src={features[activeTab].preview}
                    alt={`${features[activeTab].title} preview`}
                    className="w-full h-auto rounded-lg shadow-xl transition-all duration-500 animate-scale-in group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeTab ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* See All Features CTA */}
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" size="lg" className="glass-button">
                See All Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcaseSection;
