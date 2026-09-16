import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, Sparkles, PlusCircle, CheckCircle2, MessageSquarePlus, UserCheck, ShieldCheck, Check, Trash2, LogOut } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [session, setSession] = useState(null);

  // Form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  // Check auth session for admin status
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch testimonials from Supabase
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error.message);
      } else if (data) {
        setReviewsList(data);
      }
    } catch (err) {
      console.error('Failed to load testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [session]);

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: name.trim(),
            location: location.trim() || (isHindi ? 'उज्जैन श्रद्धालु' : 'Devotee'),
            review: review.trim(),
            rating: Number(rating) || 5,
            is_approved: false
          }
        ]);

      if (error) {
        alert(isHindi ? `त्रुटि: ${error.message}` : `Error: ${error.message}`);
        return;
      }

      // Clear form & show success
      setName('');
      setLocation('');
      setRating(5);
      setReview('');
      setShowForm(false);
      setSubmittedSuccess(true);
      fetchTestimonials();

      setTimeout(() => {
        setSubmittedSuccess(false);
      }, 7000);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  const handleApprove = async (id) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ is_approved: true })
        .eq('id', id);

      if (error) {
        alert(isHindi ? `त्रुटि: ${error.message}` : `Error: ${error.message}`);
      } else {
        fetchTestimonials();
      }
    } catch (err) {
      console.error('Approve error:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(isHindi ? 'क्या आप इस समीक्षा को हटाना चाहते हैं?' : 'Are you sure you want to delete this testimonial?')) return;
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) {
        alert(isHindi ? `त्रुटि: ${error.message}` : `Error: ${error.message}`);
      } else {
        fetchTestimonials();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
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
        
        {/* Admin Bar Banner if logged in */}
        {session && (
          <div className="bg-amber-950/90 border border-amber-500/50 rounded-2xl p-4 text-amber-200 flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold">
                {isHindi ? `एडमिन मोड सक्रिय (${session?.user?.email || 'Admin'})` : `Admin Mode Active (${session?.user?.email || 'Admin'})`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/admin"
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm"
              >
                {isHindi ? 'एडमिन पैनल' : 'Admin Panel'}
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="px-3.5 py-1.5 rounded-xl bg-red-900/80 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 border border-red-500/40 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{isHindi ? 'लॉगआउट' : 'Logout'}</span>
              </button>
            </div>
          </div>
        )}

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-xl hover:scale-103 active:scale-95 transition-all cursor-pointer"
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
              <span className="font-bold block">{isHindi ? 'धन्यवाद! आपकी समीक्षा सफलतापूर्वक सबमिट हो गई है।' : 'Thank you! Your review has been submitted.'}</span>
              <span>{isHindi ? 'एडमिन द्वारा स्वीकृत (Approve) होने के बाद यह तुरंत लाइव हो जाएगी।' : 'It will be live right after admin approval.'}</span>
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
                          className="p-1 text-2xl focus:outline-none hover:scale-125 transition-transform cursor-pointer"
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
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold text-xs cursor-pointer"
                >
                  {isHindi ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md cursor-pointer"
                >
                  {isHindi ? 'समीक्षा सबमिट करें' : 'Submit Review'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12 text-amber-400 text-sm font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 animate-spin" />
            <span>{isHindi ? 'समीक्षाएं लोड हो रही हैं...' : 'Loading testimonials...'}</span>
          </div>
        ) : reviewsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((item) => (
              <div
                key={item.id}
                className={`bg-slate-900/90 border ${
                  item.is_approved ? 'border-amber-900/40' : 'border-amber-500/80 bg-amber-950/20'
                } rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl hover:-translate-y-1`}
              >
                <Quote className="w-8 h-8 text-amber-600/30 absolute top-4 right-4" />
                
                {/* Pending Approval Badge if Admin view */}
                {!item.is_approved && (
                  <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/40 w-max">
                    <span>⏳ {isHindi ? 'स्वीकृति की प्रतीक्षा (Pending)' : 'Pending Approval'}</span>
                  </div>
                )}

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

                <div className="space-y-3">
                  <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-amber-300 text-sm font-serif">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        📍 {item.location}
                      </div>
                    </div>
                    {item.created_at && (
                      <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-1 rounded-md">
                        {new Date(item.created_at).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US')}
                      </span>
                    )}
                  </div>

                  {/* Admin Inline Action Controls */}
                  {session && (
                    <div className="pt-2 border-t border-amber-900/30 flex items-center gap-2 justify-end">
                      {!item.is_approved && (
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{isHindi ? 'Approve' : 'Approve'}</span>
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1.5 rounded-lg bg-red-900/80 hover:bg-red-800 text-red-200 text-xs font-bold flex items-center gap-1 border border-red-500/30 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{isHindi ? 'Delete' : 'Delete'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center p-8 rounded-3xl bg-slate-900/60 border border-amber-900/40 space-y-4">
            <MessageSquarePlus className="w-12 h-12 text-amber-400 mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-amber-200 font-serif">
              {isHindi ? 'अभी कोई स्वीकृत समीक्षा दर्ज नहीं हुई है' : 'No Approved Reviews Yet'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isHindi 
                ? 'उज्जैन महाकाल धाम में पंडित हरिओम शर्मा जी से पूजा कराने के पश्चात आप अपनी पहली वास्तविक समीक्षा यहाँ साझा कर सकते हैं!'
                : 'Be the first devotee to share your experience and star rating!'}
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md inline-flex items-center gap-1.5 cursor-pointer"
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
