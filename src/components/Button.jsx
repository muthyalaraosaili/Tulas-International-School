import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  cursorText = '',
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#67C9B8] focus:ring-offset-2 focus:ring-offset-[#081921] disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";

  const variants = {
    gold: "bg-gradient-to-r from-[#F28C72] to-[#e0765b] text-[#081921] font-bold hover:shadow-[0_0_25px_rgba(242,140,114,0.5)] border border-[#F28C72]/50",
    coral: "bg-gradient-to-r from-[#F28C72] to-[#e0765b] text-[#081921] font-bold hover:shadow-[0_0_25px_rgba(242,140,114,0.5)] border border-[#F28C72]/50",
    mint: "bg-gradient-to-r from-[#67C9B8] to-[#54b8a7] text-[#081921] font-bold hover:shadow-[0_0_25px_rgba(103,201,184,0.5)] border border-[#67C9B8]/50",
    teal: "bg-[#164E63] text-[#F1F7F5] border border-[#67C9B8]/40 hover:border-[#67C9B8] hover:bg-[#103a49] hover:shadow-[0_0_20px_rgba(22,78,99,0.8)]",
    navy: "bg-[#164E63]/80 text-[#67C9B8] border border-[#67C9B8]/30 hover:border-[#67C9B8] hover:bg-[#164E63] hover:shadow-[0_0_20px_rgba(22,78,99,0.8)]",
    outline: "bg-transparent text-[#F1F7F5] border border-[#164E63] hover:border-[#67C9B8] hover:text-[#67C9B8] hover:bg-[#67C9B8]/10",
    ghost: "bg-transparent text-[#F1F7F5]/80 hover:text-[#67C9B8] hover:bg-[#164E63]/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, onClick }
    : { type, onClick, disabled };

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      data-cursor-hover
      data-cursor-text={cursorText}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Subtle shine overlay animation */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Component>
  );
}
