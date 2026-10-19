"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  LocationPinIcon,
  NavigationIcon,
  InstagramIcon,
  FacebookIcon,
  ClockIcon,
} from "../ui/LuxuryIcons";
import { clinicContact, doctorProfile, siteNavigation } from "../../data/siteContent";
import { SingleBloom, FloralBranch } from "../ui/BotanicalMotifs";
import FloatingPetals from "../ui/FloatingPetals";
import FlowingRosePetals from "../ui/FlowingRosePetals";

export default function Footer() {
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const branches = clinicContact.branches || [];
  const currentBranch = branches[activeBranchIdx] || branches[0];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const footerLinks = siteNavigation?.footerLinks || {};
  const navigationLinks = footerLinks.navigation || [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Treatments", href: "/treatments" },
    { name: "Journal", href: "/blogs" },
    { name: "Contact & Suites", href: "/contact" }
  ];
  const signatureTreatments = footerLinks.treatments || [];
  const legalLinks = footerLinks.legal || [];

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
                  Visit {doctorProfile?.name || "Dr. Megha’s"} <span className="italic text-blush-600 font-medium">Delhi Suites</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700/85 mt-1 font-light leading-relaxed max-w-xl">
                  Select your preferred clinic branch below for direct directions, desk calling, and live availability.
                </p>
              </div>

              {/* Branch Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                {branches.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBranchIdx(idx)}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                      activeBranchIdx === idx
                        ? "bg-gradient-to-r from-blush-400 to-rose-400 text-white border-blush-400 shadow-md shadow-blush-400/20 scale-102"
                        : "bg-white text-charcoal-800 hover:bg-blush-50 border-blush-200"
                    }`}
                  >
                    <LocationPinIcon className="w-4 h-4 shrink-0" />
                    <span>{b.city || b.name}</span>
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
                {currentBranch && (
                  <motion.div
                    key={currentBranch.city || currentBranch.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#FFF8F9] via-white to-[#FFF2F5] p-4 sm:p-5 rounded-2xl border-2 border-blush-200/90 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-blush-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <LocationPinIcon className="w-7 h-7 shrink-0" />
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
                      <ClockIcon className="w-4 h-4 shrink-0" />
                      <span>{currentBranch.hours || clinicContact.openingHours}</span>
                    </div>

                    {/* Dual Quick Action Buttons */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <a
                        href={currentBranch.mapLink || `https://maps.google.com/?q=${encodeURIComponent(currentBranch.name + " " + currentBranch.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                      >
                        <NavigationIcon className="w-4 h-4 shrink-0" />
                        <span>Directions</span>
                      </a>

                      <a
                        href={`tel:${(currentBranch.phone || clinicContact.phoneNumbers[activeBranchIdx] || clinicContact.phoneClean).replace(/\s+/g, "")}`}
                        className="flex-1 py-2 rounded-xl bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase border border-blush-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <PhoneIcon className="w-4 h-4 shrink-0" />
                        <span>Call Suite</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4-Column Balanced & Distinct Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-9 border-b border-blush-200/80">
          
          {/* Col 1: Brand & Doctor Leadership (Span 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2.5 rounded-2xl shadow-2xs border border-blush-200 group hover:border-blush-400 transition-all">
                <img
                  src="/logo.png"
                  alt="Truly Derma Clinic & Academy"
                  className="h-10 w-auto object-contain group-hover:scale-103 transition-transform"
                />
              </div>
            </Link>

            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              Directed by Gold Medalist Dermatologist <strong>{doctorProfile?.name}</strong>. Certified medical aesthetic dermatology, advanced US-FDA lasers, and trichology suites in Pitampura &amp; Rajouri Garden, Delhi.
            </p>

            {/* Official Social Badges */}
            <div className="pt-1 flex items-center gap-3">
              {clinicContact.socials.facebook && (
                <a
                  href={clinicContact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full hover:scale-110 transition-transform shadow-2xs cursor-pointer"
                >
                  <FacebookIcon className="w-8 h-8" />
                </a>
              )}

              {clinicContact.socials.instagram && (
                <a
                  href={clinicContact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full hover:scale-110 transition-transform shadow-2xs cursor-pointer"
                >
                  <InstagramIcon className="w-8 h-8" />
                </a>
              )}

              <a
                href={`https://wa.me/${clinicContact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full hover:scale-110 transition-transform shadow-2xs cursor-pointer"
              >
                <WhatsAppIcon className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation - Matching Navbar (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-[11px] font-bold tracking-widest text-blush-600 uppercase border-b border-blush-200/60 pb-1.5 inline-block">
              Explore
            </h5>
            <ul className="space-y-2 text-xs text-charcoal-700 font-medium">
              {navigationLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-blush-600 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blush-300 group-hover:bg-blush-500 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Signature Treatments (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-[11px] font-bold tracking-widest text-blush-600 uppercase border-b border-blush-200/60 pb-1.5 inline-block">
              Treatments
            </h5>
            <ul className="space-y-2 text-xs text-charcoal-700 font-light">
              {signatureTreatments.map((proc, idx) => (
                <li key={idx}>
                  <Link
                    href={proc.href}
                    className="hover:text-blush-600 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-400 group-hover:scale-125 transition-transform shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{proc.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/treatments"
                  className="text-[11px] font-bold text-blush-600 hover:text-blush-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore All Treatments →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Desks (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-[11px] font-bold tracking-widest text-blush-600 uppercase border-b border-blush-200/60 pb-1.5 inline-block">
              Contact Desk
            </h5>
            <ul className="space-y-2.5 text-xs text-charcoal-700 font-light">
              <li>
                <a
                  href={`tel:${clinicContact.phoneClean || "+917591055566"}`}
                  className="hover:text-blush-600 transition-colors flex items-center gap-2.5 group"
                >
                  <PhoneIcon className="w-4 h-4 shrink-0 text-blush-500 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-charcoal-900">{clinicContact.phoneFormatted || "+91 75910 55566"}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${clinicContact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors flex items-center gap-2.5 group text-charcoal-900 font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: {clinicContact.whatsappFormatted || "+91 80769 26982"}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinicContact.email}`}
                  className="hover:text-blush-600 transition-colors flex items-center gap-2.5"
                >
                  <MailIcon className="w-4 h-4 shrink-0 text-blush-500" />
                  <span className="truncate">{clinicContact.email}</span>
                </a>
              </li>
              <li className="pt-1 text-[11px] text-charcoal-600 leading-snug border-t border-blush-100">
                <span className="font-medium text-charcoal-800">Clinic Suites:</span> Pitampura &amp; Rajouri Garden, Delhi
              </li>
            </ul>
          </div>

        </div>

        {/* Dedicated Butterfly Emblem Landing Showcase */}
        <div
          id="footer-butterfly-anchor"
          className="pt-1 pb-2 flex flex-col items-center justify-center text-center relative !mt-3 sm:!mt-4"
        >
          {/* Soft radial glow behind the emblem */}
          <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blush-200/40 to-transparent blur-xl h-16 sm:h-20 -top-1 pointer-events-none" />
            <div className="h-16 sm:h-20 w-full flex items-center justify-center pointer-events-none" />

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-blush-600/90 font-medium font-serif mt-0.5">
              Truly Derma • Aesthetic Excellence
            </p>
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent mt-1.5" />
          </div>
        </div>

        {/* Dedicated Bottom Bar: Copyright, Legal Policies (Separated & Clear), Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-600 !mt-2.5 sm:!mt-3 pt-3.5 border-t border-blush-200/60">
          <p className="text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Truly Derma Clinic &amp; Academy. All Rights Reserved.
          </p>

          {/* Legal Policies - Explicitly Placed Here Out of Main Navigation */}
          <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-white/70 border border-blush-200/80 shadow-2xs text-[11px] text-charcoal-600">
            {legalLinks.map((link, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <Link
                  href={link.href}
                  className="hover:text-blush-600 hover:underline transition-colors font-medium"
                >
                  {link.name}
                </Link>
                {idx < legalLinks.length - 1 && <span className="text-blush-300">•</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-charcoal-500 text-[11px] hidden md:inline">
              Delhi NCR, India
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
