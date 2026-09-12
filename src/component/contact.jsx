import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, MapPin, Clock, Mail, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-950 text-amber-50 min-h-screen py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent">
            {t.contact.heading}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.contact.subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t.contact.phoneTitle}
                </h3>
                <p className="text-xs text-slate-400 mb-2">फोन पर तुरंत बात करें</p>
                <a href="tel:+919826000000" className="text-base font-bold text-amber-400 hover:text-amber-300">
                  +91 98260 XXXXX
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t.contact.whatsappTitle}
                </h3>
                <p className="text-xs text-slate-400 mb-2">व्हाट्सएप पर मैसेज भेजें</p>
                <a
                  href="https://wa.me/919826000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-400 hover:text-emerald-300"
                >
                  +91 98260 XXXXX (WhatsApp)
                </a>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t.contact.addressTitle}
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  {t.contact.addressDesc}
                </p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t.contact.timingTitle}
                </h3>
                <p className="text-sm text-amber-300 font-medium mt-1">
                  {t.contact.timingDesc}
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold font-serif text-amber-200 mb-6">
              सीधा संदेश भेजें
            </h3>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('धन्यवाद! आपका संदेश प्राप्त हो गया है। हम शीघ्र संपर्क करेंगे।');
            }}>
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  आपका नाम *
                </label>
                <input
                  type="text"
                  required
                  placeholder="अपना नाम दर्ज करें"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  मोबाइल नंबर *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10 अंकों का फोन नंबर"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  पूजन या ज्योतिष विषय *
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 focus:outline-none focus:border-amber-400 text-sm">
                  <option value="kundli">जन्म कुंडली विश्लेषण</option>
                  <option value="kaalsarp">कालसर्प / मंगल दोष पूजा (उज्जैन)</option>
                  <option value="marriage">विवाह एवं गुण मिलान</option>
                  <option value="business">व्यापार एवं नौकरी परामर्श</option>
                  <option value="gemstone">रत्न परामर्श</option>
                  <option value="other">अन्य ज्योतिष समस्या</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  संदेश *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="अपनी समस्या संक्षेप में लिखें..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendMessage}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
