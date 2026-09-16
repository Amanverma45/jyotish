import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Sparkles, ChevronLeft, ChevronRight, Sun, Award, Users, Star } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import sharmajiImg from '../assets/sharmaji.png';
import hariomsharmaji1Img from '../assets/hariomsharmaji1.png';
import hariomsharmaji2Img from '../assets/hariomsharmaji2.png';
import hariomSharma3Img from '../assets/hariomSharma3.png';
import hariomsharma4Img from '../assets/hariomsharma4.png';

const slidePhotos = [hariomsharmaji1Img, hariomsharmaji2Img, hariomSharma3Img, hariomsharma4Img];

const Hero = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const slides = t?.heroSlides || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Safely cycle through slides every 5 seconds without relying on DOM transition events
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Ensure currentIndex is always valid even if slides length changes
  const safeIndex = slides.length > 0 ? (currentIndex % slides.length + slides.length) % slides.length : 0;

  const nextSlide = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100/80 via-orange-50/40 to-red-50/30 text-slate-800 py-10 lg:py-16 border-b-2 border-amber-300 min-h-[480px]">

      {/* Background Decorative Glow Accents */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Navigation Arrow Button (Desktop Only) */}
      {slides.length > 1 && (
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white border-2 border-amber-400 text-red-800 hover:bg-red-700 hover:text-white shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}

      {/* Right Navigation Arrow Button (Desktop Only) */}
      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white border-2 border-amber-400 text-red-800 hover:bg-red-700 hover:text-white shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative">
        {slides.map((slide, idx) => {
          const isActive = idx === safeIndex;

          return (
            <div
              key={slide.id || idx}
              className={`transition-all duration-700 ease-in-out ${isActive
                ? 'opacity-100 translate-x-0 relative z-10 pointer-events-auto'
                : 'opacity-0 translate-x-4 absolute inset-0 z-0 pointer-events-none hidden'
                }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

                {/* Left Slide Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">

                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm border border-amber-500/40">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse shrink-0" />
                    <span className="truncate">{slide.tag}</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950 leading-tight break-words">
                    {slide.heading.includes('in Ujjain') ? (
                      <>
                        {slide.heading.replace('in Ujjain', '')}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-700 to-red-800 font-serif block sm:inline">
                          in Ujjain
                        </span>
                      </>
                    ) : (
                      slide.heading
                    )}
                  </h1>

                  {/* Subheading */}
                  <p className="text-base sm:text-xl font-bold text-amber-900 font-serif flex items-center gap-2 leading-snug">
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 inline shrink-0" />
                    <span>{slide.subHeading}</span>
                  </p>

                  {/* Description */}
                  <p className="text-slate-700 text-sm sm:text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="tel:+919826525736"
                      className="px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 hover:from-red-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      <span>{isHindi ? "अभी कॉल करें: +91-9826525736" : "Call Now: +91-9826525736"}</span>
                    </a>

                    <Link
                      to="/kundli"
                      className="px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white border-2 border-amber-400 hover:bg-amber-50 text-slate-900 font-bold text-sm sm:text-base shadow-xs transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <Sparkles className="w-4 h-4 text-red-700" />
                      <span>{slide.ctaText}</span>
                    </Link>
                  </div>

                  {/* Trust Metrics */}
                  <div className="pt-4 border-t border-amber-200/80 grid grid-cols-3 gap-1.5 sm:gap-3 text-center sm:text-left">
                    <div>
                      <div className="text-base sm:text-2xl font-bold font-serif text-red-800 flex items-center justify-center sm:justify-start gap-1">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                        <span>{isHindi ? '25+ वर्ष' : '25+ Yrs'}</span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                        {isHindi ? 'अनुभव' : 'Experience'}
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-2xl font-bold font-serif text-red-800 flex items-center justify-center sm:justify-start gap-1">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                        <span>50,000+</span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                        {isHindi ? 'संतुष्ट यजमान' : 'Happy Devotees'}
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-2xl font-bold font-serif text-red-800 flex items-center justify-center sm:justify-start gap-1">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 shrink-0" />
                        <span>4.9★</span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                        {isHindi ? 'उत्कृष्ट रेटिंग' : 'Top Rating'}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Profile Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 via-red-500 to-amber-600 blur-md opacity-40"></div>

                    <div className="relative bg-white border-2 border-amber-300 rounded-3xl p-6 text-center space-y-4 shadow-xl">
                      <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-400 to-red-600 shadow-md overflow-hidden">
                        <img
                          src={slidePhotos[idx % slidePhotos.length]}
                          alt="Jyotishacharya Pt. Hariom Sharma"
                          className="w-full h-full rounded-full object-cover object-top border-2 border-white"
                        />
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                          {isHindi ? 'पं. हरिओम शर्मा' : 'Pt. Hariom Sharma'}
                        </h2>
                        <p className="text-xs sm:text-sm text-red-800 font-bold mt-0.5">
                          {isHindi ? 'ज्योतिषाचार्य एवं पूजन विशेषज्ञ (उज्जैन)' : 'Jyotishacharya & Puja Expert (Ujjain)'}
                        </p>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 leading-relaxed font-semibold">
                        {isHindi
                          ? '"उज्जैन महाकालेश्वर तीर्थ में कालसर्पदोष व मंगल शांति हेतु संपर्क करें।"'
                          : '"Contact for authentic Kaal Sarp Dosh & Mangal Shanti Pujas in Ujjain Mahakal Dham."'}
                      </div>

                      <a
                        href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से उज्जैन महाकाल पूजन हेतु परामर्श चाहिए।" : "Jai Shree Mahakal! I want to consult Pt. Hariom Sharma Ji for Ujjain Puja.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-current" />
                        <span>{isHindi ? 'WhatsApp पर तुरंत बात करें' : 'Chat on WhatsApp'}</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* Bottom Pagination Dots/Badges */}
        <div className="mt-8 pt-4 border-t border-amber-200/80 flex flex-wrap justify-center items-center gap-2 relative z-20">
          {slides.map((s, idx) => (
            <button
              key={s.id || idx}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${idx === safeIndex
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
