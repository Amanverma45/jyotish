import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingButtons = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Contact Buttons (Shifted Upwards to Make Room for Back To Top Button) */}
      <aside
        aria-label="Floating Contact Options"
        className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3.5 items-end pointer-events-auto"
      >
        {/* WhatsApp Button with Live Glowing Radar Pulse */}
        <div className="relative group animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring pointer-events-none"></div>
          <a
            href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I would like to consult Pt. Hariom Sharma Ji for Puja.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-600/40 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 group-hover:rotate-12 cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
            
            {/* Floating Tooltip Label */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-amber-500/30 pointer-events-none hidden sm:block backdrop-blur-md translate-x-2 group-hover:translate-x-0">
              💬 {isHindi ? 'व्हाट्सएप पर तुरंत चैट करें' : 'WhatsApp Instant Chat'}
            </span>
          </a>
        </div>

        {/* Direct Phone Call Button with Live Glowing Radar Pulse */}
        <div className="relative group animate-float-delayed">
          <div className="absolute inset-0 rounded-full bg-amber-500 animate-pulse-ring pointer-events-none"></div>
          <a
            href="tel:+919826525736"
            aria-label="Direct Phone Call"
            className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-orange-400 text-slate-950 shadow-xl shadow-amber-500/50 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 group-hover:-rotate-12 cursor-pointer"
          >
            <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-slate-950 font-bold" />

            {/* Floating Tooltip Label */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-amber-500/30 pointer-events-none hidden sm:block backdrop-blur-md translate-x-2 group-hover:translate-x-0">
              📞 {isHindi ? 'सीधा पंडित जी से बात करें' : 'Call Pt. Hariom Sharma'}
            </span>
          </a>
        </div>

        {/* Email Button */}
        <div className="relative group animate-float-slow">
          <a
            href="mailto:hariomsharma@gmail.com"
            aria-label="Send Email"
            className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-900 via-red-800 to-red-700 hover:from-red-800 hover:to-red-600 text-white shadow-xl shadow-red-950/40 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />

            {/* Floating Tooltip Label */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-amber-500/30 pointer-events-none hidden sm:block backdrop-blur-md translate-x-2 group-hover:translate-x-0">
              ✉️ {isHindi ? 'ईमेल द्वारा संपर्क करें' : 'Send Email Inquiry'}
            </span>
          </a>
        </div>
      </aside>

      {/* Animated Floating Back to Top Button */}
      {showTopBtn && (
        <div className="fixed bottom-4 right-3 sm:right-6 z-50 group animate-fade-in">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-950 via-slate-900 to-red-900 hover:from-red-900 hover:to-amber-900 text-amber-300 border-2 border-amber-400/80 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce" />

            {/* Floating Tooltip Label */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-amber-500/30 pointer-events-none hidden sm:block backdrop-blur-md translate-x-2 group-hover:translate-x-0">
              ⬆️ {isHindi ? 'ऊपर जाएं (Back to Top)' : 'Back to Top'}
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
