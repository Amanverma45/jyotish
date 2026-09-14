import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, Calendar, ArrowRight, Sparkles, Clock, Flame, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ganeshPoster from '../assets/ganesh_chaturthi_poster.jpg';

const SuvicharBanner = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const fest = t?.festivalsSection;
  const feat = fest?.featured;

  const [showPosterModal, setShowPosterModal] = React.useState(false);

  const title = t?.suvichar?.title || (isHindi ? "सुविचार" : "Thought of Wisdom");
  const quote = t?.suvichar?.quote || "";

  return (
    <div className="space-y-16">
      
      {/* Suvichar Burgundy Cosmic Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-amber-100 py-14 px-4 sm:px-6 lg:px-8 border-y border-amber-500/40 shadow-xl">
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/60 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-4 h-4 text-amber-400" />
            <span>{title}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-200">
            {title}
          </h2>

          {quote && (
            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed italic max-w-4xl mx-auto font-serif px-2">
              "{quote}"
            </p>
          )}

        </div>
      </section>

      {/* CURRENT FESTIVAL HIGHLIGHT SECTION ON HOME PAGE */}
      {fest && feat && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{fest.badge || (isHindi ? 'वैदिक पंचांग एवं व्रत-त्योहार' : 'Vedic Festivals')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-wide">
              {fest.heading || (isHindi ? 'आगामी प्रमुख व्रत, त्योहार एवं शुभ मुहूर्त' : 'Festivals & Shubh Muhurat')}
            </h2>
            <p className="text-slate-600 text-sm">
              {fest.subHeading}
            </p>
          </div>

          {/* Featured Festival Card on Home Page */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950 text-white border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Poster Image */}
              <div className="lg:col-span-5 relative">
                <div 
                  className="relative rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-slate-950/70 shadow-lg cursor-pointer flex items-center justify-center group"
                  onClick={() => setShowPosterModal(true)}
                  title={isHindi ? "पोस्टर बड़ा देखने के लिए क्लिक करें" : "Click to view full poster"}
                >
                  <img
                    src={ganeshPoster}
                    alt={feat.title}
                    className="w-full h-auto max-h-[460px] object-contain group-hover:scale-102 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-2 left-2 px-3 py-1 bg-red-800/90 border border-amber-400 text-amber-200 text-xs font-bold rounded-lg uppercase shadow-md z-10">
                    🔥 {isHindi ? 'वर्तमान महात्योहार' : 'Featured Festival'}
                  </div>

                  <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-amber-400/90 text-slate-950 text-[11px] font-extrabold rounded-lg shadow flex items-center gap-1 z-10 backdrop-blur-xs">
                    <span>🔍 {isHindi ? 'बड़ा देखें' : 'Enlarge'}</span>
                  </div>
                </div>
              </div>

              {/* Details & CTA */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-amber-400 text-xs font-bold block">
                  📅 {feat.date}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-amber-100 leading-snug">
                  {feat.title}
                </h3>

                <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{isHindi ? 'स्थापना एवं पूजा का शुभ मुहूर्त (उज्जैन):' : 'Sthapana & Puja Muhurat:'}</span>
                  </div>
                  <p className="font-extrabold text-amber-100 pl-5">{feat.muhurat}</p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {feat.desc}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/festivals"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-1.5"
                  >
                    <span>{isHindi ? 'संपूर्ण त्योहार विवरण व पंचांग देखें' : 'View Full Festival Details'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से गणेश चतुर्थी 2026 पूजन अनुष्ठान हेतु संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! Consulting Pt. Hariom Sharma Ji for Ganesh Chaturthi 2026 Puja.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5"
                  >
                    <span>{isHindi ? 'पूजा बुक करें' : 'Book Puja'}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* FULL POSTER PREVIEW MODAL */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowPosterModal(false)}>
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white border-2 border-amber-400 rounded-3xl p-4 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-amber-200 pb-3">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                {isHindi ? 'गणेश चतुर्थी 2026 पंचांग एवं पूजा पोस्टर' : 'Ganesh Chaturthi 2026 Panchang Poster'}
              </h3>
              <button
                onClick={() => setShowPosterModal(false)}
                className="px-3 py-1 bg-red-800 text-white text-xs font-bold rounded-lg hover:bg-red-900 cursor-pointer"
              >
                {isHindi ? 'बंद करें (Close)' : 'Close'}
              </button>
            </div>
            <img
              src={ganeshPoster}
              alt="गणेश चतुर्थी 2026 पंचांग पोस्टर"
              className="w-full h-auto rounded-xl border border-amber-300 shadow-lg"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default SuvicharBanner;
