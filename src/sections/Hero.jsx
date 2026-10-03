import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Award, Play, Compass } from 'lucide-react';
import Button from '../components/Button';
import { SCHOOL_INFO, VERIFIED_STATS } from '../data/schoolData';

export default function Hero({ onOpenEnquire }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#081921]">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#67C9B8]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#F28C72]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#164E63_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#164E63]/40 border border-[#67C9B8]/30 backdrop-blur-md">
              <Compass className="w-4 h-4 text-[#F28C72] animate-spin-slow" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#67C9B8] uppercase">
                {SCHOOL_INFO.tagline} • Dehradun, India
              </span>
            </motion.div>

            {/* Main Editorial H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#F1F7F5] tracking-tight leading-[1.1] font-serif-heading"
            >
              Where Ancient <br />
              <span className="gradient-text-coral">Gurukul Wisdom</span> <br />
              Meets Modern World.
            </motion.h1>

            {/* Factual Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#F1F7F5]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              <strong className="text-[#F1F7F5] font-semibold">{SCHOOL_INFO.name}</strong> is a premier 
              100% co-educational residential boarding school nestled in a 
              <span className="text-[#67C9B8] font-medium"> 22-acre Himalayan foothill campus</span> in Dehradun. Affiliated with CBSE, we nurture student mind, body, and soul.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                variant="coral"
                size="lg"
                href="#facilities"
                icon={ArrowRight}
                cursorText="Explore"
              >
                Explore Our Campus
              </Button>

              <Button
                variant="teal"
                size="lg"
                onClick={onOpenEnquire}
                cursorText="Apply"
              >
                Enquire Now
              </Button>
            </motion.div>

            {/* Key Verified Highlights Pills */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#164E63]/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#164E63]/50 border border-[#67C9B8]/30 text-[#67C9B8]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F1F7F5]">CBSE Affiliated</div>
                  <div className="text-[11px] text-[#F1F7F5]/60">Class IV to XII</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#164E63]/50 border border-[#67C9B8]/30 text-[#67C9B8]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F1F7F5]">22-Acre Campus</div>
                  <div className="text-[11px] text-[#F1F7F5]/60">Green Boarding</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-[#164E63]/50 border border-[#67C9B8]/30 text-[#F28C72]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F1F7F5]">Top Rated</div>
                  <div className="text-[11px] text-[#F1F7F5]/60">Co-Ed Residential</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visuals & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#67C9B8]/30 via-[#164E63]/40 to-[#081921]/80 shadow-2xl overflow-hidden group border border-[#67C9B8]/20">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#081921]">
                <img
                  src="https://tis.edu.in/_next/static/media/school.29985869.png"
                  alt="Tula's International School Dehradun Modern Campus Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081921] via-transparent to-transparent opacity-80" />

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-[#67C9B8]/20">
                  <div className="text-xs font-semibold text-[#67C9B8] uppercase tracking-wider mb-1">
                    Dehradun Valley • Uttarakhand
                  </div>
                  <div className="text-sm font-bold text-[#F1F7F5]">
                    Eco-Friendly Boarding School for Academic & Character Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Card 1 (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-6 -right-4 sm:-right-6 glass-card p-4 rounded-2xl border border-[#67C9B8]/30 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-xl z-20 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#67C9B8]/20 text-[#67C9B8] flex items-center justify-center font-bold text-lg shrink-0">
                1:8
              </div>
              <div>
                <div className="text-xs font-bold text-[#F1F7F5]">Teacher Ratio</div>
                <div className="text-[10px] text-[#F1F7F5]/70">Personalized Care</div>
              </div>
            </motion.div>

            {/* Floating Info Card 2 (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-4 rounded-2xl border border-[#F28C72]/30 shadow-xl flex items-center gap-3 backdrop-blur-xl z-20 max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F28C72]/20 text-[#F28C72] flex items-center justify-center shrink-0 font-bold">
                16+
              </div>
              <div>
                <div className="text-xs font-bold text-[#F1F7F5]">Sports Disciplines</div>
                <div className="text-[10px] text-[#F1F7F5]/70">Horse Riding, Swimming</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
