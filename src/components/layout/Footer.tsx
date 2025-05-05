
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = new FormData(form).get('email') as string;
    
    // Mock API call - would be replaced with actual API integration
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You have been subscribed to our newsletter.",
      });
      form.reset();
    }, 500);
  };

  return (
    <footer className="glass-nav border-t border-white/5 py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png" 
                alt="MartechEngine.ai Logo" 
                className="h-10 w-auto logo-glow"
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              Make Your Website AI-Ready & Automate Marketing with MartechEngine.ai
            </p>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal and Newsletter */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-medium mb-3">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  className="glass-button" 
                  required 
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-white/5">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 xAI. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <Link to="/settings/gdpr" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              GDPR Settings
            </Link>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={18} />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
