
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-white/10 backdrop-blur-md bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              MartechEngine.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/pricing"
              className={`text-sm hover:text-primary transition-colors ${
                isActive("/pricing") ? "text-primary" : "text-foreground"
              }`}
            >
              Pricing
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-sm hover:text-primary transition-colors">
                Resources <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 transform translate-y-2 hidden group-hover:block bg-background border border-white/10 rounded-lg shadow-lg p-3 w-48 glass-card">
                <Link
                  to="/docs"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/community"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  Community
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-sm hover:text-primary transition-colors">
                Company <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 transform translate-y-2 hidden group-hover:block bg-background border border-white/10 rounded-lg shadow-lg p-3 w-48 glass-card">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="block px-3 py-2 text-sm hover:bg-white/5 rounded-md transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link to="/login">
              <Button variant="outline" size="sm" className="glass-button">
                Login
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button size="sm">Try Free</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/pricing"
              className="block py-2"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Resources</p>
              <Link
                to="/docs"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                Documentation
              </Link>
              <Link
                to="/blog"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                to="/community"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                Community
              </Link>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Company</p>
              <Link
                to="/about"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="block py-1 pl-3 text-sm"
                onClick={closeMenu}
              >
                Careers
              </Link>
            </div>
            
            <div className="flex flex-col space-y-2 pt-3">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full glass-button">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={closeMenu}>
                <Button className="w-full">Try Free</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
