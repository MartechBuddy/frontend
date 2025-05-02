
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const isMobile = useIsMobile();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glass-nav border-b border-white/5 py-3 px-6 md:px-8 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/038add9b-dda0-4d51-b49c-3884a4465c77.png" 
              alt="MartechEngine.ai Logo" 
              className="h-10 w-auto logo-glow mr-2"
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
              Resources
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/docs" className="w-full">Documentation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/community" className="w-full">Community</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Company
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">
                <Link to="/careers" className="w-full">Careers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode} 
            className="rounded-full"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          {/* Accessibility Toggle (simplified for now) */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
          >
            <span className="sr-only">Toggle high contrast</span>
            <span className="text-xs font-bold">A</span>
          </Button>
          
          {!isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                onClick={() => setShowLoginModal(true)}
                className="hidden md:flex"
              >
                Login
              </Button>
              <Button 
                onClick={() => setShowSignupModal(true)}
                className="hidden md:flex"
              >
                Try Free
              </Button>
            </>
          ) : (
            <>
              {/* Search Bar (for logged-in users) */}
              <div className="relative hidden md:block w-full max-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search content..."
                  className="pl-10 glass-button py-2 px-4 rounded-md w-full bg-transparent border border-white/10"
                />
              </div>
            </>
          )}
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
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
            <div className="font-medium mb-2">Resources</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </Link>
            </div>
          </div>
          <div className="py-2">
            <div className="font-medium mb-2">Company</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </div>
          </div>
          {!isLoggedIn && (
            <div className="flex space-x-2 pt-2">
              <Button 
                variant="ghost" 
                onClick={() => setShowLoginModal(true)}
                className="flex-1"
              >
                Login
              </Button>
              <Button 
                onClick={() => setShowSignupModal(true)}
                className="flex-1"
              >
                Try Free
              </Button>
            </div>
          )}
        </div>
      )}
      
      {/* Modals */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      
      {showSignupModal && (
        <SignupModal onClose={() => setShowSignupModal(false)} />
      )}
    </header>
  );
};

export default Header;
