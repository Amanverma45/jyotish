import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Camera, Eye, X, Phone, Award } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

import sharmaji from '../assets/sharmaji.png';

// Dynamically auto-load ALL images placed inside 'src/assets/gallery_images' folder!
// Simply drag & drop any new photo into 'src/assets/gallery_images' and it will display automatically.
const galleryImageModules = import.meta.glob('../assets/gallery_images/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

const galleryImages = Object.entries(galleryImageModules)
  .filter(([filePath]) => {
    const lowerPath = filePath.toLowerCase();
    return !lowerPath.includes('sharmaji') && !lowerPath.includes('pandit') && !lowerPath.includes('hariom');
  })
  .map(([filePath, mod], index) => {
    const fileName = filePath.split('/').pop() || `Photo ${index + 1}`;
    return {
      id: index + 1,
      src: mod.default || mod,
      alt: fileName.split('.')[0].replace(/[-_]/g, ' ')
    };
  });

const Gallery = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';
  const gal = t?.galleryPage;

  const [selectedImage, setSelectedImage] = useState(null);

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
            {gal?.heading || (isHindi ? "उज्जैन महाकाल धाम फोटो गैलरी" : "Ujjain Mahakal Dham Photo Gallery")}
          </h1>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            {gal?.subHeading || (isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी द्वारा उज्जैन महाकाल क्षेत्र में सम्पन्न मुख्य पूजाएं एवं पावन क्षण" : "Sacred moments & Pujas conducted by Pt. Hariom Sharma in Ujjain")}
          </p>
        </div>

        {/* DYNAMIC GALLERY PHOTO GRID (Auto-mapped from src/assets/gallery_images) */}
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white border-2 border-amber-200/80 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt || "Gallery Photo"}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-amber-500/90 text-slate-950 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-3xl bg-white/80 border border-amber-200">
            <p className="text-slate-600 font-bold text-base">
              {isHindi ? "gallery_images फ़ोल्डर में कोई फोटो उपलब्ध नहीं है।" : "No images found in gallery_images folder."}
            </p>
          </div>
        )}

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
              href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से उज्जैन पूजा हेतु संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to contact Pt. Hariom Sharma Ji for Ujjain Puja.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+919826525736"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91-9826525736</span>
            </a>
          </div>
        </div>

      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950/90 border-2 border-amber-400/80 rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-red-700 text-white hover:bg-red-800 shadow-lg cursor-pointer transition-transform hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[85vh] w-full overflow-hidden rounded-2xl flex items-center justify-center bg-black/50">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || "Full View"}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
