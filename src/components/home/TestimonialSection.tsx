
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "MartechEngine.ai transformed how we approach SEO. Our organic traffic increased by over 200% in just 3 months.",
    name: "Sarah Johnson",
    title: "Marketing Director at TechFirm",
    avatarInitials: "SJ"
  },
  {
    quote: "The AI readiness score gave us clear, actionable steps to improve our website, resulting in better engagement metrics.",
    name: "Michael Chen",
    title: "CMO at NextLevel",
    avatarInitials: "MC"
  },
  {
    quote: "The content automation tools save us hours every week while improving our content quality. Truly impressive.",
    name: "Emma Rodriguez",
    title: "Content Strategist at GrowthCo",
    avatarInitials: "ER"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by marketers and SEO professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={idx} 
              className="glass-card border-white/5 p-6 rounded-xl animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4">
                {/* Quote marks */}
                <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border border-white/10 mr-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary/20 text-primary">{testimonial.avatarInitials}</AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by 10,000+ websites</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="h-10 w-32 glass-card rounded-md opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
