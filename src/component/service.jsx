import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, ArrowRight, ShieldCheck, Flame, Compass, Heart, Sun, Home, Droplets } from 'lucide-react';

const Service = () => {
  const { t } = useLanguage();

  const getIcon = (type) => {
    switch (type) {
      case 'snake':
      case 'flame':
        return Flame;
      case 'shield':
        return ShieldCheck;
      case 'sun':
        return Sun;
      case 'home':
        return Home;
      case 'water':
        return Droplets;
      case 'heart':
        return Heart;
      default:
        return Compass;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white text-slate-800 py-16 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-bold shadow-xs border border-amber-500/40 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-950">
            {t.services.heading}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {t.services.subHeading}
          </p>
        </div>

        {/* 7 Pujas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.pujas.map((srv) => {
            const IconComp = getIcon(srv.iconType);
            return (
              <div
                key={srv.id}
                className="vedic-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-sm hover:shadow-xl bg-white border-2 border-amber-200/80"
              >
                <div>
                  {/* Card Header Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-800 via-amber-700 to-red-900 text-amber-200 flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {srv.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 hover:text-red-800 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                {/* 2 CTA Buttons per card: Dynamic Read More & Call Now */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-amber-100">
                  <Link
                    to="/kundli"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-500 hover:to-red-600 text-white font-bold text-xs shadow-xs text-center flex items-center justify-center gap-1"
                  >
                    <span>{t.services.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="tel:+917999646783"
                    className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs text-center flex items-center justify-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.services.callNow}</span>
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
