import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, MapPin, Clock, Mail, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    topic: isHindi ? 'जन्म कुंडली विश्लेषण' : 'Janma Kundli Analysis',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawMessage = isHindi
      ? `*जय श्री महाकाल!*\n` +
        `*नया पूछताछ संदेश (वेबसाइट संपर्क फॉर्म):*\n\n` +
        `*नाम:* ${formData.name}\n` +
        `*फोन नंबर:* ${formData.phone}\n` +
        `*विषय/पूजा:* ${formData.topic}\n` +
        `*संदेश:* ${formData.message}`
      : `*Jai Shree Mahakal!*\n` +
        `*New Contact Query (Website Form):*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Topic:* ${formData.topic}\n` +
        `*Message:* ${formData.message}`;

    window.location.href = `https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(rawMessage)}`;
  };

  return (
    <div className="bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-amber-50/60 text-slate-800 min-h-screen py-12 lg:py-20 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-300/20 via-orange-200/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-4 h-4 text-red-700 animate-pulse" />
            <span>{t?.contact?.badge || (isHindi ? "संपर्क करें" : "Contact Us")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent">
            {t?.contact?.heading || (isHindi ? "ज्योतिषाचार्य पं. हरिओम शर्मा जी से संपर्क करें" : "Get in Touch with Pt. Hariom Sharma")}
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {t?.contact?.subHeading || (isHindi ? "उज्जैन महाकाल धाम में पूजन, कालसर्प दोष निवारण एवं ज्योतिष सलाह हेतु संपर्क करें" : "For Puja booking, Kaal Sarp Dosh remedies & Astrology consultation in Ujjain")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-red-800 shrink-0 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  {t?.contact?.phoneTitle || (isHindi ? "फोन नंबर" : "Phone Number")}
                </h3>
                <p className="text-xs text-slate-600 mb-2">{t?.contact?.phoneDesc || (isHindi ? "फोन पर तुरंत बात करें" : "Direct Phone Call")}</p>
                <a href="tel:+919826525736" className="text-base font-extrabold text-red-900 hover:underline">
                  +91-9826525736
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  {t?.contact?.whatsappTitle || (isHindi ? "व्हाट्सएप परामर्श" : "WhatsApp Consultation")}
                </h3>
                <p className="text-xs text-slate-600 mb-2">{t?.contact?.whatsappDesc || (isHindi ? "व्हाट्सएप पर मैसेज भेजें" : "Send a message on WhatsApp")}</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(isHindi ? "जय श्री महाकाल! पं. हरिओम शर्मा जी से व्हाट्सएप पर संपर्क करना चाहता/चाहती हूँ।" : "Jai Shree Mahakal! I want to contact Pt. Hariom Sharma Ji on WhatsApp.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-extrabold text-emerald-700 hover:underline"
                >
                  +91-9826525736 (WhatsApp)
                </a>
              </div>
            </div>

            {/* Main Puja Location Card */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ramghat Marg, Near Mahakaleshwar Temple, Ujjain, Madhya Pradesh 456001")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-red-800 shrink-0 shadow-xs group-hover:bg-red-700 group-hover:text-amber-300 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-red-800 transition-colors">
                  {t?.contact?.pujaAddressTitle || (isHindi ? "मुख्य पूजन स्थल (उज्जैन महाकाल धाम)" : "Main Puja Location (Ujjain Dham)")}
                </h3>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  {t?.contact?.pujaAddressDesc || (isHindi ? "रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001" : "Ramghat Marg, Near Mahakaleshwar Temple, Ujjain (M.P.) 456001")}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 group-hover:underline pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isHindi ? "📍 मैप्स ऐप में लोकेशन खोलें" : "📍 Open Location in Google Maps"}</span>
                </span>
              </div>
            </a>

            {/* Home & Permanent Address Card */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("L 04 /2, Shree City, Daudkhedi, Ujjain, Madhya Pradesh 456006")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-red-800 shrink-0 shadow-xs group-hover:bg-red-700 group-hover:text-amber-300 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-red-800 transition-colors">
                  {t?.contact?.homeAddressTitle || (isHindi ? "गृह एवं स्थायी निवास पता" : "Home & Permanent Address")}
                </h3>
                <p className="text-sm text-red-900 font-bold leading-relaxed">
                  {t?.contact?.homeAddressDesc || (isHindi ? "L 04 /2, श्री सिटी , दाउदखेडी उज्जैन- 456006" : "L 04 /2, Shree City, Daudkhedi Ujjain - 456006")}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 group-hover:underline pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isHindi ? "📍 मैप्स ऐप में लोकेशन खोलें" : "📍 Open Location in Google Maps"}</span>
                </span>
              </div>
            </a>

            {/* Email Card */}
            <div className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-red-800 shrink-0 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  {t?.contact?.emailTitle || (isHindi ? "ईमेल पता" : "Email Address")}
                </h3>
                <a href="mailto:hariomsharma@gmail.com" className="text-sm text-red-900 hover:underline font-bold mt-1 block">
                  {t?.contact?.emailDesc || "hariomsharma@gmail.com"}
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400 hover:shadow-lg transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-red-800 shrink-0 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  {t?.contact?.timingTitle || (isHindi ? "संपर्क व परामर्श समय" : "Consultation Timings")}
                </h3>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  {t?.contact?.timingDesc || (isHindi ? "प्रातः 07:00 बजे से रात्रि 10:00 बजे तक (प्रतिदिन)" : "07:00 AM to 10:00 PM (Daily)")}
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6">
              {isHindi ? "सीधा संदेश भेजें (WhatsApp पर)" : "Send Direct Message (on WhatsApp)"}
            </h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isHindi ? "आपका नाम *" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={isHindi ? "अपना नाम दर्ज करें" : "Enter your name"}
                  className="w-full px-4 py-3 rounded-xl bg-amber-50/50 border border-amber-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-600 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isHindi ? "मोबाइल नंबर *" : "Mobile Number *"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={isHindi ? "10 अंकों का फोन नंबर" : "10-digit mobile number"}
                  className="w-full px-4 py-3 rounded-xl bg-amber-50/50 border border-amber-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-600 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isHindi ? "पूजन या ज्योतिष विषय *" : "Puja / Astrology Topic *"}
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-amber-50/50 border border-amber-300 text-slate-900 focus:outline-none focus:border-amber-600 text-sm font-medium"
                >
                  <option value={isHindi ? "जन्म कुंडली विश्लेषण" : "Janma Kundli Analysis"}>{isHindi ? "जन्म कुंडली विश्लेषण" : "Janma Kundli Analysis"}</option>
                  <option value={isHindi ? "कालसर्प / मंगल दोष पूजा (उज्जैन)" : "Kaal Sarp / Mangal Dosh Puja (Ujjain)"}>{isHindi ? "कालसर्प / मंगल दोष पूजा (उज्जैन)" : "Kaal Sarp / Mangal Dosh Puja (Ujjain)"}</option>
                  <option value={isHindi ? "विवाह एवं गुण मिलान" : "Marriage & Matchmaking"}>{isHindi ? "विवाह एवं गुण मिलान" : "Marriage & Matchmaking"}</option>
                  <option value={isHindi ? "व्यापार एवं नौकरी परामर्श" : "Business & Career Consultation"}>{isHindi ? "व्यापार एवं नौकरी परामर्श" : "Business & Career Consultation"}</option>
                  <option value={isHindi ? "रत्न परामर्श" : "Gemstone Recommendation"}>{isHindi ? "रत्न परामर्श" : "Gemstone Recommendation"}</option>
                  <option value={isHindi ? "अन्य ज्योतिष समस्या" : "Other Query"}>{isHindi ? "अन्य ज्योतिष समस्या" : "Other Query"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isHindi ? "संदेश *" : "Message *"}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={isHindi ? "अपनी समस्या संक्षेप में लिखें..." : "Briefly describe your query..."}
                  className="w-full px-4 py-3 rounded-xl bg-amber-50/50 border border-amber-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-600 text-sm font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>{isHindi ? "व्हाट्सएप पर संदेश भेजें" : "Send Message on WhatsApp"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
