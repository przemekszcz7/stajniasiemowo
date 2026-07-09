import React from 'react';
import { motion } from 'motion/react';
import { Mail, Trees, Clock, MapPin } from 'lucide-react';
import { STABLE_INFO } from '../data';

export default function ContactForm() {
  return (
    <section id="kontakt" className="py-24 bg-stone-50 relative overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-100/30 rounded-full filter blur-3xl -z-10" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-forest-50/60 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16">
          <span className="text-sm uppercase tracking-widest text-forest-600 font-bold bg-forest-50 px-4 py-1.5 rounded-full inline-block">
            Skontaktuj się z nami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            Rozpocznij swoją jeździecką przygodę
          </h2>
          <div className="h-1 w-20 bg-brand-400 rounded-full mx-auto" />
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Masz pytania dotyczące zajęć, oprowadzanek dla dzieci lub wyjazdów terenowych? Napisz do nas bezpośrednio. Anna Stróżyńska oraz cały zespół chętnie odpowiedzą na każdą wiadomość!
          </p>
        </div>

        {/* Premium CTA Contact Panel - Centered and elegant */}
        <div className="bg-white rounded-3xl border border-stone-100 p-8 sm:p-12 shadow-xl max-w-2xl mx-auto space-y-8 relative overflow-hidden">
          
          {/* Subtle natural highlight background */}
          <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-forest-50 rounded-full -z-10" />
          
          <div className="flex flex-col items-center">
            <div className="p-4 bg-forest-50 text-forest-600 rounded-2xl mb-4">
              <Mail className="w-10 h-10 text-forest-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
              Napisz e-mail bezpośredni
            </h3>
            <p className="text-stone-500 text-sm max-w-md mb-6">
              Planowane jazdy umawiamy z wyprzedzeniem. Chętnie odpowiadamy na e-maile w przeciągu paru godzin!
            </p>
            
            {/* Elegant clickable email action */}
            <a 
              href={`mailto:${STABLE_INFO.email}`}
              className="inline-flex items-center space-x-3 bg-forest-700 hover:bg-forest-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>{STABLE_INFO.email}</span>
            </a>
          </div>

          <div className="border-t border-stone-100 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-stone-700">
            
            {/* Location Detail */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-50 rounded-xl shrink-0">
                <MapPin className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Lokalizacja</span>
                <span className="block font-medium text-sm text-stone-800 mt-1 leading-normal">
                  {STABLE_INFO.address}
                </span>
              </div>
            </div>

            {/* Hours Detail */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-50 rounded-xl shrink-0">
                <Clock className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Godziny kontaktu</span>
                <span className="block font-medium text-sm text-stone-800 mt-1 leading-normal">
                  {STABLE_INFO.workingHours}
                </span>
              </div>
            </div>

          </div>

          {/* Quick organic visual reminder card */}
          <div className="bg-forest-50/60 p-4 rounded-2xl border border-forest-100/60 text-xs text-forest-800 leading-relaxed flex items-center justify-center space-x-3 max-w-md mx-auto">
            <Trees className="w-5 h-5 text-forest-600 shrink-0" />
            <span className="font-medium text-center">
              Serdecznie zapraszamy do kontaktu i odwiedzenia nas w Siemowie!
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
