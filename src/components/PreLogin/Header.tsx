
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="border-b border-white/10 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                ME
              </div>
              <span className="text-lg font-bold">MartechEngine.ai</span>
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-6">
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <div className="relative group">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  Resources
                </span>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/docs" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Documentation
                  </Link>
                  <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Blog
                  </Link>
                  <Link to="/community" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Community
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  Company
                </span>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/about" className="block px-4 py-2 text-sm hover:bg-white/5">
                    About
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Contact
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Careers
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:flex hidden"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Try Free</Button>
              </Link>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/pricing"
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="py-2">
              <p className="mb-2 font-medium">Resources</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/docs"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  to="/blog"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/community"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
              </div>
            </div>
            <div className="py-2">
              <p className="mb-2 font-medium">Company</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/about"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="block text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>
            <div className="pt-4 flex flex-col space-y-2 border-t border-white/10">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Try Free</Button>
              </Link>
            </div>
            <div className="pt-2 flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
