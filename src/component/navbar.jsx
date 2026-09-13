import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Calendar, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock background page scroll when mobile drawer menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const activeLinkClass = ({ isActive }) =>
    `font-semibold text-xs xl:text-sm transition-all py-1.5 px-2 xl:px-3 rounded-lg flex items-center gap-1 whitespace-nowrap ${
      isActive
        ? 'text-red-700 bg-red-50 border border-red-200/80 font-bold shadow-xs'
        : 'text-slate-700 hover:text-red-700 hover:bg-amber-50/60'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-md text-slate-800 transition-all overflow-x-hidden">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-22 py-1.5 gap-2 sm:gap-4">

          {/* Brand Logo & Two-Line Title Header */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink min-w-0 flex-1 pr-1">
            <div className="relative shrink-0 ml-0.5 sm:ml-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 opacity-50 blur-xs group-hover:opacity-100 transition duration-300"></div>
              <img
                src={logoImg}
                alt="Jyotishacharya Pt. Hariom Sharma Logo"
                className="relative w-10 h-10 sm:w-13 sm:h-13 rounded-full border-2 border-amber-400 object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              {/* Line 1: Jyotishacharya */}
              <span className="text-[10px] sm:text-xs font-bold text-amber-900 tracking-wider font-serif uppercase truncate">
                {t?.titleLine1 || "ज्योतिषाचार्य"}
              </span>

              {/* Line 2: Pt. Hariom Sharma */}
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent font-serif tracking-tight leading-snug truncate">
                {t?.titleLine2 || "पं. हरिओम शर्मा"}
              </span>

              {/* Subtitle */}
              <span className="text-[9px] sm:text-[11px] text-slate-600 font-medium tracking-wide truncate">
                {t?.subtitle || "उज्जैन महाकाल धाम पूजन विशेषज्ञ"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-amber-50/70 p-1 rounded-xl border border-amber-200/70 shrink">
            <NavLink to="/" className={activeLinkClass}>
              {t?.nav?.home}
            </NavLink>
            <NavLink to="/about" className={activeLinkClass}>
              {t?.nav?.famousPandit}
            </NavLink>
            <NavLink to="/panditji" className={activeLinkClass}>
              {t?.nav?.ourTeam}
            </NavLink>
            <NavLink to="/services" className={activeLinkClass}>
              {t?.nav?.pujaServices}
            </NavLink>
            <NavLink to="/services" className={activeLinkClass}>
              {t?.nav?.blog}
            </NavLink>
            <NavLink to="/contact" className={activeLinkClass}>
              {t?.nav?.contact}
            </NavLink>
          </nav>

          {/* Right Controls: Language Switcher + Call / Book CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">

            {/* Language Switcher inside Navbar */}
            <div className="flex items-center bg-amber-100/80 border border-amber-300 rounded-lg p-0.5 text-xs font-bold shadow-2xs">
              <button
                onClick={() => toggleLanguage('hi')}
                className={`px-2 py-1 rounded-md transition-all ${
                  lang === 'hi'
                    ? 'bg-gradient-to-r from-amber-600 to-red-700 text-white shadow-xs font-bold'
                    : 'text-amber-900 hover:text-red-900'
                }`}
                title="हिंदी में बदलें"
              >
                हिंदी
              </button>
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-2 py-1 rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-amber-600 to-red-700 text-white shadow-xs font-bold'
                    : 'text-amber-900 hover:text-red-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Direct Phone Number Pill */}
            <a
              href="tel:+917999646783"
              className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>+91-7999646783</span>
            </a>

            {/* Book Puja CTA Button */}
            <Link
              to="/kundli"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-600 via-red-700 to-red-800 hover:from-amber-500 hover:to-red-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 shrink-0"
              title={lang === 'hi' ? "पूजा बुक करें" : "Book Puja"}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t?.nav?.bookNow || (lang === 'hi' ? "पूजा बुक करें" : "Book Puja")}</span>
            </Link>
          </div>

          {/* Mobile & Tablet Quick Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">

            {/* Mobile Language Switcher Toggle */}
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-1 text-xs bg-amber-100/90 border border-amber-300 px-2.5 py-1.5 rounded-lg text-amber-900 font-bold shadow-2xs cursor-pointer shrink-0"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-700" />
              <span>{lang === 'hi' ? 'EN' : 'हिंदी'}</span>
            </button>

            {/* Mobile Drawer Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-lg bg-amber-50 text-slate-800 border border-amber-300 focus:outline-none active:bg-amber-100 flex items-center justify-center shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5 text-red-700" /> : <Menu className="w-5.5 h-5.5 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer & Click-Outside Backdrop */}
      {isOpen && (
        <>
          {/* Click Outside Backdrop Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-16 sm:top-22 bg-slate-950/60 backdrop-blur-xs z-30 lg:hidden animate-fadeIn"
            aria-hidden="true"
          />

          {/* Mobile Drawer Content */}
          <div className="relative z-40 lg:hidden bg-white border-b border-amber-200 px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-2xl">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.home}
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.famousPandit}
            </NavLink>
            <NavLink
              to="/panditji"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.ourTeam}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.pujaServices}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.blog}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-red-700 hover:bg-amber-50"
            >
              {t?.nav?.contact}
            </NavLink>

            <div className="pt-3 border-t border-amber-100 flex flex-col gap-2.5">
              <a
                href="tel:+917999646783"
                className="w-full text-center py-2.5 bg-amber-100 border border-amber-300 text-amber-900 font-bold rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-red-700" />
                <span>{lang === 'hi' ? "कॉल करें: +91-7999646783" : "Call Now: +91-7999646783"}</span>
              </a>

              <Link
                to="/kundli"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-amber-600 to-red-700 text-white font-bold rounded-xl shadow-md text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t?.nav?.bookNow || (lang === 'hi' ? "पूजा बुक करें" : "Book Puja")}</span>
              </Link>
            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Navbar;
