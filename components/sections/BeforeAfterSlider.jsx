"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal, CheckCircle2, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo } from "../../data/clinicInfo";
import { Reveal, ImageReveal } from "../animation/Reveal";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { BeforeAfterLuxuryBg } from "../ui/LuxuryBackgrounds";

function SingleComparisonCard({ item }) {
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
    <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-blush-200 shadow-[0_10px_35px_-10px_rgba(122,70,85,0.08)] flex flex-col justify-between h-full relative">
      {/* Header info & Controls */}
      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-blush-100">
        <div>
          <h3 className="text-sm sm:text-base font-serif font-bold text-charcoal-900 leading-tight">
            {item.title}
          </h3>
          <p className="text-[10.5px] text-blush-600 font-semibold truncate mt-0.5">
            {item.treatment}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAutoScanning(!isAutoScanning)}
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase transition-all border cursor-pointer shrink-0 ${
            isAutoScanning
              ? "bg-blush-400 text-white border-blush-500 shadow-xs animate-pulse"
              : "bg-blush-50 text-blush-600 hover:bg-blush-100 border-blush-200"
          }`}
        >
          {isAutoScanning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isAutoScanning ? "Scanning" : "Auto"}</span>
        </button>
      </div>

      {/* Slider Container */}
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
        className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-blush-100 shadow-inner group my-1"
      >
        {/* After Image */}
        <img
          src={item.after}
          alt={`${item.title} After Treatment`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm text-blush-600 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border border-blush-200 pointer-events-none shadow-2xs z-10">
          After ({100 - Math.round(sliderPosition)}%)
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.before}
            alt={`${item.title} Before Treatment`}
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
            style={{
              width: containerWidth ? `${containerWidth}px` : "100%",
              height: "100%",
            }}
          />
          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm text-charcoal-800 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border border-blush-200 pointer-events-none shadow-2xs z-10">
            Before ({Math.round(sliderPosition)}%)
          </div>
        </div>

        {/* Divider Seam */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_8px_rgba(201,130,148,0.6)] z-20"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Grab Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative w-8 h-8 rounded-full bg-blush-400 text-white border-2 border-white shadow-lg flex items-center justify-center pointer-events-auto hover:scale-110 active:scale-95 transition-transform">
              <MoveHorizontal className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Note */}
      <div className="mt-2 flex items-start gap-1.5 text-[10.5px] text-charcoal-700 bg-blush-50/70 p-2 rounded-xl border border-blush-100">
        <CheckCircle2 className="w-3.5 h-3.5 text-blush-500 shrink-0 mt-0.5" />
        <span><strong className="text-charcoal-900 font-semibold">Note:</strong> {item.notes}</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section
      id="results"
      className="py-16 sm:py-20 bg-[#FDEBF0] text-charcoal-900 border-b border-blush-200/70 overflow-hidden relative"
    >
      {/* Bespoke Dermal Marble & Topographic Waves Background */}
      <BeforeAfterLuxuryBg />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blush-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 shrink-0 w-full text-center mb-3">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-blush-200 text-blush-600 text-[10px] font-semibold tracking-widest uppercase mb-1 shadow-2xs">
            <SingleBloom className="w-3 h-3" color="#C98294" />
            <span>Clinical Transformations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 block tracking-tight">
            Real Patient Outcomes
          </h2>

          <p className="text-charcoal-700/80 text-xs sm:text-xs mt-0.5 max-w-xl mx-auto font-light">
            Slide the comparison handles on either card below to inspect verified before and after clinical improvements.
          </p>
        </Reveal>
      </div>

      {/* 2 Side-by-Side Comparison Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 my-auto flex items-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {clinicInfo.beforeAfter.slice(0, 2).map((item, idx) => (
            <ImageReveal key={idx} delay={idx * 0.1}>
              <SingleComparisonCard item={item} />
            </ImageReveal>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="max-w-7xl mx-auto px-4 shrink-0 text-center z-10 pt-2">
        <p className="text-[10.5px] text-charcoal-500 font-light">
          Drag slider handle horizontally to compare before and after outcomes ↔
        </p>
      </div>
    </section>
  );
}
