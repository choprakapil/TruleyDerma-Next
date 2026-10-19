"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  User,
  Calendar,
  MapPin,
  Sparkles,
  Clock,
  Send,
  Layers,
  Heart,
  Zap,
  Award,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
} from "lucide-react";
import {
  CalendarIcon,
  WhatsAppIcon,
  AwardMedalIcon,
  SparklesIcon,
} from "../ui/LuxuryIcons";
import { clinicInfo, pagesContent, clinicContact, allTreatments } from "../../data/siteContent";
import { useBooking } from "../providers/BookingContext";

const ICON_MAP = {
  Award,
  Users,
  ShieldCheck,
  Sparkles,
  Heart,
  Zap,
};

const HERO_SLIDES = pagesContent.home.hero.slides.map((s) => ({
  ...s,
  alt: s.title,
  trustBadges: (s.trustBadges || []).map((b) => ({
    ...b,
    icon: typeof b.icon === "string" ? ICON_MAP[b.icon] || Award : b.icon,
  })),
}));


export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedService, setSelectedService] = useState("botox");
  const { openBooking } = useBooking();

  const heroRef = useRef(null);
  const formRef = useRef(null);

  // Lead Consultation Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "botox",
    branch: "Pitampura Clinic (Harsh Vihar)",
    preferredDate: "",
    preferredTime: "Morning (10:30 AM - 1:00 PM)",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interactive reCAPTCHA state
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaVerifying, setCaptchaVerifying] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  // Autoplay Slider (5.5s intervals, pauses when mouse hovers over banner)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Navigate to previous slide
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Sync active slide treatment to form default
  useEffect(() => {
    const currentSlide = HERO_SLIDES[currentSlideIndex];
    if (currentSlide && currentSlide.treatmentSlug) {
      setSelectedService(currentSlide.treatmentSlug);
      setFormData((prev) => ({
        ...prev,
        treatment: currentSlide.treatmentSlug,
      }));
    }
  }, [currentSlideIndex]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "treatment") {
      setSelectedService(value);
    }
  };

  // Handle fake reCAPTCHA interactive click
  const handleCaptchaClick = () => {
    if (captchaChecked || captchaVerifying) return;
    setCaptchaVerifying(true);
    setCaptchaError(false);

    setTimeout(() => {
      setCaptchaVerifying(false);
      setCaptchaChecked(true);
    }, 850);
  };

  // Consultation Form Submission Handler
  const handleLeadSubmit = (e) => {
    e.preventDefault();

    if (!captchaChecked) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  // Instant WhatsApp dispatch from Lead Form
  const handleWhatsAppDispatch = () => {
    const matchedTreatment = treatments.find((t) => t.slug === formData.treatment);
    const treatmentTitle = matchedTreatment ? matchedTreatment.name : formData.treatment;

    const message =
      `*🌟 New Clinical Consultation Booking — Truly Derma Clinic*\n\n` +
      `👤 *Name:* ${formData.name || "Patient"}\n` +
      `📞 *Phone:* ${formData.phone || "Requested via Web"}\n` +
      `🏥 *Clinic Location:* ${formData.branch}\n` +
      `✨ *Treatment:* ${treatmentTitle}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available"}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n\n` +
      `_Requested from Truly Derma Official Homepage Banner_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encoded}`, "_blank");
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-white overflow-hidden text-charcoal-900"
    >
      {/* Soft Luxury Dotted Matrix Texture on Pure White Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 [background-image:radial-gradient(#CBD5E1_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      {/* Gentle Ambient Rose/Violet Radial Glow behind banner */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-rose-100/40 via-violet-100/30 to-amber-100/30 blur-3xl pointer-events-none rounded-full" />

      {/* Hero Container */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* =========================================================================
            HERO BANNER CONTAINER (Rounded Frame with Ken Burns Slider & Glass Form)
            ========================================================================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(43,19,61,0.22)] border border-gray-100 min-h-[580px] sm:min-h-[620px] lg:min-h-[650px] flex items-center bg-[#17101E]"
        >
          {/* =====================================================================
              BACKGROUND IMAGE SLIDES LAYER (Smooth cross-fade & Ken-Burns motion)
              ===================================================================== */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeSlide.index}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Precision Dark Scrims:
                - Left heavy gradient for crisp typography
                - Top subtle gradient for seamless contrast
                - Bottom gradient for smooth footer line */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140B1E]/95 via-[#140B1E]/75 to-transparent sm:w-[75%] lg:w-[68%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140B1E]/80 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-[#DE6361]/5 mix-blend-color-burn" />
          </div>

          {/* =====================================================================
              FOREGROUND CONTENT STAGE: 12-Column Responsive Grid
              ===================================================================== */}
          <div className="relative z-10 w-full p-4 sm:p-7 md:p-9 lg:p-11 xl:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
              
              {/* ===================================================================
                  LEFT COLUMN (col-span-7): Synchronized Text Slide & Badges
                  =================================================================== */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Eyebrow Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[10.5px] sm:text-[11px] font-bold tracking-widest uppercase shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#DE6361] animate-pulse" />
                      <span>{activeSlide.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white leading-[1.14] tracking-tight">
                      {activeSlide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm md:text-base text-zinc-200/90 font-light leading-relaxed max-w-xl">
                      {activeSlide.subtitle}
                    </p>

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {/* Primary CTA Button */}
                      <button
                        type="button"
                        onClick={() => openBooking(activeSlide.treatmentSlug)}
                        className="btn-book-primary px-6 py-3.5 rounded-full bg-[#2B133D] hover:bg-[#3D1C56] text-white font-bold text-xs uppercase tracking-wider border border-[#6058A8]/40 shadow-lg shadow-black/30 flex items-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <SparklesIcon className="w-4 h-4 text-[#DE6361]" />
                        <span>{activeSlide.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-[#DE6361]" />
                      </button>

                      {/* WhatsApp Pill Button */}
                      <a
                        href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=Hello%20Truly%20Derma%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(activeSlide.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>WHATSAPP</span>
                      </a>
                    </div>

                    {/* Trust Indicators Strip */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-[11.5px] sm:text-xs text-white/90">
                      {activeSlide.trustBadges.map((badge, idx) => {
                        const Icon = badge.icon;
                        return (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Icon className="w-4 h-4 text-[#DE6361]" />
                            <span className="font-semibold text-white">{badge.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Quick Treatment Selector Concern Pills */}
                <div className="pt-2 sm:pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#DE6361]" />
                      Popular Clinical Procedures
                    </span>
                    <a
                      href="#services"
                      className="text-[11px] text-[#DE6361] hover:text-rose-200 transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>Explore all 17+ treatments</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "botox", name: "Botox & Anti-Aging", tag: "Certified" },
                      { id: "lip-filler", name: "Lip Fillers & Contour", tag: "Natural Look" },
                      { id: "hair-patch", name: "Hair Patch Systems", tag: "Immediate" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedService(item.id);
                          setFormData((prev) => ({ ...prev, treatment: item.id }));
                          const slideIndex = item.id === "botox" ? 0 : item.id === "lip-filler" ? 1 : 2;
                          setCurrentSlideIndex(slideIndex);
                        }}
                        className={`text-left p-2 rounded-xl transition-all border cursor-pointer ${
                          selectedService === item.id
                            ? "bg-white/20 border-[#DE6361] text-white shadow-md ring-1 ring-[#DE6361]"
                            : "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300"
                        }`}
                      >
                        <div className="text-[11px] font-bold text-white truncate">{item.name}</div>
                        <div className="text-[9.5px] text-[#DE6361] font-medium">{item.tag}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ===================================================================
                  RIGHT COLUMN (col-span-5): Glassmorphism Clinical Booking Form
                  =================================================================== */}
              <div ref={formRef} className="lg:col-span-5 relative w-full">
                <div className="relative rounded-2xl sm:rounded-3xl bg-[#160E22]/85 backdrop-blur-2xl border border-white/20 shadow-[0_24px_60px_rgba(8,2,14,0.7),inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden">
                  
                  {/* Glass Form Header */}
                  <div className="p-4 sm:p-5 border-b border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DE6361]/25 border border-[#DE6361]/40 text-[#DE6361] text-[10px] font-bold tracking-wider uppercase">
                        <SparklesIcon className="w-3 h-3 text-[#DE6361]" />
                        <span>Truly Derma Clinic</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#22C55E]" />
                        <span>Priority Slots Open</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight leading-snug">
                      Book Clinical Consultation
                    </h3>
                    <p className="text-xs text-white/60 font-light mt-0.5">
                      Dr. Megha Aggarwal • Pitampura & Rajouri Garden
                    </p>
                  </div>

                  {/* Glass Form Body */}
                  <div className="p-4 sm:p-5">
                    {!formSubmitted ? (
                      <form onSubmit={handleLeadSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {/* Full Name */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="e.g. Radhika Sharma"
                              className="w-full h-10 px-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all"
                            />
                          </div>

                          {/* Phone / WhatsApp */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full h-10 px-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all"
                            />
                          </div>

                          {/* Clinic Location */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Clinic Location *
                            </label>
                            <select
                              name="branch"
                              value={formData.branch}
                              onChange={handleInputChange}
                              className="w-full h-10 px-3 rounded-xl bg-[#1F142D] border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all cursor-pointer font-medium"
                            >
                              {clinicContact.branches.map((b) => (
                                <option key={b.id} value={`${b.name} (${b.landmark})`}>
                                  {b.city} ({b.landmark})
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Treatment Select */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Treatment *
                            </label>
                            <select
                              name="treatment"
                              value={formData.treatment}
                              onChange={handleInputChange}
                              className="w-full h-10 px-3 rounded-xl bg-[#1F142D] border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all cursor-pointer font-medium"
                            >
                              {allTreatments.map((t) => (
                                <option key={t.slug} value={t.slug}>
                                  {t.name} ({t.category})
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Preferred Date */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleInputChange}
                              className="w-full h-10 px-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all cursor-pointer"
                            />
                          </div>

                          {/* Preferred Time Slot */}
                          <div>
                            <label className="block text-[10.5px] font-semibold text-white/80 uppercase tracking-wider mb-1">
                              Preferred Time
                            </label>
                            <select
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleInputChange}
                              className="w-full h-10 px-3 rounded-xl bg-[#1F142D] border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#DE6361]/50 focus:border-[#DE6361] transition-all cursor-pointer"
                            >
                              <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                              <option value="Afternoon (1:30 PM - 4:30 PM)">Afternoon (1:30 PM - 4:30 PM)</option>
                              <option value="Evening (4:30 PM - 7:30 PM)">Evening (4:30 PM - 7:30 PM)</option>
                            </select>
                          </div>
                        </div>

                        {/* =============================================================
                            INTERACTIVE reCAPTCHA v2 (Verified Clinic Security)
                            ============================================================= */}
                        <div className="mt-2.5 mb-1.5 p-2 rounded-xl bg-black/40 border border-white/15 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={handleCaptchaClick}
                            className="flex items-center gap-3 cursor-pointer group text-left"
                          >
                            <div
                              className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                                captchaChecked
                                  ? "bg-emerald-500 border-emerald-400 text-white"
                                  : "bg-white/10 border-white/30 group-hover:border-white/60"
                              }`}
                            >
                              {captchaVerifying ? (
                                <Loader2 className="w-4 h-4 text-white animate-spin" />
                              ) : captchaChecked ? (
                                <Check className="w-4 h-4 stroke-[3]" />
                              ) : null}
                            </div>
                            <span className="text-xs font-medium text-white/90 select-none">
                              I&apos;m not a robot
                            </span>
                          </button>

                          {/* reCAPTCHA Brand Badge Mockup */}
                          <div className="flex flex-col items-center justify-center text-center pl-2 border-l border-white/10">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[#DE6361]">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-[8px] text-white/40 tracking-tight leading-none mt-0.5">
                              reCAPTCHA
                            </span>
                            <span className="text-[7px] text-white/30">Privacy • Terms</span>
                          </div>
                        </div>

                        {captchaError && !captchaChecked && (
                          <p className="text-[11px] text-rose-400 font-medium">
                            Please check the &ldquo;I&apos;m not a robot&rdquo; verification box.
                          </p>
                        )}

                        {/* Glowing Glass Coral CTA Button */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#DE6361] to-[#C74B4A] hover:from-[#c94f4d] hover:to-[#b33e3d] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-950/40 border border-white/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-75"
                          >
                            {isSubmitting ? (
                              <span>Processing Booking...</span>
                            ) : (
                              <>
                                <CalendarIcon className="w-4 h-4 text-white" />
                                <span>Book Clinical Consultation</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Card Footer: Call & Carousel Slider Navigator */}
                        <div className="flex items-center justify-between pt-2 text-[11px] text-white/70">
                          <div>
                            Call:{" "}
                            <a
                              href="tel:+917591055566"
                              className="text-white font-bold hover:text-[#DE6361] transition-colors"
                            >
                              +91 75910 55566
                            </a>
                          </div>

                          {/* Carousel Controls Pill (Matching reference site) */}
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15 text-[11px]">
                            {/* Mini Active Progress Line */}
                            <div className="w-6 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#DE6361] transition-all duration-300"
                                style={{
                                  width: `${((currentSlideIndex + 1) / HERO_SLIDES.length) * 100}%`,
                                }}
                              />
                            </div>
                            <span className="font-mono text-white/90">
                              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
                            </span>
                            <div className="flex items-center gap-1 border-l border-white/20 pl-1.5">
                              <button
                                type="button"
                                onClick={handlePrevSlide}
                                aria-label="Previous slide"
                                className="p-0.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={handleNextSlide}
                                aria-label="Next slide"
                                className="p-0.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    ) : (
                      /* Success Confirmation State */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-6 px-2 text-center space-y-3.5"
                      >
                        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-white">
                            Consultation Requested!
                          </h4>
                          <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                            Thank you, <strong className="text-white">{formData.name || "Patient"}</strong>. Your consultation request for{" "}
                            <strong className="text-[#DE6361]">
                              {treatments.find((t) => t.slug === formData.treatment)?.name || "Treatment"}
                            </strong>{" "}
                            at our <strong className="text-white">{formData.branch}</strong> has been received.
                          </p>
                        </div>

                        <div className="p-3 bg-white/10 rounded-xl border border-white/15 text-[11px] text-zinc-200 text-left space-y-1">
                          <p>
                            <strong>Doctor:</strong> Dr. Megha Aggarwal
                          </p>
                          <p>
                            <strong>Time Slot:</strong> {formData.preferredTime}
                          </p>
                          <p>
                            <strong>Contact:</strong> {formData.phone}
                          </p>
                        </div>

                        <div className="pt-1 space-y-2">
                          <button
                            type="button"
                            onClick={handleWhatsAppDispatch}
                            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                          >
                            <WhatsAppIcon className="w-4 h-4" />
                            <span>Confirm via WhatsApp Desk</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setFormSubmitted(false);
                              setCaptchaChecked(false);
                            }}
                            className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                          >
                            Submit Another Enquiry
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              BOTTOM SLIDE PROGRESS BAR (Glowing red accent line)
              ===================================================================== */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-20 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#DE6361] via-[#E8A5B3] to-[#DE6361]"
              animate={{
                width: `${((currentSlideIndex + 1) / HERO_SLIDES.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
