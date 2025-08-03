import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Waves } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Centered Rounded Navbar */}
      <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}>
        <nav className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-2xl border-gray-200' 
            : 'bg-white/80 backdrop-blur-md shadow-lg border-gray-100'
        } rounded-full border min-w-[900px] max-w-[1400px]`}>
          <div className="flex items-center px-6 py-4 space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Veni Enterprises Logo"
                className="h-12 w-12 object-contain"
                style={{ marginRight: '0.5rem' }}
              />
              <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap font-sans">Veni Enterprises</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-base py-2 whitespace-nowrap font-sans">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-base py-2 whitespace-nowrap font-sans">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-base py-2 whitespace-nowrap font-sans">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-base py-2 whitespace-nowrap font-sans">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-base py-2 whitespace-nowrap font-sans">
                Reviews
              </button>
            </div>

            {/* Contact Button */}
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-4 py-2 rounded-full font-semibold text-base hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center space-x-2 flex-shrink-0 whitespace-nowrap font-sans"
            >
              <span>Contact</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={12} />
              </div>
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 flex-shrink-0"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex flex-col p-4 space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  About
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  Reviews
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Full-width Header for Scrolled State */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Veni Enterprises Logo"
                  className="h-8 w-8 object-contain"
                />
                <h1 className="text-lg font-bold text-gray-800 font-sans">Veni Enterprises</h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Reviews
                </button>
              </div>

              {/* Contact Button */}
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact</span>
                <Phone size={14} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;