"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, X } from "lucide-react";
import { SingleBloom } from "../ui/BotanicalMotifs";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "../ui/LuxuryIcons";
import {
  testimonialsList,
  pagesContent,
  siteMeta,
  clinicContact,
  doctorProfile,
} from "../../data/siteContent";

// Official Google Multicolored Icon Component
function GoogleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const CATEGORIES = [
  { id: "all", label: "All Reviews" },
  { id: "skin", label: "Skin & Facials" },
  { id: "hair", label: "Hair Care" },
  { id: "laser", label: "Laser Treatments" },
];

export default function TestimonialsMarquee() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const tContent = pagesContent?.home?.testimonials || {};
  const allReviews = tContent.reviews || testimonialsList || [];

  const filteredReviews =
    selectedCat === "all"
      ? allReviews
      : allReviews.filter((r) => r.category === selectedCat);

  // Responsive cards per view (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalCards = filteredReviews.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  // Ensure currentIndex stays within bounds if filteredReviews shrink
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [selectedCat, maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  // Autoplay functionality with smooth pause on hover
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const googleReviewLink =
    clinicContact?.branches?.[0]?.mapLink ||
    "https://maps.google.com/?q=Truly+Derma+Clinic+Pitampura";

  return (
    <section
      id="patient-reviews"
      className="py-16 sm:py-24 bg-white text-charcoal-900 border-b border-blush-200/70 overflow-hidden relative"
    >
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blush-100/35 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Bloom */}
      <div className="absolute top-4 right-8 opacity-20 pointer-events-none">
        <SingleBloom className="w-16 h-16 text-blush-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ===================================================================
            GOOGLE & SOCIAL REVIEWS HEADER WITH SLIDER ARROWS & COUNTER
            =================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-blush-200/60">
          <div>
            {/* Reviews Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200 shadow-2xs mb-3">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs font-bold text-charcoal-900 tracking-wide">
                Verified Feedback
              </span>
              <span className="text-blush-300">•</span>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-charcoal-900 ml-0.5">
                {siteMeta?.googleRating || "4.9"} / 5.0
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-charcoal-900 tracking-tight">
              Patient Reviews
            </h2>

            <p className="text-charcoal-700/85 text-sm sm:text-base mt-2 max-w-xl font-light leading-relaxed">
              Verified reviews from real patients on Google &amp; Facebook. Follow our profiles for patient stories, tips, and updates.
            </p>
          </div>

          {/* Right Action: Social Media Profiles, Write a Google Review & Slider Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            {/* Social Media Profiles */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-blush-200 shadow-2xs">
              {clinicContact.socials.instagram && (
                <a
                  href={clinicContact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Truly Derma Instagram"
                  className="w-8 h-8 rounded-full hover:bg-rose-50 flex items-center justify-center transition-all hover:scale-110 cursor-pointer text-charcoal-700"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {clinicContact.socials.facebook && (
                <a
                  href={clinicContact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Truly Derma Facebook"
                  className="w-8 h-8 rounded-full hover:bg-rose-50 flex items-center justify-center transition-all hover:scale-110 cursor-pointer text-charcoal-700"
                  title="Follow on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {clinicContact.whatsappUrl && (
                <a
                  href={clinicContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Consult"
                  className="w-8 h-8 rounded-full hover:bg-rose-50 flex items-center justify-center transition-all hover:scale-110 cursor-pointer text-charcoal-700"
                  title="WhatsApp Consult"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              )}
            </div>

            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-rose-50 text-charcoal-800 text-xs font-semibold tracking-wide border border-blush-200 shadow-2xs transition-all cursor-pointer"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Review Us on Google</span>
              <ExternalLink className="w-3 h-3 text-charcoal-400" />
            </a>

            {/* Slider Controls with Slide Count Indicator */}
            <div className="flex items-center gap-2 bg-rose-50/80 px-2.5 py-1.5 rounded-full border border-blush-200/80 shadow-2xs">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-8 h-8 rounded-full bg-white text-charcoal-700 hover:text-blush-600 hover:bg-blush-50 transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-90 border border-blush-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-[11px] font-mono font-bold text-charcoal-700 px-1.5 select-none">
                {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
              </span>

              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-8 h-8 rounded-full bg-blush-500 text-white hover:bg-blush-600 transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-90"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            CATEGORY FILTER TABS
            =================================================================== */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blush-600 text-white shadow-xs"
                    : "bg-blush-50/70 text-charcoal-700 hover:bg-blush-100 hover:text-charcoal-900 border border-blush-200/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            AUTHENTIC INTERACTIVE REVIEWS CAROUSEL / SLIDER
            =================================================================== */}
        <div
          className="relative overflow-hidden pt-1 pb-2 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {filteredReviews.map((rev) => {
              const authorName = rev.author || rev.patientName || "Verified Patient";
              const avatarInitial = authorName.charAt(0).toUpperCase();
              const branchName = rev.branch || rev.city || "Delhi Clinic";
              const replyText = rev.doctorReply || rev.ownerReply?.text || "";
              const replyAuthor = rev.ownerReply?.author || doctorProfile?.name || "Dr. Megha Aggarwal";
              const relativeTime = rev.relativeTime || rev.date || "Verified Patient";
              const isLocalGuide = rev.isLocalGuide !== undefined ? rev.isLocalGuide : Boolean(rev.badge?.includes("Local Guide"));
              const reviewCount = rev.reviewCount || "Verified Visit";

              return (
                <div
                  key={rev.id}
                  className="px-2.5 sm:px-3 shrink-0 flex"
                  style={{
                    width: `${100 / cardsPerView}%`,
                  }}
                >
                  <div className="w-full group p-5 sm:p-6 rounded-2xl bg-white border border-blush-200/90 shadow-2xs hover:shadow-lg hover:border-blush-300 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Card Header: Author, Avatar, Google Icon, Local Guide */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {/* Google Styled Initial Avatar */}
                          <div
                            className={`w-10 h-10 rounded-full ${rev.avatarBg || "bg-[#4285F4]"} text-white font-bold text-sm flex items-center justify-center shadow-2xs shrink-0`}
                          >
                            {avatarInitial}
                          </div>

                          <div>
                            <h3 className="text-xs sm:text-sm font-semibold text-charcoal-900 flex items-center gap-1.5">
                              {authorName}
                            </h3>
                            <p className="text-[11px] text-charcoal-500 font-light flex items-center gap-1">
                              {isLocalGuide && (
                                <span className="text-[#EA4335] font-semibold">Local Guide •</span>
                              )}
                              <span>{reviewCount}</span>
                              <span className="text-blush-300">•</span>
                              <span>{relativeTime}</span>
                            </p>
                          </div>
                        </div>

                        {/* Official Google 'G' Mark */}
                        <div className="p-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-2xs shrink-0 group-hover:scale-110 transition-transform">
                          <GoogleIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Rating Stars & Treatment Tag */}
                      <div className="flex items-center justify-between pt-3 pb-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-wider text-blush-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-blush-200">
                          {rev.treatment}
                        </span>
                      </div>

                      {/* Main Review Text: Equal height with Read More button */}
                      <div className="mt-1 flex flex-col justify-between">
                        <p className="text-xs text-charcoal-800 leading-relaxed font-light line-clamp-3 min-h-[3.8rem]">
                          &ldquo;{rev.comment}&rdquo;
                        </p>
                        {rev.comment && rev.comment.length > 120 && (
                          <button
                            type="button"
                            onClick={() => setSelectedReview(rev)}
                            className="text-[11px] font-semibold text-blush-600 hover:text-blush-700 mt-1.5 cursor-pointer inline-flex items-center gap-1 self-start underline decoration-blush-300 hover:decoration-blush-600 transition-colors"
                          >
                            <span>Read more</span>
                            <span className="text-xs">→</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom: Clinic Location Tag */}
                    <div className="pt-3 mt-4 border-t border-blush-100/90">
                      <div className="flex items-center justify-between text-[10.5px] text-charcoal-500">
                        <span className="font-medium text-charcoal-700">
                          📍 {branchName}
                        </span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          Verified Visit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            PAGINATION BULLET DOTS
            =================================================================== */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 pt-4 pb-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-blush-500 shadow-xs"
                    : "w-2 bg-blush-200 hover:bg-blush-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===================================================================
          COMPLETE REVIEW LIGHTBOX MODAL
          =================================================================== */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full border border-blush-200 shadow-2xl relative p-6 sm:p-7 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 text-charcoal-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
              aria-label="Close review details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Author Header */}
            <div className="flex items-start gap-3.5 pr-8">
              <div
                className={`w-11 h-11 rounded-full ${selectedReview.avatarBg || "bg-[#4285F4]"} text-white font-bold text-base flex items-center justify-center shadow-2xs shrink-0`}
              >
                {(selectedReview.author || selectedReview.patientName || "V").charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-900 leading-tight">
                  {selectedReview.author || selectedReview.patientName}
                </h3>
                <p className="text-xs text-charcoal-500 font-light mt-0.5 flex items-center gap-1.5 flex-wrap">
                  {selectedReview.isLocalGuide && (
                    <span className="text-[#EA4335] font-semibold">Local Guide •</span>
                  )}
                  <span>{selectedReview.reviewCount || "Verified Visit"}</span>
                  <span className="text-blush-300">•</span>
                  <span>{selectedReview.relativeTime || selectedReview.date || "Verified Patient"}</span>
                </p>
              </div>
            </div>

            {/* Rating Stars & Treatment Badge */}
            <div className="flex items-center justify-between pt-4 pb-3 border-b border-blush-100">
              <div className="flex items-center gap-1">
                {[...Array(selectedReview.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span className="text-[10.5px] font-bold uppercase tracking-wider text-blush-700 bg-rose-50 px-3 py-1 rounded-full border border-blush-200">
                {selectedReview.treatment}
              </span>
            </div>

            {/* Complete Review Text */}
            <div className="py-4">
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-light">
                &ldquo;{selectedReview.comment}&rdquo;
              </p>
            </div>

            {/* Modal Bottom Strip */}
            <div className="pt-4 mt-2 border-t border-blush-100 flex items-center justify-between text-xs text-charcoal-600">
              <span className="font-medium text-charcoal-700">
                📍 {selectedReview.branch || selectedReview.city || "Delhi Clinic"}
              </span>

              <a
                href={googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blush-600 hover:text-blush-700 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
