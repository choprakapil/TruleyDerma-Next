"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ClockIcon, ShieldCheckIcon, CalendarIcon } from "../ui/LuxuryIcons";
import { treatments } from "../../data/treatments";
import { useBooking } from "../providers/BookingContext";
import { Reveal } from "../animation/Reveal";
import TiltSpotlightCard from "../ui/TiltSpotlightCard";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";

export default function ServicesGallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const { openBooking } = useBooking();

  // Mouse Drag Scrolling State
  const [isDraggingMouse, setIsDraggingMouse] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const filters = [
    { id: "all", label: "All Procedures" },
    { id: "skin", label: "Skin Treatments" },
    { id: "hair", label: "Hair Treatments" },
    { id: "laser", label: "Laser Treatments" },
    { id: "fat-loss", label: "Fat Loss" },
  ];

  const filteredTreatments = treatments.filter((t) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "skin") return t.category === "Skin Treatment";
    if (selectedFilter === "hair") return t.category === "Hair Treatment";
    if (selectedFilter === "laser") return t.category === "Laser Treatment";
    if (selectedFilter === "fat-loss") return t.category === "Fat Loss";
    return true;
  });

  const getScrollStep = useCallback(() => {
    if (!scrollContainerRef.current) return 350;
    const card = scrollContainerRef.current.querySelector(".treatment-card");
    const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 24;
    return card ? card.offsetWidth + gap : 350;
  }, []);

  const scrollLeft = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const step = getScrollStep();
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 15) {
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -step, behavior: "smooth" });
    }
  }, [getScrollStep]);

  const scrollRight = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const step = getScrollStep();
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 15) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  }, [getScrollStep]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDraggingMouse(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingMouse || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDraggingMouse(false);
    setTimeout(() => setIsPaused(false), 1500);
  };

  // Autoplay with continuous looping
  useEffect(() => {
    if (isPaused || isDraggingMouse) return;

    const timer = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const step = getScrollStep();
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (maxScroll <= 0) return;

      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, isDraggingMouse, getScrollStep, filteredTreatments]);

  // Reset scroll position when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedFilter]);

  return (
    <section
      id="services"
      className="pt-16 sm:pt-20 pb-14 sm:pb-18 bg-white text-charcoal-900 overflow-hidden border-b border-blush-100 relative"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blush-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cream-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shrink-0 relative z-10 w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-50 border border-blush-200 text-blush-600 text-[11px] font-semibold tracking-widest uppercase mb-1.5 shadow-sm">
                <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
                <span>Targeted Clinical Procedures</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
                Curated Aesthetic Solutions
              </h2>
              <p className="text-charcoal-700/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
                From proprietary TD Glowtech 360° lifting to medical-grade HydraFacials and clinical Q-Switch Laser toning.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedFilter === filter.id
                      ? "bg-blush-400 text-white shadow-md shadow-blush-400/25 scale-102"
                      : "bg-blush-50/70 text-charcoal-700 hover:bg-blush-100 hover:text-charcoal-900 border border-blush-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Cards Track Wrapper with Side Navigation Arrows */}
      <div className="relative w-full flex-1 my-auto overflow-hidden flex items-center z-10">
        {/* Left Floating Arrow */}
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-blush-600 border border-blush-200 shadow-[0_4px_20px_rgba(201,130,148,0.25)] hover:bg-blush-500 hover:text-white hover:border-blush-500 transition-all active:scale-95 cursor-pointer flex items-center justify-center group"
          aria-label="Scroll left"
          title="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-blush-600 group-hover:text-white transition-colors" />
        </button>

        {/* Right Floating Arrow */}
        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-blush-600 border border-blush-200 shadow-[0_4px_20px_rgba(201,130,148,0.25)] hover:bg-blush-500 hover:text-white hover:border-blush-500 transition-all active:scale-95 cursor-pointer flex items-center justify-center group"
          aria-label="Scroll right"
          title="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-blush-600 group-hover:text-white transition-colors" />
        </button>

        {/* Fluid Mouse Drag & Touch Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseEnter={() => setIsPaused(true)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className={`w-full flex gap-4 sm:gap-6 px-12 sm:px-20 lg:px-24 overflow-x-auto no-scrollbar pt-2 pb-4 snap-x snap-mandatory ${
            isDraggingMouse ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollBehavior: isDraggingMouse ? "auto" : "smooth" }}
        >
          {filteredTreatments.map((treatment, idx) => (
            <div
              key={treatment.slug}
              className="treatment-card py-1 flex-shrink-0 snap-center sm:snap-start"
            >
              <TiltSpotlightCard
                className="rounded-3xl border border-blush-200/80 hover:border-blush-400 bg-white shadow-[0_8px_25px_-8px_rgba(122,70,85,0.08)] hover:shadow-xl transition-all duration-300 h-full"
                spotlightColor="rgba(223, 166, 180, 0.18)"
                tiltStrength={5}
              >
                <div className="group relative w-[80vw] max-w-[320px] sm:w-[350px] lg:w-[370px] flex flex-col justify-between text-charcoal-900">
                  {/* Image & Floral Frame Overlay */}
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-blush-50 rounded-t-3xl">
                    <img
                      src={treatment.heroImage}
                      alt={treatment.name}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-blush-600 text-[10px] font-semibold tracking-wide border border-blush-200/60 shadow-sm truncate">
                        {treatment.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blush-400 text-white text-[10px] font-semibold tracking-wide shadow-sm truncate">
                        {treatment.badge}
                      </span>
                    </div>

                    {/* Duration & Downtime Pills */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-2 text-charcoal-800 text-[10px] sm:text-[11px] z-10">
                      <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full border border-blush-100 shadow-sm">
                        <ClockIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-medium whitespace-nowrap">{treatment.sessionDuration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full border border-blush-100 shadow-sm overflow-hidden">
                        <ShieldCheckIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-medium truncate">{treatment.downtime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="text-[10px] uppercase tracking-widest text-blush-500 font-bold">
                        Clinical Protocol 0{idx + 1}
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-semibold text-charcoal-900 group-hover:text-blush-600 transition-colors">
                        {treatment.name}
                      </h3>
                      <p className="text-xs text-charcoal-700/80 leading-relaxed font-light">
                        {treatment.description}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openBooking(treatment.slug)}
                        className="flex-1 py-2 px-3 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold tracking-wider uppercase active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <CalendarIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Book Protocol</span>
                      </button>

                      <Link
                        href={`/treatments/${treatment.slug}`}
                        className="p-2 rounded-full bg-blush-50 hover:bg-blush-100 text-blush-600 transition-colors border border-blush-200 cursor-pointer shrink-0"
                        title={`View details for ${treatment.name}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltSpotlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shrink-0 text-center z-10">
        <p className="text-[11px] text-charcoal-500 font-light">
          Drag horizontally with mouse or click side arrows to browse clinical procedures ↔
        </p>
      </div>
    </section>
  );
}
