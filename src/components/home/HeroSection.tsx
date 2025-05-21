
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/ai-readiness/free-check?url=${encodeURIComponent(url)}`;
  };

  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Master AI Search: 
            <span className="text-gradient block mt-2">Get Your Free AI Readiness Score Now!</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how well your website is optimized for modern AI search engines. 
            Ensure your content is easily readable and cited by AI models.
          </p>
          
          <form onSubmit={handleSubmit} className="mb-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                placeholder="Enter your website URL (e.g., yourcompany.com)"
                className="flex-1 px-4 py-3 rounded-md sm:rounded-r-none border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md sm:rounded-l-none hover:bg-primary/90 transition"
              >
                Get My Free Score
              </button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              1 check per IP address per day. No data stored. Sign up for unlimited analysis.
            </p>
          </form>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/ai-readiness/free-check">
              <Button size="lg" className="text-base">
                Check Your Website Free
              </Button>
            </Link>
            
            <Link to="/features/ai-readiness">
              <Button variant="outline" size="lg" className="glass-button text-base">
                Learn More About AI Readiness <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-screen overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-subtle" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl opacity-20 animate-pulse-subtle" style={{ animationDelay: "0.5s" }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
