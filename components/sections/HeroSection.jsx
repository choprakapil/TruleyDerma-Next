"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useSpring, useScroll, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
} from "lucide-react";
import { CalendarIcon, WhatsAppIcon, AwardMedalIcon, SparklesIcon } from "../ui/LuxuryIcons";
import { useBooking } from "../providers/BookingContext";
import { clinicInfo } from "../../data/clinicInfo";
import MagneticButton from "../ui/MagneticButton";
import FloatingPetals from "../ui/FloatingPetals";
import { SingleBloom } from "../ui/BotanicalMotifs";
import { HeroLuxuryBg } from "../ui/LuxuryBackgrounds";

const HERO_SLIDES = [
  {
    id: "main-studio",
    eyebrow: "AESTHETIC DERMATOLOGY & SKIN STUDIO",
    title: "Pure Cellular Radiance & Clinical Elegance.",
    subtitle:
      "Where advanced MD dermatology meets natural aesthetic harmony. Directed by Dr. Megha Aggarwal across our boutique Pitampura & Rajouri Garden clinics.",
    image: "/banners/banner-facial.orig.jpg",
    alt: "Truly Derma Aesthetic Skincare Studio in Delhi",
    ctaText: "Book Consultation",
    badgeText: "MD Supervised",
    highlight: "20,000+ PROCEDURES COMPLETED",
  },
  {
    id: "glowtech-360",
    eyebrow: "EXCLUSIVE IN INDIA",
    title: "Sculpted Contours with TD Glowtech 360°.",
    subtitle:
      "Patented 7-frequency bio-resonance microcurrents and transdermal electroporation. A non-invasive skin gym sculpting natural facial contours with zero peeling.",
    image: "/banners/banner-glow.jpg",
    alt: "TD Glowtech 360 Exclusive Facial Treatment",
    ctaText: "Explore Glowtech",
    badgeText: "Patented Tech",
    highlight: "ZERO DOWNTIME FACIAL LIFT",
  },
  {
    id: "laser-care",
    eyebrow: "US-FDA CLEARED PRECISION",
    title: "Medical HydraFacial MD & Laser Toning.",
    subtitle:
      "Patented Vortex hydro-extraction and photoacoustic Q-Switch Nd:YAG laser toning, restoring crystal clarity, refined pores, and luminous skin barrier.",
    image: "/banners/banner-laser.orig.jpg",
    alt: "HydraFacial and Laser Toning at Truly Derma",
    ctaText: "Reserve Session",
    badgeText: "Clinical Gold Standard",
    highlight: "PHOTOACOUSTIC CLARITY",
  },
];

const AUTOPLAY_DURATION = 6000;

export default function HeroSection() {
  const [[currentIdx, direction], setPage] = useState([0, 1]);
  const { openBooking } = useBooking();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const floralY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleBannerMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 12);
    mouseY.set(y * 12);
  };

  const handleBannerMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextSlide = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % HERO_SLIDES.length, 1]);
  }, []);

  const prevSlide = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length, -1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prev]) => [(prev + 1) % HERO_SLIDES.length, 1]);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [currentIdx]);

  const slide = HERO_SLIDES[currentIdx];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 min-h-[85vh] flex flex-col justify-center bg-gradient-to-b from-[#FCE8ED] via-[#FDF2F5] to-white text-charcoal-900 overflow-hidden"
    >
      {/* Bespoke French Laid Linen Weave & Guilloché Watermark Background */}
      <HeroLuxuryBg />

      <FloatingPetals density="low" color="#DFA6B4" opacity={0.35} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blush-100/60 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y: floralY }}
        className="hidden lg:block absolute top-24 right-8 pointer-events-none opacity-30 z-0"
      >
        <SingleBloom className="w-24 h-24 text-blush-300" color="#DFA6B4" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Open Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 px-2 text-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200/90 text-charcoal-900 font-semibold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blush-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-charcoal-950">
              Open: <strong>Pitampura & Rajouri Garden</strong> (10:30 AM – 7:30 PM)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs font-bold text-charcoal-900">
            <span className="flex items-center gap-1.5 text-blush-700 bg-white px-3.5 py-1.5 rounded-full border border-blush-200 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-blush-500 text-blush-500" />
              <span>4.9★ Verified Experience</span>
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Headline & High-Contrast Doctor Pill */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="lg:col-span-6 space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-300 text-blush-700 text-[11px] font-bold tracking-widest uppercase shadow-sm">
              <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
              <span>{slide.eyebrow}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${slide.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-semibold text-charcoal-950 leading-[1.12] tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base text-charcoal-800 font-normal leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* High-Contrast Doctor Credentials Pill */}
            <div className="p-3.5 rounded-2xl bg-white border-2 border-blush-300 shadow-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center font-bold shrink-0 shadow-sm border border-amber-200">
                  <AwardMedalIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-serif font-bold text-charcoal-950 tracking-wide">
                    Dr. Megha Aggarwal (MBBS, MD Dermatology)
                  </p>
                  <p className="text-[11px] sm:text-xs text-charcoal-800 font-semibold mt-0.5">
                    Chief Aesthetic Physician • 14+ Years Clinical Excellence
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blush-500 text-white text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-sm">
                VERIFIED EXPERT
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton strength={0.25}>
                <button
                  onClick={() => openBooking()}
                  className="px-6 py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md shadow-blush-400/30 flex items-center gap-2.5 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Dr. Megha, I would like to inquire about Truly Derma clinic."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white hover:bg-blush-50 text-charcoal-950 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-2 border border-blush-300 shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: ELEGANT LUXURY ARCH FRAME WITH ZERO TEXT/BUTTON CLIPPING */}
          <div
            onMouseMove={handleBannerMouseMove}
            onMouseLeave={handleBannerMouseLeave}
            className="lg:col-span-6 relative"
          >
            {/* Outer Luxury Frame Container */}
            <div className="p-2 sm:p-2.5 rounded-[44px] sm:rounded-[56px] bg-white/90 backdrop-blur-md border-2 border-blush-300 shadow-[0_20px_50px_-10px_rgba(122,70,85,0.2)] relative">
              <div className="relative rounded-[36px] sm:rounded-[46px] overflow-hidden aspect-[4/3] sm:aspect-[14/10] max-h-[380px] lg:max-h-[420px] bg-charcoal-950 group">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={slide.image}
                      alt={slide.alt}
                      style={{ x: mouseX, y: mouseY }}
                      className="w-full h-full object-cover object-center will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Stat Badge (Safe Inset - Never Cut Off) */}
                <div className="absolute top-4 left-5 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-blush-200 text-charcoal-950 text-xs font-bold flex items-center gap-2 shadow-md">
                  <SparklesIcon className="w-4 h-4" />
                  <span>{slide.badgeText}</span>
                </div>

                {/* Floating Headline & Slider Control Overlay (100% UNTRUNCATED TEXT & UNCLIPPED BUTTONS) */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div className="bg-charcoal-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 text-white space-y-1 flex-1 shadow-lg">
                    <p className="text-[10px] sm:text-[11px] text-blush-300 font-bold tracking-widest uppercase">
                      {slide.highlight}
                    </p>
                    <p className="text-xs sm:text-sm font-serif font-medium text-white leading-snug">
                      {slide.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-charcoal-950/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/30 shadow-lg shrink-0 self-end sm:self-auto">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous Slide"
                      className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="text-[11px] font-mono text-white px-1.5 font-bold">
                      0{currentIdx + 1} / 0{HERO_SLIDES.length}
                    </div>
                    <button
                      onClick={nextSlide}
                      aria-label="Next Slide"
                      className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
