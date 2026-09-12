import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuvicharBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      
      {/* Suvichar Burgundy Cosmic Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-amber-100 py-14 px-4 sm:px-6 lg:px-8 border-y border-amber-500/40 shadow-xl">
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/60 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-4 h-4 text-amber-400" />
            <span>{t.suvichar.title}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-200">
            {t.suvichar.title}
          </h2>

          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed italic max-w-4xl mx-auto font-serif px-2">
            "{t.suvichar.quote}"
          </p>

        </div>
      </section>

      {/* OUR BLOGS Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <h2 className="text-3xl font-bold font-serif text-slate-900 tracking-wide uppercase">
            {t.blogs.title}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.blogs.subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blogs.posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-amber-100/60 border border-amber-300/80 rounded-2xl p-6 hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-amber-900 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {post.title}
                </h3>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-red-800 hover:text-red-900 pt-2"
              >
                <span>{t.blogs.readArticle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SuvicharBanner;
