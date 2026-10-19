"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  MoveHorizontal,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { CheckCircleIcon, CalendarIcon, SparklesIcon } from "../ui/LuxuryIcons";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo, pagesContent } from "../../data/siteContent";

import { Reveal } from "../animation/Reveal";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { BeforeAfterLuxuryBg } from "../ui/LuxuryBackgrounds";
import { useBooking } from "../providers/BookingContext";
import MagneticButton from "../ui/MagneticButton";

function InteractiveComparisonViewer({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScanning, setIsAutoScanning] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const scanDirectionRef = useRef(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth Auto-Scanning Loop
  useEffect(() => {
    if (!isAutoScanning) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        let next = prev + scanDirectionRef.current * 0.7;
        if (next >= 85) {
          scanDirectionRef.current = -1;
          return 85;
        }
        if (next <= 15) {
          scanDirectionRef.current = 1;
          return 15;
        }
        return next;
      });
    }, 24);

    return () => clearInterval(interval);
  }, [isAutoScanning]);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    setIsAutoScanning(false);
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-blush-100 text-xs">
        <span className="text-[11px] font-semibold text-charcoal-700 flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-blush-500" />
          <span>Interactive Image Slider</span>
        </span>

        <button
          type="button"
          onClick={() => setIsAutoScanning(!isAutoScanning)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all border cursor-pointer shrink-0 ${
            isAutoScanning
              ? "bg-blush-500 text-white border-blush-600 shadow-xs animate-pulse"
              : "bg-white text-blush-600 hover:bg-blush-50 border-blush-200"
          }`}
        >
          {isAutoScanning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isAutoScanning ? "Auto Scanning" : "Auto Scan"}</span>
        </button>
      </div>

      {/* Main Drag Slider Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => {
          setIsDragging(true);
          setIsAutoScanning(false);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsAutoScanning(false)}
        className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-blush-200 shadow-md group"
      >
        {/* After Image (Full Background) */}
        <img
          src={item.after}
          alt={`${item.title} After Result`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Floating After Pill */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-blush-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-blush-200 pointer-events-none shadow-xs z-10">
          After ({100 - Math.round(sliderPosition)}%)
        </div>

        {/* Before Image (Clipped Left Layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.before}
            alt={`${item.title} Before Result`}
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
            style={{
              width: containerWidth ? `${containerWidth}px` : "100%",
              height: "100%",
            }}
          />
          {/* Floating Before Pill */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-charcoal-900 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-blush-200 pointer-events-none shadow-xs z-10">
            Before ({Math.round(sliderPosition)}%)
          </div>
        </div>

        {/* Vertical Divider Seam */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(201,130,148,0.8)] z-20"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative w-9 h-9 rounded-full bg-blush-500 text-white border-2 border-white shadow-lg flex items-center justify-center pointer-events-auto hover:scale-110 active:scale-95 transition-transform cursor-ew-resize">
              <MoveHorizontal className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Drag instruction caption */}
      <div className="pt-2 text-center text-[10.5px] text-charcoal-500 font-light">
        Drag slider handle horizontally to compare before & after
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const cases = clinicInfo.beforeAfter;
  const [currentIdx, setCurrentIdx] = useState(0);
  const { openBooking } = useBooking();
  const currentCase = cases[currentIdx] || cases[0];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-[#FDEBF0] text-charcoal-900 border-b border-blush-200/70 overflow-hidden relative"
    >
      {/* Luxury Damask & Topographic Wave Background */}
      <BeforeAfterLuxuryBg />

      {/* Ambient Soft Radial Rose Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blush-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ===================================================================
            SECTION HEADER & SLIDER CONTROLS
            =================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-blush-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-[10.5px] font-semibold tracking-widest uppercase mb-2 shadow-2xs">
              <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
              <span>{pagesContent.home.beforeAfter.pill}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
              {pagesContent.home.beforeAfter.title}
            </h2>

            <p className="text-charcoal-700/85 text-xs sm:text-sm mt-1 max-w-xl font-light leading-relaxed">
              {pagesContent.home.beforeAfter.subtitle}
            </p>
          </div>

          {/* Slider Step Counter & Navigation Arrows */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="text-right">
              <span className="text-xs uppercase tracking-widest text-blush-600 font-bold block">
                Case 0{currentIdx + 1} / 0{cases.length}
              </span>
              <span className="text-xs text-charcoal-600 font-medium truncate max-w-[180px] block">
                {currentCase.title}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous patient outcome"
                className="w-10 h-10 rounded-full bg-white border border-blush-200 text-charcoal-800 hover:text-blush-600 hover:border-blush-300 hover:bg-blush-50 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next patient outcome"
                className="w-10 h-10 rounded-full bg-blush-500 text-white hover:bg-blush-600 transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            CASE SELECTION TABS
            =================================================================== */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar">
          {cases.map((c, idx) => {
            const isSelected = currentIdx === idx;
            return (
              <button
                key={c.id || idx}
                onClick={() => setCurrentIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? "bg-blush-600 text-white border-blush-600 shadow-sm"
                    : "bg-white text-charcoal-700 border-blush-200 hover:border-blush-300 hover:bg-blush-50/50"
                }`}
              >
                <span className="text-[10px] font-mono opacity-80">0{idx + 1}</span>
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            FEATURED SLIDER STAGE CARD
            =================================================================== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id || currentIdx}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-3xl p-5 sm:p-7 lg:p-9 shadow-[0_15px_45px_-12px_rgba(122,70,85,0.12)] border border-blush-200/90 relative overflow-hidden"
            >
              {/* Botanical Corner Accent */}
              <div className="absolute top-3 right-3 pointer-events-none opacity-40">
                <BotanicalFrameCorner className="w-7 h-7" color="#DFA6B4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Interactive Comparison Viewer */}
                <div className="lg:col-span-7">
                  <InteractiveComparisonViewer item={currentCase} />
                </div>

                {/* Right: Case Details & Clinical Breakdown */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top Pill & Case Number */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 text-blush-700 text-[10.5px] font-bold uppercase tracking-wider border border-blush-200">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Doctor Verified Protocol</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-serif text-blush-400 font-semibold">
                        0{currentIdx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 leading-tight">
                      {currentCase.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-blush-600 font-medium mt-1">
                      {currentCase.treatment}
                    </p>
                  </div>

                  {/* Concern vs Result Breakdown Box */}
                  <div className="space-y-2.5 bg-blush-50/50 p-4 rounded-2xl border border-blush-100/80 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 block">
                        Initial Concern:
                      </span>
                      <p className="text-charcoal-900 font-medium mt-0.5">
                        {currentCase.concern || "Dull complexion, fine texture irregularities"}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-blush-100">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-blush-600 block">
                        Observed Outcome:
                      </span>
                      <p className="text-charcoal-800 font-normal mt-0.5 leading-relaxed">
                        {currentCase.result || currentCase.notes}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white border border-blush-200 shadow-2xs">
                      <span className="text-[9px] uppercase tracking-wider text-charcoal-500 block font-semibold">
                        Timeframe
                      </span>
                      <span className="font-semibold text-charcoal-900 text-xs">
                        {currentCase.timeframe || "4 - 6 Weeks"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-blush-200 shadow-2xs">
                      <span className="text-[9px] uppercase tracking-wider text-charcoal-500 block font-semibold">
                        Downtime
                      </span>
                      <span className="font-semibold text-charcoal-900 text-xs">
                        Zero (Walkout Ready)
                      </span>
                    </div>
                  </div>

                  {/* Doctor Verification Signature Note */}
                  <div className="flex items-start gap-2 text-xs text-charcoal-700 bg-white p-3 rounded-xl border border-blush-200 shadow-2xs">
                    <CheckCircleIcon className="w-4 h-4 shrink-0 text-blush-500 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong className="text-charcoal-900 font-semibold">Clinical Note:</strong> {currentCase.notes}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <MagneticButton strength={0.2}>
                      <button
                        onClick={() => openBooking()}
                        className="w-full py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      >
                        <CalendarIcon className="w-4 h-4" />
                        <span>Book Similar Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===================================================================
            DOTS PAGINATION
            =================================================================== */}
        <div className="pt-6 sm:pt-8 flex items-center justify-center gap-2">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`View Case 0${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIdx === idx
                  ? "w-8 bg-blush-600"
                  : "w-2 bg-blush-300 hover:bg-blush-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
