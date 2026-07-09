import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Compass, Trees } from 'lucide-react';
import { STABLE_INFO } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onBookClick, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={STABLE_INFO.heroBgUrl} 
          alt="Konie na wybiegu w Stajni Siemowo" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/65 to-transparent md:to-stone-900/20" />
        {/* Natural overlay texture */}
        <div className="absolute inset-0 bg-forest-950/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-white w-full">
        <div className="max-w-2xl md:max-w-3xl">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 text-brand-100"
          >
            <span className="w-2 h-2 rounded-full bg-brand-300 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold font-sans">
              Gostyń Wielkopolska • Stajnia Siemowo
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Pasja do koni <br />
            <span className="text-brand-300 italic">zaczyna się tutaj</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed mb-10 max-w-2xl"
          >
            {STABLE_INFO.description}
          </motion.p>

          {/* Dynamic details strip for social proof/trust */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 border-l-2 border-brand-300/60 pl-6 text-stone-300 text-sm"
          >
            <div>
              <span className="block font-bold text-white text-base">Indywidualne lekcje</span>
              <span className="text-xs text-stone-300">Dla dzieci i dorosłych</span>
            </div>
            <div>
              <span className="block font-bold text-white text-base">Sobotnie kucyki</span>
              <span className="text-xs text-stone-300">Oprowadzanki po lesie</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-bold text-white text-base">Malownicze lasy</span>
              <span className="text-xs text-stone-300">Tereny i jezioro w pobliżu</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={onBookClick}
              className="bg-brand-400 hover:bg-brand-500 text-stone-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Umów jazdę</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={onContactClick}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 border border-white/20 hover:border-white/40 transition-all duration-300 text-base cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Skontaktuj się z nami</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-50 to-transparent z-10" />
    </section>
  );
}
