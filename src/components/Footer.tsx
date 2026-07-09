import React from 'react';
import { Mail, MapPin, Heart, ChevronRight, Clock } from 'lucide-react';
import { STABLE_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
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
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Logo & Brand Column (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-400">
                <img 
                  src={STABLE_INFO.logoUrl} 
                  alt="Logo Stajnia Siemowo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif tracking-wide leading-none">
                  Stajnia Siemowo
                </h3>
                <p className="text-xs text-brand-300 mt-1">
                  Anna Stróżyńska
                </p>
              </div>
            </div>
            
            <p className="text-sm text-stone-400 leading-relaxed">
              Kameralny ośrodek jeździecki stworzony z miłości do koni i leśnej natury. Zapraszamy dzieci i dorosłych na jazdy rekreacyjne, wyjazdy terenowe oraz sobotnie oprowadzanki.
            </p>

            <div className="flex items-center space-x-2 text-xs text-stone-500">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Gostyń gmina, 63-800 Wielkopolska</span>
            </div>
          </div>

          {/* Quick Links Column (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Szybka nawigacja
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('o-nas')}
                  className="text-stone-400 hover:text-brand-300 flex items-center space-x-1.5 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>O nas</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('oferta')}
                  className="text-stone-400 hover:text-brand-300 flex items-center space-x-1.5 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Oferta i cennik</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('dlaczego-warto')}
                  className="text-stone-400 hover:text-brand-300 flex items-center space-x-1.5 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Dlaczego warto</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-stone-400 hover:text-brand-300 flex items-center space-x-1.5 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Galeria zdjęć</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="text-stone-400 hover:text-brand-300 flex items-center space-x-1.5 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                  <span>Kontakt i lokalizacja</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Schedule / Hours (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Godziny otwarcia
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-300">Dni powszednie</span>
                  <span className="text-xs">Ustalane indywidualnie (8:00 - 19:00)</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-300">Soboty (Oprowadzanki)</span>
                  <span className="text-xs">Zajęcia dla dzieci na kucach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact details directly (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Szybki kontakt
            </h4>
            <div className="space-y-3.5 text-sm text-stone-400">
              <a 
                href={`mailto:${STABLE_INFO.email}`}
                className="flex items-center space-x-2 text-stone-400 hover:text-brand-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                <span className="break-all">{STABLE_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer legal & credit section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            <p>© {currentYear} Stajnia Siemowo Anna Stróżyńska. Wszystkie prawa zastrzeżone.</p>
          </div>
          
          <div className="flex items-center space-x-1.5">
            <span>Stworzone z pasją do koni</span>
            <Heart className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
            <span>w Gostyniu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
