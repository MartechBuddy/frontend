
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const PublicHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glass-nav border-b border-white/5 py-3 px-6 md:px-8 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/0caa0ab7-c716-4409-a921-36af0d39b4ff.png" 
              alt="MartechEngine.ai Logo" 
              className="h-10 w-auto logo-glow"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 ml-10">
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Features
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features" className="w-full">Overview</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features/seo-audit" className="w-full">SEO Audit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features/keyword-intelligence" className="w-full">Keyword Intelligence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features/ai-content-writer" className="w-full">AI Content Writer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features/internal-link-planner" className="w-full">Internal Link Planner</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/features/automation-workflows" className="w-full">Automation Workflows</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Resources
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/resources/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/resources/guides" className="w-full">Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/resources/documentation" className="w-full">Documentation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/resources/faq" className="w-full">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/resources/case-studies" className="w-full">Case Studies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Company
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/company/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/company/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/company/careers" className="w-full">Careers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/company/partners" className="w-full">Partners</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/company/press" className="w-full">Press</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select language">
                <Globe size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg mb-1 mt-1 cursor-pointer">
                English
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg cursor-pointer">
                Español
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg cursor-pointer">
                Français
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg mt-1 cursor-pointer">
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="hidden md:flex"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="hidden md:flex">
              Try Free
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-b border-white/5 p-4 flex flex-col space-y-4">
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
            Pricing
          </Link>
          <div className="py-2">
            <div className="font-medium mb-2">Features</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </Link>
              <Link to="/features/seo-audit" className="text-muted-foreground hover:text-foreground transition-colors">
                SEO Audit
              </Link>
              <Link to="/features/keyword-intelligence" className="text-muted-foreground hover:text-foreground transition-colors">
                Keyword Intelligence
              </Link>
              <Link to="/features/ai-content-writer" className="text-muted-foreground hover:text-foreground transition-colors">
                AI Content Writer
              </Link>
            </div>
          </div>
          <div className="py-2">
            <div className="font-medium mb-2">Resources</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/resources/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/resources/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link to="/resources/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
          <div className="py-2">
            <div className="font-medium mb-2">Company</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/company/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/company/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex space-x-2 pt-2">
            <Link to="/login" className="flex-1">
              <Button variant="ghost" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/signup" className="flex-1">
              <Button className="w-full">
                Try Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicHeader;
