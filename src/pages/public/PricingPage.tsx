
import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Choose a plan that fits your needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="glass-card p-8 rounded-xl border border-white/10 transition hover:border-primary/30">
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <div className="text-4xl font-bold mb-4">$0<span className="text-lg text-muted-foreground">/mo</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5 Projects</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5 AI Calls/day</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Limited Content Items</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Basic SEO/SMO Tools</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>1 Monthly Crawl</span>
            </li>
          </ul>
          
          <Link to="/signup">
            <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition">
              Sign Up Free
            </button>
          </Link>
        </div>
        
        {/* $49 Plan */}
        <div className="glass-card p-8 rounded-xl border-2 border-primary relative transform scale-105 shadow-xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white py-1 px-4 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Premium</h3>
          <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-muted-foreground">/mo</span></div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited Projects</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100 AI Calls/day</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited Content Items</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Full SEO/SMO Tools</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Daily Crawls</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Detailed AI Readiness Reports</span>
            </li>
          </ul>
          
          <Link to="/signup?plan=paid">
            <button className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition">
              Subscribe Now
            </button>
          </Link>
        </div>
        
        {/* Team Plan */}
        <div className="glass-card p-8 rounded-xl border border-white/10 transition hover:border-primary/30">
          <h3 className="text-2xl font-bold mb-2">Team</h3>
          <div className="text-4xl font-bold mb-1">$40<span className="text-lg text-muted-foreground">/user/mo</span></div>
          <p className="text-sm text-muted-foreground mb-4">Minimum 5 users</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited Team Projects</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100 AI Calls per user/day</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Weekly Competitor Crawls</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Team Management & Collaboration</span>
            </li>
          </ul>
          
          <Link to="/company/contact">
            <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
