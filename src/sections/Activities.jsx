import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { ACTIVITIES } from '../data/schoolData';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Sports', 'Clubs', 'Arts', 'Culture', 'Events'];

  const filteredActivities = activeTab === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter(act => act.category === activeTab);

  return (
    <AnimatedSection id="activities" className="py-24 bg-[#081921]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Vibrant Campus Life"
          title="Life at Tula's International School"
          subtitle="Beyond the classroom: exploring sports, clubs, performing arts, and annual cultural celebrations."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-[#F28C72] text-[#081921] font-bold shadow-[0_0_15px_rgba(242,140,114,0.4)]'
                  : 'bg-[#164E63]/30 text-[#F1F7F5]/70 hover:text-[#F1F7F5] hover:bg-[#164E63]/50 border border-[#164E63]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredActivities.map((act) => (
              <motion.div
                key={act.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden glass-card glass-card-hover border border-[#164E63] group h-72 sm:h-80"
              >
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081921] via-[#081921]/30 to-transparent opacity-90" />

                {/* Top Tag Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-[#67C9B8] bg-[#081921]/90 border border-[#67C9B8]/30 backdrop-blur-md">
                  {act.tag}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#67C9B8]">
                    {act.category} Activity
                  </span>
                  <h3 className="text-xl font-bold text-[#F1F7F5] font-serif-heading">
                    {act.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
