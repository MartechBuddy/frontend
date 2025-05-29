import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/930155f5-bc69-4113-a0f3-3e443cbe200e.png" 
                alt="MartechEngine.ai Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered SEO Automation for Unrivaled Growth. Make your website AI-ready with intelligent workflows and real-time optimization.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company/about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link to="/company/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              <li><Link to="/company/careers" className="text-muted-foreground hover:text-foreground transition">Careers</Link></li>
              <li><Link to="/company/partners" className="text-muted-foreground hover:text-foreground transition">Partners</Link></li>
              <li><Link to="/company/press" className="text-muted-foreground hover:text-foreground transition">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
              <li><Link to="/resources/guides" className="text-muted-foreground hover:text-foreground transition">Guides</Link></li>
              <li><Link to="/resources/documentation" className="text-muted-foreground hover:text-foreground transition">Documentation</Link></li>
              <li><Link to="/resources/faq" className="text-muted-foreground hover:text-foreground transition">FAQ</Link></li>
              <li><Link to="/resources/seo-glossary" className="text-muted-foreground hover:text-foreground transition">SEO Glossary</Link></li>
              <li><Link to="/resources/community" className="text-muted-foreground hover:text-foreground transition">Community</Link></li>
              <li><Link to="/resources/case-studies" className="text-muted-foreground hover:text-foreground transition">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition">Features</Link></li>
              <li><Link to="/features/comparison" className="text-muted-foreground hover:text-foreground transition">Comparison</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
              <li><Link to="/demo" className="text-muted-foreground hover:text-foreground transition">Request Demo</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} MartechEngine.ai. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/company/privacy-policy" className="hover:text-foreground transition">Privacy</Link>
            <Link to="/company/terms-of-service" className="hover:text-foreground transition">Terms</Link>
            <Link to="/company/cookie-policy" className="hover:text-foreground transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
