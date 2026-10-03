import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export default function CustomCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const prefersReducedMotion = useReducedMotionPreference();

  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches || prefersReducedMotion) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [data-cursor-hover]');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor-text') || '';
        setHoverText(text);
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!isPointerDevice || prefersReducedMotion) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#67C9B8]/80 mix-blend-difference flex items-center justify-center text-[10px] font-bold text-[#081921] uppercase tracking-wider"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (hoverText ? 70 : 48) : 28,
          height: isHovered ? (hoverText ? 70 : 48) : 28,
          backgroundColor: isHovered ? 'rgba(242, 140, 114, 0.9)' : 'rgba(103, 201, 184, 0.08)',
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {isHovered && hoverText && (
          <span className="px-1 text-center font-bold leading-none">{hoverText}</span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-[#67C9B8] rounded-full shadow-[0_0_8px_#67C9B8]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
