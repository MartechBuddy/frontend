
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Test',
      price: { monthly: 1, yearly: 10 },
      originalPrice: { monthly: null, yearly: null },
      description: 'Perfect for testing our AI-powered SEO tools',
      features: [
        '1 Project',
        '20 Pages Crawled (Domain Citation Score)',
        '50 Martech Tokens',
        'Basic AI Features',
        '1x Blog Generation',
        '1x Fix My Page Workflow (limited scope)',
        'Email Support'
      ],
      cta: 'Start Testing',
      popular: false,
      tier: 'test'
    },
    {
      name: 'Starter',
      price: { monthly: 29.99, yearly: 299.9 },
      originalPrice: { monthly: null, yearly: null },
      description: 'Ideal for small businesses and solo entrepreneurs',
      features: [
        '5 Projects',
        '250 Pages/month Crawled',
        '500 Martech Tokens/month',
        'Full AI SEO Tools',
        'Site Audit & Visual SEO Audit (3 pages/month)',
        'AI Keyword Generator & Semantic Clustering',
        'Up to 3 Blog Generations/month',
        'Basic Workflows',
        'WordPress Integration',
        'PDF Reports',
        'Priority Email Support'
      ],
      cta: 'Choose Starter',
      popular: true,
      tier: 'starter'
    },
    {
      name: 'Pro',
      price: { monthly: 29.99, yearly: 299.9 },
      originalPrice: { monthly: 59.99, yearly: 599.9 },
      description: 'Advanced features for growing businesses',
      features: [
        '15 Projects',
        '1,000 Pages/month Crawled',
        '1,500 Martech Tokens/month',
        'All Starter Features',
        'Visual SEO Audit (5 pages/month)',
        'AI Anchor Text Suggestions',
        'Up to 10 Blog Generations/month',
        'Advanced Workflows',
        'Content Versioning',
        'Scheduled Reports',
        'Content Scheduler',
        'Phone & Email Support'
      ],
      cta: 'Choose Pro',
      popular: false,
      tier: 'pro',
      discount: '50% OFF'
    },
    {
      name: 'Entrepreneur',
      price: { monthly: 69.99, yearly: 699.9 },
      originalPrice: { monthly: null, yearly: null },
      description: 'Everything you need to dominate your niche',
      features: [
        '50 Projects',
        '5,000 Pages/month Crawled',
        '5,000 Martech Tokens/month',
        'All Pro Features',
        'Visual SEO Audit (20 pages/month)',
        'Google Search Console Integration',
        'Real-Time SERP Insights (RTSIS)',
        'AI-Estimated Keyword Difficulty',
        'Local SEO Tools',
        'Up to 40 Blog Generations/month',
        'Content Repurposing',
        'Full Backlink Analysis',
        'Custom Workflows',
        'White-label Reports',
        'Dedicated Account Manager'
      ],
      cta: 'Choose Entrepreneur',
      popular: false,
      tier: 'entrepreneur'
    },
    {
      name: 'Enterprise',
      price: { monthly: 59.99, yearly: 599.9 },
      originalPrice: { monthly: null, yearly: null },
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited Projects',
        'Unlimited Pages Crawled',
        'Custom Martech Token Allocation',
        'All Entrepreneur Features',
        'Unlimited Visual SEO Audits',
        'Advanced Team Management',
        'Custom Integrations',
        'API Access',
        'Advanced Analytics',
        'SLA Guarantees',
        'On-premise Deployment Option',
        'Custom Training Sessions'
      ],
      cta: 'Contact Sales',
      popular: false,
      tier: 'enterprise',
      isCustom: true
    }
  ];

  const tokenPacks = [
    { tokens: 500, price: 9.99, description: 'Perfect for small projects' },
    { tokens: 1500, price: 24.99, description: 'Great for growing businesses', popular: true },
    { tokens: 5000, price: 79.99, description: 'For power users and agencies' },
    { tokens: 15000, price: 199.99, description: 'Enterprise-level usage' }
  ];

  const getPrice = (plan: any) => {
    return isYearly ? plan.price.yearly : plan.price.monthly;
  };

  const getOriginalPrice = (plan: any) => {
    return isYearly ? plan.originalPrice?.yearly : plan.originalPrice?.monthly;
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Flexible Plans for Every Stage of Your SEO Journey
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Start with our Test plan to experience AI-powered SEO, then scale as you grow.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <span className={`text-sm ${!isYearly ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={`text-sm ${isYearly ? 'font-medium' : 'text-muted-foreground'}`}>Yearly</span>
          {isYearly && (
            <Badge variant="secondary" className="ml-2">Save 17%</Badge>
          )}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`glass-card relative transition-all duration-200 ${
              plan.popular 
                ? 'border-primary scale-105 shadow-xl' 
                : 'border-white/10 hover:border-primary/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">
                  <Star size={12} className="mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            {plan.discount && (
              <div className="absolute -top-3 -right-3">
                <Badge variant="destructive" className="px-2 py-1 text-xs">
                  {plan.discount}
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                {plan.isCustom ? (
                  <div className="text-2xl font-bold">Custom</div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    {getOriginalPrice(plan) && (
                      <span className="text-lg line-through text-muted-foreground">
                        ${getOriginalPrice(plan)}
                      </span>
                    )}
                    <span className="text-3xl font-bold">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check size={16} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={plan.isCustom ? "/company/contact" : "/signup"}
                state={{ selectedPlan: plan.tier }}
                className="block"
              >
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Martech Token Add-ons */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Need More Martech Tokens?</h2>
          <p className="text-muted-foreground">
            Boost your AI capabilities with additional token packs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tokenPacks.map((pack, index) => (
            <Card key={index} className={`glass-card border-white/10 hover:border-primary/30 transition-all duration-200 ${pack.popular ? 'border-primary' : ''}`}>
              {pack.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-primary mr-2" />
                  <CardTitle className="text-lg">{pack.tokens.toLocaleString()} Tokens</CardTitle>
                </div>
                <div className="text-2xl font-bold">${pack.price}</div>
                <p className="text-xs text-muted-foreground">{pack.description}</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Add to Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full glass-card border border-white/10 rounded-lg">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-center p-4 font-medium">Test</th>
                <th className="text-center p-4 font-medium">Starter</th>
                <th className="text-center p-4 font-medium">Pro</th>
                <th className="text-center p-4 font-medium">Entrepreneur</th>
                <th className="text-center p-4 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10">
                <td className="p-4">Projects</td>
                <td className="text-center p-4">1</td>
                <td className="text-center p-4">5</td>
                <td className="text-center p-4">15</td>
                <td className="text-center p-4">50</td>
                <td className="text-center p-4">Unlimited</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Pages Crawled/Month</td>
                <td className="text-center p-4">20</td>
                <td className="text-center p-4">250</td>
                <td className="text-center p-4">1,000</td>
                <td className="text-center p-4">5,000</td>
                <td className="text-center p-4">Unlimited</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Martech Tokens/Month</td>
                <td className="text-center p-4">50</td>
                <td className="text-center p-4">500</td>
                <td className="text-center p-4">1,500</td>
                <td className="text-center p-4">5,000</td>
                <td className="text-center p-4">Custom</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Visual SEO Audit</td>
                <td className="text-center p-4">DCS Only</td>
                <td className="text-center p-4">3 pages</td>
                <td className="text-center p-4">5 pages</td>
                <td className="text-center p-4">20 pages</td>
                <td className="text-center p-4">Unlimited</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Google Search Console</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">✅</td>
                <td className="text-center p-4">✅</td>
              </tr>
              <tr>
                <td className="p-4">Team Management</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">❌</td>
                <td className="text-center p-4">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your SEO?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start with our Test plan for just $1 and experience the power of AI-driven SEO optimization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" state={{ selectedPlan: 'test' }}>
            <Button size="lg">Start Your AI Journey for $1</Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">Request Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
