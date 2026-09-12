import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingButtons = () => {
  const { lang } = useLanguage();

  const isHindi = lang === 'hi';

  return (
    <aside
      aria-label="Floating Contact Options"
      className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end pointer-events-auto"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917999646783"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Tooltip Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
          {isHindi ? 'व्हाट्सएप चैट' : 'WhatsApp Chat'}
        </span>
      </a>

      {/* Direct Phone Call Button */}
      <a
        href="tel:+917999646783"
        aria-label="Direct Call"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />

        {/* Tooltip Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
          {isHindi ? 'सीधा कॉल करें' : 'Call Now'}
        </span>
      </a>

      {/* Email Button */}
      <a
        href="mailto:hariomsharma@gmail.com"
        aria-label="Send Email"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white shadow-xl shadow-red-900/30 border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />

        {/* Tooltip Badge */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:block">
          {isHindi ? 'ईमेल भेजें' : 'Send Email'}
        </span>
      </a>
    </aside>
  );
};

export default FloatingButtons;
