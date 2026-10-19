"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Calendar,
} from "lucide-react";
import {
  LaserPulseIcon,
  CheckCircleIcon,
  CalendarIcon,
  SparklesIcon,
} from "../ui/LuxuryIcons";
import { useBooking } from "../providers/BookingContext";
import MagneticButton from "../ui/MagneticButton";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { PinnedShowcaseLuxuryBg } from "../ui/LuxuryBackgrounds";

import { allTreatments, pagesContent } from '../../data/siteContent';

// Dynamically mapped treatments from master siteContent.js
const ALL_TREATMENTS = allTreatments.map((t, idx) => ({
  id: t.id,
  slug: t.slug,
  number: String(idx + 1).padStart(2, '0'),
  badge: t.badge,
  categoryGroup:
    t.categoryKey === 'skin' || t.category.includes('Skin')
      ? 'Skin & Facials'
      : t.categoryKey === 'hair' || t.category.includes('Hair')
      ? 'Hair & Trichology'
      : 'Laser, Body & Aesthetic',
  title: t.plainHeadline || t.name,
  treatmentName: t.name,
  tagline: t.tagline,
  description: t.description,
  image: t.heroImage,
  duration: t.sessionDuration,
  downtime: t.downtime,
  idealFor: t.suitableFor,
  benefits: (t.highlights || []).slice(0, 3),
}));

export default function PinnedShowcase() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const { openBooking } = useBooking();

  // Scroll Progress listener on the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate actual pixel width needed to slide all 15 cards
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distance = Math.max(0, totalTrackWidth - viewportWidth + 80);
        setMaxScrollDistance(distance);
      }
    };

    calculateDistance();
    const timer = setTimeout(calculateDistance, 300);
    window.addEventListener("resize", calculateDistance);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  // Smooth horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollDistance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);

  // Update active card index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = ALL_TREATMENTS.length;
    const current = Math.min(Math.floor(latest * total), total - 1);
    setActiveIdx(current);
  });

  // Smooth jump to any specific card index
  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (ALL_TREATMENTS.length - 1)) * totalScrollableHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNext = () => {
    scrollToCard(Math.min(activeIdx + 1, ALL_TREATMENTS.length - 1));
  };

  const handlePrev = () => {
    scrollToCard(Math.max(activeIdx - 1, 0));
  };

  return (
    <motion.section
      ref={containerRef}
      id="suites"
      className="relative h-[550vh] text-charcoal-900 bg-white border-y border-blush-200/70"
    >
      {/* Sticky Fullscreen Scroller Stage (Sticks to top while scrolling through cards) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden">
        {/* Bespoke Royal Rose Conservatory & Magnolia Petal Waves Background */}
        <PinnedShowcaseLuxuryBg />

        {/* Soft Ambient Radial Rose Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-100/35 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blush-100/40 rounded-full blur-[120px] pointer-events-none" />

        {/* ===================================================================
            SECTION TOP HEADER & LIVE STEP PROGRESS
            =================================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 sm:pb-4 border-b border-blush-200/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-[11px] font-semibold tracking-widest uppercase mb-2 shadow-2xs">
                <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
                <span>{pagesContent.home.pinnedShowcase.pill}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
                {pagesContent.home.pinnedShowcase.title}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 mt-1 font-light">
                {pagesContent.home.pinnedShowcase.subtitle} ({ALL_TREATMENTS.length} Specialized Procedures)
              </p>
            </div>

            {/* Editorial Step Progress Indicator with Interactive Arrows */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-blush-600 font-bold block">
                  Suite {ALL_TREATMENTS[activeIdx]?.number} / {ALL_TREATMENTS.length}
                </span>
                <span className="text-[11px] text-charcoal-600 font-medium truncate max-w-[200px] block">
                  {ALL_TREATMENTS[activeIdx]?.treatmentName}
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-24 sm:w-36 h-1.5 bg-blush-100/80 rounded-full overflow-hidden border border-blush-200 shadow-inner">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-blush-400 to-blush-600 rounded-full"
                />
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5 pl-1">
                <button
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  aria-label="Previous suite"
                  className="w-8 h-8 rounded-full bg-white border border-blush-200 text-charcoal-800 hover:text-blush-600 hover:border-blush-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIdx === ALL_TREATMENTS.length - 1}
                  aria-label="Next suite"
                  className="w-8 h-8 rounded-full bg-blush-500 text-white hover:bg-blush-600 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            HORIZONTAL CARD TRACK (PINNED SCROLL STAGE)
            =================================================================== */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto z-10">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 sm:gap-7 lg:gap-8 pl-4 sm:pl-10 lg:pl-16 pr-10 sm:pr-20 will-change-transform items-center"
          >
            {ALL_TREATMENTS.map((suite, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={suite.id}
                  onClick={() => scrollToCard(idx)}
                  className={`w-[88vw] sm:w-[580px] lg:w-[680px] xl:w-[720px] bg-white rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_12px_35px_-10px_rgba(122,70,85,0.09)] border transition-all duration-400 flex flex-col justify-between shrink-0 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? "border-blush-400 scale-100 opacity-100 shadow-[0_18px_45px_-10px_rgba(122,70,85,0.18)] ring-2 ring-blush-200/50"
                      : "border-blush-100/90 scale-[0.98] opacity-80 hover:opacity-95"
                  }`}
                >
                  {/* Delicate Botanical Corner Accent */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none opacity-40">
                    <BotanicalFrameCorner className="w-6 h-6" color="#DFA6B4" />
                  </div>

                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-3 border-b border-blush-100 relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-charcoal-800 border border-blush-200/80 text-[10.5px] font-semibold uppercase tracking-wider">
                      <LaserPulseIcon className="w-3.5 h-3.5" />
                      <span>{suite.badge}</span>
                      <span className="mx-1 text-blush-300">•</span>
                      <span className="text-blush-600">{suite.categoryGroup}</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-serif text-blush-400 font-semibold tracking-wider">
                      {suite.number}
                    </span>
                  </div>

                  {/* Body Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-3 sm:my-4 items-center relative z-10">
                    {/* Left: Image Preview */}
                    <div className="md:col-span-5 relative h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border border-blush-100 shadow-sm">
                      <img
                        src={suite.image}
                        alt={suite.treatmentName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-charcoal-900 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-blush-100 shadow-xs">
                        {suite.treatmentName}
                      </span>
                    </div>

                    {/* Right: Suite Information & Easy Language */}
                    <div className="md:col-span-7 space-y-2">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-charcoal-900 leading-tight">
                          {suite.title}
                        </h3>
                        <p className="text-xs text-blush-600 font-medium mt-0.5">
                          {suite.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-xs text-charcoal-700/85 leading-relaxed font-light line-clamp-3">
                        {suite.description}
                      </p>

                      {/* 2 Clear Patient Benefits */}
                      <ul className="space-y-1 pt-1">
                        {suite.benefits.slice(0, 2).map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-charcoal-800">
                            <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 text-blush-500" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Specs & Action Bar */}
                  <div className="pt-3 border-t border-blush-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                    {/* 3 Quick Chips */}
                    <div className="flex items-center gap-3 text-[11px] text-charcoal-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blush-500" />
                        <strong className="text-charcoal-900">{suite.duration}</strong>
                      </span>
                      <span className="text-blush-200">|</span>
                      <span>
                        Recovery: <strong className="text-charcoal-900">{suite.downtime}</strong>
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/treatments/${suite.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blush-50 text-charcoal-700 text-[11px] font-semibold tracking-wider transition-all border border-blush-200 flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 text-blush-500" />
                      </Link>

                      <MagneticButton strength={0.15}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(suite.slug);
                          }}
                          className="px-4 py-1.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-[11px] font-semibold uppercase tracking-wider transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                        >
                          <CalendarIcon className="w-3 h-3" />
                          <span>Book</span>
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ===================================================================
            BOTTOM NAVIGATION BAR (CATEGORY JUMP PILLS + DOTS)
            =================================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-charcoal-600">
          {/* Category Quick Jump Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mr-1 hidden md:inline">
              Jump To:
            </span>
            <button
              onClick={() => scrollToCard(0)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                activeIdx < 9
                  ? "bg-blush-500 text-white shadow-2xs"
                  : "bg-white text-charcoal-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              Skin & Facials (01–09)
            </button>
            <button
              onClick={() => scrollToCard(9)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                activeIdx >= 9 && activeIdx < 13
                  ? "bg-blush-500 text-white shadow-2xs"
                  : "bg-white text-charcoal-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              Laser & Hair (10–13)
            </button>
            <button
              onClick={() => scrollToCard(13)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                activeIdx >= 13
                  ? "bg-blush-500 text-white shadow-2xs"
                  : "bg-white text-charcoal-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              Body & Aesthetics (14–15)
            </button>
          </div>

          {/* Dots Indicator & Hint */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {ALL_TREATMENTS.map((suite, idx) => (
                <button
                  key={suite.id}
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to ${suite.treatmentName}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? "w-6 bg-blush-500"
                      : "w-1.5 bg-blush-200 hover:bg-blush-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-[10.5px] text-charcoal-500 font-light hidden sm:block">
              Scroll down to glide horizontally ↓
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
