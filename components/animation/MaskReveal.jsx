"use client";

import { motion } from "framer-motion";

/**
 * Preset C — Mask Reveal: Smooth clip-path uncover.
 * Direction can be 'right' (left to right) or 'down' (top to bottom).
 */
export function MaskReveal({
  children,
  direction = "right",
  delay = 0,
  duration = 1.05,
  className = "",
}) {
  const initialClip =
    direction === "right"
      ? "inset(0 100% 0 0)"
      : "inset(0 0 100% 0)";
  const targetClip = "inset(0 0% 0 0)";

  return (
    <motion.div
      initial={{ clipPath: initialClip, opacity: 0.9 }}
      whileInView={{ clipPath: targetClip, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
