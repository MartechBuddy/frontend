
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStartup Inc.',
      role: 'Marketing Director',
      quote: 'MartechEngine transformed our SEO workflow. We saw a 300% increase in organic traffic within 3 months.',
      rating: 5,
      avatar: '/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png'
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCo',
      role: 'SEO Manager', 
      quote: 'The AI automation saved us 15 hours per week. Our content creation process is now completely streamlined.',
      rating: 5,
      avatar: '/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png'
    },
    {
      name: 'Emma Davis',
      company: 'Digital Agency Pro',
      role: 'Founder',
      quote: 'Managing 20+ client sites is effortless now. The WordPress integration and automated reporting are game-changers.',
      rating: 5,
      avatar: '/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png'
    }
  ];

  const companies = [
    'TechStartup Inc.', 'GrowthCo', 'Digital Agency Pro', 'E-commerce Plus', 'Local Business Hub'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="text-gradient">Growing Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Client quotes, company logos, and industry recognition
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Company Logos */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-6">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <div key={index} className="text-lg font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/resources/case-studies">
              <Button variant="outline" className="glass-button">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
