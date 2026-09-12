import React from 'react';
import Hero from './hero';
import RitualsJourney from './RitualsJourney';
import Service from './service';
import SuvicharBanner from './SuvicharBanner';
import About from './about';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Rituals You Can Book & Start Your Spiritual Journey */}
      <RitualsJourney />

      {/* 3. Our Services (7 Pujas with dual buttons) */}
      <Service />

      {/* 4. Suvichar Banner & Our Blogs */}
      <SuvicharBanner />

      {/* 5. Guruji Profile */}
      <About />

      {/* 6. Client Testimonials */}
      <Testimonials />
    </main>
  );
};

export default Home;
