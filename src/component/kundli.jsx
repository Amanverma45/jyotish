import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Calendar, Clock, MapPin, User, Phone, HelpCircle, Send, CheckCircle2 } from 'lucide-react';

const Kundli = () => {
  const { t, lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    gender: isHindi ? 'पुरुष' : 'Male',
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const rawMessage = isHindi 
      ? `*जय श्री महाकाल!*\n` +
        `*कुंडली परामर्श विवरण (वेबसाइट):*\n\n` +
        `*नाम:* ${formData.name}\n` +
        `*फोन:* ${formData.phone}\n` +
        `*जन्म तिथि:* ${formData.dob}\n` +
        `*जन्म समय:* ${formData.tob}\n` +
        `*जन्म स्थान:* ${formData.pob}\n` +
        `*लिंग:* ${formData.gender}\n` +
        `*समस्या/प्रश्न:* ${formData.query}`
      : `*Jai Shree Mahakal!*\n` +
        `*Kundli Consultation Details (Website):*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*DOB:* ${formData.dob}\n` +
        `*Time:* ${formData.tob}\n` +
        `*Place:* ${formData.pob}\n` +
        `*Gender:* ${formData.gender}\n` +
        `*Query:* ${formData.query}`;

    // Use safe URI encoding to handle special characters (&, #, %, etc.) in user input
    window.location.href = `https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(rawMessage)}`;
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.kundli.badge}</span>
          </div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">
            {t.kundli.heading}
          </h1>
          <p className="text-slate-600 text-sm">
            {t.kundli.subHeading}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-xl font-bold text-slate-900 font-serif">
                {isHindi ? "विवरण व्हाट्सएप पर भेज दिया गया है!" : "Details Sent on WhatsApp!"}
              </h2>
              <p className="text-slate-600 text-sm">
                {isHindi ? "पंडित हरिओम शर्मा जी शीघ्र ही आपसे संपर्क करेंगे।" : "Pt. Hariom Sharma Ji will respond to your query shortly."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 rounded-lg bg-amber-600 text-white font-bold text-sm"
              >
                {isHindi ? "दोबारा भरें" : "Fill Again"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formName} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.kundli.formNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formPhone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.kundli.formPhonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formDob} *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formTob} *
                  </label>
                  <input
                    type="time"
                    name="tob"
                    required
                    value={formData.tob}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formPob} *
                  </label>
                  <input
                    type="text"
                    name="pob"
                    required
                    value={formData.pob}
                    onChange={handleChange}
                    placeholder={isHindi ? "उदा. उज्जैन, दिल्ली..." : "e.g. Ujjain, Delhi..."}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.kundli.formGender}
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                  >
                    <option value={isHindi ? "पुरुष" : "Male"}>{t.kundli.genderMale}</option>
                    <option value={isHindi ? "महिला" : "Female"}>{t.kundli.genderFemale}</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.kundli.formQuery}
                </label>
                <textarea
                  name="query"
                  rows={3}
                  value={formData.query}
                  onChange={handleChange}
                  placeholder={t.kundli.formQueryPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-amber-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.kundli.submitBtn}</span>
              </button>

            </form>
          )}

          <div className="mt-6 pt-4 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-600 mb-1">
              {t?.kundli?.directCall || (isHindi ? "सीधा कॉल करें:" : "Direct Call:")}
            </p>
            <a href="tel:+919826525736" className="text-base font-bold text-amber-700 hover:underline">
              📞 +91-9826525736
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Kundli;
