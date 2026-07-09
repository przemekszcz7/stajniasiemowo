import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon, Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Default count of visible images (e.g. 6)
  const defaultVisibleCount = 6;
  const visibleImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, defaultVisibleCount);

  // Lightbox handlers
  const openLightbox = (imgUrl: string) => {
    const originalIndex = GALLERY_IMAGES.findIndex(img => img.url === imgUrl);
    if (originalIndex !== -1) {
      setSelectedImageIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => {
        if (prev === null) return null;
        return prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1;
      });
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => {
        if (prev === null) return null;
        return prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-widest text-forest-600 font-bold bg-forest-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Nasza Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            Uwiecznione chwile w Siemowie
          </h2>
          <div className="h-1 w-24 bg-brand-400 rounded-full mx-auto mt-4" />
          <p className="text-stone-500 mt-6 text-base">
            Zobacz nasze konie, malownicze leśne ścieżki i uśmiechniętych jeźdźców podczas codziennych treningów i wyjazdów.
          </p>
        </div>

        {/* Image Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="relative group aspect-[4/3] rounded-3xl overflow-hidden shadow-md cursor-pointer bg-stone-100 border border-stone-100/50"
                onClick={() => openLightbox(img.url)}
              >
                {/* Image */}
                <img 
                  src={img.url} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Hover overlay with only search/eye zoom icon, no text captions */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="p-3.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 scale-90 group-hover:scale-100 transition-all duration-300">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {GALLERY_IMAGES.length > defaultVisibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 bg-forest-50 hover:bg-forest-100 border border-forest-200 text-forest-700 font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide cursor-pointer shadow-sm hover:shadow-md"
            >
              <ImageIcon className="w-4 h-4 text-forest-600" />
              <span>{showAll ? 'Pokaż mniej zdjęć' : 'Więcej zdjęć'}</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal (Full-Screen) */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50">
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest text-brand-300 uppercase">
                  Galeria • Stajnia Siemowo
                </span>
                <span className="text-sm font-semibold text-stone-300 mt-0.5">
                  Zdjęcie {selectedImageIndex + 1} z {GALLERY_IMAGES.length}
                </span>
              </div>
              
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors cursor-pointer"
                aria-label="Zamknij"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Active Image and Controls */}
            <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
              
              {/* Left Arrow */}
              <button
                onClick={showPrevImage}
                className="absolute left-2 sm:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer border border-white/5"
                aria-label="Poprzednie"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image container with nice loading and animation, no captions */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col items-center max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_IMAGES[selectedImageIndex].url}
                  alt={GALLERY_IMAGES[selectedImageIndex].alt}
                  className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={showNextImage}
                className="absolute right-2 sm:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer border border-white/5"
                aria-label="Następne"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Thumbnail Navigation (Desktop) */}
            <div className="hidden md:flex items-center justify-center space-x-2 mt-8 z-50 max-w-4xl overflow-x-auto py-2 px-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.url}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(idx);
                  }}
                  className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 transition-all duration-300 border-2 ${
                    selectedImageIndex === idx 
                      ? 'border-brand-400 scale-105 shadow-md' 
                      : 'border-transparent opacity-55 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
