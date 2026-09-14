import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingButtons = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  return (
    <aside
      aria-label="Floating Contact Options"
      className="fixed bottom-4 right-3 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3.5 items-end pointer-events-auto"
    >
      {/* WhatsApp Button with Live Glowing Radar Pulse */}
      <div className="relative group animate-float-slow">
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring pointer-events-none"></div>
        <a
          href={`https://api.whatsapp.com/send?phone=918435856067&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से पूजन हेतु संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I would like to consult Pt. Hariom Sharma Ji for Puja.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-600/40 border-2 border-white hover:scale-115 active:scale-95 transition-all duration-300 group-hover:rotate-12 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
          
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
          href="tel:+918435856067"
          aria-label="Direct Phone Call"
          className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-orange-400 text-slate-950 shadow-xl shadow-amber-500/50 border-2 border-white hover:scale-115 active:scale-95 transition-all duration-300 group-hover:-rotate-12 cursor-pointer"
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
          className="relative flex items-center justify-center w-9.5 h-9.5 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-red-900 via-red-800 to-red-700 hover:from-red-800 hover:to-red-600 text-white shadow-xl shadow-red-950/40 border-2 border-white hover:scale-115 active:scale-95 transition-all duration-300 group-hover:scale-110 cursor-pointer"
        >
          <Mail className="w-4 h-4 sm:w-5.5 sm:h-5.5" />

          {/* Floating Tooltip Label */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-amber-500/30 pointer-events-none hidden sm:block backdrop-blur-md translate-x-2 group-hover:translate-x-0">
            ✉️ {isHindi ? 'ईमेल द्वारा संपर्क करें' : 'Send Email Inquiry'}
          </span>
        </a>
      </div>
    </aside>
  );
};

export default FloatingButtons;
