import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tight text-stone-900">
          HeatPump<span className="text-emerald-600">Pro</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Why Heat Pumps?</a>
          <a href="#" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Our Process</a>
          <a href="#" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Case Studies</a>
          <a href="#" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">About Us</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:08001234567" className="flex items-center gap-2 text-stone-900 font-semibold hover:text-emerald-600 transition-colors">
            <Phone className="w-4 h-4" />
            0800 123 4567
          </a>
          <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md">
            Get a Quote
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-lg p-6 md:hidden flex flex-col gap-4 animate-fade-in-down">
          <a href="#" className="text-lg font-medium text-stone-900 py-2 border-b border-stone-50">Why Heat Pumps?</a>
          <a href="#" className="text-lg font-medium text-stone-900 py-2 border-b border-stone-50">Our Process</a>
          <a href="#" className="text-lg font-medium text-stone-900 py-2 border-b border-stone-50">Case Studies</a>
          <a href="#" className="text-lg font-medium text-stone-900 py-2 border-b border-stone-50">About Us</a>
          <button className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium mt-4">
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};
