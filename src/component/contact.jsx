import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, MapPin, Clock, Mail, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';

  return (
    <div className="bg-slate-950 text-amber-50 min-h-screen py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t?.contact?.badge || (isHindi ? "संपर्क करें" : "Contact Us")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent">
            {t?.contact?.heading || (isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी से संपर्क करें" : "Get in Touch with Pt. Hariom Sharma")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            {t?.contact?.subHeading || (isHindi ? "उज्जैन महाकाल धाम में पूजन, कालसर्प दोष निवारण एवं ज्योतिष सलाह हेतु संपर्क करें" : "For Puja booking, Kaal Sarp Dosh remedies & Astrology consultation in Ujjain")}
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
                  {t?.contact?.phoneTitle || (isHindi ? "फोन नंबर" : "Phone Number")}
                </h3>
                <p className="text-xs text-slate-400 mb-2">{t?.contact?.phoneDesc || (isHindi ? "फोन पर तुरंत बात करें" : "Direct Phone Call")}</p>
                <a href="tel:+917999646783" className="text-base font-bold text-amber-400 hover:text-amber-300">
                  +91-7999646783
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
                  {t?.contact?.whatsappTitle || (isHindi ? "व्हाट्सएप परामर्श" : "WhatsApp Consultation")}
                </h3>
                <p className="text-xs text-slate-400 mb-2">{t?.contact?.whatsappDesc || (isHindi ? "व्हाट्सएप पर मैसेज भेजें" : "Send a message on WhatsApp")}</p>
                <a
                  href="https://wa.me/917999646783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-400 hover:text-emerald-300"
                >
                  +91-7999646783 (WhatsApp)
                </a>
              </div>
            </div>

            {/* Main Puja Location Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t?.contact?.pujaAddressTitle || (isHindi ? "मुख्य पूजन स्थल (उज्जैन महाकाल धाम)" : "Main Puja Location (Ujjain Dham)")}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1 leading-relaxed">
                  {t?.contact?.pujaAddressDesc || (isHindi ? "रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001" : "Ramghat Marg, Near Mahakaleshwar Temple, Ujjain (M.P.) 456001")}
                </p>
              </div>
            </div>

            {/* Home & Permanent Address Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t?.contact?.homeAddressTitle || (isHindi ? "गृह एवं स्थायी निवास पता" : "Home & Permanent Address")}
                </h3>
                <p className="text-sm text-amber-300 font-semibold mt-1 leading-relaxed">
                  {t?.contact?.homeAddressDesc || (isHindi ? "L 04 /2, श्री सिटी , दाउदखेडी उज्जैन- 456006" : "L 04 /2, Shree City, Daudkhedi Ujjain - 456006")}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t?.contact?.emailTitle || (isHindi ? "ईमेल पता" : "Email Address")}
                </h3>
                <a href="mailto:hariomsharma@gmail.com" className="text-sm text-amber-400 hover:text-amber-300 font-semibold mt-1 block">
                  {t?.contact?.emailDesc || "hariomsharma@gmail.com"}
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-200">
                  {t?.contact?.timingTitle || (isHindi ? "संपर्क व परामर्श समय" : "Consultation Timings")}
                </h3>
                <p className="text-sm text-amber-300 font-medium mt-1">
                  {t?.contact?.timingDesc || (isHindi ? "प्रातः 07:00 बजे से रात्रि 10:00 बजे तक (प्रतिदिन)" : "07:00 AM to 10:00 PM (Daily)")}
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold font-serif text-amber-200 mb-6">
              {isHindi ? "सीधा संदेश भेजें" : "Send Direct Message"}
            </h3>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert(isHindi ? 'धन्यवाद! आपका संदेश प्राप्त हो गया है। हम शीघ्र संपर्क करेंगे।' : 'Thank you! Your message has been received. We will contact you shortly.');
            }}>
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  {isHindi ? "आपका नाम *" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isHindi ? "अपना नाम दर्ज करें" : "Enter your name"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  {isHindi ? "मोबाइल नंबर *" : "Mobile Number *"}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={isHindi ? "10 अंकों का फोन नंबर" : "10-digit mobile number"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  {isHindi ? "पूजन या ज्योतिष विषय *" : "Puja / Astrology Topic *"}
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 focus:outline-none focus:border-amber-400 text-sm">
                  <option value="kundli">{isHindi ? "जन्म कुंडली विश्लेषण" : "Janma Kundli Analysis"}</option>
                  <option value="kaalsarp">{isHindi ? "कालसर्प / मंगल दोष पूजा (उज्जैन)" : "Kaal Sarp / Mangal Dosh Puja (Ujjain)"}</option>
                  <option value="marriage">{isHindi ? "विवाह एवं गुण मिलान" : "Marriage & Matchmaking"}</option>
                  <option value="business">{isHindi ? "व्यापार एवं नौकरी परामर्श" : "Business & Career Consultation"}</option>
                  <option value="gemstone">{isHindi ? "रत्न परामर्श" : "Gemstone Recommendation"}</option>
                  <option value="other">{isHindi ? "अन्य ज्योतिष समस्या" : "Other Query"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">
                  {isHindi ? "संदेश *" : "Message *"}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={isHindi ? "अपनी समस्या संक्षेप में लिखें..." : "Briefly describe your query..."}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/50 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t?.contact?.sendMessage || (isHindi ? "संदेश भेजें" : "Send Message")}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
