import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquireModal from './components/EnquireModal';

import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Facilities from './sections/Facilities';
import WhyTIS from './sections/WhyTIS';
import Activities from './sections/Activities';
import Testimonials from './sections/Testimonials';
import AdmissionsCTA from './sections/AdmissionsCTA';
import Contact from './sections/Contact';

export default function App() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  const handleOpenEnquire = () => setIsEnquireModalOpen(true);
  const handleCloseEnquire = () => setIsEnquireModalOpen(false);

  return (
    <div className="relative min-h-screen bg-[#081921] text-[#F1F7F5] selection:bg-[#67C9B8] selection:text-[#081921]">
      {/* Scroll Progress Bar at Viewport Top */}
      <ScrollProgress />

      {/* Subtle Custom Mouse Cursor Ring */}
      <CustomCursor />

      {/* Responsive Navbar */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenEnquire={handleOpenEnquire} />
        <About />
        <Academics onOpenEnquire={handleOpenEnquire} />
        <Facilities onOpenEnquire={handleOpenEnquire} />
        <WhyTIS />
        <Activities />
        <Testimonials />
        <AdmissionsCTA onOpenEnquire={handleOpenEnquire} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Interactive Enquire Now Modal */}
      <EnquireModal
        isOpen={isEnquireModalOpen}
        onClose={handleCloseEnquire}
      />
    </div>
  );
}
