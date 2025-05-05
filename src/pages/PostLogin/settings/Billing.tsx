
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { CreditCard, Package } from "lucide-react";

const Billing: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Billing & Subscription</h2>
        <Button variant="outline">
          <CreditCard className="mr-2 h-4 w-4" />
          Manage Payment Methods
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            Your subscription details and usage information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Professional Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Billed monthly
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">$49.99/mo</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Next billing: June 5, 2025
              </p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Plan Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2 text-sm">
                <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Unlimited projects
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Advanced AI features
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Team collaboration
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
            <CardDescription>
              Your current resource usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Projects</span>
                <span className="font-medium">8 / Unlimited</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-green-500 rounded-full w-[40%]"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>API Requests</span>
                <span className="font-medium">15,423 / 50,000</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-blue-500 rounded-full w-[30%]"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Storage</span>
                <span className="font-medium">1.8GB / 15GB</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-purple-500 rounded-full w-[12%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>
              Your recent invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Invoice #12345</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">May 5, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$49.99</p>
                  <Button variant="ghost" size="sm" className="text-xs">Download</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Invoice #12344</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Apr 5, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$49.99</p>
                  <Button variant="ghost" size="sm" className="text-xs">Download</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Invoice #12343</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mar 5, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$49.99</p>
                  <Button variant="ghost" size="sm" className="text-xs">Download</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
