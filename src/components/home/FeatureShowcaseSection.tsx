
import React, { useState } from 'react';
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
          
          {/* Feature Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`glass-card p-4 rounded-xl text-center transition-all duration-200 ${
                  activeTab === index 
                    ? 'border-primary bg-primary/10' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex justify-center mb-2 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-sm">{feature.title}</h3>
              </button>
            ))}
          </div>
          
          {/* Active Feature Display */}
          <div className="glass-card p-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">
                    {features[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold">{features[activeTab].title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  {features[activeTab].description}
                </p>
                <Link to={features[activeTab].link}>
                  <Button>Learn More</Button>
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src={features[activeTab].preview}
                  alt={`${features[activeTab].title} preview`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
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
