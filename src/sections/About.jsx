import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, BookOpen, HeartHandshake, Mountain, TreePine } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { SCHOOL_INFO, VERIFIED_STATS } from '../data/schoolData';

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 bg-[var(--theme-bg)]/70 relative overflow-hidden">
      {/* Background Subtle Accent Lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#67C9B8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Tula's International School"
          title="The Modern Gurukul Concept"
          subtitle="Combining ancient Indian educational philosophy with 21st-century international infrastructure in the valley of Dehradun."
        />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image & Visual Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                alt="Tula's International School Main Building Dehradun"
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-[var(--theme-bg)]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card border border-[#67C9B8]/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[var(--theme-surface)]/50 text-[var(--theme-accent)]">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--theme-text)]">Himalayan Foothill Campus</h4>
                    <p className="text-xs text-[var(--theme-text)]/70">Clean air, zero noise pollution, and peaceful serene surroundings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 glass-card px-6 py-4 rounded-2xl border border-[#67C9B8]/30 hidden sm:flex items-center gap-4 shadow-2xl">
              <div className="text-3xl font-extrabold text-[var(--theme-accent)] font-serif-heading">Est. 2012</div>
              <div className="text-xs text-[var(--theme-text)]/80 border-l border-[var(--theme-border)] pl-3">
                Over a decade of <br />Educational Leadership
              </div>
            </div>
          </div>

          {/* Column 2: Text Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--theme-text)] font-serif-heading leading-snug">
                Nurturing Mind, Body, & Soul in Dehradun
              </h3>

              <p className="text-base text-[var(--theme-text)]/80 leading-relaxed font-normal">
                Established with the vision of reinstating the revered Gurukul traditions of mentorship, character, and discipline, <strong className="text-[var(--theme-text)]">Tula's International School</strong> stands out as a premier residential institution in Uttarakhand.
              </p>

              <p className="text-sm text-[var(--theme-text)]/70 leading-relaxed font-normal">
                At TIS, education extends far beyond textbooks. We believe that true academic excellence flourishes when supported by physical vitality and moral integrity. Our students learn to think independently, compete globally, and live harmoniously.
              </p>
            </div>

            {/* Core Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[var(--theme-surface)]/20 border border-[var(--theme-border)] space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--theme-accent)] font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-[#F28C72]" /> Academic Excellence
                </div>
                <p className="text-xs text-[var(--theme-text)]/70">CBSE board curriculum tailored for analytical thinking rather than rote learning.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--theme-surface)]/20 border border-[var(--theme-border)] space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--theme-accent)] font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#F28C72]" /> Guru-Shishya Mentor Bond
                </div>
                <p className="text-xs text-[var(--theme-text)]/70">Residential faculty providing round-the-clock guidance and emotional care.</p>
              </div>
            </div>

            {/* Highlights List */}
            <ul className="space-y-2.5 pt-2">
              {[
                "100% Vegetarian nutritious dining planned by clinical nutritionists",
                "Eco-friendly 22-acre campus powered by solar energy & green practices",
                "Affiliated with CBSE New Delhi for Class IV through XII",
                "Fully gated campus with 24/7 security & resident medical team"
              ].map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--theme-text)]/80">
                  <span className="p-1 rounded-full bg-[#67C9B8]/20 text-[var(--theme-accent)] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Verified Stats Grid Bar */}
        <div className="mt-16 pt-12 border-t border-[var(--theme-border)]/70 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[var(--theme-surface)]/20 border border-[var(--theme-border)] text-center hover:border-[#67C9B8]/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[var(--theme-accent)] font-serif-heading mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[var(--theme-text)] mb-1">{stat.label}</div>
              <div className="text-xs text-[var(--theme-text)]/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
