import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { VERIFIED_TESTIMONIALS } from '../data/schoolData';

export default function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="py-24 bg-[var(--theme-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Testimonials"
          title="Voices from the TIS Community"
          subtitle="Hear from parents, alumni, and academic leadership about life at Tula's International School."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-[var(--theme-border)] flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="w-10 h-10 text-[var(--theme-accent)]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#F28C72]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F28C72]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[var(--theme-text)]/85 leading-relaxed italic font-serif-heading">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[var(--theme-border)]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[var(--theme-text)]">{item.name}</h4>
                  <p className="text-xs text-[var(--theme-accent)] font-medium">{item.role}</p>
                  <p className="text-[11px] text-[var(--theme-text)]/60">{item.location}</p>
                </div>

                <div className="p-2 rounded-xl bg-[var(--theme-surface)]/40 text-[var(--theme-accent)] border border-[#67C9B8]/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
