import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, PhoneCall, ArrowRight, ClipboardCheck, Users, School } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AdmissionsCTA({ onOpenEnquire }) {
  const steps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: "Submit Inquiry Form",
      desc: "Fill our online form or request prospectus to register your interest for Class IV–XII."
    },
    {
      num: "02",
      icon: Users,
      title: "Campus Visit & Interaction",
      desc: "Schedule a personalized campus tour in Dehradun and meet our academic counselors."
    },
    {
      num: "03",
      icon: School,
      title: "Admission Confirmation",
      desc: "Complete documentation and welcome your child to the Tula's Gurukul family."
    }
  ];

  return (
    <AnimatedSection id="admissions" className="py-24 bg-[var(--theme-bg)]/90 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#67C9B8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Box */}
        <div className="rounded-3xl glass-card border border-[#67C9B8]/30 p-8 sm:p-12 lg:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-[var(--theme-accent)] bg-[var(--theme-surface)]/40 border border-[#67C9B8]/30 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#F28C72]" /> Open for Academic Session 2026–2027
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--theme-text)] font-serif-heading max-w-3xl mx-auto leading-tight">
            Begin Your Journey at <br />
            <span className="gradient-text-coral">Tula's International School</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--theme-text)]/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Give your child the gift of holistic boarding education in Dehradun. Combining academic excellence, sports mastery, and Gurukul values.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="coral"
              size="lg"
              onClick={onOpenEnquire}
              icon={ArrowRight}
              cursorText="Apply"
            >
              Enquire Now for Admissions
            </Button>

            <Button
              variant="teal"
              size="lg"
              href={`tel:${SCHOOL_INFO.helpline}`}
              icon={PhoneCall}
            >
              Call Helpline: {SCHOOL_INFO.helpline}
            </Button>
          </div>

          {/* 3 Step Admission Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[var(--theme-border)]/70 text-left">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="p-6 rounded-2xl bg-[var(--theme-surface)]/25 border border-[var(--theme-border)] space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[var(--theme-accent)] font-serif-heading">{step.num}</span>
                    <div className="p-2 rounded-xl bg-[#67C9B8]/20 text-[var(--theme-accent)]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--theme-text)]">{step.title}</h3>
                  <p className="text-xs text-[var(--theme-text)]/70 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
