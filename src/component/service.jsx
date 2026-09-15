import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, X, CheckCircle2, MessageCircle, MapPin, Clock } from 'lucide-react';

// Crisp 7 Puja Images
import kaalsarpImg from '../assets/puja_kaalsarp.jpg';
import mangalImg from '../assets/puja_mangal.jpg';
import pitruImg from '../assets/puja_pitru.jpg';
import navgrahImg from '../assets/puja_navgrah.jpg';
import vastuImg from '../assets/puja_vastu.jpg';
import rudrabhishekImg from '../assets/puja_rudrabhishek.jpg';
import kumbhImg from '../assets/puja_kumbh.jpg';

const Service = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [selectedPujaId, setSelectedPujaId] = useState(null);

  const pujaPhotoMap = {
    kaalsarp: kaalsarpImg,
    mangal: mangalImg,
    pitru: pitruImg,
    navgrah: navgrahImg,
    vastu: vastuImg,
    rudrabhishek: rudrabhishekImg,
    kumbh: kumbhImg
  };

  const pujas = t.services?.pujas || [];
  const selectedPuja = pujas.find((p) => p.id === selectedPujaId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPujaId(null);
    };
    if (selectedPujaId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPujaId]);

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white text-slate-800 py-12 sm:py-16 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-bold shadow-xs border border-amber-500/40 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950">
            {t.services.heading}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {t.services.subHeading}
          </p>
        </div>

        {/* 7 Pujas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujas.map((srv) => {
            const photo = pujaPhotoMap[srv.photoKey || srv.id] || kaalsarpImg;

            return (
              <div
                key={srv.id}
                className="vedic-card rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-md hover:shadow-2xl bg-white border-2 border-amber-200/80 space-y-5"
              >
                <div className="space-y-4">
                  
                  {/* High Quality Clear Puja Image */}
                  <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-amber-300 shadow-sm group cursor-pointer" onClick={() => setSelectedPujaId(srv.id)}>
                    <img
                      src={photo}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                    
                    <span className="absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-red-950/90 text-amber-300 border border-amber-400/60 backdrop-blur-xs">
                      {srv.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedPujaId(srv.id)}
                    className="text-xl sm:text-2xl font-bold font-serif text-slate-950 text-center hover:text-red-800 transition-colors cursor-pointer"
                  >
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed text-center font-normal line-clamp-3">
                    {srv.desc}
                  </p>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-amber-100">
                  <button
                    type="button"
                    onClick={() => setSelectedPujaId(srv.id)}
                    className="py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-sm text-center flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    <span>{t?.services?.readMore || (isHindi ? "विस्तार से पढ़ें..." : "Read More...")}</span>
                  </button>
                  <a
                    href="tel:+919826525736"
                    className="py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold text-xs sm:text-sm shadow-sm text-center flex items-center justify-center gap-1 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t?.services?.callNow || (isHindi ? "अभी कॉल करें" : "Call Now")}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Blurred Backdrop Popup Modal */}
      {selectedPuja && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedPujaId(null)}
        >
          <div
            className="relative bg-white border-2 border-amber-400 rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto cursor-default text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close / Cross Button */}
            <button
              onClick={() => setSelectedPujaId(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-950 bg-amber-100 hover:bg-amber-200 p-2.5 rounded-full transition-colors cursor-pointer z-20 shadow-xs border border-amber-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <span className="inline-block px-3 py-1 rounded-full bg-red-950 text-amber-300 text-xs font-bold uppercase tracking-wide border border-amber-500/40">
                {selectedPuja.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-950">
                {selectedPuja.title}
              </h3>
            </div>

            {/* Puja Banner Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-amber-300 shadow-md">
              <img
                src={pujaPhotoMap[selectedPuja.photoKey || selectedPuja.id] || kaalsarpImg}
                alt={selectedPuja.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-semibold flex flex-wrap gap-2">
                <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedPuja.location || (isHindi ? "उज्जैन महाकाल धाम / सिद्ध मंदिर" : "Ujjain Sacred Temple")}</span>
                </span>
                <span className="bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-full text-amber-300 border border-amber-400/40 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedPuja.duration || (isHindi ? "अवधि: 2 - 3 घंटे" : "Duration: 2-3 Hours")}</span>
                </span>
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900 bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/80">
                {selectedPuja.desc}
              </p>

              {selectedPuja.fullDesc && (
                <p className="text-slate-700 font-normal">
                  {selectedPuja.fullDesc}
                </p>
              )}

              {/* Key Benefits List */}
              <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/90 border border-amber-300/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                <h4 className="font-serif font-bold text-base sm:text-lg text-red-950 flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-amber-600" />
                  <span>{isHindi ? "पूजा के प्रमुख लाभ एवं विशेषताएं:" : "Key Benefits & Significance:"}</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {(selectedPuja.benefits || [
                    isHindi ? "शास्त्रोक्त वैदिक विधि-विधान एवं संपूर्ण संकल्प के साथ पूजन।" : "Performed according to authentic Vedic scriptures and complete Sankalp.",
                    isHindi ? "अनुभवी एवं विद्वान पंडित जी द्वारा उज्जैन के सिद्ध तीर्थ क्षेत्र में संपन्न।" : "Conducted by experienced Vedic Pandits at sacred Ujjain Kshetra.",
                    isHindi ? "दोष निवारण, जीवन में सुख-शांति, समृद्धि एवं करियर बाधाएं दूर होती हैं।" : "Removes doshas, brings peace, prosperity, and removes life obstacles."
                  ]).map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919826525736"
                className="flex-1 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{isHindi ? "पंडित जी से फोन पर बात करें" : "Call Pandit Ji Now"}</span>
              </a>

              <a
                href={`https://wa.me/919826525736?text=${encodeURIComponent(isHindi ? `जय महाकाल! मुझे ${selectedPuja.title} के बारे में जानकारी चाहिए।` : `Jai Mahakal! I want to know about ${selectedPuja.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isHindi ? "व्हाट्सएप पर जानकारी लें" : "WhatsApp Inquiry"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;

