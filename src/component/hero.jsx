import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, Sparkles, ChevronLeft, ChevronRight, Sun, Award, Users, Star } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Hero = () => {
  const { t } = useLanguage();
  const slides = t?.heroSlides || [];
  
  // Create extended slides array by appending clone of 1st slide for seamless infinite forward loop
  const extendedSlides = slides.length > 1 ? [...slides, slides[0]] : slides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide forward every 5 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(slides.length - 1);
      }, 30);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle transition end for seamless infinite loop reset
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Re-enable transition after resetting to index 0
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentIndex]);

  if (!slides.length) return null;

  // Active badge index (0, 1, or 2)
  const activeBadgeIndex = currentIndex % slides.length;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100/80 via-orange-50/40 to-red-50/30 text-slate-800 py-10 lg:py-16 border-b-2 border-amber-300">
      
      {/* Background Decorative Glow Accents */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white border-2 border-amber-400 text-red-800 hover:bg-red-700 hover:text-white shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Right Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white border-2 border-amber-400 text-red-800 hover:bg-red-700 hover:text-white shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Full Width Infinite Carousel Track */}
      <div className="w-full overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex w-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full min-w-full shrink-0 flex-none px-0"
            >
              {/* Inner Centered Content Box */}
              <div className="max-w-7xl mx-auto px-6 sm:px-14 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Slide Content */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm border border-amber-500/40">
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span>{slide.tag}</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950 leading-tight">
                      {slide.heading.includes('in Ujjain') ? (
                        <>
                          {slide.heading.replace('in Ujjain', '')}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-700 to-red-800 font-serif">
                            in Ujjain
                          </span>
                        </>
                      ) : (
                        slide.heading
                      )}
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl font-bold text-amber-900 font-serif flex items-center gap-2">
                      <Sun className="w-5 h-5 text-amber-600 inline shrink-0" />
                      <span>{slide.subHeading}</span>
                    </p>

                    {/* Description */}
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl">
                      {slide.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href="tel:+917999646783"
                        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 hover:from-red-600 hover:to-amber-600 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        <Phone className="w-4.5 h-4.5" />
                        <span>कॉल करें: +91-7999646783</span>
                      </a>

                      <Link
                        to="/kundli"
                        className="px-6 py-3.5 rounded-xl bg-white border-2 border-amber-400 hover:bg-amber-50 text-slate-900 font-bold text-base shadow-xs transition-colors flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-red-700" />
                        <span>{slide.ctaText}</span>
                      </Link>
                    </div>

                    {/* Trust Metrics */}
                    <div className="pt-5 border-t border-amber-200/80 grid grid-cols-3 gap-3">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold font-serif text-red-800 flex items-center gap-1">
                          <Award className="w-5 h-5 text-amber-600" />
                          25+ वर्ष
                        </div>
                        <div className="text-xs text-slate-600 font-medium">अनुभव</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold font-serif text-red-800 flex items-center gap-1">
                          <Users className="w-5 h-5 text-amber-600" />
                          50,000+
                        </div>
                        <div className="text-xs text-slate-600 font-medium">संतुष्ट यजमान</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold font-serif text-red-800 flex items-center gap-1">
                          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                          4.9★
                        </div>
                        <div className="text-xs text-slate-600 font-medium">उत्कृष्ट रेटिंग</div>
                      </div>
                    </div>

                  </div>

                  {/* Right Profile Card */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 via-red-500 to-amber-600 blur-md opacity-40"></div>
                      
                      <div className="relative bg-white border-2 border-amber-300 rounded-3xl p-6 text-center space-y-4 shadow-xl">
                        <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-400 to-red-600 shadow-md">
                          <img
                            src={logoImg}
                            alt="Jyotishacharya Pt. Hariom Sharma"
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                          />
                        </div>
                        
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                            पं. हरिओम शर्मा
                          </h2>
                          <p className="text-xs sm:text-sm text-red-800 font-bold mt-0.5">
                            ज्योतिषाचार्य एवं पूजन विशेषज्ञ (उज्जैन)
                          </p>
                        </div>

                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 leading-relaxed font-semibold">
                          "उज्जैन महाकालेश्वर तीर्थ में कालसर्पदोष व मंगल शांति हेतु संपर्क करें।"
                        </div>

                        <a
                          href="https://wa.me/917999646783"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm block shadow flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4.5 h-4.5" />
                          <span>WhatsApp पर तुरंत बात करें</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots/Badges */}
        <div className="mt-8 pt-4 border-t border-amber-200/80 flex flex-wrap justify-center items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id || idx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                idx === activeBadgeIndex
                  ? 'bg-red-800 text-white shadow-md scale-105 border border-red-900'
                  : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {s.badge}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Hero;
