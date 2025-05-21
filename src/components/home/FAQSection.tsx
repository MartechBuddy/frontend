
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is an AI Readiness Score?",
    answer: "A metric to measure how well your website content is prepared for AI search engines. It evaluates structure, metadata, clarity, and other factors that affect how AI understands your content."
  },
  {
    question: "How is the Free Check different from a Paid Check?",
    answer: "The Free Check gives you a score and top-level issues with visual examples. Paid plans offer detailed, page-by-page analysis, actionable AI-powered fixes, and continuous monitoring."
  },
  {
    question: "Which AI models does MartechEngine use?",
    answer: "MartechEngine uses advanced Google AI models (Gemini, Imagen, Text-to-Speech) internally to power all features, ensuring cutting-edge performance."
  },
  {
    question: "Do I need technical skills to use MartechEngine?",
    answer: "Not at all! Our AI-powered tools and guided interface make it easy for anyone to optimize their digital presence."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to frequently asked questions about AI Readiness
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10">
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
        
        <div className="text-center">
          <Link to="/resources/faq">
            <Button variant="outline">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
