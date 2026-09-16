import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, Landmark, ShieldCheck, Flame, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import sharmajiImg from '../assets/sharmaji.png';
import mahakalGod from '../assets/mahakal_god.jpg';
import kaalBhairavGod from '../assets/kaal_bhairav_god.jpg';
import mangalnathGod from '../assets/mangalnath_god.jpg';
import harsiddhiMataGod from '../assets/harsiddhi_mata_god.jpg';

const godImagesMap = {
  mahakal: mahakalGod,
  kaal_bhairav: kaalBhairavGod,
  mangalnath: mangalnathGod,
  harsiddhi_mata: harsiddhiMataGod
};

const About = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const abt = t?.about || {};

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white text-slate-800 py-12 sm:py-16 border-b border-amber-200/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Main Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-bold shadow-xs border border-amber-500/40 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{abt.badge || (isHindi ? "प्रसिद्ध पंडित जी" : "Famous Pandit")}</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950 leading-tight">
            {abt.heading || (isHindi ? "ज्योतिषाचार्य पंडित हरिओम शर्मा - उज्जैन के सर्वश्रेष्ठ पंडित" : "Jyotishacharya Pt. Hariom Sharma - Best Pandit in Ujjain")}
          </h1>
          
          <p className="text-red-900 font-bold text-base sm:text-xl font-serif">
            {abt.subHeading || (isHindi ? "अवंतिका नगरी (उज्जैन महाकाल धाम) पूजन विशेषज्ञ" : "Avantika Nagari (Ujjain Mahakal Dham) Rituals Specialist")}
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-200/80 shadow-xl">
          
          {/* Authentic Photo (sharmaji.png) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 via-red-600 to-amber-600 blur-md opacity-40"></div>
              
              <div className="relative bg-white border-2 border-amber-300 rounded-3xl p-3 shadow-xl text-center space-y-4">
                <img
                  src={sharmajiImg}
                  alt={isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी" : "Jyotishacharya Pt. Hariom Sharma"}
                  className="w-full h-80 sm:h-96 rounded-2xl object-cover border border-amber-200 shadow-md"
                />
                
                <div className="pt-1">
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    {isHindi ? "पं. हरिओम शर्मा जी" : "Pt. Hariom Sharma Ji"}
                  </h2>
                  <p className="text-red-800 text-xs sm:text-sm font-bold mt-0.5">
                    {isHindi ? "मुख्य ज्योतिषाचार्य व उज्जैन महाकाल पूजन विशेषज्ञ" : "Lead Jyotishacharya & Ujjain Puja Specialist"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:+919826525736"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:scale-102 transition-transform"
                    title={isHindi ? "पंडित हरिओम शर्मा जी को कॉल करें" : "Call Pt. Hariom Sharma"}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{isHindi ? "कॉल करें" : "Call Now"}</span>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से व्हाट्सएप संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to contact Pt. Hariom Sharma Ji on WhatsApp.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:scale-102 transition-transform"
                    title={isHindi ? "पंडित हरिओम शर्मा जी को WhatsApp करें" : "WhatsApp Pt. Hariom Sharma"}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pandit Ji Bio Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-bold text-xs uppercase">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              <span>{isHindi ? "प्रसिद्ध वैदिक विद्वान एवं आचार्य" : "Famous Vedic Scholar & Acharya"}</span>
            </div>

            <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-medium leading-relaxed bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
              "{abt.intro}"
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold font-serif text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-700" />
                <span>{isHindi ? "विशेषज्ञता एवं मुख्य वैदिक अनुष्ठान:" : "Specialties & Key Vedic Rituals:"}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 font-semibold text-slate-800 shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700"></span>
                  <span>{isHindi ? "कालसर्पदोष निवारण पूजा" : "Kaal Sarp Dosh Nivaran Puja"}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 font-semibold text-slate-800 shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>{isHindi ? "मंगलनाथ मंदिर में मंगल भात पूजा" : "Mangal Bhaat Puja at Mangalnath Temple"}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 font-semibold text-slate-800 shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700"></span>
                  <span>{isHindi ? "पितृदोष शांति एवं नवग्रह जाप" : "Pitru Dosh Shanti & Navgrah Jaap"}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 font-semibold text-slate-800 shadow-2xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>{isHindi ? "महामृत्युंजय जाप व रुद्राभिषेक" : "Mahamrityunjay Jaap & Rudrabhishek"}</span>
                </div>
              </div>
            </div>

            {/* Call Direct Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-red-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-500/40 shadow-lg">
              <div>
                <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                  {isHindi ? "परामर्श व पूजन अपॉइंटमेंट" : "Consultation & Puja Appointment"}
                </div>
                <div className="text-lg font-bold font-serif text-amber-200">Call Now : +919826525736</div>
              </div>
              <a
                href="tel:+919826525736"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md whitespace-nowrap"
              >
                {isHindi ? "अभी कॉल करें" : "Call Now"}
              </a>
            </div>

          </div>

        </div>

        {/* Sacred Ujjain Nagari Section */}
        <div className="bg-gradient-to-br from-amber-900 via-red-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/30">
              <Landmark className="w-4 h-4 text-amber-400" />
              <span>{isHindi ? "पवित्र अवंतिका धाम" : "Sacred Avantika Dham"}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-amber-100">
              {abt.ujjainTitle || (isHindi ? "पवित्र अवंतिका नगरी (उज्जैन) का आध्यात्मिक महत्व" : "Spiritual Significance of Sacred Avantika Nagari (Ujjain)")}
            </h2>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              {abt.ujjainDesc}
            </p>
          </div>

          {/* Landmarks Grid with Divine God Images */}
          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-amber-300 border-b border-amber-500/30 pb-2">
              {abt.landmarksTitle || (isHindi ? "उज्जैन के प्रमुख एवं पावन धार्मिक स्थल:" : "Key Sacred Landmarks of Ujjain:")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(abt.landmarks || []).map((item, idx) => {
                const godImg = godImagesMap[item.imageKey] || mahakalGod;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/90 rounded-3xl border-2 border-amber-500/40 hover:border-amber-400 transition-all overflow-hidden flex flex-col group shadow-xl"
                  >
                    {/* Deity God Divine Image Banner */}
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <img
                        src={godImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md uppercase tracking-wider">
                        #{idx + 1} {isHindi ? 'पावन सिद्ध धाम' : 'Sacred Peeth'}
                      </div>

                      <h4 className="absolute bottom-3 left-4 right-4 font-bold font-serif text-amber-200 text-lg sm:text-2xl drop-shadow-md">
                        {item.title}
                      </h4>
                    </div>

                    <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between bg-slate-950/80">
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                        {item.desc}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ", Ujjain, Madhya Pradesh")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline pt-2 cursor-pointer"
                      >
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span>{isHindi ? "📍 मैप्स पर लोकेशन देखें" : "📍 View Location on Google Maps"}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct CTA Bar */}
          <div className="pt-4 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                {isHindi ? "उज्जैन महाकाल धाम में विधि-विधान से पूजा कराने हेतु संपर्क करें" : "Contact for Authentic Vedic Pujas at Ujjain Mahakal Dham"}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold font-serif text-amber-400">Call Now : +919826525736</span>
            </div>
            
            <div className="flex gap-3">
              <a
                href="tel:+919826525736"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91-9826525736</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से व्हाट्सएप संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to contact Pt. Hariom Sharma Ji on WhatsApp.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
