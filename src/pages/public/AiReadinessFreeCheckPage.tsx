
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AiReadinessFreeCheckPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a valid website URL');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setScore(Math.floor(Math.random() * 30) + 60); // Random score between 60-90
    }, 3000);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4">Your Free AI Readiness Score</h1>
      <p className="text-center text-lg mb-12">
        Discover how well your website is optimized for modern AI search engines.
      </p>
      
      {!score && !isLoading && (
        <div className="glass-card p-8 rounded-xl mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="website-url" className="block text-lg font-medium mb-2">
                Enter your website URL
              </label>
              <input
                id="website-url"
                type="text"
                placeholder="e.g., yourcompany.com"
                className="w-full px-4 py-3 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <p className="text-sm text-muted-foreground mt-2">
                1 check per IP address per day. No data stored. Sign up for unlimited analysis.
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
            >
              Get My Free Score
            </button>
          </form>
        </div>
      )}
      
      {isLoading && (
        <div className="glass-card p-8 rounded-xl mb-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Analyzing your website for AI readiness...</h2>
          <div className="flex flex-col space-y-4 max-w-md mx-auto mb-6">
            <div className="flex items-center justify-between">
              <span>Crawling your homepage...</span>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-between">
              <span>Extracting key data...</span>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between">
              <span>Analyzing for AI readability...</span>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
            </div>
            <div className="flex items-center justify-between">
              <span>Generating score and examples...</span>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
            </div>
          </div>
          <p className="text-muted-foreground">This might take a few moments. Do not close this window.</p>
        </div>
      )}
      
      {score && !isLoading && (
        <div className="glass-card p-8 rounded-xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Your AI Readiness Score: {score}/100</h2>
            <div className="relative h-4 w-full max-w-md mx-auto bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="mt-4 text-lg">
              Your website has some good AI-friendly elements, but there are several opportunities for improvement.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Top Critical Issues</h3>
            <div className="glass-card p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">Missing structured data</h4>
              <p className="text-sm text-muted-foreground">
                AI models struggle to understand your content without proper schema markup. 
                Adding structured data can improve how AI interprets your pages.
              </p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h4 className="font-medium mb-2">Poor content readability</h4>
              <p className="text-sm text-muted-foreground">
                Your content's structure makes it difficult for AI to extract and cite. 
                Improving headings and paragraph organization would help.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Unlock Detailed Fixes & Advanced Insights</h3>
            <p className="mb-6 text-muted-foreground">
              Your free check gives you a glimpse. Sign up for a paid plan to get page-by-page analysis, 
              AI-powered solutions, continuous monitoring, and much more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              >
                Sign Up Free
              </Link>
              <Link 
                to="/pricing" 
                className="px-6 py-3 border border-white/10 rounded-md hover:bg-white/5 transition"
              >
                See Paid Plans
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiReadinessFreeCheckPage;
