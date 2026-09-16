import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Heart, Lock } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-amber-900/30 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Pandit Hariom Sharma Logo"
                className="w-10 h-10 rounded-full border border-amber-400 object-cover"
              />
              <span className="font-bold text-base font-serif text-amber-200">
                {t.title}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.brandDesc}
            </p>

            {/* YouTube Official Channel Banner */}
            <div className="pt-1">
              <a
                href="https://www.youtube.com/@JyotishacharyaPtHariomSharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-white text-xs font-bold transition-all shadow-md group"
                title={isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी का ऑफिशियल यूट्यूब चैनल" : "Official YouTube Channel of Pt. Hariom Sharma"}
              >
                <svg className="w-5 h-5 fill-current text-red-500 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                    {isHindi ? 'ऑफिशियल यूट्यूब चैनल' : 'Official YouTube Channel'}
                  </span>
                  <span className="text-xs font-bold text-white">@JyotishacharyaPtHariomSharma</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 font-serif text-sm border-b border-slate-800 pb-1">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><Link to="/" className="hover:text-amber-400">{t.nav.home}</Link></li>
              <li><Link to="/about" className="hover:text-amber-400">{t.nav.famousPandit}</Link></li>
              <li><Link to="/panditji" className="hover:text-amber-400">{t.nav.ourTeam}</Link></li>
              <li><Link to="/services" className="hover:text-amber-400">{t.nav.pujaServices}</Link></li>
              <li><Link to="/festivals" className="hover:text-amber-400">{t?.nav?.festivals || (isHindi ? 'व्रत एवं त्योहार' : 'Festivals')}</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400">{t?.nav?.gallery || (isHindi ? 'फोटो गैलरी' : 'Gallery')}</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 font-serif text-sm border-b border-slate-800 pb-1">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✦ {isHindi ? 'कालसर्प दोष पूजा (उज्जैन)' : 'Kaal Sarp Dosh Puja'}</li>
              <li>✦ {isHindi ? 'मंगल भात पूजा' : 'Mangal Bhaat Puja'}</li>
              <li>✦ {isHindi ? 'जन्म कुंडली विश्लेषण' : 'Kundli Analysis'}</li>
              <li>✦ {isHindi ? 'शादी एवं गुण मिलान' : 'Matchmaking & Marriage'}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 font-serif text-sm border-b border-slate-800 pb-1">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ramghat Marg, Near Mahakaleshwar Temple, Ujjain, Madhya Pradesh 456001")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 hover:underline cursor-pointer"
                  title={isHindi ? "गूगल मैप्स में लोकेशन देखें" : "View Location on Google Maps"}
                >
                  {t?.contactInfo?.address || (isHindi ? "रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001" : "Ramghat Marg, Near Mahakaleshwar Temple, Ujjain (M.P.) 456001")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${t?.contactInfo?.phone || "+919826525736"}`} className="hover:text-amber-300 font-semibold text-amber-300">
                  {t?.contactInfo?.phone || "+91-9826525736"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${t?.contactInfo?.email || "hariomsharma@gmail.com"}`} className="hover:text-amber-300">
                  {t?.contactInfo?.email || "hariomsharma@gmail.com"}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <svg className="w-4 h-4 fill-current text-red-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <a
                  href="https://www.youtube.com/@JyotishacharyaPtHariomSharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 text-amber-200 font-semibold"
                >
                  {isHindi ? 'यूट्यूब चैनल' : 'YouTube Channel'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} {t.footer.designedFor}. {t.footer.rights}</p>
          
          <p className="text-slate-400 text-xs flex items-center gap-1 font-medium">
            <span>Developed by</span>
            <span className="font-bold text-amber-300">Aman Verma</span>
            <span>·</span>
            <a
              href="https://webforge-lab.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition-colors"
            >
              WebForge Lab
            </a>
          </p>

          <div className="flex items-center gap-4 text-amber-400/80">
            <span>{isHindi ? 'उज्जैन महाकालेश्वर धाम' : 'Ujjain Mahakaleshwar Dham'}</span>
            <Link to="/admin" className="text-slate-600 hover:text-amber-400 transition-colors flex items-center gap-1 text-[11px]" title="Admin Portal">
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
