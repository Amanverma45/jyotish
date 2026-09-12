import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Compass, ArrowRight } from 'lucide-react';

const RitualsJourney = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-white via-amber-50/40 to-white text-slate-800 py-14 border-b border-amber-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Rituals You Can Book */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600 inline" />
            <span>{t.ritualsSection.title}</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            {t.ritualsSection.desc}
          </p>
        </div>

        {/* Start Your Spiritual Journey */}
        <div className="bg-white border-2 border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-900">
            {t.ritualsSection.journeyTitle}
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {t.ritualsSection.journeyDesc}
          </p>

          <div className="pt-2">
            <Link
              to="/kundli"
              className="inline-flex items-center gap-2 font-bold text-red-700 hover:text-red-800 text-sm sm:text-base underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors"
            >
              <Compass className="w-4.5 h-4.5 text-amber-600" />
              <span>[{t.ritualsSection.bookLink}]</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RitualsJourney;
