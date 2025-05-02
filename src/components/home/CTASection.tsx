
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SignupModal from "../auth/SignupModal";

const CTASection = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card border-white/10 rounded-2xl max-w-4xl mx-auto p-10 md:p-16 text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to make your website AI-ready?
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Start optimizing your content, improving SEO, and automating your marketing efforts today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => setShowSignupModal(true)}
              className="text-base"
            >
              Start Your Free Trial
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-button text-base"
              onClick={() => window.location.href = "/pricing"}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
      
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </section>
  );
};

export default CTASection;
