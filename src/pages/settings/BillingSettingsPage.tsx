
import React from 'react';

const BillingSettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Billing Settings</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">Current Plan</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Pro Plan</h3>
              <p className="text-lg mb-2">$49/month</p>
              <p className="text-sm text-muted-foreground mb-4">Billed monthly</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100 AI Calls/day
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited Content Items
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full SEO/SMO Tools
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI-Powered SMO Replies
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Next billing date</p>
                <p className="font-medium">June 22, 2025</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                  Upgrade to Team Plan
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
                  Manage Subscription
                </button>
                <button className="text-red-400 hover:text-red-300 text-sm">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-md p-4 border border-white/10 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-16 bg-gray-800 rounded mr-4 flex items-center justify-center">
                <span className="font-medium">VISA</span>
              </div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 05/2026</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-sm text-primary hover:text-primary/80">Edit</button>
              <button className="text-sm text-red-400 hover:text-red-300">Remove</button>
            </div>
          </div>
          
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Payment Method
          </button>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Billing History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
                <th className="text-left py-3 px-4 font-medium">Amount</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 22, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly Subscription</td>
                <td className="py-3 px-4">$49.00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Paid</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-primary hover:text-primary/80 text-sm">Download</button>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Apr 22, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly Subscription</td>
                <td className="py-3 px-4">$49.00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Paid</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-primary hover:text-primary/80 text-sm">Download</button>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Mar 22, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly Subscription</td>
                <td className="py-3 px-4">$49.00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Paid</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-primary hover:text-primary/80 text-sm">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingSettingsPage;
