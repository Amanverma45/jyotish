import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Calendar, Clock, BookOpen, Phone, MessageCircle, CheckCircle2, ChevronRight, Sun, Flame, Award } from 'lucide-react';

import pujaKaalsarp from '../assets/puja_kaalsarp.jpg';
import pujaRudrabhishek from '../assets/puja_rudrabhishek.jpg';
import pujaMangal from '../assets/puja_mangal.jpg';
import pujaPitru from '../assets/puja_pitru.jpg';
import pujaNavgrah from '../assets/puja_navgrah.jpg';
import pujaKumbh from '../assets/puja_kumbh.jpg';
import sharmaji from '../assets/sharmaji.png';

const imageMap = {
  kaalsarp: pujaKaalsarp,
  rudrabhishek: pujaRudrabhishek,
  mangal: pujaMangal,
  pitru: pujaPitru,
  navgrah: pujaNavgrah,
  kumbh: pujaKumbh
};

const Festivals = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const fest = t?.festivalsSection;

  if (!fest) return null;

  const featuredImg = imageMap[fest.featured?.imageKey] || pujaRudrabhishek;

  return (
    <div className="bg-slate-950 text-amber-50 min-h-screen py-12 lg:py-20 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-600/10 via-red-700/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{fest.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-amber-200 via-amber-300 to-orange-200 bg-clip-text text-transparent leading-tight">
            {fest.heading}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            {fest.subHeading}
          </p>
        </div>

        {/* CURRENT / FEATURED FESTIVAL HERO CARD */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/70 border-2 border-amber-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
          
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-red-600 to-amber-600 text-white font-bold text-xs rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-200 animate-bounce" />
            <span>{fest.featured?.status || (isHindi ? 'वर्तमान में विशेष बुकिंग चालू' : 'Special Booking Open')}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={featuredImg}
                  alt={fest.featured?.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-amber-400/40 text-xs font-semibold text-amber-200 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {fest.featured?.date}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isHindi ? 'सिद्ध योग' : 'Siddh Yog'}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                {fest.activeFestivalTitle}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-amber-100 leading-snug">
                {fest.featured?.title}
              </h2>

              {/* Shubh Muhurat Box */}
              <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/30 text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isHindi ? 'शुभ मुहूर्त & पूजन समय:' : 'Auspicious Timing:'}</span>
                </div>
                <p className="text-slate-200 font-medium pl-6">
                  {fest.featured?.muhurat}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {fest.featured?.desc}
              </p>

              {/* Pujan Vidhi */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-amber-400 block">{isHindi ? 'शास्त्रोक्त पूजन विधि:' : 'Ritual Methodology:'}</span>
                <p className="text-slate-300">{fest.featured?.vidhi}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=917999646783&text=${encodeURIComponent(isHindi ? `जय श्री महाकाल! पं. हरिओम शर्मा जी से ${fest.featured?.title} हेतु विशेष पूजा बुक करना चाहता/चाहती हूँ।` : `Jai Shree Mahakal! I want to book special Puja for ${fest.featured?.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span>{fest.bookFestivalPuja}</span>
                </a>

                <a
                  href="tel:+917999646783"
                  className="px-6 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91-7999646783</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* UPCOMING FESTIVALS GRID SECTION */}
        <div className="space-y-6 pt-6">
          
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-amber-200">
                {isHindi ? 'वर्ष के प्रमुख आगामी व्रत व त्यौहार' : 'Upcoming Sacred Vedic Festivals'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {isHindi ? 'उज्जैन अवंतिका पंचांग के अनुसार तिथि व पूजा मुहूर्त' : 'Festival date, Tithi and special Puja timings'}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950 border border-amber-800 text-xs font-bold text-amber-400">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>{isHindi ? 'उज्जैन पंचांग' : 'Ujjain Panchang'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fest.list?.map((item) => {
              const cardImg = imageMap[item.imageKey] || pujaRudrabhishek;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/90 border border-amber-900/50 hover:border-amber-500/60 rounded-2xl p-5 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-amber-400/30">
                      <img
                        src={cardImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
                      
                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-amber-400/40 text-[11px] font-bold text-amber-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title & Details */}
                    <div>
                      <h4 className="text-lg font-bold font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="mt-2 flex items-center gap-2 text-xs text-amber-400 font-medium">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{item.muhurat}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.tithi}
                    </span>

                    <a
                      href={`https://api.whatsapp.com/send?phone=917999646783&text=${encodeURIComponent(isHindi ? `जय श्री महाकाल! पं. हरिओम शर्मा जी से ${item.title} पर पूजा परामर्श हेतु संपर्क।` : `Jai Shree Mahakal! Consulting Pt. Hariom Sharma Ji for ${item.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      <span>{isHindi ? 'पूजा बुक करें' : 'Book Puja'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* PANDITJI FESTIVAL CONSULTATION BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border-2 border-amber-500/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src={sharmaji}
              alt="Pt. Hariom Sharma"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 object-cover shadow-md shrink-0 hidden sm:block"
            />
            <div className="space-y-1">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block flex items-center gap-1.5 justify-center md:justify-start">
                <Award className="w-4 h-4 text-amber-400" />
                {isHindi ? 'उज्जैन महाकाल धाम तीर्थ अनुष्ठान मार्गदर्शन' : 'Ujjain Mahakal Dham Ritual Guidance'}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {isHindi ? 'आगामी त्योहारों पर विशेष अनुष्ठान हेतु संपर्क करें' : 'Consult Pt. Hariom Sharma for Festival Pujas'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {isHindi ? 'उज्जैन में शुभ मुहूर्त अनुसार शास्त्रोक्त पूजा कराने के लिए पंडित जी से सीधे बात करें।' : 'Directly speak with Pandit Ji to perform Pujas according to auspicious Shubh Muhurat.'}
              </p>
            </div>
          </div>

          <a
            href="tel:+917999646783"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm shadow-xl flex items-center gap-2 shrink-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>+91-7999646783</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Festivals;
