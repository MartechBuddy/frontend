
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingPreviewSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started',
      features: ['2 Projects', 'Homepage Crawl', '1 Blog Post/Month', '5 AI Calls/Day'],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro', 
      price: '$49',
      period: '/month',
      description: 'For growing businesses',
      features: ['10 Projects', 'Full Site Crawl', '30 Blog Posts/Month', '100 AI Calls/Day', 'WordPress Push'],
      cta: 'Choose Pro',
      popular: true
    },
    {
      name: 'Team',
      price: '$149', 
      period: '/month',
      description: 'For agencies and teams',
      features: ['Unlimited Projects', 'Full Site Crawl', 'Unlimited Posts', '250 AI Calls/Day/User', 'Team Management'],
      cta: 'Choose Team',
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
              Condensed overview of Starter, Pro, Team tiers with key highlights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={plan.name} className={`glass-card p-8 rounded-xl relative ${
                plan.popular ? 'border-primary border-2' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/pricing" className="w-full block">
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline glass-button'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button variant="outline" className="glass-button">
                View Detailed Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
