"use client";

import { motion } from "framer-motion";

/**
 * Preset D — Botanical Reveal: Flower bloom entrance with subtle rotation and scaling.
 */
export function BotanicalReveal({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
