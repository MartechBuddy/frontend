
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is AI Readiness?",
    answer: "AI Readiness is a measure of how well your website is optimized to be discovered and accurately interpreted by AI systems like search engines, virtual assistants, and recommendation algorithms. Our AI Readiness score evaluates various aspects of your site including content structure, metadata, schema markup, and technical factors."
  },
  {
    question: "How does the content automation work?",
    answer: "Our content automation tools use advanced AI to help create, optimize, and manage content across your website and social media channels. The system analyzes your existing content, audience data, and SEO requirements to generate optimized content recommendations, complete drafts, or enhancement suggestions."
  },
  {
    question: "Do I need technical skills to use MartechEngine.ai?",
    answer: "No, MartechEngine.ai is designed to be user-friendly for marketers and business owners without technical expertise. Our intuitive interface provides clear guidance and actionable recommendations, while more advanced users can access deeper technical controls if needed."
  },
  {
    question: "Can MartechEngine.ai integrate with my existing tools?",
    answer: "Yes, MartechEngine.ai integrates with popular CMS platforms like WordPress, analytics tools like Google Analytics, and social media platforms. We also offer API access for custom integrations with your existing marketing stack."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="mb-4 glass-card border-white/5 rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <button
                className="w-full p-5 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-200 overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
