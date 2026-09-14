import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, ArrowRight } from 'lucide-react';

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

  const pujaPhotoMap = {
    kaalsarp: kaalsarpImg,
    mangal: mangalImg,
    pitru: pitruImg,
    navgrah: navgrahImg,
    vastu: vastuImg,
    rudrabhishek: rudrabhishekImg,
    kumbh: kumbhImg
  };

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
          {(t.services?.pujas || []).map((srv) => {
            const photo = pujaPhotoMap[srv.photoKey || srv.id] || kaalsarpImg;

            return (
              <div
                key={srv.id}
                className="vedic-card rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-md hover:shadow-2xl bg-white border-2 border-amber-200/80 space-y-5"
              >
                <div className="space-y-4">
                  
                  {/* High Quality Clear Puja Image */}
                  <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-amber-300 shadow-sm group">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 text-center hover:text-red-800 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed text-center font-normal">
                    {srv.desc}
                  </p>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-amber-100">
                  <Link
                    to="/kundli"
                    className="py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-sm text-center flex items-center justify-center gap-1 transition-all"
                  >
                    <span>{t?.services?.readMore || (isHindi ? "विस्तार से पढ़ें..." : "Read More...")}</span>
                  </Link>
                  <a
                    href="tel:+918435856067"
                    className="py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-sm text-center flex items-center justify-center gap-1 transition-all"
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
    </div>
  );
};

export default Service;
