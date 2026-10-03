import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#67C9B8] bg-[#164E63]/40 border border-[#67C9B8]/30 uppercase mb-4 shadow-[0_0_15px_rgba(103,201,184,0.2)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C72] animate-ping" />
          {badge}
        </motion.span>
      )}

      {title && (
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F1F7F5] tracking-tight leading-tight mb-4 font-serif-heading">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
