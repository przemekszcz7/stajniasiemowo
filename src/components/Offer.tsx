import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShieldCheck, Trees, Sparkles, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { OFFERS, OfferItem } from '../data';

// Map icon string names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Trees: Trees,
  Sparkles: Sparkles,
};

interface OfferCardProps {
  key?: string;
  offer: OfferItem;
  index: number;
  onBookClick: (serviceKey: string) => void;
}

function OfferCard({ offer, index, onBookClick }: OfferCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[offer.iconName] || Compass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      
      {/* Card Header visual accent */}
      <div className="h-2 bg-gradient-to-r from-forest-400 via-brand-400 to-forest-600" />

      <div className="p-8 flex flex-col flex-grow">
        
        {/* Top bar with Icon and Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-forest-50 text-forest-600 rounded-2xl group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-8 h-8" />
          </div>
          {offer.badge && (
            <span className="text-xs uppercase tracking-wider font-bold text-forest-700 bg-forest-100/60 px-3 py-1 rounded-full">
              {offer.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-forest-800 transition-colors mb-3">
          {offer.title}
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
          {offer.description}
        </p>

        {/* Details Accordeon (Polish premium detail list) */}
        <div className="border-t border-stone-100 pt-4 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-stone-500 hover:text-forest-700 font-semibold text-xs uppercase tracking-wider py-1 cursor-pointer"
          >
            <span>{isExpanded ? 'Ukryj szczegóły' : 'Zobacz co oferujemy'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mt-4 pl-1">
                  {offer.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-stone-600 leading-normal">
                      <CheckCircle className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action for the individual card */}
        <button
          onClick={() => onBookClick(offer.id)}
          className="mt-6 w-full py-3 px-4 bg-stone-50 hover:bg-forest-600 hover:text-white text-stone-700 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
        >
          Umów zajęcia
        </button>

      </div>
    </motion.div>
  );
}

interface OfferProps {
  onBookClick: (serviceKey: string) => void;
}

export default function Offer({ onBookClick }: OfferProps) {
  return (
    <section id="oferta" className="py-24 bg-stone-50 relative">
      
      {/* Decorative foliage shadows background styling */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[radial-gradient(#2d4333_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-widest text-forest-600 font-bold bg-forest-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Co oferujemy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            Program dopasowany do Twoich potrzeb
          </h2>
          <div className="h-1 w-24 bg-brand-400 rounded-full mx-auto mt-4" />
          <p className="text-stone-500 mt-6 text-base sm:text-lg">
            Bez względu na to, czy stawiasz pierwsze kroki w siodle, czy pragniesz rozwijać swoje zaawansowane umiejętności, w Stajni Siemowo znajdziesz idealne zajęcia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OFFERS.map((offer, index) => (
            <OfferCard 
              key={offer.id} 
              offer={offer} 
              index={index} 
              onBookClick={onBookClick}
            />
          ))}
        </div>

        {/* Quick reminder box */}
        <div className="mt-16 bg-forest-800 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-brand-300 font-bold">Sobotnia rekreacja</span>
            <h3 className="text-2xl font-serif font-bold">Oprowadzanki na kucach po lesie</h3>
            <p className="text-stone-200 text-sm max-w-xl">
              Spraw radość najmłodszym! W każdą sobotę organizujemy spacery na spokojnych kucykach w asyście instruktora. Bezpieczny kontakt z koniem dla dzieci od najmłodszych lat.
            </p>
          </div>
          <button
            onClick={() => onBookClick('kucyki')}
            className="shrink-0 bg-brand-400 hover:bg-brand-500 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            Zarezerwuj sobotę
          </button>
        </div>

      </div>
    </section>
  );
}
