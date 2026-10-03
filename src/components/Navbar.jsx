
import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { Menu, X, Phone, GraduationCap, ChevronRight } from 'lucide-react'; 
import { NAV_LINKS, SCHOOL_INFO } from '../data/schoolData'; 
import Button from './Button'; 
 
export default function Navbar({ onOpenEnquire }) { 
  const [scrolled, setScrolled] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('hero'); 
 
  useEffect(() => { 
    const handleScroll = () => { 
      setScrolled(window.scrollY > 30); 
 
      // Section spy logic 
      const sections = NAV_LINKS.map(link => link.href.substring(1)); 
      const scrollPosition = window.scrollY + 200; 
 
      for (let i = sections.length - 1; i >= 0; i--) { 
        const sectionEl = document.getElementById(sections[i]); 
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) { 
          setActiveSection(sections[i]); 
          break; 
        } 
      } 
    }; 
 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 
 
  const handleNavClick = (e, href) => { 
    e.preventDefault(); 
    setMobileMenuOpen(false); 
    const targetId = href.replace('#', ''); 
    const element = document.getElementById(targetId); 
    if (element) { 
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; 
      window.scrollTo({ top: y, behavior: 'smooth' }); 
    } 
  }; 
 
  return ( 
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"> 
      {/* Top Banner (Desktop only) */} 
      <div className={`hidden lg:block bg-[#081921]/95 text-[#F1F7F5]/70 text-xs py-1.5 px-8 border-b border-[#164E63]/60 transition-all ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}> 
        <div className="max-w-7xl mx-auto flex items-center justify-between"> 
          <div className="flex items-center gap-6"> 
            <span>📍 {SCHOOL_INFO.address}</span> 
            <span>📞 Helpline: {SCHOOL_INFO.helpline}</span> 
          </div> 
          <div className="flex items-center gap-4 text-[#67C9B8] font-medium"> 
            <span className="inline-flex items-center gap-1.5"> 
              <GraduationCap className="w-3.5 h-3.5 text-[#F28C72]" /> CBSE Affiliated Residential School 
            </span> 
          </div> 
        </div> 
      </div> 
 
      {/* Main Navbar */} 
      <nav 
        className={`transition-all duration-300 ${ 
          scrolled 
            ? 'glass-nav py-3.5 shadow-2xl shadow-[#081921]/80' 
            : 'bg-gradient-to-b from-[#081921]/95 via-[#081921]/60 to-transparent py-5' 
        }`} 
      > 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"> 
          
          {/* Logo - Original Tulas International School Logo */} 
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')} 
            aria-label="Tula's International School Home" 
            className="flex items-center group shrink-0" 
          > 
            <img
              src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
              alt="Tula's International School"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </a>
 
          {/* Desktop Navigation Links */} 
          <div className="hidden lg:flex items-center gap-1 bg-[#164E63]/30 p-1.5 rounded-full border border-[#67C9B8]/20 backdrop-blur-md"> 
            {NAV_LINKS.map((link) => { 
              const isActive = activeSection === link.href.replace('#', ''); 
              return ( 
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)} 
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 ${ 
                    isActive ? 'text-[#081921]' : 'text-[#F1F7F5]/80 hover:text-[#67C9B8]' 
                  }`} 
                > 
                  {isActive && ( 
                    <motion.div 
                      layoutId="activeNavPill" 
                      className="absolute inset-0 bg-gradient-to-r from-[#67C9B8] to-[#F28C72] rounded-full shadow-[0_0_15px_rgba(103,201,184,0.6)]" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }} 
                    /> 
                  )} 
                  <span className="relative z-10">{link.name}</span> 
                </a> 
              ); 
            })} 
          </div> 
 
          {/* CTA & Mobile Toggle */} 
          <div className="flex items-center gap-3"> 
            <div className="hidden sm:block"> 
              <Button 
                variant="coral" 
                size="sm" 
                onClick={onOpenEnquire} 
                cursorText="Enquire" 
              > 
                Enquire Now 
              </Button> 
            </div> 
 
            {/* Mobile menu button */} 
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-expanded={mobileMenuOpen} 
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} 
              className="lg:hidden p-2.5 rounded-xl bg-[#164E63]/40 border border-[#67C9B8]/30 text-[#F1F7F5] hover:text-[#67C9B8] focus:outline-none focus:ring-2 focus:ring-[#67C9B8]" 
            > 
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} 
            </button> 
          </div> 
        </div> 
      </nav> 
 
      {/* Mobile Menu Drawer */} 
      <AnimatePresence> 
        {mobileMenuOpen && ( 
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3, ease: 'easeInOut' }} 
            className="lg:hidden bg-[#081921]/98 border-b border-[#164E63] backdrop-blur-xl overflow-hidden px-4 pt-4 pb-6 space-y-4" 
          > 
            <div className="flex flex-col space-y-1"> 
              {NAV_LINKS.map((link) => { 
                const isActive = activeSection === link.href.replace('#', ''); 
                return ( 
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${ 
                      isActive 
                        ? 'bg-[#164E63]/50 text-[#67C9B8] border border-[#67C9B8]/30' 
                        : 'text-[#F1F7F5]/80 hover:bg-[#164E63]/30 hover:text-[#67C9B8]' 
                    }`} 
                  > 
                    <span>{link.name}</span> 
                    <ChevronRight className="w-4 h-4 text-[#67C9B8]" /> 
                  </a> 
                ); 
              })} 
            </div> 
 
            <div className="pt-2 border-t border-[#164E63]/80 flex flex-col gap-3"> 
              <Button 
                variant="coral" 
                size="md" 
                className="w-full" 
                onClick={() => { 
                  setMobileMenuOpen(false); 
                  onOpenEnquire(); 
                }} 
              > 
                Enquire Now 
              </Button> 
              <div className="text-center text-xs text-[#F1F7F5]/70 pt-1"> 
                📞 Admission Helpline: <a href={`tel:${SCHOOL_INFO.helpline}`} className="text-[#67C9B8] font-semibold">{SCHOOL_INFO.helpline}</a> 
              </div> 
            </div> 
          </motion.div> 
        )} 
      </AnimatePresence> 
    </header> 
  ); 
}