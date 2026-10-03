import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      delay: customDelay,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  id,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotionPreference();

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  let selectedVariant = fadeInVariants;
  if (variant === 'stagger') selectedVariant = staggerContainerVariants;
  if (variant === 'scale') selectedVariant = scaleVariants;

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      custom={delay}
      variants={selectedVariant}
    >
      {children}
    </motion.section>
  );
}
