import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Calendar, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeLinkClass = ({ isActive }) =>
    `font-semibold text-xs sm:text-sm transition-all py-2 px-2.5 sm:px-3 rounded-lg flex items-center gap-1 whitespace-nowrap ${
      isActive
        ? 'text-red-700 bg-red-50 border border-red-200/80 font-bold shadow-xs'
        : 'text-slate-700 hover:text-red-700 hover:bg-amber-50/60'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-md text-slate-800 transition-all">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22 sm:h-24 py-2">
          
          {/* Brand Logo & Two-Line Title Header */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group shrink-0 py-1">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 opacity-50 blur-xs group-hover:opacity-100 transition duration-300"></div>
              <img
                src={logoImg}
                alt="Jyotishacharya Pt. Hariom Sharma Logo"
                className="relative w-12 h-12 sm:w-15 sm:h-15 rounded-full border-2 border-amber-400 object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              {/* Line 1: Jyotishacharya */}
              <span className="text-xs sm:text-sm font-bold text-amber-900 tracking-wider font-serif uppercase">
                {t?.titleLine1 || "ज्योतिषाचार्य"}
              </span>

              {/* Line 2: Pt. Hariom Sharma */}
              <span className="text-base sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent font-serif tracking-tight leading-tight">
                {t?.titleLine2 || "पं. हरिओम शर्मा"}
              </span>

              {/* Subtitle */}
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium tracking-wide">
                {t?.subtitle || "उज्जैन महाकाल धाम पूजन विशेषज्ञ"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-amber-50/70 p-1.5 rounded-xl border border-amber-200/70">
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

          {/* Right Controls: Language Switcher + Call / Book CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            
            {/* Language Switcher inside Navbar */}
            <div className="flex items-center bg-amber-100/80 border border-amber-300 rounded-lg p-0.5 text-xs font-bold shadow-2xs">
              <button
                onClick={() => toggleLanguage('hi')}
                className={`px-2.5 py-1 rounded-md transition-all ${
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
                className={`px-2.5 py-1 rounded-md transition-all ${
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
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>+91-7999646783</span>
            </a>

            {/* Book Puja CTA Button */}
            <Link
              to="/kundli"
              className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-red-700 to-red-800 hover:from-amber-500 hover:to-red-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{t?.hero?.ctaKundli}</span>
            </Link>
          </div>

          {/* Mobile & Tablet Quick Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            
            {/* Mobile Language Switcher Toggle */}
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-1 text-[11px] sm:text-xs bg-amber-100/90 border border-amber-300 px-2 sm:px-2.5 py-1.5 rounded-lg text-amber-900 font-bold shadow-2xs"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-700" />
              <span>{lang === 'hi' ? 'EN' : 'हिंदी'}</span>
            </button>

            {/* Mobile Drawer Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-lg bg-amber-50 text-slate-800 border border-amber-300 focus:outline-none active:bg-amber-100"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-amber-200 px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-lg">
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
              <span>कॉल करें: +91-7999646783</span>
            </a>
            
            <Link
              to="/kundli"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-gradient-to-r from-amber-600 to-red-700 text-white font-bold rounded-xl block shadow-md text-sm"
            >
              {t?.hero?.ctaKundli}
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
