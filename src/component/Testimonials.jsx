import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, Sparkles, PlusCircle, CheckCircle2, MessageSquarePlus, UserCheck } from 'lucide-react';

const initialReviews = [];

const Testimonials = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [reviewsList, setReviewsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  // Load persisted user reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pujan_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setReviewsList(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load local reviews', e);
    }
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    const newEntry = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || (isHindi ? 'उज्जैन श्रद्धालु' : 'Devotee'),
      review: review.trim(),
      rating: Number(rating) || 5,
      date: isHindi ? 'अभी-अभी जोड गया' : 'Just now'
    };

    const updatedList = [newEntry, ...reviewsList];
    setReviewsList(updatedList);

    // Save user added reviews to localStorage
    try {
      const userOnly = updatedList.filter(item => item.id.startsWith('rev-') && !['rev-1', 'rev-2', 'rev-3'].includes(item.id));
      localStorage.setItem('pujan_user_reviews', JSON.stringify(userOnly));
    } catch (err) {
      console.error('Error saving review to local storage', err);
    }

    // Clear form & show success
    setName('');
    setLocation('');
    setRating(5);
    setReview('');
    setShowForm(false);
    setSubmittedSuccess(true);

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 6000);
  };

  const ratingLabels = {
    5: isHindi ? 'अत्यंत उत्तम (5/5)' : 'Excellent (5/5)',
    4: isHindi ? 'बहुत अच्छा (4/5)' : 'Very Good (4/5)',
    3: isHindi ? 'अच्छा (3/5)' : 'Good (3/5)',
    2: isHindi ? 'औसत (2/5)' : 'Average (2/5)',
    1: isHindi ? 'सुधार योग्य (1/5)' : 'Needs Improvement (1/5)'
  };

  return (
    <section className="bg-slate-950 py-16 sm:py-20 border-t border-amber-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-950 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isHindi ? 'श्रद्धालुओं के वास्तविक अनुभव' : 'Real Client Testimonials'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-200">
            {isHindi ? 'यजमानों का अटूट विश्वास एवं समीक्षाएं' : 'Client Trust & Ratings'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            {isHindi 
              ? 'उज्जैन महाकाल धाम में पंडित हरिओम शर्मा जी द्वारा शास्त्रोक्त पूजन कराने वाले श्रद्धालुओं की समीक्षाएं एवं रेटिंग्स।'
              : 'Ratings and reviews from devotees who performed Pujas under Pt. Hariom Sharma in Ujjain.'}
          </p>

          {/* Action Button: Give Review */}
          <div className="pt-2">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-xl hover:scale-103 active:scale-95 transition-all"
            >
              <MessageSquarePlus className="w-5 h-5" />
              <span>{showForm ? (isHindi ? 'फ़ॉर्म बंद करें' : 'Close Form') : (isHindi ? 'अपनी समीक्षा व रेटिंग दें' : 'Submit Your Review')}</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {submittedSuccess && (
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 flex items-center gap-3 shadow-2xl animate-fade-in">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold block">{isHindi ? 'धन्यवाद! आपकी समीक्षा सफलतापूर्वक लाइव हो गई है।' : 'Thank you! Your review is live now.'}</span>
              <span>{isHindi ? 'आपकी रेटिंग वेबसाइट पर दिखाई दे रही है।' : 'Your rating has been saved.'}</span>
            </div>
          </div>
        )}

        {/* Interactive Add Review Form Modal Card */}
        {showForm && (
          <div className="max-w-2xl mx-auto bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-amber-900/40 pb-4 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-200 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-amber-400" />
                <span>{isHindi ? 'अपना वास्तविक अनुभव साझा करें' : 'Share Your Experience'}</span>
              </h3>
              <span className="text-xs text-amber-400 font-semibold bg-amber-950 px-3 py-1 rounded-full border border-amber-500/30">
                100% Verified Review
              </span>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                    {isHindi ? 'आपका नाम *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isHindi ? 'उदा. अमित कुमार' : 'e.g. Amit Kumar'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/60 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                    {isHindi ? 'शहर / राज्य' : 'City / State'}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={isHindi ? 'उदा. भोपाल, म.प्र.' : 'e.g. Bhopal, MP'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/60 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              {/* Star Rating Picker */}
              <div className="space-y-2 py-2">
                <label className="block text-xs font-semibold text-amber-200">
                  {isHindi ? 'रेटिंग स्टार्स चुनें (1 से 5):' : 'Select Rating Stars (1 to 5):'}
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-slate-950 p-2.5 rounded-xl border border-amber-900/60">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isActive = (hoverRating || rating) >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 text-2xl focus:outline-none hover:scale-125 transition-transform"
                          title={`${starVal} Star`}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              isActive ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-2 rounded-xl border border-amber-500/30">
                    {ratingLabels[hoverRating || rating]}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  {isHindi ? 'आपका अनुभव व समीक्षा *' : 'Your Review / Experience *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder={isHindi ? 'उज्जैन में पूजा कराने का अपना अनुभव यहाँ लिखें...' : 'Write your review here...'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/60 text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold text-xs"
                >
                  {isHindi ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md"
                >
                  {isHindi ? 'समीक्षा प्रकाशित करें' : 'Publish Review'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews Cards Grid */}
        {reviewsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-amber-900/40 rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl hover:-translate-y-1"
              >
                <Quote className="w-8 h-8 text-amber-600/30 absolute top-4 right-4" />
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded-md border border-amber-500/30">
                      {item.rating}.0 / 5
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 italic leading-relaxed font-serif">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-amber-300 text-sm font-serif">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      📍 {item.location}
                    </div>
                  </div>
                  {item.date && (
                    <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-1 rounded-md">
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center p-8 rounded-3xl bg-slate-900/60 border border-amber-900/40 space-y-4">
            <MessageSquarePlus className="w-12 h-12 text-amber-400 mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-amber-200 font-serif">
              {isHindi ? 'अभी कोई समीक्षा दर्ज नहीं हुई है' : 'No Reviews Yet'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isHindi 
                ? 'उज्जैन महाकाल धाम में पंडित हरिओम शर्मा जी से पूजा कराने के पश्चात आप अपनी पहली वास्तविक समीक्षा यहाँ साझा कर सकते हैं!'
                : 'Be the first devotee to share your experience and star rating!'}
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md inline-flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{isHindi ? 'पहली समीक्षा लिखें' : 'Write First Review'}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
