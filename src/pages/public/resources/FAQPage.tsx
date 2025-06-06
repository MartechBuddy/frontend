
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      category: "AI Readiness",
      questions: [
        {
          question: "What is an AI Readiness Score?",
          answer: "An AI Readiness Score is a metric that measures how well your website content is prepared for AI search engines. It evaluates factors like content structure, semantic clarity, entity recognition, and technical implementation that affect how AI models read and cite your content."
        },
        {
          question: "Why is AI Readiness important for my website?",
          answer: "As AI-powered search becomes more prevalent, websites need to be optimized not just for traditional SEO, but also for AI comprehension. Websites with higher AI Readiness are more likely to be cited by AI models, appear in AI-generated responses, and maintain visibility in next-generation search."
        },
        {
          question: "How is the AI Readiness Score calculated?",
          answer: "Our AI Readiness Score analyzes multiple factors including content clarity, structure, semantic relationships, entity recognition, technical implementation, and overall AI-friendliness. The score ranges from 0-100, with higher scores indicating better optimization for AI consumption."
        },
        {
          question: "How often should I check my AI Readiness Score?",
          answer: "We recommend checking your AI Readiness Score at least monthly, and after any significant content or website updates. AI algorithms are constantly evolving, so regular monitoring helps ensure your site stays optimized."
        }
      ]
    },
    {
      category: "Platform & Features",
      questions: [
        {
          question: "What features are included in the free plan?",
          answer: "The free plan includes 5 projects, 5 AI calls per day, limited content items, basic SEO/SMO tools, 1 monthly crawl for your project URL, and a free AI Readiness Check (1 per IP address per day)."
        },
        {
          question: "What are AI Calls and how do they work?",
          answer: "AI Calls are credits used when you perform AI-powered actions in our platform, such as generating content, optimizing SEO, or analyzing readiness. Each plan has a daily limit of AI Calls that resets at midnight UTC. The free plan includes 5 AI Calls per day, while paid plans offer 100 AI Calls per day."
        },
        {
          question: "Can I upgrade or downgrade my plan at any time?",
          answer: "Yes, you can upgrade from a free plan to a paid plan at any time. For paid plans, you can modify your subscription through your billing settings. Downgrading from a paid plan to a free plan will take effect at the end of your current billing cycle."
        },
        {
          question: "Do you offer a refund if I'm not satisfied?",
          answer: "We offer a 14-day money-back guarantee for all new paid subscriptions. If you're not satisfied with our service within the first 14 days, please contact our support team for a full refund."
        }
      ]
    },
    {
      category: "Content & SEO",
      questions: [
        {
          question: "How does the AI content generator work?",
          answer: "Our AI content generator uses advanced Google AI models (Gemini) to create high-quality, original content based on your inputs. You can specify topics, tone, length, and target keywords, and the AI will generate content optimized for both human readers and AI comprehension."
        },
        {
          question: "Is the generated content original and free from plagiarism?",
          answer: "Yes, all content generated by our platform is original. We use advanced AI models that create new content rather than copying existing text. However, we always recommend reviewing and editing AI-generated content to ensure it matches your brand voice and specific requirements."
        },
        {
          question: "Can I optimize existing content on my website?",
          answer: "Absolutely! Our Content Optimizer tool allows you to input existing content and receive AI-powered recommendations to improve its readability, SEO performance, and AI-friendliness. This helps you enhance your current content without starting from scratch."
        },
        {
          question: "What SEO tools are included in the platform?",
          answer: "Our platform includes comprehensive SEO tools such as keyword research, site audits, content optimization, competitor analysis, backlink analysis, schema generator, sitemap generator, internal link planner, and more. All these tools are integrated with our AI Readiness insights for a holistic approach to search optimization."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Which AI models does MartechEngine use?",
          answer: "MartechEngine uses advanced Google AI models internally to power all features, including Gemini for content generation and analysis, Imagen for visual content, and Text-to-Speech for audio content, ensuring cutting-edge performance across all features."
        },
        {
          question: "Is my data secure and private?",
          answer: "Yes, we take data security and privacy very seriously. We use industry-standard encryption and security practices to protect your data. We do not share your content or website data with third parties. For more details, please refer to our Privacy Policy."
        },
        {
          question: "Do I need technical skills to use MartechEngine?",
          answer: "No, MartechEngine is designed to be user-friendly and accessible to users with varying levels of technical expertise. Our intuitive interface and guided workflows make it easy for anyone to optimize their digital presence without requiring specialized technical knowledge."
        },
        {
          question: "Can I integrate MartechEngine with my existing tools?",
          answer: "Yes, MartechEngine offers integrations with popular platforms like WordPress, social media channels, and analytics tools. You can connect these services through our Integrations settings page to streamline your workflow and data sharing between platforms."
        }
      ]
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Find answers to the most common questions about MartechEngine and our features.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-20">
        {faqs.map((category, idx) => (
          <div key={idx} className="mb-12 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
            <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
              {category.questions.map((faq, faqIdx) => (
                <AccordionItem key={faqIdx} value={`${idx}-${faqIdx}`} className="border-b border-white/10 last:border-0">
                  <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-white/5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-8">
          We're here to help! Contact our support team for assistance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/company/contact">
            <Button>Contact Support</Button>
          </Link>
          <Link to="/resources/documentation">
            <Button variant="outline" className="glass-button">
              Browse Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
