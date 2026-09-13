import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Calendar, Clock, BookOpen, Phone, MessageCircle, CheckCircle2, ChevronRight, Sun, Flame, Award, Eye } from 'lucide-react';

import ganeshPoster from '../assets/ganesh_chaturthi_poster.jpg';
import pujaKaalsarp from '../assets/puja_kaalsarp.jpg';
import pujaRudrabhishek from '../assets/puja_rudrabhishek.jpg';
import pujaMangal from '../assets/puja_mangal.jpg';
import pujaPitru from '../assets/puja_pitru.jpg';
import pujaNavgrah from '../assets/puja_navgrah.jpg';
import pujaKumbh from '../assets/puja_kumbh.jpg';
import sharmaji from '../assets/sharmaji.png';

const imageMap = {
  ganesh_poster: ganeshPoster,
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
  const feat = fest?.featured;

  const [showPosterModal, setShowPosterModal] = useState(false);

  if (!fest || !feat) return null;

  return (
    <div className="bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-amber-50/60 text-slate-800 min-h-screen py-10 lg:py-16 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-amber-300/20 via-orange-200/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 lg:space-y-14">

        {/* TOP HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-red-700 animate-pulse" />
            <span>{fest.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent leading-tight">
            {fest.heading}
          </h1>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            {fest.subHeading}
          </p>
        </div>

        {/* GANESH CHATURTHI 2026 FEATURED HERO CARD (WARM VEDIC LIGHT THEME) */}
        <div className="relative rounded-3xl bg-white border-2 border-amber-300/80 p-5 sm:p-8 lg:p-10 shadow-xl shadow-amber-500/10 overflow-hidden">
          
          {/* Top Status Tag */}
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-red-700 via-amber-700 to-red-800 text-white font-extrabold text-xs rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5 z-20">
            <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>{feat.status || (isHindi ? 'गणपति स्थापना बुकिंग चालू' : 'Booking Open')}</span>
          </div>

          {/* Shloka Top Banner */}
          <div className="text-center mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-1">
            <span className="text-red-900 font-extrabold text-sm sm:text-base font-serif block tracking-wider">
              {isHindi ? '॥ श्री गणेशाय नमः ॥' : '|| Shri Ganeshaya Namah ||'}
            </span>
            <p className="text-amber-950 font-semibold font-serif italic text-xs sm:text-sm">
              "{feat.shloka || 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥'}"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box: Ganesh Poster Image & Modal Trigger */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg group cursor-pointer" onClick={() => setShowPosterModal(true)}>
                <img
                  src={ganeshPoster}
                  alt="गणेश चतुर्थी 2026 पंचांग पोस्टर"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-amber-300 text-xs font-bold text-slate-900 flex items-center justify-between shadow-md">
                  <span className="flex items-center gap-1 text-red-800">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    {isHindi ? '14 से 25 सितंबर 2026' : '14 to 25 Sep 2026'}
                  </span>
                  <span className="flex items-center gap-1 text-amber-900 font-bold hover:underline">
                    <Eye className="w-4 h-4 text-red-700" />
                    {isHindi ? 'पोस्टर बड़ा देखें' : 'View Poster'}
                  </span>
                </div>
              </div>

              {/* Mantra Banner */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1 shadow-xs">
                <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">
                  {isHindi ? 'गणेश महामंत्र' : 'Ganesh Mahamantra'}
                </span>
                <p className="text-lg font-extrabold text-emerald-950 font-serif">
                  {feat.mantra || 'ॐ गं गणपतये नमः ॥'}
                </p>
                <p className="text-[11px] text-emerald-900 font-medium">
                  {isHindi ? 'इस मंत्र का श्रद्धापूर्वक जाप करें और सभी विघ्न दूर करें।' : 'Chant this sacred mantra for peace and removal of obstacles.'}
                </p>
              </div>
            </div>

            {/* Right Box: Detailed Timings & Schedule */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                  {fest.activeFestivalTitle}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-slate-900 leading-snug">
                  {feat.title}
                </h2>
                <p className="text-red-800 text-xs sm:text-sm font-bold mt-1">
                  📅 {feat.date}
                </p>
              </div>

              {/* Tithi Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                    {isHindi ? 'चतुर्थी तिथि प्रारंभ' : 'Chaturthi Starts'}
                  </span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {feat.tithiStart}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                    {isHindi ? 'चतुर्थी तिथि समाप्त' : 'Chaturthi Ends'}
                  </span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {feat.tithiEnd}
                  </p>
                </div>
              </div>

              {/* Highlighted Shubh Muhurat Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-2 border-amber-300 text-red-950 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-red-900 text-sm">
                  <Clock className="w-5 h-5 text-red-700 shrink-0 animate-pulse" />
                  <span>{isHindi ? 'गणपति स्थापना एवं पूजा का शुभ मुहूर्त (उज्जैन पंचांग):' : 'Ganpati Sthapana & Puja Muhurat (Ujjain):'}</span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-red-900 font-serif pl-7">
                  {feat.muhurat}
                </p>
                <p className="text-[11px] text-slate-700 pl-7 font-medium">
                  {isHindi ? '(इस शुभ अवधि में गणपति की स्थापना, प्राण-प्रतिष्ठा एवं विधिवत पूजा-अर्चना की जा सकती है।)' : '(Best time for Ganpati Sthapana and Pran-Pratishtha Rituals.)'}
                </p>
              </div>

              {/* Timeline Dates */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                  <span className="font-bold text-slate-800">
                    🎉 {isHindi ? 'गणेश चतुर्थी (स्थापना):' : 'Ganesh Chaturthi (Sthapana):'}
                  </span>
                  <span className="font-extrabold text-red-900">{feat.sthapanaDate}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold text-slate-800">
                    🌊 {isHindi ? 'अनंत चतुर्दशी (मुख्य विसर्जन):' : 'Anant Chaturdashi (Visarjan):'}
                  </span>
                  <span className="font-extrabold text-red-900">{feat.visarjanDate}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {feat.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=917999646783&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से गणेश चतुर्थी 2026 गणपति स्थापना एवं अनुष्ठान पूजन बुक करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to book Ganesh Chaturthi 2026 Puja with Pt. Hariom Sharma Ji.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span>{fest.bookFestivalPuja}</span>
                </a>

                <a
                  href="tel:+917999646783"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-800 via-amber-800 to-red-900 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>+91-7999646783</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* PUJA SAMAGRI & GANAPATI STHAPANA VIDHI SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Puja Samagri List */}
          <div className="lg:col-span-5 bg-white border border-amber-200/90 rounded-3xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
              <Sparkles className="w-5 h-5 text-red-700 shrink-0" />
              <h3 className="text-xl font-bold font-serif text-slate-900">
                {isHindi ? 'गणेश चतुर्थी आवश्यक पूजा सामग्री' : 'Ganesh Chaturthi Puja Samagri'}
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {feat.samagri?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Sthapana Vidhi (7 Steps) */}
          <div className="lg:col-span-7 bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-700 shrink-0" />
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {isHindi ? 'गणपति स्थापना की शास्त्रोक्त विधि' : 'Ganpati Sthapana Step-by-Step Vidhi'}
                </h3>
              </div>
              <span className="text-xs font-bold text-red-900 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                {isHindi ? '7 चरण' : '7 Steps'}
              </span>
            </div>

            <div className="space-y-3">
              {feat.vidhiSteps?.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-slate-800 font-medium leading-relaxed hover:border-amber-400 transition-colors">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-800 text-white font-extrabold text-xs shrink-0 shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            {/* Ganesh Ji Mahatmya Quote */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-orange-100/80 border border-amber-300 space-y-1">
              <span className="text-xs font-bold text-red-900 uppercase tracking-wider block">
                {isHindi ? 'गणेश चतुर्थी का महात्म्य' : 'Glory of Lord Ganesha'}
              </span>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {feat.mahatmya}
              </p>
            </div>
          </div>

        </div>

        {/* JAYKARA BANNER */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-red-900 via-amber-800 to-red-900 border-2 border-amber-400 text-white shadow-xl text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-amber-200">
            {isHindi ? '॥ गणपति बप्पा मोरया ! मंगलमूर्ति मोरया !! ॥' : '|| Ganpati Bappa Morya ! Mangalmurti Morya !! ||'}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 font-serif">
            {isHindi ? 'भगवान श्री गणेश आप सभी के जीवन में सुख, समृद्धि, शांति और मंगल प्रदान करें।' : 'May Lord Ganesha bless your home with health, peace, wealth and happiness.'}
          </p>
          <span className="text-xs font-bold text-amber-300 block pt-1">
            {isHindi ? '॥ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः ॥' : '|| Sarve Bhavantu Sukhinah | Sarve Santu Niramayah ||'}
          </span>
        </div>

        {/* UPCOMING FESTIVALS GRID SECTION */}
        <div className="space-y-6 pt-4">
          
          <div className="flex items-center justify-between border-b border-amber-200 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                {isHindi ? 'वर्ष के अन्य प्रमुख आगामी व्रत व त्यौहार' : 'Other Upcoming Sacred Vedic Festivals'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isHindi ? 'उज्जैन अवंतिका पंचांग के अनुसार तिथि व पूजा मुहूर्त' : 'Festival date, Tithi and special Puja timings'}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900">
              <Sun className="w-4 h-4 text-red-700" />
              <span>{isHindi ? 'उज्जैन पंचांग' : 'Ujjain Panchang'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fest.list?.map((item) => {
              const cardImg = imageMap[item.imageKey] || pujaRudrabhishek;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-amber-200/90 hover:border-amber-400 rounded-2xl p-5 shadow-md hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-amber-200">
                      <img
                        src={cardImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      
                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-white/95 border border-amber-300 text-[11px] font-bold text-red-900 flex items-center gap-1 shadow-xs">
                        <Calendar className="w-3 h-3 text-amber-700" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title & Details */}
                    <div>
                      <h4 className="text-lg font-bold font-serif text-slate-900 group-hover:text-red-800 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="mt-2 flex items-center gap-2 text-xs text-red-800 font-bold">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{item.muhurat}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-amber-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700">
                      {item.tithi}
                    </span>

                    <a
                      href={`https://api.whatsapp.com/send?phone=917999646783&text=${encodeURIComponent(isHindi ? `जय श्री महाकाल! पं. हरिओम शर्मा जी से ${item.title} पर पूजा परामर्श हेतु संपर्क।` : `Jai Shree Mahakal! Consulting Pt. Hariom Sharma Ji for ${item.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-xs"
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
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-900 via-amber-800 to-red-900 border-2 border-amber-400 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src={sharmaji}
              alt="Pt. Hariom Sharma"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 object-cover shadow-md shrink-0 hidden sm:block"
            />
            <div className="space-y-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider block flex items-center gap-1.5 justify-center md:justify-start">
                <Award className="w-4 h-4 text-amber-300" />
                {isHindi ? 'उज्जैन महाकाल धाम तीर्थ अनुष्ठान मार्गदर्शन' : 'Ujjain Mahakal Dham Ritual Guidance'}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {isHindi ? 'गणेशोत्सव एवं आगामी त्योहारों पर विशेष अनुष्ठान हेतु संपर्क करें' : 'Consult Pt. Hariom Sharma for Festival Pujas'}
              </h4>
              <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                {isHindi ? 'उज्जैन में शुभ मुहूर्त अनुसार शास्त्रोक्त पूजा कराने के लिए पंडित जी से सीधे बात करें।' : 'Directly speak with Pandit Ji to perform Pujas according to auspicious Shubh Muhurat.'}
              </p>
            </div>
          </div>

          <a
            href="tel:+917999646783"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl flex items-center gap-2 shrink-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>+91-7999646783</span>
          </a>
        </div>

      </div>

      {/* FULL POSTER PREVIEW MODAL */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowPosterModal(false)}>
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white border-2 border-amber-400 rounded-3xl p-4 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-amber-200 pb-3">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                {isHindi ? 'गणेश चतुर्थी 2026 पंचांग एवं पूजा पोस्टर' : 'Ganesh Chaturthi 2026 Panchang Poster'}
              </h3>
              <button
                onClick={() => setShowPosterModal(false)}
                className="px-3 py-1 bg-red-800 text-white text-xs font-bold rounded-lg hover:bg-red-900"
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

export default Festivals;
