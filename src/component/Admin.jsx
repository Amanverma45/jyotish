import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../supabaseClient';
import { ShieldCheck, Lock, LogOut, Check, Trash2, Star, Sparkles, Filter, RefreshCw, KeyRound, Mail, ArrowLeft } from 'lucide-react';

const Admin = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Forgot password states
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetMsg, setResetMsg] = useState({ type: '', text: '' });

  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'approved'
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });

      if (error) {
        let msg = error.message;
        if (msg.includes('Invalid login credentials')) {
          msg = isHindi 
            ? 'ईमेल या पासवर्ड गलत है। कृपया Supabase Dashboard में चेक करें कि यूज़र Confirm हुआ है या पासवर्ड सही डाला है।' 
            : 'Invalid email or password. Please check if user is confirmed in Supabase Dashboard.';
        }
        setLoginError(msg);
      } else {
        setSession(data.session);
      }
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetMsg({ type: '', text: '' });
    if (!email.trim()) {
      setResetMsg({ type: 'error', text: isHindi ? 'कृपया अपना ईमेल दर्ज करें' : 'Please enter your email' });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/admin`
      });

      if (error) {
        setResetMsg({ type: 'error', text: isHindi ? `त्रुटि: ${error.message}` : `Error: ${error.message}` });
      } else {
        setResetMsg({
          type: 'success',
          text: isHindi 
            ? 'पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया गया है! अपना इनबॉक्स / स्पैम फोल्डर देखें।' 
            : 'Password reset link sent to your email! Check your inbox/spam folder.'
        });
      }
    } catch (err) {
      setResetMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  const fetchAllTestimonials = async () => {
    if (!session) return;
    setFetching(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTestimonials(data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (session) {
      fetchAllTestimonials();
    }
  }, [session]);

  const handleApprove = async (id) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ is_approved: true })
        .eq('id', id);

      if (error) {
        alert(error.message);
      } else {
        fetchAllTestimonials();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(isHindi ? 'क्या आप इस समीक्षा को डिलीट करना चाहते हैं?' : 'Are you sure you want to delete this testimonial?')) return;
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) {
        alert(error.message);
      } else {
        fetchAllTestimonials();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredList = testimonials.filter((item) => {
    if (filter === 'pending') return !item.is_approved;
    if (filter === 'approved') return item.is_approved;
    return true;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{isHindi ? 'एडमिन पोर्टल' : 'Admin Portal'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-amber-200">
            {isHindi ? 'समीक्षा (Testimonials) प्रबंधन एडमिन पैनल' : 'Testimonials Management Admin'}
          </h1>
        </div>

        {/* If NOT Logged In: Login or Reset Form */}
        {!session ? (
          <div className="max-w-md mx-auto bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Header Icon */}
            <div className="text-center space-y-1 border-b border-amber-900/40 pb-4">
              {isResetMode ? (
                <KeyRound className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              ) : (
                <Lock className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              )}
              <h2 className="text-xl font-bold text-amber-200 font-serif">
                {isResetMode
                  ? (isHindi ? 'पासवर्ड रीसेट करें' : 'Reset Password')
                  : (isHindi ? 'एडमिन लॉगइन' : 'Admin Login')}
              </h2>
              <p className="text-xs text-slate-400">
                {isResetMode
                  ? (isHindi ? 'अपना पंजीकृत एडमिन ईमेल दर्ज करें, रीसेट लिंक भेज दिया जाएगा' : 'Enter your registered admin email to get a reset link')
                  : (isHindi ? 'Supabase Auth एडमिन ईमेल एवं पासवर्ड से लॉगइन करें' : 'Login with your Supabase Auth admin account')}
              </p>
            </div>

            {/* Login Error Alert */}
            {!isResetMode && loginError && (
              <div className="p-3.5 rounded-xl bg-red-950/90 border border-red-500/50 text-red-200 text-xs font-medium space-y-1">
                <p>{loginError}</p>
                <div className="text-[11px] text-amber-300 pt-1 border-t border-red-800/60">
                  💡 <strong>Tip:</strong> यदि आपने अभी Supabase में User बनाया है, तो Dashboard -&gt; Authentication -&gt; Users में जाएं और अपने यूजर के बगल में <strong>...</strong> पर क्लिक करके <strong>Confirm User</strong> पर क्लिक करें।
                </div>
              </div>
            )}

            {/* Reset Message Alert */}
            {isResetMode && resetMsg.text && (
              <div
                className={`p-3.5 rounded-xl border text-xs font-medium ${
                  resetMsg.type === 'error'
                    ? 'bg-red-950/90 border-red-500/50 text-red-200'
                    : 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200'
                }`}
              >
                {resetMsg.text}
              </div>
            )}

            {/* Login Form vs Reset Form */}
            {!isResetMode ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">
                    {isHindi ? 'एडमिन ईमेल (Admin Email)' : 'Admin Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@pujan.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/80 text-amber-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 text-sm font-medium"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-amber-300">
                      {isHindi ? 'पासवर्ड (Password)' : 'Password'}
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsResetMode(true)}
                      className="text-xs text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                    >
                      {isHindi ? 'पासवर्ड भूल गए?' : 'Forgot Password?'}
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/80 text-amber-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (isHindi ? 'लॉगइन हो रहा है...' : 'Logging in...') : (isHindi ? 'लॉगइन करें' : 'Log In')}
                </button>
              </form>
            ) : (
              /* Reset Password Form */
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">
                    {isHindi ? 'रजिस्टर्ड एडमिन ईमेल दर्ज करें' : 'Registered Admin Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@pujan.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/80 text-amber-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{loading ? (isHindi ? 'भेजा जा रहा है...' : 'Sending...') : (isHindi ? 'पासवर्ड रीसेट लिंक भेजें' : 'Send Reset Link')}</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsResetMode(false)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{isHindi ? 'लॉगइन पर वापस जाएं' : 'Back to Login'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* If Logged In: Admin Dashboard Controls */
          <div className="space-y-6">
            
            {/* Top Info Bar */}
            <div className="bg-slate-900 border border-amber-900/50 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Logged in as</span>
                  <span className="text-sm font-bold text-slate-200">{session.user.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchAllTestimonials}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${fetching ? 'animate-spin' : ''}`} />
                  <span>{isHindi ? 'रिफ्रेश' : 'Refresh'}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-950 hover:bg-red-900 border border-red-500/40 text-red-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{isHindi ? 'लॉगआउट' : 'Logout'}</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">फ़िल्टर:</span>
                
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {isHindi ? `सभी (${testimonials.length})` : `All (${testimonials.length})`}
                </button>

                <button
                  onClick={() => setFilter('pending')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'pending'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {isHindi ? `स्वीकृति प्रतीक्षित (Pending) (${testimonials.filter(t => !t.is_approved).length})` : `Pending (${testimonials.filter(t => !t.is_approved).length})`}
                </button>

                <button
                  onClick={() => setFilter('approved')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'approved'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {isHindi ? `स्वीकृत (Approved) (${testimonials.filter(t => t.is_approved).length})` : `Approved (${testimonials.filter(t => t.is_approved).length})`}
                </button>
              </div>
            </div>

            {/* Testimonials List */}
            {filteredList.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/60 rounded-3xl border border-slate-800 text-slate-400 text-sm font-medium">
                {isHindi ? 'कोई समीक्षा नहीं मिली।' : 'No testimonials found.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredList.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-slate-900 border ${
                      item.is_approved ? 'border-emerald-500/30' : 'border-amber-500/70 bg-amber-950/20'
                    } rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase ${
                          item.is_approved ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                        }`}>
                          {item.is_approved ? (isHindi ? '✅ स्वीकृत (Approved)' : 'Approved') : (isHindi ? '⏳ लंबित (Pending)' : 'Pending')}
                        </span>
                        
                        <div className="flex text-amber-400 items-center gap-1 text-xs">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                          <span className="font-bold ml-1 text-slate-400">{item.rating}/5</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-200 italic font-serif leading-relaxed">
                        "{item.review}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <div className="font-bold text-amber-300 text-xs font-serif">{item.name}</div>
                        <div className="text-[11px] text-slate-400">📍 {item.location}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        {!item.is_approved && (
                          <button
                            onClick={() => handleApprove(item.id)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{isHindi ? 'स्वीकृत करें' : 'Approve'}</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-red-900/80 hover:bg-red-800 text-red-200 text-xs font-bold flex items-center gap-1 border border-red-500/30 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{isHindi ? 'डिलीट करें' : 'Delete'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;
