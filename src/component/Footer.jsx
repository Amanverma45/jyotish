import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

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
              <li><Link to="/contact" className="hover:text-amber-400">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 font-serif text-sm border-b border-slate-800 pb-1">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✦ कालसर्प दोष पूजा (उज्जैन)</li>
              <li>✦ मंगल भात पूजा</li>
              <li>✦ जन्म कुंडली विश्लेषण</li>
              <li>✦ शादी एवं गुण मिलान</li>
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
                <span>रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+917999646783" className="hover:text-amber-300 font-semibold text-amber-300">
                  +91-7999646783
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>hariomsharma@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} {t.footer.designedFor}. {t.footer.rights}</p>
          <div className="flex items-center gap-1 text-amber-400/80">
            <span>उज्जैन महाकालेश्वर धाम</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
