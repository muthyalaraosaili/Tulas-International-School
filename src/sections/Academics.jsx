import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Award, ChevronRight, CheckCircle, X, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

const iconMap = {
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Award: Award,
};

export default function Academics({ onOpenEnquire }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <AnimatedSection id="academics" className="py-24 bg-[var(--theme-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Framework"
          title="Curriculum & Programs"
          subtitle="Affiliated with CBSE, New Delhi. Delivering structured academic programs designed for Class IV to Class XII."
        />

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACADEMIC_PROGRAMS.map((prog, index) => {
            const IconComponent = iconMap[prog.icon] || BookOpen;

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col h-full border border-[var(--theme-border)]"
              >
                {/* Top Image Frame */}
                <div className="relative h-52 overflow-hidden bg-[var(--theme-bg)]">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-[var(--theme-bg)]/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-[var(--theme-accent)] bg-[var(--theme-bg)]/90 border border-[#67C9B8]/30 backdrop-blur-md">
                    {prog.grades}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-[#F28C72] text-[#081921] font-bold shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-[var(--theme-accent)] uppercase tracking-widest">
                      {prog.tag}
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--theme-text)] font-serif-heading leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-sm text-[var(--theme-text)]/80 leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Quick highlights list */}
                    <div className="pt-2 space-y-2">
                      {prog.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[var(--theme-text)]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[var(--theme-border)]/70 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="text-xs font-bold text-[var(--theme-accent)] hover:text-[var(--theme-text)] inline-flex items-center gap-1 group"
                    >
                      Program Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onOpenEnquire}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrated Coaching Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-card border border-[#67C9B8]/30 bg-gradient-to-r from-[var(--theme-bg)] via-[var(--theme-surface)]/40 to-[var(--theme-bg)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[var(--theme-accent)] bg-[var(--theme-surface)]/40 border border-[#67C9B8]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C72]" /> Special Competitive Edge
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--theme-text)] font-serif-heading">
              Integrated Entrance Coaching (JEE / NEET / CLAT)
            </h4>
            <p className="text-xs sm:text-sm text-[var(--theme-text)]/80 max-w-2xl">
              Tula's International School integrates specialized coaching modules directly into senior secondary routine, saving students time and providing structured exam preparation inside campus grounds.
            </p>
          </div>

          <Button
            variant="coral"
            size="md"
            onClick={onOpenEnquire}
            className="shrink-0"
          >
            Inquire About Coaching
          </Button>
        </div>

      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-[var(--theme-bg)]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden space-y-6"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[var(--theme-text)]/60 hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface)]/40"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-[var(--theme-accent)] bg-[var(--theme-surface)]/40 border border-[#67C9B8]/30">
                  {selectedProgram.grades}
                </span>
                <span className="text-xs font-semibold text-[var(--theme-text)]/60 uppercase tracking-wider">
                  CBSE Affiliated Program
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--theme-text)] font-serif-heading">
                  {selectedProgram.title}
                </h3>
                <p className="text-sm text-[var(--theme-text)]/80 mt-2 leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[var(--theme-accent)] uppercase tracking-wider">
                  Key Pedagogical Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProgram.highlights.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[var(--theme-surface)]/25 border border-[var(--theme-border)] flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                      <span className="text-xs text-[var(--theme-text)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--theme-border)] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-xs font-semibold text-[var(--theme-text)]/60 hover:text-[var(--theme-text)]"
                >
                  Back to Overview
                </button>

                <Button
                  variant="coral"
                  size="sm"
                  onClick={() => {
                    setSelectedProgram(null);
                    onOpenEnquire();
                  }}
                >
                  Request Detailed Syllabus
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
