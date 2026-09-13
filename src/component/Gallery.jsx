import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Camera, Image as ImageIcon, Eye, X, PlusCircle, Phone, MessageCircle, Award, CheckCircle2 } from 'lucide-react';

import sharmaji from '../assets/sharmaji.png';
import hariomsharmaji2 from '../assets/hariomsharmaji2.png';
import pujaKaalsarp from '../assets/puja_kaalsarp.jpg';
import pujaRudrabhishek from '../assets/puja_rudrabhishek.jpg';
import pujaMangal from '../assets/puja_mangal.jpg';
import pujaPitru from '../assets/puja_pitru.jpg';
import pujaNavgrah from '../assets/puja_navgrah.jpg';
import pujaKumbh from '../assets/puja_kumbh.jpg';
import pujaVastu from '../assets/puja_vastu.jpg';
import ganeshPoster from '../assets/ganesh_chaturthi_poster.jpg';

// Initial Gallery Photos Data List
// Note for USER: Naye photo add karne ke liye 'src' field me photo path daal dein (e.g. src: pujaPhoto).
const initialGalleryItems = [
  {
    id: 1,
    title: "ज्योतिषाचार्य पं. हरिओम शर्मा जी",
    subtitle: "मुख्य पूजन विशेषज्ञ (उज्जैन महाकाल धाम)",
    category: "mahakal",
    categoryLabel: "महाकाल धाम",
    src: sharmaji,
    alt: "Pt. Hariom Sharma Ujjain"
  },
  {
    id: 2,
    title: "कालसर्प दोष निवारण एवं राहु-केतु शांति पूजा",
    subtitle: "उज्जैन महाकालेश्वर सिद्ध क्षेत्र",
    category: "kaalsarp",
    categoryLabel: "कालसर्प दोष",
    src: pujaKaalsarp,
    alt: "Kaal Sarp Dosh Puja Ujjain"
  },
  {
    id: 3,
    title: "मंगलनाथ मंदिर मंगल भात पूजा",
    subtitle: "विवाह बाधा एवं मंगल दोष निवारण",
    category: "mangal",
    categoryLabel: "मंगल भात पूजा",
    src: pujaMangal,
    alt: "Mangal Bhaat Puja Ujjain"
  },
  {
    id: 4,
    title: "भगवान शिव महाकाल रुद्राभिषेक पूजा",
    subtitle: "दूध, जल एवं बिल्वपत्र अभिषेक अनुष्ठान",
    category: "rudrabhishek",
    categoryLabel: "रुद्राभिषेक",
    src: pujaRudrabhishek,
    alt: "Rudrabhishek Puja Ujjain"
  },
  {
    id: 5,
    title: "गणेश चतुर्थी 2026 महापर्व पंचांग",
    subtitle: "विनायक चतुर्थी से अनंत चतुर्दशी उत्सव",
    category: "anushthan",
    categoryLabel: "विशेष अनुष्ठान",
    src: ganeshPoster,
    alt: "Ganesh Chaturthi Ujjain"
  },
  {
    id: 6,
    title: "पितृदोष शांति एवं पिंडदान तर्पण अनुष्ठान",
    subtitle: "सिद्धवट एवं रामघाट तट उज्जैन",
    category: "anushthan",
    categoryLabel: "विशेष अनुष्ठान",
    src: pujaPitru,
    alt: "Pitru Dosh Puja Ujjain"
  },
  {
    id: 7,
    title: "नवग्रह शांति एवं ग्रह दोष जाप",
    subtitle: "नौ ग्रहों की अनुकूलता हेतु वैदिक जाप",
    category: "anushthan",
    categoryLabel: "विशेष अनुष्ठान",
    src: pujaNavgrah,
    alt: "Navgrah Shanti Puja Ujjain"
  },
  {
    id: 8,
    title: "कुंभ विवाह व अर्क विवाह अनुष्ठान",
    subtitle: "शीघ्र विवाह योग हेतु विशेष वैदिक विधि",
    category: "anushthan",
    categoryLabel: "विशेष अनुष्ठान",
    src: pujaKumbh,
    alt: "Kumbh Vivah Ujjain"
  },
  // BLANK PLACEHOLDERS (User Can Paste Image Paths Here!)
  {
    id: 9,
    title: "महाकालेश्वर भस्म आरती एवं विशेष पूजन",
    subtitle: "उज्जैन धाम पावन दर्शन",
    category: "mahakal",
    categoryLabel: "महाकाल धाम",
    src: "", // Image Path Yahan Daalein
    alt: "Mahakal Aarti"
  },
  {
    id: 10,
    title: "वास्तु दोष शांति एवं गृह प्रवेश पूजा",
    subtitle: "सकारात्मक ऊर्जा एवं शांति हेतु",
    category: "anushthan",
    categoryLabel: "विशेष अनुष्ठान",
    src: pujaVastu,
    alt: "Vastu Puja Ujjain"
  },
  {
    id: 11,
    title: "महामृत्युंजय जाप अनुष्ठान",
    subtitle: "आरोग्य व दीर्घायु प्राप्ति हेतु",
    category: "rudrabhishek",
    categoryLabel: "रुद्राभिषेक",
    src: "", // Image Path Yahan Daalein
    alt: "Mahamrityunjay Jaap"
  },
  {
    id: 12,
    title: "पंडित हरिओम शर्मा जी यजमान पूजन",
    subtitle: "उज्जैन तीर्थ क्षेत्र पूजन",
    category: "mahakal",
    categoryLabel: "महाकाल धाम",
    src: hariomsharmaji2,
    alt: "Pt. Hariom Sharma Puja"
  }
];

const Gallery = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const gal = t?.galleryPage;

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? initialGalleryItems
    : initialGalleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-amber-50/60 text-slate-800 min-h-screen py-10 lg:py-16 relative overflow-hidden">
      
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-amber-300/20 via-orange-200/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 lg:space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
            <Camera className="w-4 h-4 text-red-700 animate-pulse" />
            <span>{gal?.badge || (isHindi ? "पवित्र चित्र एवं फोटो दीर्घा" : "Photo Gallery")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent leading-tight">
            {gal?.heading || (isHindi ? "उज्जैन महाकाल धाम पूजा एवं अनुष्ठान गैलरी" : "Ujjain Mahakal Dham Puja Gallery")}
          </h1>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            {gal?.subHeading || (isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी द्वारा उज्जैन महाकाल क्षेत्र में सम्पन्न मुख्य पूजाएं एवं दिव्य क्षण" : "Sacred moments & Pujas conducted by Pt. Hariom Sharma in Ujjain")}
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterAll || (isHindi ? 'सभी तस्वीरें' : 'All Photos')}
          </button>

          <button
            onClick={() => setActiveCategory('mahakal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'mahakal'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterMahakal || (isHindi ? 'महाकाल धाम' : 'Mahakal Dham')}
          </button>

          <button
            onClick={() => setActiveCategory('kaalsarp')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'kaalsarp'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterKaalsarp || (isHindi ? 'कालसर्प दोष' : 'Kaal Sarp Puja')}
          </button>

          <button
            onClick={() => setActiveCategory('mangal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'mangal'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterMangal || (isHindi ? 'मंगल भात पूजा' : 'Mangal Puja')}
          </button>

          <button
            onClick={() => setActiveCategory('rudrabhishek')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'rudrabhishek'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterRudrabhishek || (isHindi ? 'रुद्राभिषेक' : 'Rudrabhishek')}
          </button>

          <button
            onClick={() => setActiveCategory('anushthan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'anushthan'
                ? 'bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white shadow-md scale-105'
                : 'bg-white border border-amber-200 text-slate-800 hover:bg-amber-100/60'
            }`}
          >
            {gal?.filterAnushthan || (isHindi ? 'विशेष अनुष्ठान' : 'Anushthan')}
          </button>
        </div>

        {/* GALLERY PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-amber-200/90 hover:border-amber-400 rounded-2xl p-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {item.src ? (
                /* Active Photo View */
                <div
                  className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer border border-amber-200"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-900/90 text-amber-300 text-[10px] font-bold">
                    {item.categoryLabel}
                  </span>
                </div>
              ) : (
                /* Blank Placeholder Box (Ready for User to add photo path!) */
                <div className="relative aspect-4/3 rounded-xl bg-amber-50/70 border-2 border-dashed border-amber-300 flex flex-col items-center justify-center p-4 text-center space-y-2 group-hover:bg-amber-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shadow-2xs">
                    <ImageIcon className="w-5 h-5 text-red-700" />
                  </div>
                  <span className="text-xs font-bold text-amber-950">
                    {isHindi ? 'फोटो स्थान तैयार है' : 'Photo Slot Ready'}
                  </span>
                  <p className="text-[10px] text-slate-500 italic">
                    {gal?.addPhotoHint || (isHindi ? 'गैलरी में फोटो जोड़ने के लिए src field में इमेज पाथ डालें।' : 'Add image path in src field to display photo.')}
                  </p>
                </div>
              )}

              {/* Title & Subtitle */}
              <div className="pt-3 px-1 space-y-1">
                <h3 className="text-sm font-bold font-serif text-slate-900 line-clamp-1 group-hover:text-red-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA BANNER */}
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
                {isHindi ? 'उज्जैन महाकाल धाम पूजन सेवा' : 'Ujjain Mahakal Dham Puja Service'}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {isHindi ? 'उज्जैन में विधि-विधान से पूजा कराने हेतु संपर्क करें' : 'Contact for Authentic Vedic Pujas in Ujjain'}
              </h4>
              <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                {isHindi ? 'पंडित हरिओम शर्मा जी से सीधे परामर्श करें एवं अपनी तिथि बुक करें।' : 'Directly consult Pt. Hariom Sharma Ji and reserve your Puja date.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://api.whatsapp.com/send?phone=917999646783&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से उज्जैन पूजा हेतु संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to contact Pt. Hariom Sharma Ji for Ujjain Puja.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917999646783"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91-7999646783</span>
            </a>
          </div>
        </div>

      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {selectedImage && selectedImage.src && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-white border-2 border-amber-400 rounded-3xl p-4 shadow-2xl space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-amber-200 pb-2.5">
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-red-800 font-semibold">{selectedImage.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-xl bg-red-800 text-white hover:bg-red-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-hidden rounded-2xl border border-amber-200 flex items-center justify-center bg-slate-950">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || selectedImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
