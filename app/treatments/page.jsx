"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle2,
  Search,
  X,
  Calendar,
  HeartHandshake,
  Check,
  Star,
  Activity,
  Award,
} from "lucide-react";
import { allTreatments, pagesContent, clinicContact, doctorProfile } from "../../data/siteContent";
import { useBooking } from "../../components/providers/BookingContext";
import {
  WhatsAppIcon,
  PhoneIcon,
  CalendarIcon,
  AwardMedalIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "../../components/ui/LuxuryIcons";
import { SingleBloom, FloralBranch, BotanicalFrameCorner } from "../../components/ui/BotanicalMotifs";

const CATEGORIES = [
  { id: "all", label: "All Protocols", count: 18 },
  { id: "Skin", label: "Skin & Medi-Facials", count: 6 },
  { id: "Hair", label: "Hair & Trichology", count: 3 },
  { id: "Body", label: "Body & Fat Loss", count: 3 },
  { id: "Laser", label: "Laser Treatments", count: 3 },
  { id: "Cosmetic", label: "Anti-Aging & Injectables", count: 3 },
];

export default function TreatmentsPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { openBooking } = useBooking();
  const hub = pagesContent.treatmentsHub;

  const filtered = useMemo(() => {
    return allTreatments.filter((proc) => {
      const matchesCat =
        selectedCat === "all" ||
        proc.category.toLowerCase() === selectedCat.toLowerCase();

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
            PAGE HERO HEADER
            =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
            <span>{hub.hero.badge || "Clinical Services Directory"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-900 tracking-tight leading-[1.2]">
            World-Class Dermatological &{" "}
            <span className="italic text-blush-600 font-medium">Aesthetic Treatments</span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700/85 font-light leading-relaxed max-w-2xl mx-auto">
            {hub.hero.subtitle ||
              "From India-exclusive TD Glowtech 360° to US-FDA cleared Laser Hair Reduction and FUE Hair Transplants, explore our complete procedure catalogue."}
          </p>

          {/* Search Bar */}
          <div className="pt-3 max-w-md mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-blush-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments (e.g. HydraFacial, Glowtech, PRP, Laser...)"
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
            CATEGORY FILTER PILLS
            =================================================================== */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer border flex items-center gap-2 ${
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
                  {cat.id === "all" ? allTreatments.length : cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Count & Current Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-charcoal-600 pt-3 pb-6 border-b border-blush-100">
          <div>
            Showing <strong className="text-charcoal-900">{filtered.length}</strong> {filtered.length === 1 ? "protocol" : "clinical protocols"}
            {searchQuery && (
              <span> matching &ldquo;<span className="text-blush-600 font-semibold">{searchQuery}</span>&rdquo;</span>
            )}
          </div>
          <div className="text-[11px] text-blush-700 font-semibold uppercase tracking-wider hidden sm:block">
            100% Physician Supervised
          </div>
        </div>

        {/* ===================================================================
            PROCEDURES CATALOGUE GRID
            =================================================================== */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-blush-200 mt-6 shadow-sm max-w-lg mx-auto p-8">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-blush-600 flex items-center justify-center mx-auto border border-blush-200">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">No Treatments Found</h3>
            <p className="text-xs text-charcoal-600">
              We couldn&apos;t find any protocols matching &ldquo;{searchQuery}&rdquo;. Try another term or browse our complete categories.
            </p>
            <button
              onClick={() => {
                setSelectedCat("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-blush-600 text-white text-xs font-semibold tracking-wider uppercase hover:bg-blush-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
            {filtered.map((proc) => (
              <div
                key={proc.id}
                className="group bg-white rounded-3xl border border-blush-200/90 shadow-sm hover:shadow-2xl hover:border-blush-400 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                <div>
                  {/* Visual Image Banner */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-rose-50">
                    <img
                      src={proc.heroImage}
                      alt={proc.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-charcoal-950/20 to-transparent pointer-events-none" />

                    {/* Badge & Category Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-blush-700 border border-blush-200 shadow-2xs">
                        {proc.category}
                      </span>
                      {proc.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-charcoal-950/85 backdrop-blur-md text-[10px] font-semibold text-rose-200 border border-white/10">
                          {proc.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow-md group-hover:text-rose-200 transition-colors">
                        <Link href={`/treatments/${proc.slug}`}>
                          {proc.name}
                        </Link>
                      </h3>
                      {proc.tagline && (
                        <p className="text-[11px] font-serif italic text-rose-200/90 line-clamp-1 mt-0.5">
                          &ldquo;{proc.tagline}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-charcoal-700/90 font-light leading-relaxed line-clamp-3">
                      {proc.description}
                    </p>

                    {/* Highlights Bullet Preview */}
                    {proc.highlights && proc.highlights.length > 0 && (
                      <div className="pt-2 space-y-1.5 border-t border-blush-100">
                        {proc.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11.5px] text-charcoal-700 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blush-500 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Duration & Downtime Pills */}
                    <div className="flex items-center gap-3 pt-1 text-[11px] text-charcoal-600">
                      <div className="flex items-center gap-1.5 bg-rose-50/70 px-2.5 py-1 rounded-lg border border-blush-100">
                        <Clock className="w-3 h-3 text-blush-500" />
                        <span>{proc.sessionDuration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-rose-50/70 px-2.5 py-1 rounded-lg border border-blush-100">
                        <Shield className="w-3 h-3 text-blush-500" />
                        <span>{proc.downtime || "No Downtime"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-blush-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => openBooking(proc.slug)}
                    className="flex-1 py-2.5 rounded-full bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-md"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>

                  <a
                    href={`https://wa.me/${clinicContact.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Truly Derma, I would like to inquire about ${proc.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 transition-colors shadow-2xs"
                    title={`WhatsApp inquiry for ${proc.name}`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>

                  <Link
                    href={`/treatments/${proc.slug}`}
                    className="px-3.5 py-2.5 rounded-full bg-rose-50 hover:bg-blush-100 text-blush-800 text-xs font-semibold transition-colors flex items-center gap-1 border border-blush-200"
                    title="View treatment details"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===================================================================
            THE TRULY DERMA 4-PILLAR CLINICAL STANDARD
            =================================================================== */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-rose-50 via-[#FFF8FA] to-blush-50 border-2 border-blush-200/90 text-center max-w-5xl mx-auto space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-2xs">
            <AwardMedalIcon className="w-3.5 h-3.5" />
            <span>{hub.guarantee?.badge || "The Truly Derma Standard"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900 tracking-tight">
            {hub.guarantee?.title || "Safety, Science & Proven Clinical Protocols"}
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-700/85 max-w-2xl mx-auto font-light leading-relaxed">
            {hub.guarantee?.text ||
              "Every procedure at Truly Derma is performed under certified dermatological protocols with genuine US-FDA cleared machinery, autoclaved surgical instrumentation, and direct physician oversight."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl bg-white border border-blush-100 shadow-2xs space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-blush-600 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-serif font-bold text-xs text-charcoal-900">100% Physician Led</h4>
              <p className="text-[11px] text-charcoal-600 font-light">Direct consultation & treatment design by Dr. Megha Aggarwal.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blush-100 shadow-2xs space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-serif font-bold text-xs text-charcoal-900">US-FDA Cleared</h4>
              <p className="text-[11px] text-charcoal-600 font-light">Authentic laser systems and certified skin devices only.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blush-100 shadow-2xs space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-serif font-bold text-xs text-charcoal-900">Zero Downtime Focus</h4>
              <p className="text-[11px] text-charcoal-600 font-light">Modern non-invasive protocols designed for busy lifestyle resumption.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blush-100 shadow-2xs space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-serif font-bold text-xs text-charcoal-900">Sterile Medical Grade</h4>
              <p className="text-[11px] text-charcoal-600 font-light">Hospital-level cleanliness, autoclaved tools & disposable consumables.</p>
            </div>
          </div>
        </div>

        {/* ===================================================================
            TREATMENT SELECTION ADVICE BANNER
            =================================================================== */}
        <div className="mt-14 p-8 rounded-3xl bg-charcoal-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-300">
              Need Clinical Guidance?
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-normal">
              Not sure which treatment suits your skin or hair type?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl">
              Take our interactive 3-step Skin Quiz or chat directly with our medical desk for a personalized clinical recommendation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-6 py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Book Skin Assessment
            </button>
            <a
              href={clinicContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
