"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  ExternalLink,
  ArrowUp,
  Sparkles,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Calendar
} from "lucide-react";
import { clinicInfo } from "../../data/clinicInfo";
import { SingleBloom, FloralBranch } from "../ui/BotanicalMotifs";
import FloatingPetals from "../ui/FloatingPetals";
import FlowingRosePetals from "../ui/FlowingRosePetals";
import MagneticButton from "../ui/MagneticButton";
import { useBooking } from "../providers/BookingContext";

export default function Footer() {
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const { openBooking } = useBooking();
  const currentBranch = clinicInfo.contact.branches[activeBranchIdx];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-[#FAF5F7] via-[#FCEAEF] to-[#F9E2E8] text-charcoal-900 pt-10 sm:pt-14 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Top Metallic Rose Gold Gradient Shimmer Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush-300 via-[#DFA6B4] to-blush-400 z-20" />

      {/* Flowing Organic Rose Petals Animation */}
      <FlowingRosePetals count={35} speed={1.15} className="z-10 opacity-85" />

      {/* Floating Ambient Rose Petals */}
      <FloatingPetals density="medium" className="opacity-60 z-0" />

      {/* Pulsing Light Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blush-200/35 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          x: [20, -20, 20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-1/4 w-[550px] h-[550px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Botanical Line Art */}
      <div className="absolute top-8 right-10 opacity-15 pointer-events-none hidden sm:block">
        <FloralBranch className="w-56 h-56 text-blush-400" color="#C98294" />
      </div>
      <div className="absolute bottom-12 left-8 opacity-15 pointer-events-none hidden sm:block">
        <SingleBloom className="w-40 h-40 text-blush-400" color="#C98294" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7 sm:space-y-8">
        
        {/* Interactive Boutique Clinic Switcher Showcase Banner */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 lg:p-7 border border-blush-200/90 shadow-[0_15px_45px_-10px_rgba(122,70,85,0.1)] relative overflow-hidden">
          {/* Subtle Shimmer Overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blush-100/40 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Col: Brand Headline & Switcher Tabs */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-50 border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blush-500" />
                <span>Boutique Aesthetic Suites</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-charcoal-900 tracking-tight leading-tight">
                  Visit Dr. Megha’s <span className="italic text-blush-600 font-medium">Delhi Suites</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700/85 mt-1 font-light leading-relaxed max-w-xl">
                  Select your preferred clinic branch below for direct directions, desk calling, and live availability.
                </p>
              </div>

              {/* Branch Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                {clinicInfo.contact.branches.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBranchIdx(idx)}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                      activeBranchIdx === idx
                        ? "bg-gradient-to-r from-blush-400 to-rose-400 text-white border-blush-400 shadow-md shadow-blush-400/20 scale-102"
                        : "bg-white text-charcoal-800 hover:bg-blush-50 border-blush-200"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${activeBranchIdx === idx ? "text-white" : "text-blush-500"}`} />
                    <span>{b.city}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      activeBranchIdx === idx ? "bg-white/20 text-white" : "bg-blush-100 text-blush-700"
                    }`}>
                      {idx === 0 ? "Flagship" : "Boutique"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Animated Selected Branch Information Card */}
            <div className="lg:col-span-5 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBranch.city}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#FFF8F9] via-white to-[#FFF2F5] p-4 sm:p-5 rounded-2xl border-2 border-blush-200/90 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-blush-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-blush-400 text-white flex items-center justify-center font-bold shadow-2xs">
                        <MapPin className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-bold text-charcoal-900">{currentBranch.name}</h4>
                        <p className="text-[10px] text-blush-600 font-semibold uppercase tracking-wider">{currentBranch.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>Open Today</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed font-light pl-2 border-l-2 border-blush-300">
                    {currentBranch.address}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-charcoal-600 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blush-500 shrink-0" />
                    <span>{clinicInfo.contact.hours}</span>
                  </div>

                  {/* Dual Quick Action Buttons */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <a
                      href={`https://maps.google.com/?q=${currentBranch.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>

                    <a
                      href={`tel:${clinicInfo.contact.phoneNumbers[activeBranchIdx] || clinicInfo.contact.phone}`}
                      className="flex-1 py-2 rounded-xl bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase border border-blush-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-blush-500" />
                      <span>Call Suite</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 5-Column Directory Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-7 border-b border-blush-200/80">
          
          {/* Col 1: Brand & Doctor Leadership (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-2xs border border-blush-200 group hover:border-blush-400 transition-all">
              <img
                src="/logo.png"
                alt="Truly Derma Clinic & Academy"
                className="h-9 w-auto object-contain group-hover:scale-103 transition-transform"
              />
            </div>

            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              Directed by renowned Aesthetic Physician <strong>Dr. Megha Aggarwal</strong> (MBBS, MD Dermatology). Delivering certified skin restoration, laser precision, and hair rejuvenation across Delhi NCR.
            </p>

            {/* Official Social Badges */}
            <div className="pt-1 flex items-center gap-2">
              <a
                href={clinicInfo.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white hover:bg-blush-400 hover:text-white text-blush-600 transition-all flex items-center justify-center border border-blush-200 shadow-2xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={clinicInfo.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white hover:bg-blush-400 hover:text-white text-blush-600 transition-all flex items-center justify-center border border-blush-200 shadow-2xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${clinicInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white hover:bg-emerald-500 hover:text-white text-[#25D366] transition-all flex items-center justify-center border border-blush-200 shadow-2xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Clinical Procedures (Span 3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="text-xs font-bold tracking-widest text-blush-600 uppercase">
              Clinical Procedures
            </h5>
            <ul className="space-y-1.5 text-xs text-charcoal-700 font-light">
              <li>
                <Link href="/treatments/td-glowtech-360" className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform" />
                  <span>TD Glowtech 360°</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments/hydra-facial" className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform" />
                  <span>Medical HydraFacial MD</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments/laser-toning" className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform" />
                  <span>Q-Switch Laser Toning</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments/dermapen-4" className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform" />
                  <span>Dermapen 4™ Microneedling</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments/hair-rejuvenation" className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform" />
                  <span>Autologous GFC Hair Therapy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="text-xs font-bold tracking-widest text-blush-600 uppercase">
              Quick Navigation
            </h5>
            <ul className="space-y-1.5 text-xs text-charcoal-700 font-light">
              <li>
                <Link href="/" className="hover:text-blush-600 transition-colors">
                  Home Studio
                </Link>
              </li>
              <li>
                <a href="#doctor" className="hover:text-blush-600 transition-colors">
                  Dr. Megha Leadership
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-blush-600 transition-colors">
                  FDA Cleared Technology
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-blush-600 transition-colors">
                  Verified Before & After
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blush-600 transition-colors">
                  Patient Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Desk Contact (Span 3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="text-xs font-bold tracking-widest text-blush-600 uppercase">
              Direct Contact
            </h5>
            <ul className="space-y-2 text-xs text-charcoal-700 font-light">
              <li>
                <a
                  href={`mailto:${clinicInfo.contact.email}`}
                  className="hover:text-blush-600 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-blush-500 shrink-0" />
                  <span className="truncate">{clinicInfo.contact.email}</span>
                </a>
              </li>
              {clinicInfo.contact.phoneNumbers.slice(0, 2).map((phone, idx) => (
                <li key={idx}>
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-blush-600 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-blush-500 shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${clinicInfo.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors flex items-center gap-2 text-[#25D366] font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0 text-[#25D366]" />
                  <span>WhatsApp Priority Desk</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Dedicated Butterfly Emblem Landing Showcase */}
        <div
          id="footer-butterfly-anchor"
          className="pt-1 pb-2 flex flex-col items-center justify-center text-center relative !mt-3 sm:!mt-4"
        >
          {/* Subtle decorative pedestal with rose-gold shimmer aura */}
          <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
            {/* Soft radial glow behind the emblem */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blush-200/40 to-transparent blur-xl h-16 sm:h-20 -top-1 pointer-events-none" />
            
            {/* Reserved vertical height slot where the animated butterfly logo hovers/rests */}
            <div className="h-16 sm:h-20 w-full flex items-center justify-center pointer-events-none" />

            {/* Subtle luxury brand signature */}
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-blush-600/90 font-medium font-serif mt-0.5">
              Truly Derma • Aesthetic Excellence
            </p>
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent mt-1.5" />
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-600 !mt-2.5 sm:!mt-3 pt-3 border-t border-blush-200/60">
          <p>© {new Date().getFullYear()} Truly Derma Clinic & Academy. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-charcoal-500 text-[11px]">
              Pitampura & Rajouri Garden, New Delhi
            </span>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white hover:bg-blush-400 hover:text-white text-blush-600 transition-all flex items-center justify-center border border-blush-200 shadow-2xs cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
