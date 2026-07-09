import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import { STABLE_INFO } from '../data';

export default function Map() {
  return (
    <section className="py-20 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Info Box (Col 5) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/50 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-forest-600 font-bold bg-forest-50 px-3 py-1 rounded-full inline-block mb-3">
                  Jak dojechać
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Nasza Lokalizacja
                </h3>
                <div className="h-1 w-16 bg-brand-400 rounded-full mt-3" />
              </div>

              <div className="space-y-4 text-stone-600">
                
                {/* Address details */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-forest-50 text-forest-600 rounded-xl mt-0.5 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Adres stajni</h4>
                    <p className="text-sm text-stone-600 mt-1">
                      {STABLE_INFO.address}
                    </p>
                    <span className="text-xs text-forest-600 font-semibold block mt-0.5">
                      Gostyń, Wielkopolska
                    </span>
                  </div>
                </div>

                {/* Email details */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-forest-50 text-forest-600 rounded-xl mt-0.5 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Napisz do nas</h4>
                    <a 
                      href={`mailto:${STABLE_INFO.email}`}
                      className="text-sm text-forest-600 hover:text-forest-700 hover:underline font-semibold block mt-1"
                    >
                      {STABLE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-forest-50 text-forest-600 rounded-xl mt-0.5 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Godziny otwarcia</h4>
                    <p className="text-sm text-stone-600 mt-1">
                      {STABLE_INFO.workingHours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Hint Box */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-start space-x-3 bg-brand-50/40 p-4 rounded-2xl">
              <ShieldAlert className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
              <p className="text-xs text-stone-500 leading-normal">
                Przed planowanym przyjazdem uprzejmie prosimy o <strong className="text-stone-800">kontakt mailowy lub telefoniczny</strong> w celu umówienia dokładnej godziny jazdy.
              </p>
            </div>

          </div>

          {/* Interactive Google Map iframe (Col 7) */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden shadow-xl border border-stone-200/50">
            <iframe 
              src="https://maps.google.com/maps?q=Siemowo,%20Gosty%C5%84,%20Poland&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Stajnia Siemowo"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
