"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useBooking } from "../providers/BookingContext";
import MagneticButton from "../ui/MagneticButton";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { PinnedShowcaseLuxuryBg } from "../ui/LuxuryBackgrounds";

const CLINICAL_SUITES = [
  {
    id: "td-glowtech",
    number: "01",
    badge: "Exclusive In India",
    slug: "td-glowtech-360",
    title: "TD Glowtech 360°",
    category: "Cellular Bio-Resonance",
    tagline: "7 Micro-Current Frequencies & Deep Electroporation",
    description:
      "Our proprietary non-invasive 'skin gym'. Employs 7 synchronized microcurrent resonance channels to tone facial SMAS muscle layers and transdermally infuse clinical peptides with zero thermal damage.",
    image: "/banners/banner-facial.orig.jpg",
    specs: [
      { label: "Mechanism", value: "7 Resonance Microcurrents" },
      { label: "Target", value: "SMAS & Dermal Fibroblasts" },
      { label: "Downtime", value: "Zero (Walkout Glow)" },
      { label: "Duration", value: "60 - 75 Mins" },
    ],
    features: [
      "Facial contouring and sharpened jawline",
      "Immediate plumping of nasolabial folds",
      "Cellular ATP boost by over 500%",
    ],
  },
  {
    id: "hydra-facial",
    number: "02",
    badge: "Medical Grade Cleanse",
    slug: "hydra-facial",
    title: "Medical HydraFacial MD",
    category: "Vortex Exfoliation",
    tagline: "Patented 3-Step Vortex Hydro-Peel & Antioxidant Infusion",
    description:
      "Combines painless fluid-abrasion exfoliation, automated vortex pore vacuuming, and targeted delivery of pharmaceutical hyaluronic acid, oligopeptides, and botanicals.",
    image: "/images/tech-3.jpg",
    specs: [
      { label: "Technology", value: "Vortex-Fusion Tip" },
      { label: "Infusion", value: "Active Hyaluronic Serums" },
      { label: "Downtime", value: "Zero Downtime" },
      { label: "Duration", value: "45 Mins" },
    ],
    features: [
      "Unclogs sebum plugs and blackheads painlessly",
      "Smooths rough texture and minimizes enlarged pores",
      "Instant luminous glass-skin reflection",
    ],
  },
  {
    id: "q-switch-laser",
    number: "03",
    badge: "US-FDA Cleared",
    slug: "laser-toning",
    title: "Q-Switch Nd:YAG Laser Toning",
    category: "Photo-Acoustic Clarity",
    tagline: "Targeted Melanocyte Shockwaves & Hollywood Carbon Peel",
    description:
      "High-power sub-nanosecond pulses generate acoustic shockwaves that shatter deep dermal melasma and sun damage into microscopic fragments, swept away naturally by macrophages.",
    image: "/banners/banner-laser.orig.jpg",
    specs: [
      { label: "Wavelength", value: "1064nm / 532nm Dual Pulse" },
      { label: "Pulse Width", value: "Sub-Nanosecond Photoacoustic" },
      { label: "Downtime", value: "Zero (No Scabbing)" },
      { label: "Duration", value: "45 Mins" },
    ],
    features: [
      "Refines stubborn melasma and post-acne pigmentation",
      "Hollywood Carbon Peel option for instant pore tightening",
      "Safe for Indian Fitzpatrick Skin Types III-V",
    ],
  },
  {
    id: "dermapen-4",
    number: "04",
    badge: "World Leader In Microneedling",
    slug: "dermapen-4",
    title: "Dermapen 4™ + Growth Factors",
    category: "Collagen Induction Therapy",
    tagline: "1,920 Micro-Channels / Sec with Precision Depth Control",
    description:
      "Advanced digitized microneedling triggers natural wound-healing cascades to produce fresh type-I collagen, paired with doctor-formulated biomimetic peptides and exosomes.",
    image: "/banners/banner-glow.jpg",
    specs: [
      { label: "Speed", value: "1,920 Micro-Channels / Sec" },
      { label: "Infusion", value: "Pure Growth Factor Concentrate" },
      { label: "Downtime", value: "Mild Pinkness (12-24h)" },
      { label: "Duration", value: "60 Mins" },
    ],
    features: [
      "Smooths deep rolling and boxcar acne scars",
      "Shrinks enlarged facial pores and fine lines",
      "Stimulates long-term neo-collagenesis",
    ],
  },
  {
    id: "laser-hair",
    number: "05",
    badge: "Gold Standard",
    slug: "laser-hair-reduction",
    title: "Triple-Wavelength Laser Reduction",
    category: "Permanent Follicle Reduction",
    tagline: "755nm Alexandrite + 810nm Diode + 1064nm Nd:YAG",
    description:
      "Synchronously targets three different tissue depths within the hair follicle. Continuous contact cooling at -4°C guarantees exceptional comfort even across sensitive areas.",
    image: "/images/tech-2.jpg",
    specs: [
      { label: "Cooling", value: "Dual Chill Contact -4°C" },
      { label: "Wavelength", value: "755nm + 810nm + 1064nm" },
      { label: "Downtime", value: "Zero Downtime" },
      { label: "Sessions", value: "6 - 8 Recommended" },
    ],
    features: [
      "Painless in-motion continuous glide technique",
      "Treats fine baby hair as well as deep coarse roots",
      "Permanent reduction with smooth ingrown-free skin",
    ],
  },
];

export default function PinnedShowcase() {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const { openBooking } = useBooking();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-74%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  // Subtle background color transition tied to scroll progress
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FDEBF0", "#FCE4EC", "#FCE8EE"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = CLINICAL_SUITES.length;
    const current = Math.min(Math.floor(latest * total), total - 1);
    setActiveIdx(current);
  });

  return (
    <motion.section
      ref={containerRef}
      id="suites"
      style={{ backgroundColor }}
      className="relative h-[320vh] text-charcoal-900 border-y border-blush-200/70 transition-colors duration-500"
    >
      {/* Sticky Fullscreen Scroller Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-5 sm:pb-6 overflow-hidden">
        {/* Bespoke Royal Rose Conservatory & Magnolia Petal Waves Background */}
        <PinnedShowcaseLuxuryBg />

        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blush-200/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cream-200/50 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Top Header & Step Progress */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 sm:pb-4 border-b border-blush-200/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-[11px] font-semibold tracking-widest uppercase mb-2 shadow-sm">
                <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
                <span>Patented Clinical Arsenal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
                Signature Treatment Suites & Technology
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 mt-1 font-light">
                Scroll down to glide horizontally through Dr. Megha's precision clinical suites.
              </p>
            </div>

            {/* Editorial Step Progress Indicator */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-blush-600 font-bold block">
                  Suite {CLINICAL_SUITES[activeIdx]?.number} / 0{CLINICAL_SUITES.length}
                </span>
                <span className="text-[11px] text-charcoal-600 font-medium">
                  {CLINICAL_SUITES[activeIdx]?.title}
                </span>
              </div>

              <div className="w-28 sm:w-44 h-1.5 bg-white rounded-full overflow-hidden border border-blush-200 shadow-inner">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-blush-300 to-blush-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Card Track */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto z-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 lg:gap-10 pl-4 sm:pl-12 lg:pl-20 pr-12 sm:pr-24 will-change-transform"
          >
            {CLINICAL_SUITES.map((suite, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={suite.id}
                  className={`w-[88vw] sm:w-[580px] lg:w-[680px] xl:w-[720px] bg-white/95 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_12px_35px_-10px_rgba(122,70,85,0.08)] border transition-all duration-400 flex flex-col justify-between shrink-0 relative overflow-hidden group ${
                    isActive
                      ? "border-blush-300 scale-100 opacity-100 shadow-xl"
                      : "border-blush-100/80 scale-[0.98] opacity-80"
                  }`}
                >
                  {/* Delicate Botanical Corner Accent */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none opacity-40">
                    <BotanicalFrameCorner className="w-6 h-6" color="#DFA6B4" />
                  </div>

                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-3 border-b border-blush-100 relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-50 text-blush-600 border border-blush-200 text-[11px] font-semibold uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-blush-500" />
                      <span>{suite.badge}</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-serif text-blush-300 tracking-wider">
                      {suite.number}
                    </span>
                  </div>

                  {/* Body Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-4 items-center relative z-10">
                    {/* Left: Image Preview */}
                    <div className="md:col-span-5 relative h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border border-blush-100 shadow-sm">
                      <img
                        src={suite.image}
                        alt={suite.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-charcoal-900 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-blush-100">
                        {suite.category}
                      </span>
                    </div>

                    {/* Right: Suite Information & 2 Bullets */}
                    <div className="md:col-span-7 space-y-2">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-charcoal-900 leading-tight">
                          {suite.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-blush-600 font-semibold tracking-wide mt-0.5">
                          {suite.tagline}
                        </p>
                      </div>
                      <p className="text-xs sm:text-[13px] text-charcoal-700/85 leading-relaxed font-light line-clamp-3">
                        {suite.description}
                      </p>

                      {/* 2 Clinical Highlight Bullets */}
                      <ul className="pt-1.5 space-y-1.5">
                        {suite.features.slice(0, 2).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-charcoal-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blush-500 shrink-0 mt-0.5" />
                            <span className="leading-snug font-medium text-charcoal-800">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specs & Action Button */}
                  <div className="pt-3 border-t border-blush-100 flex items-center justify-between gap-3 relative z-10">
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      {suite.specs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx} className="px-2.5 py-1 rounded-md bg-blush-50/70 border border-blush-100">
                          <span className="text-charcoal-500 block text-[9px] uppercase font-semibold">
                            {spec.label}
                          </span>
                          <span className="text-charcoal-900 font-medium truncate block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <MagneticButton strength={0.2}>
                      <button
                        onClick={() => openBooking(suite.slug)}
                        className="px-5 py-2.5 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <span>Book Suite</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Navigation Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 shrink-0 flex items-center justify-between text-xs text-charcoal-600">
          <div className="flex items-center gap-2">
            {CLINICAL_SUITES.map((suite, idx) => (
              <span
                key={suite.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx
                    ? "w-8 bg-blush-500"
                    : "w-2 bg-blush-200"
                }`}
              />
            ))}
          </div>

          <p className="text-[11px] text-charcoal-600 font-light">
            Scroll vertically to traverse clinical suites ↓
          </p>
        </div>
      </div>
    </motion.section>
  );
}
