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

function App() {
  return (
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
              <Route path="/kundli" element={<Kundli />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />

          {/* Fixed Position Bottom Right Floating Action Buttons (WhatsApp, Phone, Email) */}
          <FloatingButtons />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;