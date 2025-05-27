
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const features = [
    { feature: 'AI-Powered Automation', martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { feature: 'Direct WordPress Publishing', martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { feature: 'Visual SEO Audit', martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { feature: 'Content Generation', martechengine: true, semrush: true, ahrefs: false, seranking: false },
    { feature: 'Keyword Research', martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { feature: 'Backlink Analysis', martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { feature: 'Site Auditing', martechengine: true, semrush: true, ahrefs: true, seranking: true }
  ];

  const tools = [
    { name: 'MartechEngine', highlight: true },
    { name: 'Semrush', highlight: false },
    { name: 'Ahrefs', highlight: false },
    { name: 'SE Ranking', highlight: false }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">MartechEngine</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Side-by-side feature comparison highlighting MartechEngine's unique AI/automation advantages
            </p>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-semibold">Features</th>
                    {tools.map((tool) => (
                      <th key={tool.name} className={`text-center p-6 font-semibold ${
                        tool.highlight ? 'text-primary bg-primary/5' : ''
                      }`}>
                        {tool.name}
                        {tool.highlight && (
                          <div className="text-xs text-primary mt-1">✨ AI-Powered</div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/2">
                      <td className="p-6 font-medium">{feature.feature}</td>
                      <td className="text-center p-6 bg-primary/5">
                        {feature.martechengine ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-6">
                        {feature.semrush ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-6">
                        {feature.ahrefs ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-6">
                        {feature.seranking ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/features/comparison">
              <Button variant="outline" className="glass-button mr-4">
                View Full Comparison
              </Button>
            </Link>
            <Link to="/signup">
              <Button>
                Try MartechEngine Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
