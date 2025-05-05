
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is AI Readiness?",
    answer: "AI Readiness is a measure of how well your website is optimized to be discovered and accurately interpreted by AI systems like search engines, virtual assistants, and recommendation algorithms. Our AI Readiness score evaluates various aspects of your site including content structure, metadata, schema markup, and technical factors.",
    category: "General"
  },
  {
    question: "How does the content automation work?",
    answer: "Our content automation tools use advanced AI to help create, optimize, and manage content across your website and social media channels. The system analyzes your existing content, audience data, and SEO requirements to generate optimized content recommendations, complete drafts, or enhancement suggestions.",
    category: "Content"
  },
  {
    question: "Do I need technical skills to use MartechEngine.ai?",
    answer: "No, MartechEngine.ai is designed to be user-friendly for marketers and business owners without technical expertise. Our intuitive interface provides clear guidance and actionable recommendations, while more advanced users can access deeper technical controls if needed.",
    category: "General"
  },
  {
    question: "Can MartechEngine.ai integrate with my existing tools?",
    answer: "Yes, MartechEngine.ai integrates with popular CMS platforms like WordPress, analytics tools like Google Analytics, and social media platforms. We also offer API access for custom integrations with your existing marketing stack.",
    category: "Technical"
  },
  {
    question: "How accurate is the AI content generation?",
    answer: "Our AI content generation uses state-of-the-art language models that are trained on vast datasets. The content is highly readable and relevant, though we recommend reviewing and editing AI-generated content to ensure it perfectly matches your brand voice and specific requirements.",
    category: "Content"
  },
  {
    question: "What's the difference between the Basic, Pro, and Enterprise plans?",
    answer: "The Basic plan includes essential tools for small businesses and individuals with one project. The Pro plan adds advanced features, multiple projects, and API integrations for growing businesses. The Enterprise plan offers unlimited projects, custom integrations, and dedicated support for large organizations.",
    category: "Pricing"
  },
  {
    question: "How often is the AI model updated?",
    answer: "We continuously train and update our AI models to improve their performance and keep up with the latest developments in search algorithms and content marketing best practices. Major updates occur quarterly, with minor improvements rolled out weekly.",
    category: "Technical"
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time through your account settings. If you cancel, your account will remain active until the end of your current billing period. We don't offer refunds for partial billing periods.",
    category: "Pricing"
  },
  {
    question: "How do you handle my data and privacy?",
    answer: "We take data privacy seriously. Your data is encrypted, stored securely, and never sold to third parties. We only use your data to provide and improve our services. For complete details, please refer to our Privacy Policy.",
    category: "Privacy"
  },
  {
    question: "Is there a limit to how many pages I can analyze?",
    answer: "Limits depend on your plan. The Basic plan allows 5,000 page scans per month, Pro allows 25,000, and Enterprise offers unlimited scanning. You can monitor your usage in your account dashboard.",
    category: "Technical"
  },
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel at any time during the trial period without being charged.",
    category: "Pricing"
  },
  {
    question: "What support options are available?",
    answer: "Basic plans include email support with a 48-hour response time. Pro plans add priority email support with a 24-hour response time. Enterprise plans include dedicated account management and 24/7 phone support.",
    category: "Support"
  }
];

const categories = ["All", "General", "Content", "Technical", "Pricing", "Privacy", "Support"];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestions, setOpenQuestions] = useState<string[]>([faqs[0].question]);

  // Filter FAQs based on search query and active category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question) 
        : [...prev, question]
    );
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to the most common questions about MartechEngine.ai and our services.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                className="glass-button pl-10 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-transparent hover:bg-primary/20"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="glass-card border-white/5 rounded-xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <button
                    className="w-full p-5 text-left flex justify-between items-center"
                    onClick={() => toggleQuestion(faq.question)}
                    aria-expanded={openQuestions.includes(faq.question)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    {openQuestions.includes(faq.question) ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </button>
                  
                  <div 
                    className={`transition-all duration-200 overflow-hidden ${
                      openQuestions.includes(faq.question) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browsing a different category.
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        <div className="mt-16 text-center glass-card border-white/10 p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Reach out to our support team or check out our documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button>
                Contact Support
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" className="glass-button">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
