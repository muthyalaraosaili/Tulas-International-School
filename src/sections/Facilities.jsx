import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Shield, HeartPulse, Trophy } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { FACILITIES } from '../data/schoolData';

export default function Facilities({ onOpenEnquire }) {
  return (
    <AnimatedSection id="facilities" className="py-24 bg-[#081921]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="World-Class Infrastructure"
          title="Campus & Facilities Showcase"
          subtitle="Spread across 22 green acres in Dehradun, TIS offers world-class sports arenas, digital laboratories, and residential care."
        />

        {/* Bento / Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, idx) => {
            const isFeatured = facility.featured;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden glass-card glass-card-hover border border-[#164E63] group ${
                  isFeatured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full ${isFeatured ? 'h-72 sm:h-80' : 'h-64 sm:h-72'} overflow-hidden bg-[#081921]`}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081921] via-[#081921]/40 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold text-[#67C9B8] bg-[#081921]/90 border border-[#67C9B8]/30 backdrop-blur-md">
                    {facility.category}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F7F5] font-serif-heading group-hover:text-[#67C9B8] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F1F7F5]/80 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Campus Facilities Feature Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#164E63]/20 border border-[#164E63] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#67C9B8]/20 text-[#67C9B8]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F1F7F5]">16+ Sports</div>
              <div className="text-[10px] text-[#F1F7F5]/60">Courts & Fields</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#164E63]/20 border border-[#164E63] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F28C72]/20 text-[#F28C72]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F1F7F5]">24/7 Security</div>
              <div className="text-[10px] text-[#F1F7F5]/60">CCTV & Wardens</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#164E63]/20 border border-[#164E63] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#67C9B8]/20 text-[#67C9B8]">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F1F7F5]">In-House Infirmary</div>
              <div className="text-[10px] text-[#F1F7F5]/60">Resident Doctor</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#164E63]/20 border border-[#164E63] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F28C72]/20 text-[#F28C72]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F1F7F5]">100% Vegetarian</div>
              <div className="text-[10px] text-[#F1F7F5]/60">Hygienic Dining</div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
