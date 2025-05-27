
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MiniFAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What makes MartechEngine different from other SEO tools?',
      answer: 'MartechEngine is the only platform that combines AI-powered automation with direct WordPress publishing, allowing you to not just analyze but actually implement SEO improvements automatically.'
    },
    {
      question: 'Do I need technical knowledge to use MartechEngine?',
      answer: 'No technical knowledge required! Our AI handles the complex work while providing you with clear, actionable insights and one-click fixes.'
    },
    {
      question: 'How quickly can I see results?',
      answer: 'Most users see initial improvements within the first week. Significant traffic growth typically occurs within 30-90 days depending on your starting point and competition.'
    },
    {
      question: 'Can I integrate with my existing WordPress site?',
      answer: 'Yes! MartechEngine integrates seamlessly with WordPress, allowing direct content publishing and SEO optimization without leaving the platform.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including live chat, email support, extensive documentation, video tutorials, and regular webinars to help you succeed.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions with short answers, linking to our full FAQ
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/resources/faq">
              <Button variant="outline" className="glass-button">
                View Full FAQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniFAQSection;
