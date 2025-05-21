
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-nav border-b border-white/5 py-3 px-6 md:px-8 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">MartechEngine.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link to="/login">
              <button className="px-4 py-2 rounded border border-white/10 hover:bg-white/5 transition">
                Login
              </button>
            </Link>
            
            <Link to="/signup">
              <button className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>

      {/* Footer */}
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
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
                <li><Link to="/resources/docs" className="text-muted-foreground hover:text-foreground transition">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MartechEngine.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
