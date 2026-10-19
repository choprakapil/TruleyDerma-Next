"use client";

import { useState } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SingleBloom } from "../ui/BotanicalMotifs";
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
  { id: "all", label: "All Google Reviews" },
  { id: "skin", label: "Skin & Medi-Facials" },
  { id: "hair", label: "Hair Restoration" },
  { id: "laser", label: "Laser Treatments" },
];

export default function TestimonialsMarquee() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);

  const tContent = pagesContent?.home?.testimonials || {};
  const allReviews = tContent.reviews || testimonialsList || [];

  const filteredReviews =
    selectedCat === "all"
      ? allReviews
      : allReviews.filter((r) => r.category === selectedCat);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const googleReviewLink =
    clinicContact?.branches?.[0]?.mapLink ||
    "https://maps.google.com/?q=Truly+Derma+Clinic+Pitampura";

  return (
    <section
      id="testimonials"
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
            GOOGLE REVIEWS HEADER WITH OFFICIAL GOOGLE BADGE
            =================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-blush-200/60">
          <div>
            {/* Google Reviews Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200 shadow-2xs mb-3">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs font-bold text-charcoal-900 tracking-wide">
                {tContent.pill || "Google Reviews"}
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
              {tContent.title || "Words from Our Discerning Clients"}
            </h2>

            <p className="text-charcoal-700/85 text-xs sm:text-sm mt-1 max-w-xl font-light leading-relaxed">
              {tContent.subtitle ||
                "Verified 5-star ratings and authentic experiences from patients visiting Dr. Megha Aggarwal at our Pitampura and Rajouri Garden clinics."}
            </p>
          </div>

          {/* Right Action: Write a Google Review */}
          <div className="flex items-center gap-3 self-start md:self-end">
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

            {/* Slider arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous Google review"
                className="w-9 h-9 rounded-full bg-white border border-blush-200 text-charcoal-700 hover:text-blush-600 hover:border-blush-300 hover:bg-blush-50 transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Google review"
                className="w-9 h-9 rounded-full bg-blush-500 text-white hover:bg-blush-600 transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            CATEGORY TABS
            =================================================================== */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id);
                  setActiveSlide(0);
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
            AUTHENTIC GOOGLE REVIEWS GRID
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
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
                className="group p-6 rounded-2xl bg-white border border-blush-200/80 shadow-2xs hover:shadow-md hover:border-blush-300 transition-all duration-300 flex flex-col justify-between"
              >
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

                  {/* Main Review Text */}
                  <p className="text-xs sm:text-xs text-charcoal-800 leading-relaxed font-light mt-1">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Card Bottom: Clinic Location Tag & Doctor Response Box */}
                <div className="pt-3 mt-4 border-t border-blush-100/90 space-y-2.5">
                  <div className="flex items-center justify-between text-[10.5px] text-charcoal-500">
                    <span className="font-medium text-charcoal-700">
                      📍 {branchName}
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Verified Visit
                    </span>
                  </div>

                  {/* Doctor Response Snippet (Google Business Style) */}
                  {replyText && (
                    <div className="bg-blush-50/60 p-2.5 rounded-xl border border-blush-100 text-[10.5px] text-charcoal-700 leading-snug">
                      <span className="font-semibold text-charcoal-900 block mb-0.5">
                        Response from {replyAuthor} (Owner):
                      </span>
                      <p className="font-light italic text-charcoal-600">
                        &ldquo;{replyText}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            BOTTOM GOOGLE TRUST BAR
            =================================================================== */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF8FA] via-white to-[#FFF8FA] border border-blush-200/90 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-blush-200 shadow-2xs flex items-center justify-center shrink-0">
              <GoogleIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-bold text-charcoal-900">
                {siteMeta?.googleRating || "4.9"}-Star Patient Rating on Google Maps
              </p>
              <p className="text-[10.5px] text-charcoal-600 font-light">
                Over {siteMeta?.reviewsCount || "1,500+"} verified patient reviews across our {clinicContact?.branches?.map(b => b.city).filter((v, i, a) => a.indexOf(v) === i).join(" & ") || "Delhi"} clinics.
              </p>
            </div>
          </div>

          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold tracking-wider transition-all shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
