import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { ShieldCheck, Lock, LogOut, Check, Trash2, Star, Sparkles, Filter, RefreshCw, KeyRound, Mail, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

const Admin = () => {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Forgot password & New Password Update states
  const [isResetMode, setIsResetMode] = useState(false);
  const [isNewPasswordMode, setIsNewPasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetMsg, setResetMsg] = useState({ type: '', text: '' });

  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'approved'
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Check URL hash for recovery token or auth state change
    if (window.location.hash.includes('type=recovery')) {
      setIsNewPasswordMode(true);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === 'PASSWORD_RECOVERY') {
        setIsNewPasswordMode(true);
      }
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
          msg = 'Invalid email or password. Please check if your user is confirmed in Supabase Dashboard -> Authentication -> Users.';
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
      setResetMsg({ type: 'error', text: 'Please enter your registered admin email address.' });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/admin`
      });

      if (error) {
        let errorStr = error.message;
        if (errorStr.toLowerCase().includes('rate limit') || errorStr.toLowerCase().includes('security purposes') || error.status === 429) {
          errorStr = 'Email rate limit exceeded! For security, Supabase allows 1 reset email per 60 seconds. Please wait 1 minute before trying again, or check your email inbox/spam folder for the link already sent.';
        }
        setResetMsg({ type: 'error', text: errorStr });
      } else {
        setResetMsg({
          type: 'success',
          text: 'Password reset link sent to your email! Please check your inbox and spam folder.'
        });
      }
    } catch (err) {
      setResetMsg({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateNewPassword = async (e) => {
    e.preventDefault();
    setResetMsg({ type: '', text: '' });

    if (newPassword.length < 6) {
      setResetMsg({ type: 'error', text: 'Password must be at least 6 characters long.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setResetMsg({ type: 'error', text: 'New password and confirmation password do not match.' });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        setResetMsg({ type: 'error', text: `Failed to update password: ${error.message}` });
      } else {
        setResetMsg({
          type: 'success',
          text: 'Password updated successfully! You can now sign in with your new password.'
        });
        setIsNewPasswordMode(false);
        setIsResetMode(false);
        setNewPassword('');
        setConfirmPassword('');
        window.history.replaceState(null, '', window.location.pathname);
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
    if (!window.confirm('Are you sure you want to permanently delete this testimonial?')) return;
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
            <span>Admin Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-amber-200">
            Testimonials Management Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Review, approve, and delete client feedback & star ratings
          </p>
        </div>

        {/* New Password Form (When user opens reset link from email) */}
        {isNewPasswordMode ? (
          <div className="max-w-md mx-auto bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-1 border-b border-amber-900/40 pb-4">
              <KeyRound className="w-10 h-10 text-amber-400 mx-auto mb-2 animate-bounce" />
              <h2 className="text-xl font-bold text-amber-200 font-serif">
                Set New Admin Password
              </h2>
              <p className="text-xs text-slate-400">
                Enter your new password below to update your account
              </p>
            </div>

            {resetMsg.text && (
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

            <form onSubmit={handleUpdateNewPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/80 text-amber-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-amber-900/80 text-amber-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Updating Password...' : 'Save & Set New Password'}
              </button>
            </form>
          </div>
        ) : !session ? (
          /* If NOT Logged In: Login or Password Reset Request Card */
          <div className="max-w-md mx-auto bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Header Icon */}
            <div className="text-center space-y-1 border-b border-amber-900/40 pb-4">
              {isResetMode ? (
                <KeyRound className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              ) : (
                <Lock className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              )}
              <h2 className="text-xl font-bold text-amber-200 font-serif">
                {isResetMode ? 'Reset Admin Password' : 'Admin Sign In'}
              </h2>
              <p className="text-xs text-slate-400">
                {isResetMode
                  ? 'Enter your registered admin email address to receive a password reset link'
                  : 'Enter your Supabase Auth admin credentials to manage testimonials'}
              </p>
            </div>

            {/* Login Error Alert */}
            {!isResetMode && loginError && (
              <div className="p-3.5 rounded-xl bg-red-950/90 border border-red-500/50 text-red-200 text-xs font-medium space-y-1">
                <p>{loginError}</p>
                <div className="text-[11px] text-amber-300 pt-1 border-t border-red-800/60">
                  💡 <strong>Tip:</strong> If you created a user in Supabase, go to <strong>Authentication -&gt; Users</strong> in Supabase Dashboard, click <strong>...</strong> next to your user, and click <strong>Confirm User</strong>.
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
                    Admin Email Address
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
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setIsResetMode(true);
                        setResetMsg({ type: '', text: '' });
                      }}
                      className="text-xs text-amber-400 hover:text-amber-300 hover:underline cursor-pointer font-medium"
                    >
                      Forgot Password?
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
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            ) : (
              /* Reset Password Form */
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">
                    Registered Admin Email
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
                  <span>{loading ? 'Sending...' : 'Send Password Reset Email'}</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsResetMode(false);
                      setResetMsg({ type: '', text: '' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Sign In</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* If Logged In: Admin Dashboard Controls */
          <div className="space-y-6">
            
            {/* Top Admin Status Bar */}
            <div className="bg-slate-900 border border-amber-900/50 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
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
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${fetching ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-950 hover:bg-red-900 border border-red-500/40 text-red-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter:</span>
                
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  All ({testimonials.length})
                </button>

                <button
                  onClick={() => setFilter('pending')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'pending'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  Pending Approval ({testimonials.filter(t => !t.is_approved).length})
                </button>

                <button
                  onClick={() => setFilter('approved')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'approved'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  Approved ({testimonials.filter(t => t.is_approved).length})
                </button>
              </div>
            </div>

            {/* Testimonials List */}
            {filteredList.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/60 rounded-3xl border border-slate-800 text-slate-400 text-sm font-medium">
                No testimonials found for this filter.
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
                          {item.is_approved ? '✅ Approved' : '⏳ Pending Approval'}
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
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer transition-colors"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-red-900/80 hover:bg-red-800 text-red-200 text-xs font-bold flex items-center gap-1 border border-red-500/30 cursor-pointer transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
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
