"use client";

import React from "react";

/**
 * ==========================================================================
 * TRULY DERMA FLAT LUXURY ICONS SUITE
 * ==========================================================================
 * High-end, colored flat vector icons without borders.
 * Replaces generic thin wireframes with authentic, vibrant, and luxurious
 * visual assets across communication, social media, clinical diagnostics,
 * and treatment protocols.
 */

// ---------------------------------------------------------------------------
// 1. PRIMARY COMMUNICATION & SOCIAL ICONS
// ---------------------------------------------------------------------------

/**
 * Official Authentic Colored Flat WhatsApp Icon
 */
export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.1 8.9C21.2 7 18.7 6 16 6C10.5 6 6 10.5 6 16C6 17.8 6.5 19.5 7.4 21L6 26L11.2 24.6C12.7 25.4 14.3 25.9 16 25.9C21.5 25.9 26 21.4 26 15.9C26 13.2 24.9 10.7 23.1 8.9ZM16 24.2C14.5 24.2 13 23.8 11.7 23.1L11.4 22.9L8.3 23.7L9.1 20.7L8.9 20.4C8.1 19.1 7.7 17.6 7.7 16C7.7 11.4 11.4 7.7 16 7.7C18.2 7.7 20.3 8.6 21.9 10.1C23.4 11.7 24.3 13.8 24.3 16C24.3 20.5 20.6 24.2 16 24.2ZM20.6 18.1C20.3 18 19 17.3 18.7 17.2C18.5 17.1 18.4 17.1 18.2 17.3C18.1 17.5 17.6 18.1 17.5 18.3C17.3 18.5 17.2 18.5 16.9 18.4C16.6 18.2 15.8 17.9 14.8 17C14 16.3 13.5 15.4 13.3 15.1C13.2 14.8 13.3 14.7 13.5 14.5C13.6 14.4 13.7 14.2 13.9 14.1C14 13.9 14.1 13.8 14.1 13.6C14.2 13.4 14.1 13.3 14.1 13.2C14 13.1 13.5 11.9 13.3 11.4C13.1 10.9 12.9 11 12.7 11H12.2C12 11 11.7 11.1 11.4 11.3C11.1 11.6 10.4 12.3 10.4 13.8C10.4 15.3 11.5 16.7 11.6 16.9C11.8 17.1 13.7 20.1 16.6 21.3C17.3 21.6 17.8 21.8 18.3 21.9C19 22.1 19.6 22.1 20.1 22C20.6 21.9 21.8 21.3 22 20.6C22.3 19.9 22.3 19.3 22.2 19.1C22.1 18.8 21.9 18.3 20.6 18.1Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Beautiful Colored Flat Phone Call Icon (Emerald / Rose-Gold Gradient Fill)
 */
export function PhoneIcon({ className = "w-4 h-4", variant = "rose" }) {
  const bgFill = variant === "emerald" ? "#10B981" : "#C98294";
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill={bgFill} />
      <path
        d="M21.5 19.8C20.6 19.8 19.8 19.6 19 19.4C18.7 19.3 18.4 19.4 18.2 19.6L16.8 21.3C14.7 20.2 13 18.5 11.9 16.4L13.6 15C13.8 14.8 13.9 14.5 13.8 14.2C13.5 13.4 13.4 12.6 13.4 11.7C13.4 11.2 12.9 10.7 12.4 10.7H10.5C10 10.7 9.5 11.1 9.5 11.7C9.5 18.4 14.8 23.7 21.5 23.7C22.1 23.7 22.5 23.2 22.5 22.7V20.8C22.5 20.3 22 19.8 21.5 19.8Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Beautiful Colored Flat Email / Mailbox Icon
 */
export function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#FCECEF" />
      <rect x="7" y="10" width="18" height="13" rx="2.5" fill="#DFA6B4" />
      <path
        d="M7 11.5L16 17.5L25 11.5"
        stroke="#7A4655"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10.5L16 16.5L24.5 10.5H7.5Z"
        fill="#C98294"
      />
    </svg>
  );
}

/**
 * Beautiful Colored Flat Location Pin Icon (Crimson Rose Droplet)
 */
export function LocationPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#FCECEF" />
      {/* Droplet Pin */}
      <path
        d="M16 7C12.7 7 10 9.7 10 13C10 17.5 16 23.5 16 23.5C16 23.5 22 17.5 22 13C22 9.7 19.3 7 16 7Z"
        fill="#C98294"
      />
      <circle cx="16" cy="13" r="2.8" fill="white" />
    </svg>
  );
}

/**
 * Beautiful Colored Flat Google Maps / Directions Compass Navigation
 */
export function NavigationIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#EBF3FD" />
      <path
        d="M16 8L22.5 23L16 19.5L9.5 23L16 8Z"
        fill="#3B82F6"
      />
      <path
        d="M16 8V19.5L22.5 23L16 8Z"
        fill="#2563EB"
      />
    </svg>
  );
}

/**
 * Official Authentic Colored Flat Instagram Icon
 */
export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="insta-grad" cx="20%" cy="100%" r="120%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#F77737" />
          <stop offset="50%" stopColor="#FCAF45" />
          <stop offset="75%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#833AB4" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#insta-grad)" />
      <rect x="7" y="7" width="18" height="18" rx="5" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="4.2" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="21.2" cy="10.8" r="1.3" fill="white" />
    </svg>
  );
}

/**
 * Official Authentic Colored Flat Facebook Icon
 */
export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#1877F2" />
      <path
        d="M18.8 16.5H16.5V24H13.4V16.5H12V13.8H13.4V12.1C13.4 10.2 14.3 9 16.8 9H19V11.7H17.6C16.7 11.7 16.5 12.1 16.5 12.8V13.8H19L18.8 16.5Z"
        fill="white"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 2. CLINICAL DIAGNOSTIC & LUXURY DERMATOLOGY ICONS (FLAT, COLORED, NO BORDER)
// ---------------------------------------------------------------------------

/**
 * Diagnostic Dermoscopy / Microscopic Tissue Analysis Flat Icon
 */
export function MicroscopeIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Soft rounded background pillow */}
      <rect width="40" height="40" rx="12" fill="#FCECEF" />
      {/* Arm base */}
      <path d="M12 31H28C28 31 27 27 22 27H18C13 27 12 31 12 31Z" fill="#7A4655" />
      <rect x="18" y="24" width="4" height="4" rx="1" fill="#A45D71" />
      {/* Curved Microscope Stage */}
      <rect x="13" y="21" width="14" height="3" rx="1.5" fill="#C98294" />
      <circle cx="20" cy="22.5" r="1.5" fill="#FFF0F4" />
      {/* Optical Barrel */}
      <rect
        x="18"
        y="8"
        width="6"
        height="12"
        rx="2"
        transform="rotate(-20 18 8)"
        fill="#A45D71"
      />
      {/* Golden Eyepiece */}
      <rect
        x="19"
        y="5"
        width="8"
        height="3"
        rx="1"
        transform="rotate(-20 19 5)"
        fill="#E5B26E"
      />
      {/* Objective Lens Focus Drop */}
      <circle cx="25" cy="21" r="2.5" fill="#38BDF8" opacity="0.8" />
    </svg>
  );
}

/**
 * Bio-Calibrated Laser Energy / Q-Switch Pulse Flat Icon
 */
export function LaserPulseIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#FFF4E6" />
      {/* Radiant Sunburst Sparks */}
      <path
        d="M20 7L22 14L29 16L23 20L25 27L19 22L13 26L15 19L9 16L16 14L20 7Z"
        fill="#F59E0B"
      />
      <circle cx="20" cy="18" r="5" fill="#EF4444" />
      <circle cx="20" cy="18" r="2.5" fill="#FDE047" />
      {/* Micro Laser Beam Radiance */}
      <path d="M20 28V33" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 20H7" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M33 20H28" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Cosmetic Hydration / Cellular Elixir Droplet Flat Icon
 */
export function SerumDropletIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#F0FDFA" />
      {/* Main Liquid Droplet */}
      <path
        d="M20 8C20 8 11 19 11 24.5C11 29.5 15 33 20 33C25 33 29 29.5 29 24.5C29 19 20 8 20 8Z"
        fill="#0D9488"
      />
      {/* Translucent Highlight Glow */}
      <path
        d="M17 18C15 21 14 24 14 26C14 27.5 15 28.5 16 29"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="23" cy="27" r="1.5" fill="white" opacity="0.8" />
    </svg>
  );
}

/**
 * Digital Epiluminescence Skin Scan / Facial Mapping Flat Icon
 */
export function DigitalSkinScanIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#FCECEF" />
      {/* Clean Facial Silhouette */}
      <path
        d="M20 10C15 10 13 14 13 18C13 23 16 27 20 28C24 27 27 23 27 18C27 14 25 10 20 10Z"
        fill="#C98294"
      />
      {/* Cyan Laser Optical Scan Beam */}
      <rect x="9" y="18" width="22" height="3" rx="1.5" fill="#06B6D4" />
      <circle cx="20" cy="19.5" r="4.5" fill="#22D3EE" opacity="0.6" />
      {/* Targeting Corners */}
      <path d="M10 13V10H13" stroke="#A45D71" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 13V10H27" stroke="#A45D71" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 27V30H13" stroke="#A45D71" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 27V30H27" stroke="#A45D71" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Resonance Frequency & Microcurrent CPU Chip Flat Icon
 */
export function ResonanceChipIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#F5F3FF" />
      {/* Silicon Chip Body */}
      <rect x="12" y="12" width="16" height="16" rx="3.5" fill="#7C3AED" />
      <rect x="15" y="15" width="10" height="10" rx="2" fill="#A78BFA" />
      {/* Golden Central Core */}
      <circle cx="20" cy="20" r="2.5" fill="#FDE047" />
      {/* Microcurrent Pins */}
      <path d="M16 8V12 M20 8V12 M24 8V12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 28V32 M20 28V32 M24 28V32" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16H12 M8 20H12 M8 24H12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 16H32 M28 20H32 M28 24H32" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Cryo-Seal & Electroporation Shield Flat Icon
 */
export function CryoSealIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#ECFEFF" />
      {/* Shield Body */}
      <path
        d="M20 8L29 12V20C29 25.5 25 29.5 20 32C15 29.5 11 25.5 11 20V12L20 8Z"
        fill="#0284C7"
      />
      {/* Frosted Snowflake / Cryo Core */}
      <path
        d="M20 14V26 M14 20H26 M16 16L24 24 M16 24L24 16"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2" fill="#BAE6FD" />
    </svg>
  );
}

/**
 * Luxury Calendar / Appointment Booking Flat Icon
 */
export function CalendarIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#FFF6F8" />
      <rect x="6" y="9" width="20" height="17" rx="3.5" fill="#C98294" />
      <rect x="6" y="9" width="20" height="5" rx="2" fill="#A45D71" />
      {/* Date Dots */}
      <circle cx="10" cy="18" r="1.2" fill="white" />
      <circle cx="14" cy="18" r="1.2" fill="white" />
      <circle cx="18" cy="18" r="1.2" fill="white" />
      <circle cx="22" cy="18" r="1.2" fill="white" />
      <circle cx="10" cy="22" r="1.2" fill="white" />
      <circle cx="14" cy="22" r="1.2" fill="white" />
      <circle cx="18" cy="22" r="1.2" fill="#FDE047" />
      {/* Rings */}
      <path d="M10 7V10 M22 7V10" stroke="#7A4655" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Luxury Clock / Duration Flat Icon
 */
export function ClockIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" fill="#FCECEF" />
      <circle cx="16" cy="16" r="11" fill="#C98294" />
      <path
        d="M16 10V16L19.5 19.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="1.5" fill="white" />
    </svg>
  );
}

/**
 * Clinical Shield Checkmark / Safety Flat Icon
 */
export function ShieldCheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#ECFDF5" />
      <path
        d="M16 7L23 10.5V17C23 21.5 20 24.5 16 26.5C12 24.5 9 21.5 9 17V10.5L16 7Z"
        fill="#10B981"
      />
      <path
        d="M13.5 16.5L15.5 18.5L19.5 13.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Prestige Award Medal / Board Certification Flat Icon
 */
export function AwardMedalIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#FEF3C7" />
      {/* Silk Ribbon */}
      <path d="M15 22L13 32L20 28L27 32L25 22" fill="#C98294" />
      {/* Gold Medal */}
      <circle cx="20" cy="18" r="9" fill="#F59E0B" />
      <circle cx="20" cy="18" r="7" fill="#FBBF24" />
      {/* Inner Star */}
      <path
        d="M20 13L21.2 16.5H25L22 18.6L23.2 22L20 19.9L16.8 22L18 18.6L15 16.5H18.8L20 13Z"
        fill="#7A4655"
      />
    </svg>
  );
}

/**
 * Truly Derma Academy Graduation Cap Flat Icon
 */
export function GraduationCapIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#FCECEF" />
      {/* Cap Top Diamond */}
      <path d="M20 11L33 17L20 23L7 17L20 11Z" fill="#7A4655" />
      {/* Skull Cap Body */}
      <path d="M13 20.5V25.5C13 28 16 30 20 30C24 30 27 28 27 25.5V20.5" fill="#A45D71" />
      {/* Gold Tassel */}
      <path d="M29 18V25" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="29" cy="26" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

/**
 * Luxury Sparkles / Radiance Cluster Flat Icon
 */
export function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#FFF6F8" />
      {/* Big Diamond Star */}
      <path
        d="M17 6C17 11 12 16 7 16C12 16 17 21 17 26C17 21 22 16 27 16C22 16 17 11 17 6Z"
        fill="#C98294"
      />
      {/* Little Accent Spark */}
      <circle cx="23" cy="9" r="2" fill="#E5B26E" />
    </svg>
  );
}

/**
 * Verified Patient / Check Pill Flat Icon
 */
export function CheckCircleIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#10B981" />
      <path
        d="M7.5 12L10.5 15L16.5 9"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Patient User Avatar Flat Icon
 */
export function UserIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#FCECEF" />
      <circle cx="16" cy="12" r="4.5" fill="#7A4655" />
      <path
        d="M9.5 24C9.5 20.5 12.5 18.5 16 18.5C19.5 18.5 22.5 20.5 22.5 24"
        fill="#A45D71"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 3. DIAGNOSTIC QUIZ OPTIONS FLAT COLORED ICONS
// ---------------------------------------------------------------------------

/**
 * Radiance & Glow Aspiration Icon
 */
export function RadianceGlowIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#FFF7ED" />
      <circle cx="20" cy="20" r="8" fill="#F59E0B" />
      <path d="M20 5V9 M20 31V35 M5 20H9 M31 20H35 M9.4 9.4L12.2 12.2 M27.8 27.8L30.6 30.6 M9.4 30.6L12.2 27.8 M27.8 12.2L30.6 9.4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Enlarged Pores & Congestion Aspiration Icon
 */
export function PoreRefineIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#ECFEFF" />
      <path d="M20 9C20 9 12 18 12 23C12 27.5 15.5 31 20 31C24.5 31 28 27.5 28 23C28 18 20 9 20 9Z" fill="#06B6D4" />
      <circle cx="20" cy="24" r="3" fill="white" opacity="0.8" />
    </svg>
  );
}

/**
 * Melasma & Pigmentation Aspiration Icon
 */
export function PigmentShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#FDF2F8" />
      <path d="M20 8L30 13V21C30 27 25 31 20 33C15 31 10 27 10 21V13L20 8Z" fill="#EC4899" />
      <circle cx="20" cy="20" r="4" fill="white" />
    </svg>
  );
}

/**
 * Acne Scars & Texture Remodeling Aspiration Icon
 */
export function ScarRemodelIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#F0FDF4" />
      <path d="M20 10C14 10 10 14 10 20C10 26 14 30 20 30C26 30 30 26 30 20" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 16L24 20L20 24L16 20L20 16Z" fill="#22C55E" />
    </svg>
  );
}

/**
 * Facial Firmness & Jowl Lift Aspiration Icon
 */
export function FaceLiftIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#FAF5FF" />
      <path d="M14 14C18 10 26 10 28 16C30 22 24 28 18 30C16 26 15 22 14 14Z" fill="#8B5CF6" />
      <path d="M17 19L21 15L25 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Hair Thinning & Shedding Aspiration Icon
 */
export function HairCareIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" fill="#FEFCE8" />
      <path d="M20 8C20 8 13 16 13 23C13 27 16 31 20 31C24 31 27 27 27 23C27 16 20 8 20 8Z" fill="#CA8A04" />
      <path d="M20 14V27 M16 20L20 23L24 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
