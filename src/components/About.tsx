import React from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { STABLE_INFO } from '../data';

export default function About() {
  return (
    <section id="o-nas" className="py-20 bg-brand-50 relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-forest-100/50 rounded-full filter blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-brand-100/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual column with Logo and natural styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer organic frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-forest-100 rounded-3xl -rotate-2 transform scale-105 opacity-80" />
              
              {/* Main content box */}
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                
                {/* Logo with natural badge */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-forest-500 shadow-lg">
                    <img 
                      src={STABLE_INFO.logoUrl} 
                      alt="Stajnia Siemowo logo" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
                      Stajnia Siemowo
                    </h3>
                    <p className="text-sm font-medium text-stone-500">
                      Anna Stróżyńska
                    </p>
                  </div>
                  
                  <div className="w-full border-t border-stone-100 pt-4 flex justify-around text-stone-600 text-xs">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-stone-800">10+</span>
                      <span>Koni i kuców</span>
                    </div>
                    <div className="h-8 w-px bg-stone-200" />
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-stone-800">Gostyń</span>
                      <span>Lokalizacja</span>
                    </div>
                    <div className="h-8 w-px bg-stone-200" />
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-stone-800">Soboty</span>
                      <span>Oprowadzanki</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Little decorative tag */}
              <div className="absolute -bottom-6 -right-4 bg-forest-700 text-brand-100 py-3 px-5 rounded-2xl shadow-lg hidden sm:flex items-center space-x-2 text-sm">
                <Heart className="w-5 h-5 text-brand-300 fill-brand-300 animate-pulse" />
                <span className="font-semibold">Miłość do natury & koni</span>
              </div>

            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-widest text-forest-600 font-bold block">
                Poznaj nasze wyjątkowe miejsce
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
                Kameralna stajnia z sercem i tradycją
              </h2>
              <div className="h-1 w-20 bg-brand-400 rounded-full" />
            </div>

            {/* Structured main text with custom styling */}
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p className="font-medium text-stone-900">
                Nauka jazdy konnej dla dzieci i dorosłych. Oferujemy jazdy dla początkujących oraz zaawansowanych.
              </p>
              <p>
                Dla bardziej doświadczonych jeźdźców organizujemy niezapomniane <strong className="text-forest-700">wyjazdy w teren</strong> — w bezpośrednim sąsiedztwie pięknego, gęstego lasu i malowniczego jeziora. To idealny sposób na relaks i poczucie prawdziwej wolności.
              </p>
              <p>
                W każdą sobotę serdecznie zapraszamy najmłodszych miłośników zwierząt na <strong className="text-forest-700">leśne oprowadzanki na kucach</strong>. To wspaniała okazja do nawiązania pierwszego, bezpiecznego kontaktu z końmi i rozbudzenia nowej pasji u Twojego dziecka.
              </p>
            </div>

            {/* Quick feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <ShieldCheck className="w-6 h-6 text-forest-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Bezpieczne otoczenie</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Spokojne, doskonale ułożone konie dostosowane do nauki.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <Compass className="w-6 h-6 text-forest-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Dziewicza natura</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Trasy wokół Gostynia, czyste powietrze, las i woda.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
