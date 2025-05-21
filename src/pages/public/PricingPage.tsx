
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-center text-lg mb-12">
        Choose a plan that fits your needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2">Free</h2>
          <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>5 Projects</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>5 AI Calls/day</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Limited Content Items</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Basic SEO/SMO Tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>1 Monthly Crawl for your Project URL</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Free AI Readiness Check (1/IP/day)</span>
            </li>
          </ul>
          
          <Link 
            to="/signup" 
            className="block w-full py-3 text-center rounded-md border border-white/10 hover:bg-white/5 transition"
          >
            Sign Up Free
          </Link>
        </div>
        
        {/* Paid Plan */}
        <div className="glass-card p-8 rounded-xl border-2 border-primary relative transform scale-105 z-10">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <h2 className="text-2xl font-bold mb-2">Premium</h2>
          <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Unlimited Projects</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>100 AI Calls/day</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Unlimited Content Items</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Full SEO/SMO Tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>AI-Powered SMO Replies</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Daily Crawls for your Project URL</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Monthly Competitor Crawls</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Detailed AI Readiness Reports & Fixes</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Individual Plan - No Team Features</span>
            </li>
          </ul>
          
          <Link 
            to="/signup?plan=paid" 
            className="block w-full py-3 text-center rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            Subscribe Now
          </Link>
        </div>
        
        {/* Team Plan */}
        <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2">Team</h2>
          <div className="text-4xl font-bold mb-6">$40<span className="text-lg font-normal text-muted-foreground">/user/mo</span></div>
          <p className="text-sm text-muted-foreground mb-6">Minimum 5 users required</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>100 AI Calls per user/day</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Unlimited Team Projects</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Unlimited Content Items</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Full SEO/SMO Tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Daily Crawls for your Project URL</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Weekly Competitor Crawls</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span>Team Management & Collaboration</span>
            </li>
          </ul>
          
          <Link 
            to="/company/contact" 
            className="block w-full py-3 text-center rounded-md border border-white/10 hover:bg-white/5 transition"
          >
            Contact Sales
          </Link>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4">Need Something Custom?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you have specific requirements or need a custom plan for your enterprise, 
          our team is ready to help create the perfect solution for you.
        </p>
        <Link 
          to="/company/contact" 
          className="inline-block px-6 py-3 border border-white/10 rounded-md hover:bg-white/5 transition"
        >
          Contact Our Sales Team
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
