"use client";

import { motion } from "framer-motion";

const PETAL_SVGS = [
  // Delicate oval petal
  "M12 2C18 7 20 15 15 21C10 27 3 24 2 18C1 12 6 -3 12 2Z",
  // Elongated blossom petal
  "M10 2C15 6 18 14 13 20C8 26 2 22 1 16C0 10 5 -2 10 2Z",
  // Small curved petal
  "M8 2C12 5 14 11 10 16C6 21 2 18 1 13C0 8 4 -1 8 2Z",
];

const PRESET_CONFIGS = {
  low: [
    { id: 1, left: "10%", top: "20%", size: 18, delay: 0, duration: 16, xDrift: 24 },
    { id: 2, left: "85%", top: "35%", size: 22, delay: 2, duration: 19, xDrift: -28 },
    { id: 3, left: "45%", top: "70%", size: 16, delay: 4, duration: 15, xDrift: 20 },
  ],
  medium: [
    { id: 1, left: "8%", top: "15%", size: 18, delay: 0, duration: 16, xDrift: 22 },
    { id: 2, left: "88%", top: "25%", size: 22, delay: 1.5, duration: 18, xDrift: -25 },
    { id: 3, left: "25%", top: "65%", size: 15, delay: 3, duration: 15, xDrift: 18 },
    { id: 4, left: "75%", top: "75%", size: 20, delay: 4.5, duration: 20, xDrift: -20 },
    { id: 5, left: "50%", top: "40%", size: 14, delay: 2, duration: 14, xDrift: 15 },
  ],
};

export default function FloatingPetals({
  density = "low",
  count,
  className = "",
  color = "#DFA6B4",
  opacity = 0.35,
  direction = "up",
}) {
  const basePetals = PRESET_CONFIGS[density] || PRESET_CONFIGS.low;
  const petals = count
    ? Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        left: `${(i * 100) / count + 4}%`,
        top: `${((i * 37) % 80) + 10}%`,
        size: 14 + ((i * 5) % 12),
        delay: (i * 0.8) % 4,
        duration: 14 + ((i * 3) % 8),
        xDrift: i % 2 === 0 ? 20 + (i % 10) : -20 - (i % 10),
      }))
    : basePetals;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}
    >
      {petals.map((petal, idx) => {
        const pathD = PETAL_SVGS[idx % PETAL_SVGS.length];
        const yMovement = direction === "up" ? [-10, -45, -10] : [10, 45, 10];

        return (
          <motion.div
            key={petal.id}
            style={{
              left: petal.left,
              top: petal.top,
              width: petal.size,
              height: petal.size,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [opacity * 0.7, opacity, opacity * 0.6],
              scale: [0.9, 1.05, 0.9],
              x: [0, petal.xDrift, 0],
              y: yMovement,
              rotate: [0, 25, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: petal.duration,
              delay: petal.delay,
              ease: "easeInOut",
            }}
            className="absolute will-change-transform"
          >
            <svg
              viewBox="0 0 24 28"
              fill={color}
              className="w-full h-full filter drop-shadow-sm"
            >
              <path d={pathD} />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
