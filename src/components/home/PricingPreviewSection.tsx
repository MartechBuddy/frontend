
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingPreviewSection: React.FC = () => {
  const plans = [
    {
      name: "Test",
      price: "$1",
      period: "one-time",
      description: "Experience the AI",
      tokens: "50 Martech Tokens",
      features: [
        "1x Domain Citation Score (20 pages)",
        "1x Blog Generation",
        "1x Visual Audit",
        "1x AI Rewrite",
        "Basic Schema/Meta Generation"
      ],
      cta: "Try for $1",
      popular: false
    },
    {
      name: "Starter",
      price: "$29.99",
      period: "per month",
      description: "Your First Growth Partner",
      tokens: "500 Martech Tokens/month",
      features: [
        "3 Visual Audits/month",
        "Unlimited AI Rewrites",
        "Full Site Audits",
        "AI Keyword Generation",
        "Content Creation Tools"
      ],
      cta: "Start Growing",
      popular: true
    },
    {
      name: "Entrepreneur",
      price: "$69.99",
      period: "per month",
      description: "The Powerhouse for Growth",
      tokens: "1,500 Martech Tokens/month",
      features: [
        "Google Search Console Integration",
        "Unlimited Visual Audits",
        "Advanced AI Analysis",
        "Content Repurposing",
        "Priority Support"
      ],
      cta: "Scale Up",
      popular: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your SEO ambitions. All plans include our AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`glass-card p-8 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''} hover:scale-110 transition-transform duration-200`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary">{plan.tokens}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup" state={{ selectedPlan: plan.name.toLowerCase() }}>
                  <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`}>
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button variant="outline" className="glass-button">
                View Full Comparison
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
