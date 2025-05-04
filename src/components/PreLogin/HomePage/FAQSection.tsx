
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is AI Readiness?",
      answer: "AI Readiness is a comprehensive assessment of how well your website is optimized for modern AI systems like search engines, virtual assistants, and recommendation algorithms. Our tools analyze various aspects of your site and provide actionable recommendations to improve visibility and performance."
    },
    {
      question: "How does the Content Automation work?",
      answer: "Our Content Automation tools leverage advanced AI models to help you create, optimize, and distribute content across platforms. You can generate ideas, outline content, improve existing drafts, and schedule posts - all while maintaining your brand voice and SEO best practices."
    },
    {
      question: "Do I need technical knowledge to use MartechEngine?",
      answer: "No, MartechEngine.ai is designed to be user-friendly for marketers with any level of technical expertise. Our intuitive interface guides you through each process, and our AI assistants help translate complex technical concepts into actionable marketing steps."
    },
    {
      question: "Can I connect my existing marketing tools?",
      answer: "Yes, MartechEngine.ai integrates with popular marketing platforms including WordPress, Google Analytics, social media platforms, and email marketing tools. You can manage all your marketing activities from a single dashboard."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Everything you need to know about our platform
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
