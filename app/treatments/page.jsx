"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  Shield,
  ArrowRight,
  Search,
  X,
  ChevronRight,
  Sparkles,
  Phone,
  ArrowLeft,
} from "lucide-react";
import {
  allTreatments,
  treatmentCategories,
  clinicContact,
} from "../../data/siteContent";
import { useBooking } from "../../components/providers/BookingContext";
import {
  WhatsAppIcon,
  CalendarIcon,
  CheckCircleIcon,
  LaserPulseIcon,
} from "../../components/ui/LuxuryIcons";
import { SingleBloom, BotanicalFrameCorner } from "../../components/ui/BotanicalMotifs";

const CATEGORY_TABS = [
  { id: "all", label: "All Categories", count: 4 },
  { id: "skin", label: "Skin", count: 7 },
  { id: "hair", label: "Hair", count: 4 },
  { id: "fat-loss", label: "Fat Loss", count: 1 },
  { id: "laser", label: "Laser Treatment", count: 1 },
];

// The 4 Core Treatment Category Cards
const MAIN_CATEGORY_CARDS = [
  {
    id: "skin",
    number: "01",
    badge: "7 Treatments",
    categoryGroup: "Skin & Aesthetics",
    title: "Skin Treatments",
    tagline: "Rejuvenating, glow-enhancing & clinical skin therapies",
    description: "From Hydra Facials and Medi Facials to Photo Facials and Mesotherapy, experience deep pore cleansing, pigmentation reduction, and natural skin glow.",
    image: "/images/treatments/hydra-facial.png",
    duration: "45 - 60 min",
    downtime: "Zero Downtime",
    includedList: [
      "Hydra Facial & Medi Facial",
      "Mesotherapy & Photo Facial",
      "Party Pop Facial & Under-Eye Care",
    ],
    count: 7,
    bookingSlug: "hydra-facial",
  },
  {
    id: "hair",
    number: "02",
    badge: "4 Treatments",
    categoryGroup: "Hair & Trichology",
    title: "Hair Treatments",
    tagline: "Advanced hair regrowth, laser reduction & scalp wellness",
    description: "Permanent 4D laser hair reduction, PRP hair rejuvenation, FUE hair transplants, and scalp detox therapies tailored to restore natural hair density.",
    image: "/images/treatments/laser-hair-reduction.png",
    duration: "45 - 90 min",
    downtime: "Zero Downtime",
    includedList: [
      "US-FDA Approved 4D Tec Laser Hair Reduction",
      "PRP Hair Rejuvenation & FUE Hair Transplant",
      "Deep Scalp Detox Therapy",
    ],
    count: 4,
    bookingSlug: "laser-hair-reduction",
  },
  {
    id: "fat-loss",
    number: "03",
    badge: "1 Treatment",
    categoryGroup: "Body Contouring",
    title: "Fat Loss Treatments",
    tagline: "Target stubborn fat pockets safely with zero surgery",
    description: "Cryolipolysis and ultrasound cavitation destroying stubborn fat deposits with no incisions, no anesthesia, zero surgery, and zero downtime.",
    image: "/images/treatments/fat-loss.png",
    duration: "60 min",
    downtime: "Zero Downtime",
    includedList: [
      "Non-Surgical Cryolipolysis (Fat Freezing)",
      "Ultrasound Cavitation Contouring",
      "Targeted Stubborn Fat Reduction",
    ],
    count: 1,
    bookingSlug: "fat-loss",
  },
  {
    id: "laser",
    number: "04",
    badge: "1 Treatment",
    categoryGroup: "Clinical Laser",
    title: "Laser Treatments",
    tagline: "US-FDA approved Q-Switch laser toning & melasma clearance",
    description: "Sub-nanosecond photoacoustic laser pulses that shatter deep melanin, clear stubborn melasma, remove sun spots, and refine skin texture.",
    image: "/images/treatments/laser-toning.png",
    duration: "30 - 45 min",
    downtime: "Zero Downtime",
    includedList: [
      "US-FDA Cleared Q-Switch Nd:YAG Laser",
      "Photoacoustic Melanin Shatter (No Heat Damage)",
      "Melasma, Sun Spots & Carbon Laser Peel",
    ],
    count: 1,
    bookingSlug: "laser-toning",
  },
];

export default function TreatmentsPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { openBooking } = useBooking();

  // Sync category from URL query parameters (e.g. /treatments?category=skin)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && ["skin", "hair", "fat-loss", "laser"].includes(cat)) {
        setSelectedCat(cat);
      }
    }
  }, []);

  // Filter individual treatments for category drilldown or search
  const filteredTreatments = useMemo(() => {
    return allTreatments.filter((proc) => {
      const matchesCat =
        selectedCat === "all" ||
        proc.categoryKey === selectedCat ||
        proc.category.toLowerCase().includes(selectedCat.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        proc.name.toLowerCase().includes(query) ||
        proc.category.toLowerCase().includes(query) ||
        proc.tagline.toLowerCase().includes(query) ||
        proc.description.toLowerCase().includes(query) ||
        (proc.highlights && proc.highlights.some((h) => h.toLowerCase().includes(query)));

      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Ambient Luxury Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===================================================================
            HEADER (SIMPLE, CLEAR, EASY FOR VISITORS)
            =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
            <span>OUR TREATMENTS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-900 tracking-tight leading-[1.2]">
            Our Treatments
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700/85 font-light leading-relaxed max-w-2xl mx-auto">
            Explore Truly Derma&apos;s 4 core treatment categories: Skin, Hair, Non-Surgical Fat Loss, and Laser Treatments.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-blush-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments (Hydra Facial, Laser, PRP, Mesotherapy...)"
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-blush-200 text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 p-1 rounded-full text-charcoal-400 hover:text-charcoal-700 hover:bg-rose-50"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ===================================================================
            CATEGORY FILTER TABS
            =================================================================== */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORY_TABS.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id);
                  setSearchQuery("");
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? "bg-blush-600 text-white border-blush-600 shadow-md scale-102"
                    : "bg-white text-charcoal-700 hover:bg-blush-50 border-blush-200 shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-rose-50 text-blush-600 border border-blush-100"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Drilldown Bar (shown when viewing a specific category) */}
        {selectedCat !== "all" && !searchQuery && (
          <div className="flex items-center justify-between text-xs text-charcoal-600 pt-3 pb-6 border-b border-blush-100">
            <button
              onClick={() => setSelectedCat("all")}
              className="inline-flex items-center gap-1.5 text-blush-600 font-bold hover:text-blush-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All 4 Categories</span>
            </button>
            <div className="text-[11px] text-blush-700 font-semibold uppercase tracking-wider hidden sm:block">
              Showing {filteredTreatments.length} {CATEGORY_TABS.find((c) => c.id === selectedCat)?.label} Treatments
            </div>
          </div>
        )}

        {/* ===================================================================
            MAIN VIEW: 4 CATEGORIES CARDS (SKIN, HAIR, FAT LOSS, LASER)
            =================================================================== */}
        {selectedCat === "all" && !searchQuery ? (
          <div className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {MAIN_CATEGORY_CARDS.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl p-5 sm:p-7 border border-blush-200/80 shadow-[0_10px_30px_-10px_rgba(122,70,85,0.08)] hover:shadow-xl hover:border-blush-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Delicate Botanical Corner Accent */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none opacity-40">
                    <BotanicalFrameCorner className="w-6 h-6" color="#DFA6B4" />
                  </div>

                  <div>
                    {/* Top Badge & Number */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-blush-100 relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-charcoal-800 border border-blush-200/80 text-[10.5px] font-semibold uppercase tracking-wider">
                        <LaserPulseIcon className="w-3.5 h-3.5" />
                        <span>{cat.badge}</span>
                        <span className="mx-1 text-blush-300">•</span>
                        <span className="text-blush-600 font-bold">{cat.categoryGroup}</span>
                      </div>
                      <span className="text-2xl font-serif text-blush-400 font-semibold tracking-wider">
                        {cat.number}
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-blush-100 shadow-2xs bg-rose-50 my-4">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-3 text-[11px] font-bold text-charcoal-900 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full border border-blush-100 shadow-xs">
                        {cat.title}
                      </span>
                    </div>

                    {/* Information */}
                    <div className="space-y-2.5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-charcoal-900 leading-tight group-hover:text-blush-600 transition-colors">
                          <button
                            type="button"
                            onClick={() => setSelectedCat(cat.id)}
                            className="text-left cursor-pointer hover:underline"
                          >
                            {cat.title}
                          </button>
                        </h3>
                        {cat.tagline && (
                          <p className="text-xs text-blush-600 font-medium mt-0.5">
                            {cat.tagline}
                          </p>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal-700/85 leading-relaxed font-light">
                        {cat.description}
                      </p>

                      {/* Included Key Highlights */}
                      <ul className="space-y-1.5 pt-2 border-t border-blush-100">
                        {cat.includedList.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-charcoal-800">
                            <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 text-blush-500" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Quick Specs */}
                      <div className="flex items-center gap-2 pt-2 text-[11px] text-charcoal-600">
                        <div className="flex items-center gap-1.5 bg-rose-50/80 px-2.5 py-1 rounded-lg border border-blush-100">
                          <Clock className="w-3 h-3 text-blush-500" />
                          <span>{cat.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-rose-50/80 px-2.5 py-1 rounded-lg border border-blush-100">
                          <Shield className="w-3 h-3 text-blush-500" />
                          <span>{cat.downtime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-blush-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCat(cat.id)}
                      className="px-4 py-2.5 rounded-full bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider transition-all border border-blush-200 flex items-center gap-1.5 shadow-2xs hover:border-blush-400 cursor-pointer"
                    >
                      <span>View Treatments ({cat.count})</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blush-500" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openBooking(cat.bookingSlug)}
                      className="flex-1 py-2.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-md active:scale-98"
                    >
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ===================================================================
              DRILLDOWN VIEW: INDIVIDUAL TREATMENTS (WHEN CATEGORY IS SELECTED OR SEARCHING)
              =================================================================== */
          <div className="pt-6">
            {filteredTreatments.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-blush-200 shadow-sm max-w-lg mx-auto p-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-blush-600 flex items-center justify-center mx-auto border border-blush-200">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">No Treatments Found</h3>
                <p className="text-xs text-charcoal-600 font-light">
                  We couldn&apos;t find any treatments matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSelectedCat("all");
                    setSearchQuery("");
                  }}
                  className="px-6 py-2.5 rounded-full bg-blush-600 text-white text-xs font-semibold tracking-wider uppercase hover:bg-blush-700 transition-colors cursor-pointer"
                >
                  View All Categories
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredTreatments.map((t, idx) => {
                  const number = String(idx + 1).padStart(2, "0");
                  return (
                    <div
                      key={t.id}
                      className="bg-white rounded-3xl p-5 sm:p-6 border border-blush-200/80 shadow-[0_10px_30px_-10px_rgba(122,70,85,0.08)] hover:shadow-xl hover:border-blush-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                    >
                      {/* Botanical Accent */}
                      <div className="absolute top-3 right-3 z-10 pointer-events-none opacity-40">
                        <BotanicalFrameCorner className="w-5 h-5" color="#DFA6B4" />
                      </div>

                      <div>
                        {/* Top Badge & Number */}
                        <div className="flex items-center justify-between pb-3 border-b border-blush-100 relative z-10">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-charcoal-800 border border-blush-200/80 text-[10.5px] font-semibold uppercase tracking-wider">
                            <LaserPulseIcon className="w-3.5 h-3.5" />
                            <span>{t.badge || "Doctor Supervised"}</span>
                            <span className="mx-1 text-blush-300">•</span>
                            <span className="text-blush-600 font-bold">{t.category}</span>
                          </div>
                          <span className="text-xl sm:text-2xl font-serif text-blush-400 font-semibold tracking-wider">
                            {number}
                          </span>
                        </div>

                        {/* Image Preview */}
                        <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-blush-100 shadow-2xs bg-rose-50 my-4">
                          <img
                            src={t.heroImage}
                            alt={t.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2.5 left-2.5 text-[10.5px] font-bold text-charcoal-900 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full border border-blush-100 shadow-xs">
                            {t.name}
                          </span>
                        </div>

                        {/* Information */}
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-xl font-serif font-semibold text-charcoal-900 leading-tight group-hover:text-blush-600 transition-colors">
                              <Link href={`/treatments/${t.slug}`}>
                                {t.name}
                              </Link>
                            </h3>
                            {t.tagline && (
                              <p className="text-xs text-blush-600 font-medium mt-0.5 line-clamp-1">
                                {t.tagline}
                              </p>
                            )}
                          </div>

                          <p className="text-xs text-charcoal-700/85 leading-relaxed font-light line-clamp-3">
                            {t.description}
                          </p>

                          {/* Highlights */}
                          {t.highlights && t.highlights.length > 0 && (
                            <ul className="space-y-1.5 pt-2 border-t border-blush-100">
                              {t.highlights.slice(0, 2).map((item, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-[11.5px] text-charcoal-800">
                                  <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 text-blush-500" />
                                  <span className="truncate">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Duration & Downtime */}
                          <div className="flex items-center gap-2 pt-2 text-[11px] text-charcoal-600">
                            <div className="flex items-center gap-1.5 bg-rose-50/80 px-2.5 py-1 rounded-lg border border-blush-100">
                              <Clock className="w-3 h-3 text-blush-500" />
                              <span>{t.sessionDuration}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-rose-50/80 px-2.5 py-1 rounded-lg border border-blush-100">
                              <Shield className="w-3 h-3 text-blush-500" />
                              <span>{t.downtime || "Zero Downtime"}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-5 pt-4 border-t border-blush-100 flex items-center justify-between gap-2.5">
                        <Link
                          href={`/treatments/${t.slug}`}
                          className="px-4 py-2 rounded-full bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider transition-all border border-blush-200 flex items-center gap-1.5 shadow-2xs hover:border-blush-400"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3 text-blush-500" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => openBooking(t.slug)}
                          className="flex-1 py-2 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-md active:scale-98"
                        >
                          <CalendarIcon className="w-3.5 h-3.5" />
                          <span>Book Consultation</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ===================================================================
            HELPFUL BOTTOM ASSISTANCE CALLOUT
            =================================================================== */}
        <div className="mt-16 bg-gradient-to-r from-rose-50 via-pink-50/60 to-rose-50 rounded-3xl p-6 sm:p-8 border border-blush-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blush-600">
              Need Personal Guidance?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-900">
              Not Sure Which Treatment Is Right for You?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Speak directly with our clinic experts in Pitampura & Rajouri Garden for a personalized skin or hair evaluation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${clinicContact.whatsappNumber}?text=${encodeURIComponent(
                "Hello Truly Derma, I would like guidance on which treatment is right for me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Consult</span>
            </a>

            <a
              href={`tel:${clinicContact.phoneClean}`}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 border border-blush-200 shadow-2xs transition-all"
            >
              <Phone className="w-4 h-4 text-blush-600" />
              <span>Call: {clinicContact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
