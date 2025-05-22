
import React, { useState } from 'react';
import FreeCheckForm from '@/components/ai-readiness/FreeCheckForm';
import ResultSummary from '@/components/ai-readiness/ResultSummary';

// Mock data for the result
const mockResult = {
  score: 68,
  summary: "Your website shows moderate AI readiness. There are several key areas that need improvement to ensure your content is easily understood and cited by AI models.",
  breakdown: {
    seoContent: 72,
    technicalSeo: 58,
    aiVisibility: 65
  },
  issues: [
    {
      title: "Missing alternative text on key images",
      description: "Several important images on your homepage lack proper alt text, making it difficult for AI to understand the visual content.",
      image: "/placeholder.svg"
    },
    {
      title: "Unclear heading hierarchy",
      description: "Your page's heading structure (H1, H2, H3) is inconsistent, which can confuse AI models trying to understand your content structure.",
      image: "/placeholder.svg"
    }
  ]
};

const AiReadinessFreeCheckPage: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  
  // In a real implementation, we would get the result from an API call
  // For demo purposes, we'll just toggle between form and results
  
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Readiness Check</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how well your website is optimized for modern AI search engines.
          Ensure your content is easily readable and cited by AI models.
        </p>
      </div>
      
      <div className="glass-card p-8 rounded-xl mb-8">
        {!showResults ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Check Your Website</h2>
              <p className="text-muted-foreground">
                Enter your website URL below to get your free AI Readiness score
              </p>
            </div>
            <FreeCheckForm />
            {/* Demo button to toggle results view */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowResults(true)}
                className="text-sm text-primary hover:underline"
              >
                Demo: Show sample results
              </button>
            </div>
          </>
        ) : (
          <ResultSummary {...mockResult} />
        )}
      </div>
      
      {!showResults && (
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">What We Check</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">SEO Content</h3>
              <p className="text-muted-foreground">
                We analyze your content structure, readability, and relevance to ensure it's optimized for AI understanding.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Technical SEO</h3>
              <p className="text-muted-foreground">
                We examine your site's technical elements like schema markup, metadata, and page speed that impact AI crawling.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">AI Visibility</h3>
              <p className="text-muted-foreground">
                We evaluate how well your content is structured for AI citation and whether it's likely to be referenced in AI responses.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiReadinessFreeCheckPage;
