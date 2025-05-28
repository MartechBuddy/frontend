
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, Users, Target, TrendingUp } from "lucide-react";

const PartnersPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Partner Program</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our partner ecosystem and help bring AI-powered SEO to more businesses while earning competitive commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-6 text-center">
          <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Reseller Partners</h3>
          <p className="text-muted-foreground mb-6">
            Sell MartechEngine to your clients and earn recurring commissions while providing them with cutting-edge SEO tools.
          </p>
          <Button>Apply as Reseller</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Agency Partners</h3>
          <p className="text-muted-foreground mb-6">
            White-label our platform for your agency clients and streamline your SEO service delivery.
          </p>
          <Button>Become Agency Partner</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-6 text-center">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Technology Partners</h3>
          <p className="text-muted-foreground mb-6">
            Integrate with MartechEngine through our API and create seamless experiences for mutual customers.
          </p>
          <Button>Explore Integration</Button>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Partner Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card border-white/10 p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-3">Competitive Commissions</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Up to 30% recurring commissions</li>
              <li>• Performance-based bonuses</li>
              <li>• Multi-tier commission structure</li>
              <li>• Monthly commission payouts</li>
            </ul>
          </Card>
          
          <Card className="glass-card border-white/10 p-6">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-3">Support & Training</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Dedicated partner success manager</li>
              <li>• Sales training and certification</li>
              <li>• Marketing materials and co-marketing</li>
              <li>• Priority technical support</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="glass-card border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our growing partner network and help businesses succeed with AI-powered SEO while building a profitable revenue stream.
        </p>
        <Button size="lg">Apply Now</Button>
      </div>
    </div>
  );
};

export default PartnersPage;
