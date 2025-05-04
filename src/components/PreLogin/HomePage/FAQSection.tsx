
import React from "react";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="glass-card border border-white/10 p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">What is AI Readiness?</h3>
          <p className="text-muted-foreground">
            AI Readiness is about optimizing your website to be properly understood and indexed by AI systems like search engines, voice assistants, and chatbots. It ensures your content is structured in a way that makes it accessible and interpretable by AI.
          </p>
        </div>
        <div className="glass-card border border-white/10 p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">How does the AI content generation work?</h3>
          <p className="text-muted-foreground">
            Our AI content generation uses advanced language models to create original, SEO-optimized content based on your inputs and brand guidelines. It can generate blog posts, product descriptions, social media content, and more while maintaining your unique voice.
          </p>
        </div>
        <div className="glass-card border border-white/10 p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
          <p className="text-muted-foreground">
            Yes, we take data security seriously. All your data is encrypted in transit and at rest. We don't share your information with third parties, and we comply with all relevant data protection regulations including GDPR.
          </p>
        </div>
        <div className="glass-card border border-white/10 p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Can I integrate with my existing tools?</h3>
          <p className="text-muted-foreground">
            Yes, MartechEngine.ai integrates with popular marketing tools including WordPress, Google Analytics, social media platforms, and many CMS systems. We're constantly adding new integrations to our ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
