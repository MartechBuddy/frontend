
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="glass-card border border-white/10 rounded-xl p-8 md:p-12 bg-gradient-to-br from-primary/20 to-indigo-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial today and see how AI can elevate your marketing efforts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="px-8">Start Free Trial</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
