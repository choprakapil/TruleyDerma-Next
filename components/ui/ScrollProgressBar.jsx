"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3.5px] bg-transparent"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#DFA6B4] via-[#C98294] to-[#7A4655] origin-left relative shadow-[0_0_8px_rgba(201,130,148,0.4)]"
        style={{ scaleX }}
      >
        {/* Delicate luminous pearl glow at the leading tip */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full blur-[1px] shadow-[0_0_6px_#FFF,0_0_12px_rgba(201,130,148,0.8)] opacity-95" />
      </motion.div>
    </div>
  );
}
