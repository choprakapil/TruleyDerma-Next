"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Calendar, ArrowRight, Maximize2, Pause, Play } from "lucide-react";
import { CalendarIcon, SparklesIcon } from "../ui/LuxuryIcons";
import { beforeAfterCases } from "../../data/siteContent";
import { SingleBloom } from "../ui/BotanicalMotifs";
import { BeforeAfterLuxuryBg } from "../ui/LuxuryBackgrounds";
import { useBooking } from "../providers/BookingContext";

export default function BeforeAfterSlider() {
  const allCases = beforeAfterCases || [];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const { openBooking } = useBooking();

  // Filter cases by category
  const filteredCases = allCases.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  const categoryTabs = [
    { id: "all", label: "All", count: allCases.length },
    { id: "skin", label: "Skin", count: allCases.filter((c) => c.category === "Skin").length },
    { id: "hair", label: "Hair", count: allCases.filter((c) => c.category === "Hair").length },
    { id: "laser", label: "Laser", count: allCases.filter((c) => c.category === "Laser").length },
    { id: "fat loss", label: "Fat Loss", count: allCases.filter((c) => c.category === "Fat Loss").length },
  ];

  // Update scroll buttons state & current index
  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = sliderRef.current.firstElementChild;
    if (card) {
      const cardWidth = card.clientWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, index), filteredCases.length - 1));
    }
  }, [filteredCases.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    return () => slider.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // Reset scroll when category changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setCurrentIndex(0);
    }
  }, [selectedCategory]);

  // Automatic Slider Interval (Advances every 3.2 seconds)
  useEffect(() => {
    if (isPaused || selectedPhoto || filteredCases.length <= 1) return;

    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const card = sliderRef.current.firstElementChild;
      if (!card) return;

      const cardWidth = card.clientWidth + 16;

      // When reaching near the end, loop smoothly back to beginning
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, selectedPhoto, filteredCases.length]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild;
    const scrollAmount = card ? card.clientWidth + 16 : 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild;
    if (!card) return;
    const cardWidth = card.clientWidth + 16;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="before-after"
      className="py-16 sm:py-20 bg-[#FDEBF0] text-charcoal-900 border-b border-blush-200/70 overflow-hidden relative"
    >
      <BeforeAfterLuxuryBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-blush-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase mb-2 shadow-2xs">
              <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
              <span>Real Transformations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-charcoal-900 tracking-tight">
              Before &amp; After
            </h2>

            <p className="text-charcoal-700/80 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Real patients, unretouched results from Truly Derma Clinic.
            </p>
          </div>

          {/* Autoplay status & Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-[11px] font-medium text-charcoal-600 hover:text-blush-600 px-2.5 py-1 rounded-full bg-white/80 border border-blush-200 flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
              title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 fill-current text-blush-500" />
                  <span>Paused</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Auto</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous patient photo"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? "bg-white border-blush-300 text-charcoal-800 hover:bg-blush-50 shadow-2xs active:scale-95"
                    : "bg-white/50 border-blush-200 text-charcoal-400 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next patient photo"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? "bg-blush-500 border-blush-500 text-white hover:bg-blush-600 shadow-2xs active:scale-95"
                    : "bg-blush-300 border-blush-300 text-white cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pt-5 pb-5 overflow-x-auto no-scrollbar">
          {categoryTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-blush-600 text-white border-blush-600 shadow-2xs"
                    : "bg-white text-charcoal-700 border-blush-200 hover:bg-blush-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-rose-50 text-blush-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Patient Images Slider Track (Pauses on hover/touch) */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredCases.map((item, idx) => (
            <div
              key={item.id || idx}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-2xl overflow-hidden border border-blush-200/90 shadow-[0_6px_20px_-6px_rgba(122,70,85,0.08)] hover:shadow-lg hover:border-blush-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div
                onClick={() => setSelectedPhoto(item)}
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-rose-50 cursor-pointer"
              >
                <img
                  src={item.combined}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9.5px] font-bold text-blush-700 border border-blush-200 shadow-2xs">
                  {item.badge || item.category}
                </span>

                {/* Fullscreen Zoom Icon */}
                <button
                  type="button"
                  aria-label="View full size photo"
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-charcoal-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-blush-600" />
                </button>

                {/* Before & After Labels */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white pointer-events-none">
                  <span className="bg-charcoal-950/70 px-2 py-0.5 rounded border border-white/20">
                    Before
                  </span>
                  <span className="bg-blush-600 px-2 py-0.5 rounded border border-white/20">
                    After
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-2">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-charcoal-900 leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blush-600 font-medium mt-0.5">
                    {item.treatment}
                  </p>
                  {item.result && (
                    <p className="text-[11px] text-charcoal-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {item.result}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-xs">
                  <span className="text-[10.5px] text-charcoal-500 font-medium">
                    {item.sessions || item.timeframe}
                  </span>
                  <button
                    onClick={() => openBooking(item.treatmentSlug)}
                    className="text-[11px] font-semibold text-blush-600 hover:text-blush-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          {filteredCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-blush-600"
                  : "w-1.5 bg-blush-300 hover:bg-blush-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Click to view full image) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-xl w-full border border-blush-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-charcoal-800 flex items-center justify-center shadow-md cursor-pointer hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo */}
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={selectedPhoto.combined}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-white">
              <div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-blush-600 font-medium">
                  {selectedPhoto.treatment} • {selectedPhoto.sessions}
                </p>
              </div>

              <button
                onClick={() => {
                  const slug = selectedPhoto.treatmentSlug;
                  setSelectedPhoto(null);
                  openBooking(slug);
                }}
                className="px-4 py-2 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider shrink-0 transition-all shadow-2xs"
              >
                Book Consult
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
