"use client";

import { motion } from "framer-motion";

/**
 * Minimal line-art flower bloom with delicate petals.
 */
export function SingleBloom({ className = "w-8 h-8", color = "#C98294", strokeWidth = 1.2 }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="3.5" stroke={color} strokeWidth={strokeWidth} />
      {/* 6 Elegant Petals */}
      <path
        d="M24 20.5C24 14 21 8 24 5C27 8 24 14 24 20.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M24 27.5C24 34 27 40 24 43C21 40 24 34 24 27.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M27.5 24C34 24 40 27 43 24C40 21 34 24 27.5 24Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20.5 24C14 24 8 21 5 24C8 27 14 24 20.5 24Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M26.5 21.5C31 17 37 13 38 15C36 18 31 22 26.5 21.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M21.5 26.5C17 31 11 35 10 33C12 30 17 26 21.5 26.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Curved botanical branch with delicate leaves.
 */
export function FloralBranch({ className = "w-16 h-16", color = "#C98294", strokeWidth = 1.2 }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Graceful curving stem */}
      <path
        d="M15 70C25 55 45 42 68 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M32 52C28 42 34 35 40 44C36 50 34 52 32 52Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Leaf 2 */}
      <path
        d="M48 38C46 28 55 25 58 33C54 38 50 38 48 38Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Leaf 3 */}
      <path
        d="M22 62C16 57 18 48 25 53C23 58 22 62 22 62Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Tip bud */}
      <circle cx="68" cy="18" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}

/**
 * Minimal botanical corner motif for photo framing.
 */
export function BotanicalFrameCorner({ className = "w-10 h-10", color = "#DFA6B4" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="2" cy="38" r="2" fill={color} />
      <circle cx="38" cy="2" r="2" fill={color} />
      <path
        d="M12 12C12 7 16 3 20 8C16 11 14 12 12 12Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

/**
 * Botanical soft wave divider between sections.
 */
export function BotanicalSectionDivider({ fill = "#FFF6F8", className = "w-full" }) {
  return (
    <div className={`curve-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C150 75 350 115 600 85C850 55 1050 95 1200 60V120H0V0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
