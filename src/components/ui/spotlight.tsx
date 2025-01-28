import React from 'react';
import { motion } from 'framer-motion';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className={`absolute w-[500px] h-[500px] rounded-full blur-[100px] ${className}`}
      style={{
        background: `radial-gradient(circle at center, ${fill === 'blue' ? '#60A5FA' : 'white'} 0%, transparent 70%)`,
      }}
    />
  );
} 