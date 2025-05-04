
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-white/5 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="max-w-3xl mx-auto glass-card border border-white/10 p-8 rounded-xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg mb-6">
              "MartechEngine.ai has transformed how we approach content creation. We've seen a 40% increase in organic traffic and our content team is more efficient than ever."
            </p>
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
              <img 
                src="/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png" 
                alt="Customer" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold">David Wilson</p>
            <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 mt-16 opacity-70">
          <div className="w-24 h-12 bg-white/10 rounded-md"></div>
          <div className="w-24 h-12 bg-white/10 rounded-md"></div>
          <div className="w-24 h-12 bg-white/10 rounded-md"></div>
          <div className="w-24 h-12 bg-white/10 rounded-md"></div>
          <div className="w-24 h-12 bg-white/10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
