import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Dumbbell, Users, BrainCircuit, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { WHY_CHOOSE_TIS } from '../data/schoolData';

const iconMap = {
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Dumbbell: Dumbbell,
  Users: Users,
  BrainCircuit: BrainCircuit,
  GraduationCap: GraduationCap,
};

export default function WhyTIS() {
  return (
    <AnimatedSection id="why-tis" className="py-24 bg-[var(--theme-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Distinctive Advantage"
          title="Why Choose Tula's International School?"
          subtitle="Discover what sets our residential Gurukul education apart in the educational hub of Dehradun."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_TIS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Compass;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-[var(--theme-border)] flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                {/* Background Glow on Hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#67C9B8]/10 rounded-full blur-2xl group-hover:bg-[#67C9B8]/20 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--theme-surface)]/40 border border-[#67C9B8]/30 text-[var(--theme-accent)] flex items-center justify-center group-hover:bg-[#67C9B8] group-hover:text-[#081921] transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--theme-text)] font-serif-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--theme-text)]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--theme-border)]/70 flex items-center justify-between text-xs text-[var(--theme-accent)] font-medium">
                  <span>Verified TIS Feature</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C72]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
}
