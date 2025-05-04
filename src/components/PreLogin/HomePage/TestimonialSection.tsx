
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "MartechEngine.ai completely transformed our content strategy. We've seen a 45% increase in organic traffic since implementing their AI recommendations.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechGrowth",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The AI Readiness tool pinpointed issues I never would have found on my own. Now our site ranks for twice as many keywords as before.",
      name: "Michael Chen",
      title: "SEO Specialist, Innovate Inc",
      avatar: "/placeholder.svg"
    },
    {
      quote: "As a small business, we couldn't afford a full marketing team. This platform has become our virtual marketing department at a fraction of the cost.",
      name: "Lisa Rodriguez",
      title: "Founder, Craft Commerce",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Trusted by Marketers Worldwide
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        See what our customers have to say about their experience
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card border border-white/10 p-6 rounded-lg">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15H7.5C6.837 15 6.2011 14.7366 5.7322 14.2678C5.2634 13.7989 5 13.163 5 12.5C5 11.837 5.2634 11.2011 5.7322 10.7322C6.2011 10.2634 6.837 10 7.5 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V7.5C11 6.837 10.7366 6.2011 10.2678 5.7322C9.7989 5.2634 9.163 5 8.5 5H5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27 15H22.5C21.837 15 21.2011 14.7366 20.7322 14.2678C20.2634 13.7989 20 13.163 20 12.5C20 11.837 20.2634 11.2011 20.7322 10.7322C21.2011 10.2634 21.837 10 22.5 10H25C25.2652 10 25.5196 9.89464 25.7071 9.70711C25.8946 9.51957 26 9.26522 26 9V7.5C26 6.837 25.7366 6.2011 25.2678 5.7322C24.7989 5.2634 24.163 5 23.5 5H20" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
