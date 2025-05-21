
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to MartechEngine.ai</h1>
      <p className="text-center text-lg mb-12">
        Make your website AI-ready with one click. Optimize your digital presence for AI algorithms.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        <div className="p-6 glass-card rounded-xl">
          <h3 className="text-xl font-semibold mb-3">AI Readiness</h3>
          <p className="text-muted-foreground">Check if your website is optimized for AI search engines.</p>
        </div>
        
        <div className="p-6 glass-card rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Content Hub</h3>
          <p className="text-muted-foreground">Create and manage AI-friendly content for your website.</p>
        </div>
        
        <div className="p-6 glass-card rounded-xl">
          <h3 className="text-xl font-semibold mb-3">SEO Tools</h3>
          <p className="text-muted-foreground">Optimize your website for search engines and AI algorithms.</p>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to="/ai-readiness/free-check" 
          className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          Check Your Website Free
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
