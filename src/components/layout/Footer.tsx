
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">MartechEngine.ai</h3>
            <p className="text-sm text-muted-foreground">
              Make your website AI-ready with one click. Optimize your digital presence for AI algorithms.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features/ai-readiness" className="text-muted-foreground hover:text-foreground transition">AI Readiness</Link></li>
              <li><Link to="/features/content-hub" className="text-muted-foreground hover:text-foreground transition">Content Hub</Link></li>
              <li><Link to="/features/seo-tools" className="text-muted-foreground hover:text-foreground transition">SEO Tools</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
              <li><Link to="/resources/docs" className="text-muted-foreground hover:text-foreground transition">Documentation</Link></li>
              <li><Link to="/resources/faq" className="text-muted-foreground hover:text-foreground transition">FAQ</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-foreground transition">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} MartechEngine.ai. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
            <Link to="/cookies" className="hover:text-foreground transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
