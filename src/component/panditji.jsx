import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Award, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

// Images uploaded by user
import sharmajiImg from '../assets/sharmaji.png';
import hariomsharmaji2Img from '../assets/hariomsharmaji2.png';
import kanhaImg from '../assets/pandit-kanha-sharma.webp';
import rishiImg from '../assets/jyotish-panditji-Rishi-Guruji.webp';
import dipeshImg from '../assets/panditji-Dipesh-joshi.webp';
import shivamImg from '../assets/panditji-shivam-sharma.webp';
import logoImg from '../assets/logo.png';

const Panditji = () => {
  const { t } = useLanguage();
  const team = t?.ourTeam?.members || [];

  // Team member photo mapping (uses hariomsharmaji2.png for team cards, while main about section uses sharmaji.png)
  const photoMap = {
    sharmaji: hariomsharmaji2Img,
    kanha: kanhaImg,
    rishi: rishiImg,
    dipesh: dipeshImg,
    shivam: shivamImg
  };

  const getMemberPhoto = (member, idx) => {
    if (member?.photoKey && photoMap[member.photoKey]) {
      return photoMap[member.photoKey];
    }
    if (idx === 0) return hariomsharmaji2Img;
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/40 to-white text-slate-800 py-12 sm:py-16 border-b border-amber-200/80 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-950 text-amber-300 text-xs sm:text-sm font-bold shadow-xs border border-amber-500/40 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t?.ourTeam?.badge || "हमारे विद्वान पंडित"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-950">
            {t?.ourTeam?.heading || "हमारे सिद्ध विद्वान पंडित गण"}
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {t?.ourTeam?.subHeading || "उज्जैन महाकाल धाम में पं. हरिओम शर्मा जी के मार्गदर्शन में शास्त्रोक्त पूजन कराने वाले विद्वान आचार्य"}
          </p>
        </div>

        {/* Pandit Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => {
            const photo = getMemberPhoto(member, idx);

            return (
              <div
                key={idx}
                className="vedic-card rounded-3xl p-5 sm:p-6 text-center bg-white border-2 border-amber-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  
                  {/* Photo Container */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-red-600 to-amber-600 shadow-md overflow-hidden group">
                    {photo ? (
                      <img
                        src={photo}
                        alt={member.name}
                        className="w-full h-full rounded-xl object-cover object-top border border-white group-hover:scale-103 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-gradient-to-b from-amber-100 to-amber-50 flex flex-col items-center justify-center p-4 border border-amber-200 text-center space-y-2">
                        <img
                          src={logoImg}
                          alt="Vedic Pandit Placeholder"
                          className="w-24 h-24 rounded-full border-2 border-amber-400 object-cover shadow-xs opacity-80"
                        />
                      </div>
                    )}

                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3 bg-red-950/90 text-amber-300 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-amber-400/80 shadow backdrop-blur-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{idx === 0 ? "मुख्य आचार्य" : "विद्वान पंडित"}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-extrabold text-red-800 uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* Experience & Specialty */}
                  <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-950 font-semibold space-y-1.5">
                    <div className="flex items-center justify-center gap-1.5 text-red-800 font-bold">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span>अनुभव: {member.experience}</span>
                    </div>
                    <p className="text-slate-700 font-normal leading-relaxed">
                      <span className="font-bold text-slate-900">विशेषज्ञता:</span> {member.specialty}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons - All lead directly to Pt. Hariom Sharma Ji (+917999646783) */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-amber-100">
                  <a
                    href="tel:+917999646783"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-700 via-amber-800 to-red-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:scale-102 transition-transform"
                    title="पंडित हरिओम शर्मा जी को कॉल करें"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>कॉल करें</span>
                  </a>
                  <a
                    href="https://wa.me/917999646783"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:scale-102 transition-transform"
                    title="पंडित हरिओम शर्मा जी को WhatsApp करें"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct Call Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-red-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-500/40 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">उज्जैन महाकाल धाम पूजन मार्गदर्शन एवं अपॉइंटमेंट</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-200">ज्योतिषाचार्य पं. हरिओम शर्मा जी से सीधे संपर्क करें</h3>
          </div>
          <a
            href="tel:+917999646783"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: +91-7999646783</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Panditji;
