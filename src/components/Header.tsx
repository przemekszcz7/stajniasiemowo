import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { STABLE_INFO } from '../data';

interface HeaderProps {
  onContactClick: () => void;
  onBookClick: () => void;
}

export default function Header({ onContactClick, onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Title */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-forest-500 shadow-md transition-transform duration-300 group-hover:scale-105">
              <img 
                src={STABLE_INFO.logoUrl} 
                alt="Logo Stajnia Siemowo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-forest-800 tracking-tight leading-none font-serif">
                Stajnia Siemowo
              </h1>
              <p className="text-xs text-stone-500 mt-1 font-medium font-sans">
                Anna Stróżyńska
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('o-nas')}
              className="text-stone-700 hover:text-forest-600 font-medium transition-colors cursor-pointer"
            >
              O nas
            </button>
            <button 
              onClick={() => scrollToSection('oferta')}
              className="text-stone-700 hover:text-forest-600 font-medium transition-colors cursor-pointer"
            >
              Oferta
            </button>
            <button 
              onClick={() => scrollToSection('dlaczego-warto')}
              className="text-stone-700 hover:text-forest-600 font-medium transition-colors cursor-pointer"
            >
              Dlaczego warto
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-stone-700 hover:text-forest-600 font-medium transition-colors cursor-pointer"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-stone-700 hover:text-forest-600 font-medium transition-colors cursor-pointer"
            >
              Kontakt
            </button>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`mailto:${STABLE_INFO.email}`} 
              className="text-stone-600 hover:text-forest-600 flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{STABLE_INFO.email}</span>
            </a>
            <button 
              onClick={onBookClick}
              className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm hover:-translate-y-0.5 cursor-pointer"
            >
              Umów jazdę
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-forest-600 p-2 rounded-md focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-brand-50/50">
          <button
            onClick={() => scrollToSection('o-nas')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-forest-600 transition-all"
          >
            O nas
          </button>
          <button
            onClick={() => scrollToSection('oferta')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-forest-600 transition-all"
          >
            Oferta
          </button>
          <button
            onClick={() => scrollToSection('dlaczego-warto')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-forest-600 transition-all"
          >
            Dlaczego warto
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-forest-600 transition-all"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-forest-600 transition-all"
          >
            Kontakt
          </button>
          
          <div className="pt-4 border-t border-stone-200/60 flex flex-col space-y-3">
            <a 
              href={`mailto:${STABLE_INFO.email}`} 
              className="flex items-center space-x-2 px-3 py-2 text-stone-600 font-medium hover:text-forest-600"
            >
              <Mail className="w-5 h-5 text-forest-500" />
              <span>{STABLE_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-2 px-3 py-2 text-stone-600 font-medium">
              <MapPin className="w-5 h-5 text-forest-500" />
              <span className="text-sm">Gostyń gmina, 63-800</span>
            </div>
            <button
              onClick={onBookClick}
              className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-4 rounded-xl text-center shadow-md transition-colors cursor-pointer"
            >
              Umów jazdę
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
