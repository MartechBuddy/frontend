
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Star } from "lucide-react";

const ComparisonPage: React.FC = () => {
  const features = [
    { name: "AI-Powered Site Audit", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Real-time AI Optimization", martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { name: "Direct WordPress Publishing", martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { name: "AI Content Generation", martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { name: "Automation Workflows", martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { name: "Visual SEO Audit", martechengine: true, semrush: false, ahrefs: false, seranking: false },
    { name: "Keyword Research", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Backlink Analysis", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Competitor Analysis", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Rank Tracking", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Technical SEO Tools", martechengine: true, semrush: true, ahrefs: true, seranking: true },
    { name: "Local SEO Features", martechengine: true, semrush: true, ahrefs: false, seranking: true },
  ];

  const pricing = [
    { tool: "MartechEngine", price: "$29", features: "AI Automation + Publishing" },
    { tool: "Semrush", price: "$119", features: "Basic SEO Tools" },
    { tool: "Ahrefs", price: "$99", features: "Basic SEO Tools" },
    { tool: "SE Ranking", price: "$44", features: "Basic SEO Tools" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">MartechEngine vs. The Competition</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how MartechEngine's AI-powered automation gives you a competitive edge over traditional SEO tools.
        </p>
      </div>

      {/* Pricing Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Pricing Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((item, idx) => (
            <Card key={idx} className={`glass-card border-white/10 p-6 text-center ${item.tool === 'MartechEngine' ? 'border-primary/50' : ''}`}>
              {item.tool === 'MartechEngine' && (
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-primary mr-1" />
                  <span className="text-primary text-sm font-medium">Best Value</span>
                </div>
              )}
              <h3 className="font-bold text-lg mb-2">{item.tool}</h3>
              <div className="text-3xl font-bold text-primary mb-2">{item.price}</div>
              <p className="text-sm text-muted-foreground mb-4">{item.features}</p>
              {item.tool === 'MartechEngine' && (
                <Link to="/signup">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
        <Card className="glass-card border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold text-primary">MartechEngine</th>
                  <th className="text-center p-4 font-semibold">Semrush</th>
                  <th className="text-center p-4 font-semibold">Ahrefs</th>
                  <th className="text-center p-4 font-semibold">SE Ranking</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-t border-white/5">
                    <td className="p-4">{feature.name}</td>
                    <td className="text-center p-4">
                      {feature.martechengine ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {feature.semrush ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {feature.ahrefs ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {feature.seranking ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Unique Advantages */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Makes MartechEngine Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">AI Automation</h3>
            <p className="text-muted-foreground">
              Unlike traditional tools that just show data, MartechEngine's AI agents actually fix your SEO issues automatically.
            </p>
          </Card>
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Direct Publishing</h3>
            <p className="text-muted-foreground">
              Generate content and publish directly to WordPress. No copy-pasting or manual implementation required.
            </p>
          </Card>
          <Card className="glass-card border-white/10 p-6">
            <h3 className="font-semibold mb-3 text-primary">Visual Analysis</h3>
            <p className="text-muted-foreground">
              Our AI sees your pages like Google does, providing visual insights that other tools simply can't match.
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of marketers who've upgraded from traditional SEO tools to AI-powered automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">See Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
