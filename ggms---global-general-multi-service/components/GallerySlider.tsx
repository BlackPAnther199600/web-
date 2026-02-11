
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isPaused, goToNext]);

  // Touch handlers for mobile swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();

    // Reset references
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative group overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[4/3] bg-slate-200 shadow-inner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0">
            <img 
              src={img} 
              alt={`Slide ${idx}`} 
              className="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on smaller screens for a cleaner look, accessible via swipe */}
      <button 
        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center z-10 shadow-lg"
        aria-label="Immagine precedente"
      >
        <ChevronLeft className="text-slate-900 w-5 h-5" />
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center z-10 shadow-lg"
        aria-label="Immagine successiva"
      >
        <ChevronRight className="text-slate-900 w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-500 rounded-full border border-white/20 ${
              idx === currentIndex 
                ? 'w-8 h-2.5 bg-white shadow-sm' 
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Vai alla slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
