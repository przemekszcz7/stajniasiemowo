import React from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Trees, Compass, Users, ArrowUpRight } from 'lucide-react';
import { WHY_US } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  "indiv": Heart,
  "safe": Shield,
  "calm": Compass,
  "nature": Trees,
  "all-ages": Users
};

export default function WhyUs() {
  return (
    <section id="dlaczego-warto" className="py-24 bg-brand-50/50 relative overflow-hidden">
      
      {/* Decorative background forest pattern */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-100/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-widest text-forest-600 font-bold bg-forest-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Dlaczego warto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            Nasz priorytet to Twoja radość i bezpieczeństwo
          </h2>
          <div className="h-1 w-24 bg-brand-400 rounded-full mx-auto mt-4" />
          <p className="text-stone-500 mt-6 text-base">
            Oto co wyróżnia Stajnię Siemowo i sprawia, że nasi jeźdźcy z uśmiechem na twarzy wracają do nas w każdy weekend.
          </p>
        </div>

        {/* Bento grid style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {WHY_US.map((item, index) => {
            const Icon = iconMap[item.id] || Heart;
            
            // Give specific bento sizes/styling to different elements
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-stone-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Decorative background circle */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-forest-50 rounded-full group-hover:scale-125 transition-transform duration-500 -z-0" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="p-3 bg-forest-50 text-forest-600 rounded-2xl w-fit group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-serif text-stone-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-1 text-xs text-forest-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Komfort i pasja</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

              </motion.div>
            );
          })}

          {/* Quick quote / social-proof banner as a filler card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-forest-700 to-forest-900 text-brand-100 rounded-3xl p-8 shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-300 font-bold block">
                Z miłości do koni
              </span>
              <p className="text-lg font-serif italic text-white leading-relaxed">
                "Konie uczą nas pokory, cierpliwości i uważności. W Siemowie staramy się budować prawdziwą więź między człowiekiem a koniem."
              </p>
            </div>
            
            <div className="pt-6 border-t border-forest-600 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-300 text-stone-950 flex items-center justify-center font-bold font-serif text-sm">
                AS
              </div>
              <div>
                <span className="block text-sm font-bold text-white">Anna Stróżyńska</span>
                <span className="block text-xs text-brand-300">Właścicielka & Instruktor</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
