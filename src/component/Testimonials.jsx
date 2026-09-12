import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: 'राजेश शर्मा',
      location: 'इंदौर, मध्य प्रदेश',
      review: 'पंडित हरिओम शर्मा जी के बताए अनुसार उज्जैन में कालसर्प दोष पूजा करवाई। पूजा के पश्चात व्यापार में अभूतपूर्व प्रगति हुई और मानसिक तनाव समाप्त हो गया।',
      rating: 5
    },
    {
      id: 2,
      name: 'अमित एवं सुनीता वर्मा',
      location: 'दिल्ली',
      review: 'हमारे बेटे के विवाह में कई बाधाएं आ रही थीं। पंडित जी ने गुण मिलान और भात पूजा का अचूक मार्गदर्शन दिया। आज बेटा सुखद दांपत्य जीवन जी रहा है।',
      rating: 5
    },
    {
      id: 3,
      name: 'सुरेश मेहता',
      location: 'मुंबई, महाराष्ट्र',
      review: 'कुंडली विश्लेषण में पंडित जी की सटीकता अद्भुत है। उन्होंने जो ग्रह दशा और उपाय बताए, वे 100% सटीक साबित हुए। कोटि-कोटि धन्यवाद!',
      rating: 5
    }
  ];

  return (
    <section className="bg-slate-950 py-16 border-t border-amber-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>श्रद्धालुओं के अनुभव</span>
          </div>
          <h2 className="text-3xl font-bold font-serif text-amber-200">
            यजमानों का अटूट विश्वास एवं प्रतिक्रियाएं
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-amber-900/40 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-500/50 transition-colors shadow-lg"
            >
              <Quote className="w-8 h-8 text-amber-600/30 absolute top-4 right-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-900/30">
                <div className="font-bold text-amber-300 text-sm font-serif">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400">
                  📍 {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
