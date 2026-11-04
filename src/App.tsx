import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main text-text-main relative selection:bg-gold selection:text-bg-main">
      {/* Top subtle golden ambient radial blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] gold-glow opacity-30 pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;

