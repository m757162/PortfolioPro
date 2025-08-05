import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4v12l-8 4-8-4V10l8-4z"/>
                <circle cx="16" cy="16" r="4" fill="currentColor"/>
              </svg>
              <span className="font-montserrat font-bold text-xl text-primary">Portfolio Pro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/portfolio" 
                className={`font-montserrat font-medium transition-colors duration-300 ${
                  isActive('/portfolio') 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`font-montserrat font-medium transition-colors duration-300 ${
                  isActive('/about') 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`font-montserrat font-medium transition-colors duration-300 ${
                  isActive('/services') 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/insights" 
                className={`font-montserrat font-medium transition-colors duration-300 ${
                  isActive('/insights') 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                Insights
              </Link>
              <Link 
                to="/contact" 
                className={`btn-secondary`}
              >
                Start Project
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-text-primary hover:text-primary focus:outline-none focus:text-primary" 
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface border-t border-border">
            <Link 
              to="/portfolio" 
              className={`block px-3 py-2 font-montserrat font-medium transition-colors duration-300 ${
                isActive('/portfolio') 
                  ? 'text-primary bg-primary/10 rounded-md' 
                  : 'text-text-primary hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 font-montserrat font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10 rounded-md' 
                  : 'text-text-primary hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 font-montserrat font-medium transition-colors duration-300 ${
                isActive('/services') 
                  ? 'text-primary bg-primary/10 rounded-md' 
                  : 'text-text-primary hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/insights" 
              className={`block px-3 py-2 font-montserrat font-medium transition-colors duration-300 ${
                isActive('/insights') 
                  ? 'text-primary bg-primary/10 rounded-md' 
                  : 'text-text-primary hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;