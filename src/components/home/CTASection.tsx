
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card border-white/10 rounded-2xl max-w-4xl mx-auto p-10 md:p-16 text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Strategy?
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses gaining the AI search advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="text-base w-full sm:w-auto"
              >
                Sign Up Free
              </Button>
            </Link>
            
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-button text-base w-full sm:w-auto"
              >
                Explore Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
