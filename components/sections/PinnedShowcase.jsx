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

// The 4 Core Treatment Categories from Truly Derma
const TREATMENT_CATEGORIES = [
  {
    id: "skin",
    number: "01",
    badge: "7 Treatments",
    categoryGroup: "Skin & Aesthetics",
    title: "Skin Treatments",
    treatmentName: "Skin Treatments",
    tagline: "Rejuvenating, glow-enhancing & clinical skin therapies",
    description: "From Hydra Facials and Medi Facials to Photo Facials and Mesotherapy, experience deep pore cleansing, pigmentation reduction, and natural skin glow.",
    image: "/images/treatments/hydra-facial.png",
    duration: "45 - 60 min",
    downtime: "Zero Downtime",
    idealFor: "Acne, Pigmentation, Dullness, Large Pores & Under-Eye Circles",
    highlights: [
      "Hydra Facial, Medi Facial & Mesotherapy",
      "Party Pop Facial, Photo Facial & Under-Eye Care",
    ],
    slug: "skin",
    targetUrl: "/treatments?category=skin",
    bookingSlug: "hydra-facial",
  },
  {
    id: "hair",
    number: "02",
    badge: "4 Treatments",
    categoryGroup: "Hair & Trichology",
    title: "Hair Treatments",
    treatmentName: "Hair Treatments",
    tagline: "Advanced hair regrowth, laser reduction & scalp wellness",
    description: "Permanent 4D laser hair reduction, PRP hair rejuvenation, FUE hair transplants, and scalp detox therapies tailored to restore hair density.",
    image: "/images/treatments/laser-hair-reduction.png",
    duration: "45 - 90 min",
    downtime: "Zero Downtime",
    idealFor: "Hair Thinning, Excessive Shedding, Unwanted Body Hair, Scalp Buildup",
    highlights: [
      "US-FDA Approved 4D Tec Laser Hair Reduction",
      "PRP Hair Rejuvenation, FUE Transplant & Scalp Detox",
    ],
    slug: "hair",
    targetUrl: "/treatments?category=hair",
    bookingSlug: "laser-hair-reduction",
  },
  {
    id: "fat-loss",
    number: "03",
    badge: "1 Treatment",
    categoryGroup: "Body Contouring",
    title: "Fat Loss Treatments",
    treatmentName: "Fat Loss Treatments",
    tagline: "Target stubborn fat pockets safely with zero surgery",
    description: "Cryolipolysis and ultrasound cavitation destroying stubborn fat deposits with no incisions, zero surgery, and zero downtime.",
    image: "/images/treatments/fat-loss.png",
    duration: "60 min",
    downtime: "Zero Downtime",
    idealFor: "Stubborn Belly Fat, Love Handles, Thighs & Body Contouring",
    highlights: [
      "Non-Surgical Cryolipolysis & Cavitation",
      "Non-invasive, painless fat reduction with zero downtime",
    ],
    slug: "fat-loss",
    targetUrl: "/treatments/fat-loss",
    bookingSlug: "fat-loss",
  },
  {
    id: "laser",
    number: "04",
    badge: "1 Treatment",
    categoryGroup: "Clinical Laser",
    title: "Laser Treatments",
    treatmentName: "Laser Treatments",
    tagline: "US-FDA approved Q-Switch laser toning & melasma clearance",
    description: "Sub-nanosecond photoacoustic laser pulses that shatter deep melanin, clear stubborn melasma, remove sun spots, and refine skin texture.",
    image: "/images/treatments/laser-toning.png",
    duration: "30 - 45 min",
    downtime: "Zero Downtime",
    idealFor: "Stubborn Melasma, Sun Spots, Tanning & Pigmentation",
    highlights: [
      "US-FDA Cleared Q-Switch Nd:YAG Laser",
      "Photoacoustic melanin shatter with zero thermal damage",
    ],
    slug: "laser-toning",
    targetUrl: "/treatments/laser-toning",
    bookingSlug: "laser-toning",
  },
];

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

  // Calculate actual pixel width needed to slide all 4 cards
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
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["25%", "100%"]);

  // Update active card index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = TREATMENT_CATEGORIES.length;
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
    const targetScroll =
      containerTop + (index / (TREATMENT_CATEGORIES.length - 1)) * totalScrollableHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNext = () => {
    scrollToCard(Math.min(activeIdx + 1, TREATMENT_CATEGORIES.length - 1));
  };

  const handlePrev = () => {
    scrollToCard(Math.max(activeIdx - 1, 0));
  };

  return (
    <motion.section
      ref={containerRef}
      id="treatments"
      className="relative h-[260vh] text-charcoal-900 bg-white border-y border-blush-200/70"
    >
      {/* Sticky Fullscreen Scroller Stage (Sticks to top while scrolling through cards) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden">
        {/* Luxury Background */}
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
                <span>CLINICAL CARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-charcoal-900 tracking-tight">
                Treatments
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 mt-1 font-light">
                Specialized Skin, Hair, Fat Loss, and Laser Treatments
              </p>
            </div>

            {/* Step Progress Indicator with Interactive Arrows */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-blush-600 font-bold block">
                  Category {TREATMENT_CATEGORIES[activeIdx]?.number} / {TREATMENT_CATEGORIES.length}
                </span>
                <span className="text-[11px] text-charcoal-600 font-medium truncate max-w-[200px] block">
                  {TREATMENT_CATEGORIES[activeIdx]?.treatmentName}
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
                  aria-label="Previous category"
                  className="w-8 h-8 rounded-full bg-white border border-blush-200 text-charcoal-800 hover:text-blush-600 hover:border-blush-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIdx === TREATMENT_CATEGORIES.length - 1}
                  aria-label="Next category"
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
            {TREATMENT_CATEGORIES.map((suite, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={suite.id}
                  onClick={() => scrollToCard(idx)}
                  className={`w-[85vw] sm:w-[560px] lg:w-[640px] xl:w-[680px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_35px_-10px_rgba(122,70,85,0.09)] border transition-all duration-300 flex flex-col justify-between shrink-0 relative overflow-hidden group cursor-pointer ${
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
                      <span className="text-blush-600 font-bold">{suite.categoryGroup}</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-serif text-blush-400 font-semibold tracking-wider">
                      {suite.number}
                    </span>
                  </div>

                  {/* Body Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-3 sm:my-4 items-center relative z-10">
                    {/* Left: Image Preview */}
                    <div className="md:col-span-5 relative h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border border-blush-100 shadow-sm bg-rose-50">
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

                    {/* Right: Category Information */}
                    <div className="md:col-span-7 space-y-2">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-charcoal-900 leading-tight">
                          {suite.treatmentName}
                        </h3>
                        {suite.tagline && (
                          <p className="text-xs text-blush-600 font-medium mt-0.5 line-clamp-1">
                            {suite.tagline}
                          </p>
                        )}
                      </div>

                      <p className="text-xs sm:text-xs text-charcoal-700/85 leading-relaxed font-light line-clamp-3">
                        {suite.description}
                      </p>

                      {/* 2 Clear Patient Highlights */}
                      <ul className="space-y-1 pt-1">
                        {suite.highlights.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-charcoal-800">
                            <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 text-blush-500" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Footer Details & Actions */}
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between gap-3 text-xs text-charcoal-600 relative z-10">
                    <div className="hidden sm:flex items-center gap-2 text-[11px]">
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
                        href={suite.targetUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blush-50 text-charcoal-700 text-[11px] font-semibold tracking-wider transition-all border border-blush-200 flex items-center gap-1 shadow-2xs"
                      >
                        <span>View Treatments</span>
                        <ArrowRight className="w-3 h-3 text-blush-500" />
                      </Link>

                      <MagneticButton strength={0.15}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(suite.bookingSlug);
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
            {TREATMENT_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => scrollToCard(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "bg-blush-500 text-white shadow-2xs"
                    : "bg-white text-charcoal-700 border border-blush-200 hover:bg-blush-50"
                }`}
              >
                {cat.title.replace(" Treatments", "")} ({cat.number})
              </button>
            ))}
          </div>

          {/* Dots Indicator & Hint */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {TREATMENT_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to ${cat.title}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? "w-7 bg-blush-500"
                      : "w-2 bg-blush-200 hover:bg-blush-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-[10.5px] text-charcoal-500 font-light hidden sm:block">
              Scroll down to glide horizontally →
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
