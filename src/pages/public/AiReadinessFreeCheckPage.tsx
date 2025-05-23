
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AiReadinessFreeCheckPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    summary: string;
    issues: Array<{
      title: string;
      description: string;
      imageUrl: string;
    }>;
  }>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    setIsChecking(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      setResult({
        score: 78,
        summary: "Your website shows good AI readiness but has several areas for improvement, particularly in structured data and image optimization.",
        issues: [
          {
            title: "Missing Alt Text on Images",
            description: "Several images on your homepage lack descriptive alt text, making them invisible to AI systems.",
            imageUrl: "/placeholder.svg"
          },
          {
            title: "Incomplete Schema Markup",
            description: "Your product pages are missing key schema markup that would help AI understand your offerings.",
            imageUrl: "/placeholder.svg"
          }
        ]
      });
    }, 3000);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4">Your Free AI Readiness Score</h1>
      <p className="text-center text-lg text-muted-foreground mb-8">
        Discover how well your website is optimized for modern AI search engines.
      </p>
      
      {!result ? (
        <div className="glass-card p-8 rounded-xl mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="website-url" className="block text-sm font-medium mb-2">
                Enter your website URL
              </label>
              <div className="flex">
                <input
                  id="website-url"
                  type="url"
                  placeholder="https://yourcompany.com"
                  className="flex-1 px-4 py-3 rounded-l-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isChecking}
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-primary/90 transition disabled:opacity-50"
                  disabled={isChecking}
                >
                  {isChecking ? "Checking..." : "Check My Score"}
                </button>
              </div>
              {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
              <p className="mt-2 text-xs text-muted-foreground">
                1 check per IP address per day. No data stored. Sign up for unlimited analysis.
              </p>
            </div>
          </form>
          
          {isChecking && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="mr-4 h-4 w-4 bg-primary rounded-full animate-ping"></div>
                <p>Analyzing your website for AI readiness...</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                <li>Crawling your homepage...</li>
                <li>Extracting key data...</li>
                <li>Analyzing for AI readability...</li>
                <li>Generating score and examples...</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                This might take a few moments. Do not close this window.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Your AI Readiness Score: {result.score}/100</h2>
            <div className="w-full bg-white/5 h-4 rounded-full mb-4">
              <div 
                className="bg-primary h-4 rounded-full"
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
            <p className="text-muted-foreground">{result.summary}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Top Critical Issues</h3>
            
            {result.issues.map((issue, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={issue.imageUrl}
                      alt={`Visualization of ${issue.title}`}
                      className="w-full h-auto rounded-md border border-white/10" 
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-lg font-semibold mb-2">{issue.title}</h4>
                    <p className="text-muted-foreground">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Unlock Detailed Fixes & Advanced Insights</h3>
            <p className="text-muted-foreground mb-6">
              Your free check gives you a glimpse. Sign up for a paid plan to get page-by-page analysis, 
              AI-powered solutions, continuous monitoring, and much more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="flex-1">
                <button className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                  Sign Up Free
                </button>
              </Link>
              <Link to="/pricing" className="flex-1">
                <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition">
                  See Paid Plans
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiReadinessFreeCheckPage;
