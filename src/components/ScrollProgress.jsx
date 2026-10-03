import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-label="Scroll Progress Bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F28C72] via-[#67C9B8] to-[#164E63] origin-left z-[100] shadow-[0_0_12px_rgba(103,201,184,0.8)]"
      style={{ scaleX }}
    />
  );
}
