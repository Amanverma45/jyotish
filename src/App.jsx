import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './component/navbar';
import Footer from './component/Footer';
import FloatingButtons from './component/FloatingButtons';

import Home from './component/home';
import About from './component/about';
import Panditji from './component/panditji';
import Service from './component/service';
import Kundli from './component/kundli';
import Contact from './component/contact';
import Festivals from './component/festivals';
import Gallery from './component/Gallery';
import Admin from './component/Admin';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-amber-100 flex flex-col items-center justify-center p-6 text-center space-y-4 font-sans">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-3xl font-bold border border-amber-500/40">
            ⚠️
          </div>
          <h1 className="text-2xl font-bold font-serif text-amber-300">
            वेबसाइट लोड करने में समस्या आई है
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            कृपया पेज को रिफ्रेश करें। यदि समस्या बनी रहती है, तो ब्राउज़र कैश (Cache) क्लियर करके पुनः प्रयास करें।
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-xl cursor-pointer"
          >
            🔄 पेज रिफ्रेश करें (Reload Page)
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-slate-950 relative">
            <Navbar />

            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/panditji" element={<Panditji />} />
                <Route path="/services" element={<Service />} />
                <Route path="/festivals" element={<Festivals />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/kundli" element={<Kundli />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </div>

            <Footer />

            {/* Fixed Position Bottom Right Floating Action Buttons (WhatsApp, Phone, Email) */}
            <FloatingButtons />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;