"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ==========================================================================
 * TRULY DERMA LUXURY BACKGROUNDS SUITE
 * ==========================================================================
 * Pure luxury aesthetic celebrating beauty, softness, flowers, and rich class.
 * All technical square boxes, blueprint grids, crosshairs, calipers, and
 * telemetry have been strictly replaced with organic botanical curves,
 * French floral damask, blooming petal arcs, silk chiffon ripples,
 * and crystalline dewdrops.
 */

/**
 * --------------------------------------------------------------------------
 * 1. BRAND PHILOSOPHY: Haute Parfumerie Floral Damask & Rose Botanical Lace
 * --------------------------------------------------------------------------
 * Distinct Look: Royal Parisian salon wallpaper, delicate rosebuds,
 * curved acanthus tendrils, botanical filigree corner brackets, and
 * soft breathing rose-pearl dewdrops.
 */
export function BrandPhilosophyLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Soft Multi-layered Champagne & Rose Petal Ambient Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-b from-[#FCE4EC]/70 via-[#F8DFE5]/40 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[400px] bg-blush-200/40 rounded-full blur-[90px]" />
      <div className="absolute top-1/3 -left-20 w-[480px] h-[480px] bg-[#FFF0F4]/70 rounded-full blur-[80px]" />

      {/* Seamless Royal French Floral Damask & Rose Lace Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="botanical-damask-lace"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Center Rosebud & Blossom Core */}
            <circle cx="60" cy="60" r="3.5" fill="#A45D71" />
            <circle cx="60" cy="60" r="8" stroke="#C98294" strokeWidth="0.75" fill="none" strokeDasharray="1.5 2" />
            
            {/* 4 Elegant Rose Petals */}
            <path
              d="M60 48 C55 54 55 57 60 60 C65 57 65 54 60 48 Z
                 M60 72 C55 66 55 63 60 60 C65 63 65 66 60 72 Z
                 M48 60 C54 55 57 55 60 60 C57 65 54 65 48 60 Z
                 M72 60 C66 55 63 55 60 60 C63 65 66 65 72 60 Z"
              stroke="#A45D71"
              strokeWidth="0.8"
              fill="none"
            />

            {/* Curving Acanthus & Leaf Tendrils */}
            <path
              d="M60 42 C44 42 42 54 50 60 C42 66 44 78 60 78 C76 78 78 66 70 60 C78 54 76 42 60 42 Z"
              stroke="#C98294"
              strokeWidth="0.65"
              fill="none"
            />

            {/* Curving Vine Connecting Nodes */}
            <path
              d="M10 10 C35 30 35 30 60 10 C85 30 85 30 110 10
                 M10 110 C35 90 35 90 60 110 C85 90 85 90 110 110"
              stroke="#DFA6B4"
              strokeWidth="0.6"
              fill="none"
            />

            {/* Corner Little Rosebuds */}
            <circle cx="0" cy="0" r="2.5" fill="#C98294" />
            <circle cx="120" cy="0" r="2.5" fill="#C98294" />
            <circle cx="0" cy="120" r="2.5" fill="#C98294" />
            <circle cx="120" cy="120" r="2.5" fill="#C98294" />
            <path
              d="M0 18 C10 18 18 10 18 0 M120 18 C110 18 102 10 102 0 M0 102 C10 102 18 110 18 120 M120 102 C110 102 102 110 102 120"
              stroke="#A45D71"
              strokeWidth="0.7"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#botanical-damask-lace)" />
      </svg>

      {/* Ornate Curving Botanical Rose Vine Corner Flourishes */}
      {/* Top Left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-45 text-blush-500">
        <svg width="76" height="76" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main sweeping vine stem */}
          <path d="M6 74 C8 42 24 16 74 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M14 74 C16 48 30 26 74 14" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" strokeLinecap="round" />
          {/* Rosebud at corner heart */}
          <path d="M22 22 C18 12 28 10 32 18 C36 26 26 28 22 22 Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="0.9" />
          {/* Petal 1 */}
          <path d="M38 12 C44 6 50 14 44 18 C38 18 36 14 38 12 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          {/* Petal 2 */}
          <path d="M12 38 C6 44 14 50 18 44 C18 38 14 36 12 38 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          {/* Droplet buds */}
          <circle cx="74" cy="6" r="2.5" fill="currentColor" />
          <circle cx="6" cy="74" r="2.5" fill="currentColor" />
          <circle cx="58" cy="10" r="1.8" fill="currentColor" />
          <circle cx="10" cy="58" r="1.8" fill="currentColor" />
        </svg>
      </div>

      {/* Top Right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-45 text-blush-500 scale-x-[-1]">
        <svg width="76" height="76" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 74 C8 42 24 16 74 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M14 74 C16 48 30 26 74 14" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" strokeLinecap="round" />
          <path d="M22 22 C18 12 28 10 32 18 C36 26 26 28 22 22 Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="0.9" />
          <path d="M38 12 C44 6 50 14 44 18 C38 18 36 14 38 12 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <path d="M12 38 C6 44 14 50 18 44 C18 38 14 36 12 38 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <circle cx="74" cy="6" r="2.5" fill="currentColor" />
          <circle cx="6" cy="74" r="2.5" fill="currentColor" />
          <circle cx="58" cy="10" r="1.8" fill="currentColor" />
          <circle cx="10" cy="58" r="1.8" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Dewy Rose Pearls with Soft Breathing Drift */}
      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[14%] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white to-blush-400 shadow-[0_0_12px_rgba(201,130,148,0.6)]"
      />
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[16%] w-3 h-3 rounded-full bg-gradient-to-br from-white to-blush-300 shadow-[0_0_14px_rgba(223,166,180,0.6)]"
      />
      <motion.div
        animate={{ y: [-6, 6, -6], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute top-2/3 left-[20%] w-2 h-2 rounded-full bg-gradient-to-br from-white to-blush-400 shadow-[0_0_10px_rgba(201,130,148,0.5)]"
      />
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 2. PINNED SHOWCASE: The Royal Rose Conservatory & Curving Petal Waves
 * --------------------------------------------------------------------------
 * Replaces all square blueprint grids and calipers with organic floral petal
 * contours, cascading floral watermarks, and smooth undulating silk ribbons.
 */
export function PinnedShowcaseLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Seamless Organic Magnolia & Rose Petal Contour Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.09] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="blooming-petal-weave"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Flowing Petal S-Curves */}
            <path
              d="M 0 50 C 25 25 75 75 100 50 M 50 0 C 25 25 75 75 50 100"
              fill="none"
              stroke="#A45D71"
              strokeWidth="0.8"
            />
            {/* Delicate Blossom Petal Drops */}
            <path
              d="M 25 25 C 32 18 38 25 32 32 C 25 38 18 32 25 25 Z
                 M 75 75 C 82 68 88 75 82 82 C 75 88 68 82 75 75 Z"
              fill="none"
              stroke="#C98294"
              strokeWidth="0.7"
            />
            {/* Delicate Dewdrop Accents */}
            <circle cx="50" cy="50" r="1.6" fill="#A45D71" opacity="0.6" />
            <circle cx="0" cy="0" r="1.8" fill="#C98294" opacity="0.5" />
            <circle cx="100" cy="100" r="1.8" fill="#C98294" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blooming-petal-weave)" />
      </svg>

      {/* Large Floating Botanical Watermark Medallion (Right Background) */}
      <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.16]">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full animate-spin-slow">
          {/* Concentric Petal Rings blooming outward */}
          <circle cx="300" cy="300" r="270" stroke="#C98294" strokeWidth="0.8" strokeDasharray="3 6" />
          <circle cx="300" cy="300" r="230" stroke="#A45D71" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="#DFA6B4" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="120" stroke="#C98294" strokeWidth="0.9" strokeDasharray="4 6" />
          
          {/* 12 Radiant Botanical Flower Petals */}
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d="M300 120 C280 180 280 240 300 280 C320 240 320 180 300 120 Z"
              stroke="#A45D71"
              strokeWidth="0.9"
              fill="none"
              transform={`rotate(${i * 30} 300 300)`}
            />
          ))}

          {/* Central Rose Core */}
          <circle cx="300" cy="300" r="18" fill="#C98294" fillOpacity="0.25" stroke="#A45D71" strokeWidth="1" />
          <circle cx="300" cy="300" r="6" fill="#7A4655" />
        </svg>
      </div>

      {/* Left Delicate Blossom Vine Silhouette */}
      <div className="absolute -left-36 bottom-8 w-[520px] h-[520px] opacity-[0.13]">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full animate-spin-slow-reverse">
          <circle cx="250" cy="250" r="220" stroke="#C98294" strokeWidth="0.8" strokeDasharray="5 8" />
          <circle cx="250" cy="250" r="160" stroke="#A45D71" strokeWidth="0.9" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M250 90 C235 140 235 180 250 210 C265 180 265 140 250 90 Z"
              stroke="#A45D71"
              strokeWidth="0.8"
              fill="none"
              transform={`rotate(${i * 45} 250 250)`}
            />
          ))}
        </svg>
      </div>

      {/* Smooth Horizontal Rose-Chiffon Wave Ribbons */}
      <div className="absolute top-[38%] left-0 right-0 h-40 bg-gradient-to-r from-transparent via-[#FCE4EC]/40 to-transparent blur-3xl" />
      <div className="absolute top-[48%] left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#DFA6B4]/30 to-transparent" />
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 3. BEFORE & AFTER SLIDER: Liquid Rosewater Caustics & Sculpted Petal Waves
 * --------------------------------------------------------------------------
 * Distinct Look: Flowing organic curves resembling rose water ripples,
 * silky beauty serum emulsions, and soft petals. Luminous floating pearl
 * dewdrops with delicate golden glints.
 */
export function BeforeAfterLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Ambient Diffused Rose Quartz Glow Pools */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[450px] bg-gradient-to-br from-[#FFF5F8]/75 via-[#FCE8ED]/45 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-gradient-to-tl from-[#FBE1E8]/55 via-[#F8DFE5]/35 to-transparent rounded-full blur-[110px]" />

      {/* Sensuous Liquid Rosewater & Cream Wave Curves */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#C98294" strokeWidth="1" strokeLinecap="round">
          {/* Harmonic Curvilinear Dermal Ribbons */}
          <path d="M-100 140 C 300 70, 600 230, 1000 120 C 1250 50, 1400 170, 1600 110" />
          <path d="M-100 200 C 280 130, 620 280, 1020 180 C 1270 110, 1380 220, 1600 170" strokeOpacity="0.75" />
          <path d="M-100 260 C 260 190, 640 330, 1040 240 C 1290 170, 1360 270, 1600 230" strokeOpacity="0.55" strokeDasharray="6 4" />
          
          {/* Center Smooth Liquid Cream Swell */}
          <path d="M-80 500 C 320 600, 720 420, 1100 540 C 1300 600, 1480 480, 1600 520" strokeWidth="1.1" />
          <path d="M-80 560 C 300 660, 740 480, 1120 600 C 1320 660, 1460 540, 1600 580" strokeOpacity="0.7" />
          <path d="M-80 620 C 280 720, 760 540, 1140 660 C 1340 720, 1440 600, 1600 640" strokeOpacity="0.45" strokeDasharray="8 6" />

          {/* Lower Gentle Petal Cradle */}
          <path d="M-50 780 C 400 840, 800 710, 1200 810 C 1380 860, 1500 780, 1600 820" strokeOpacity="0.65" />
          <path d="M-50 840 C 380 900, 820 770, 1220 870 C 1400 920, 1480 840, 1600 880" strokeOpacity="0.35" />
        </g>
      </svg>

      {/* Diagonal Rosewater Caustic Sheen */}
      <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-[26deg] pointer-events-none" />

      {/* Floating Crystalline Pearl Dewdrops with Golden-Rose Gleams */}
      <motion.div
        animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[24%]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#C98294" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-24 left-[16%]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#DFA6B4" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [0.85, 1.3, 0.85], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
        className="absolute top-1/2 left-[7%]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#C98294" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3.1 }}
        className="absolute top-1/3 right-[9%]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#A45D71" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 4. SKIN QUIZ WIDGET: Water Lily Floral Bloom & Organic Petal Reticle
 * --------------------------------------------------------------------------
 * Replaces hexagonal grids and telemetry data with miniature floral lace
 * damask and concentric blooming water lily / peony petal arcs.
 */
export function SkinQuizLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Warm Rose & Velvet Pearl Atmospheric Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-[#FCE4EC]/55 via-[#FFF0F4]/65 to-[#FCE8ED]/55 rounded-full blur-[110px]" />

      {/* Miniature Four-Petal Floral Lace Damask Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.085] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="floret-lace-pattern"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Center 4-Petal Blossom */}
            <circle cx="32" cy="32" r="2.5" fill="#A45D71" />
            <path
              d="M32 23 C28 27 28 29 32 32 C36 29 36 27 32 23 Z
                 M32 41 C28 37 28 35 32 32 C36 35 36 37 32 41 Z
                 M23 32 C27 28 29 28 32 32 C29 36 27 36 23 32 Z
                 M41 32 C37 28 35 28 32 32 C35 36 37 36 41 32 Z"
              stroke="#C98294"
              strokeWidth="0.75"
              fill="none"
            />
            {/* Soft Petal Rings */}
            <circle cx="32" cy="32" r="14" stroke="#DFA6B4" strokeWidth="0.5" fill="none" strokeDasharray="1.5 2.5" />
            {/* Corner Little Dewdrops */}
            <circle cx="0" cy="0" r="1.5" fill="#C98294" />
            <circle cx="64" cy="0" r="1.5" fill="#C98294" />
            <circle cx="0" cy="64" r="1.5" fill="#C98294" />
            <circle cx="64" cy="64" r="1.5" fill="#C98294" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floret-lace-pattern)" />
      </svg>

      {/* Large Concentric Blooming Peony & Water Lily Petal Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[740px] h-[740px] opacity-[0.22]">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          {/* Outer Rotating Lotus Petal Halo */}
          <g className="animate-spin-slow">
            <circle cx="300" cy="300" r="280" stroke="#7A4655" strokeWidth="0.8" strokeDasharray="4 8" />
            <circle cx="300" cy="300" r="270" stroke="#C98294" strokeWidth="0.5" />
            {/* 16 Graceful Lotus Blossom Petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <path
                key={i}
                d="M300 20 C285 70 285 130 300 160 C315 130 315 70 300 20 Z"
                stroke="#A45D71"
                strokeWidth="0.9"
                fill="none"
                transform={`rotate(${i * 22.5} 300 300)`}
              />
            ))}
          </g>

          {/* Reverse Rotating Inner Bloom Ring */}
          <g className="animate-spin-slow-reverse">
            <circle cx="300" cy="300" r="200" stroke="#A45D71" strokeWidth="0.9" strokeDasharray="8 6" />
            <circle cx="300" cy="300" r="140" stroke="#DFA6B4" strokeWidth="0.75" />
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d="M300 100 C290 140 290 180 300 200 C310 180 310 140 300 100 Z"
                stroke="#C98294"
                strokeWidth="0.8"
                fill="none"
                transform={`rotate(${i * 45} 300 300)`}
              />
            ))}
          </g>

          {/* Central Petal Heart */}
          <circle cx="300" cy="300" r="12" fill="#C98294" fillOpacity="0.25" stroke="#7A4655" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating Gentle Floral Dewdrop Accents */}
      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-blush-400 shadow-[0_0_10px_#C98294]"
      />
      <motion.div
        animate={{ y: [8, -8, 8], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/4 right-[15%] w-2.5 h-2.5 rounded-full bg-blush-300 shadow-[0_0_12px_#DFA6B4]"
      />
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 5. CTA BANNER: Imperial Rose Garden & Golden Sunburst Petals
 * --------------------------------------------------------------------------
 * Distinct Look: Grand finale luxury showcase. Radiating blooming petal
 * sunburst rays, twin botanical rose branches, scalloped luxury frame,
 * and twinkling jewelry-grade starlight petals.
 */
export function CTABannerLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Central Warm Rose Radiance Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#FCE4EC]/75 via-[#FFF5F8]/85 to-[#FCE8ED]/75 rounded-full blur-[90px]" />

      {/* Radiating Blooming Flower Petal Sunburst Flutes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunburst-petal-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C98294" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#DFA6B4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A45D71" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 36 Curvilinear Petal Rays Expanding Outward */}
        <g stroke="url(#sunburst-petal-grad)" strokeWidth="1">
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const x2 = 600 + 850 * Math.cos(angle);
            const y2 = 400 + 850 * Math.sin(angle);
            return (
              <line
                key={i}
                x1="600"
                y1="400"
                x2={x2}
                y2={y2}
                strokeDasharray={i % 2 === 0 ? "none" : "5 5"}
              />
            );
          })}
        </g>

        {/* Concentric Petal Ripple Rings */}
        <g stroke="#C98294" strokeWidth="0.75" fill="none" opacity="0.65">
          <circle cx="600" cy="400" r="140" strokeDasharray="3 4" />
          <circle cx="600" cy="400" r="240" />
          <circle cx="600" cy="400" r="360" strokeDasharray="6 5" />
          <circle cx="600" cy="400" r="500" />
        </g>
      </svg>

      {/* Grand Inset Scalloped Botanical Framing Border */}
      <div className="absolute inset-4 sm:inset-8 border border-blush-300/40 rounded-3xl pointer-events-none">
        {/* Curving Floral Botanical Corner Cartouches */}
        {/* Top Left */}
        <div className="absolute top-2 left-2 text-blush-500/60">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M2 38 C2 18 18 2 38 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 38 C8 22 22 8 38 8" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
            <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="38" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="38" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Top Right */}
        <div className="absolute top-2 right-2 text-blush-500/60 scale-x-[-1]">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M2 38 C2 18 18 2 38 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 38 C8 22 22 8 38 8" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
            <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="38" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="38" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-2 left-2 text-blush-500/60 scale-y-[-1]">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M2 38 C2 18 18 2 38 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 38 C8 22 22 8 38 8" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
            <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="38" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="38" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-2 right-2 text-blush-500/60 scale-[-1]">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M2 38 C2 18 18 2 38 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 38 C8 22 22 8 38 8" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
            <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="38" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="38" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Twinkling Golden Jewelry Starlight Petals */}
      <motion.div
        animate={{ scale: [0.7, 1.25, 0.7], rotate: [0, 90, 180], opacity: [0.25, 0.9, 0.25] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-[20%]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#C98294" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [1.2, 0.7, 1.2], rotate: [0, -90, -180], opacity: [0.85, 0.25, 0.85] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        className="absolute top-24 right-[22%]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#DFA6B4" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [0.75, 1.3, 0.75], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        className="absolute bottom-16 left-[27%]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#A45D71" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.95, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
        className="absolute bottom-20 right-[25%]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#C98294" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 6. HERO SECTION: Morning Rose Garden Mist & Luminous Silk Watermark
 * --------------------------------------------------------------------------
 * Distinct Look: High-fashion editorial entrance, luxury cosmetic boutique
 * silk chiffon weave, soft rose petal medallion watermark, and morning aura.
 */
export function HeroLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Luxury Silk Chiffon Petal Weave Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-silk-petal-weave"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 24 C 12 12 36 36 48 24 M 24 0 C 36 12 12 36 24 48"
              stroke="#C98294"
              strokeWidth="0.55"
              fill="none"
            />
            <circle cx="24" cy="24" r="1.2" fill="#A45D71" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-silk-petal-weave)" />
      </svg>

      {/* Blooming Rose Medallion Watermark (Top Center-Right) */}
      <div className="absolute top-12 right-[8%] w-[440px] h-[440px] opacity-[0.14]">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-spin-slow">
          {/* Intersecting Flower Petal Rings */}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx="150"
              ry="55"
              stroke="#A45D71"
              strokeWidth="0.8"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
          <circle cx="200" cy="200" r="140" stroke="#C98294" strokeWidth="0.75" strokeDasharray="3 4" />
          <circle cx="200" cy="200" r="70" stroke="#7A4655" strokeWidth="1" fill="#C98294" fillOpacity="0.08" />
        </svg>
      </div>

      {/* Soft Ambient Floating Light Shimmers */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 left-[10%] w-3 h-3 rounded-full bg-blush-400 shadow-[0_0_15px_#C98294]"
      />
      <motion.div
        animate={{ y: [12, -12, 12], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-48 right-[15%] w-2 h-2 rounded-full bg-blush-300 shadow-[0_0_12px_#DFA6B4]"
      />
    </div>
  );
}

/**
 * --------------------------------------------------------------------------
 * 7. TREATMENT DETAIL HERO: Haute Parfumerie Watermark & Rose Veil
 * --------------------------------------------------------------------------
 */
export function TreatmentDetailLuxuryBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Continuous Botanical Vine & Petal Watermark */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.065] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="treatment-botanical-damask"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="2.2" fill="#A45D71" />
            <path d="M 40 16 C 28 28 52 28 40 40 C 28 52 52 52 40 64" stroke="#C98294" strokeWidth="0.7" fill="none" />
            <path d="M 16 40 C 28 28 28 52 40 40 C 52 28 52 52 64 40" stroke="#C98294" strokeWidth="0.7" fill="none" />
            <circle cx="40" cy="40" r="10" stroke="#DFA6B4" strokeWidth="0.5" fill="none" strokeDasharray="1.5 2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#treatment-botanical-damask)" />
      </svg>
      {/* Soft Rosy Ambient Glow */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[350px] bg-blush-100/60 rounded-full blur-[100px]" />
    </div>
  );
}
