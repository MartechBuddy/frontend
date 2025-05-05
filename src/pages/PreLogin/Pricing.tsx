
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPro?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$19",
    description: "Perfect for small businesses and freelancers",
    features: [
      "1 project",
      "5,000 page scans per month",
      "Basic SEO tools",
      "Content optimization",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing businesses and agencies",
    features: [
      "5 projects",
      "25,000 page scans per month",
      "Advanced SEO tools",
      "AI content generation",
      "Social media automation",
      "Priority support",
      "Moz API integration"
    ],
    isPro: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large companies with advanced needs",
    features: [
      "Unlimited projects",
      "Unlimited page scans",
      "Full API access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "On-premises deployment option"
    ]
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              className="relative w-14 h-8 rounded-full bg-primary/20 transition-all"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              aria-label={`Switch to ${billingCycle === "monthly" ? "yearly" : "monthly"} billing`}
            >
              <span 
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-all"
                style={{ transform: `translateX(${billingCycle === "yearly" ? "100%" : "0"})` }}
              />
            </button>
            <span className={`ml-3 ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-xs text-primary">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`glass-card border-white/10 flex flex-col animate-scale-in ${
                plan.isPro ? "border-primary/30 shadow-lg shadow-primary/5" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{plan.name}</span>
                  {plan.isPro && (
                    <span className="text-xs bg-primary text-primary-foreground py-1 px-2 rounded-md">Popular</span>
                  )}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-muted-foreground text-sm">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={16} className="text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/signup" className="w-full">
                  <Button 
                    variant={plan.isPro ? "default" : "outline"} 
                    className={`w-full ${!plan.isPro && "glass-button"}`}
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade your plan at any time. Your billing will be prorated for the remainder of your billing cycle.</p>
            </div>
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.</p>
            </div>
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground text-sm">We offer a 14-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
              <p className="text-muted-foreground text-sm">The free trial includes all features of the selected plan for 14 days, with no credit card required to start.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
