"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  User,
  Calendar,
  MapPin,
  Loader2,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  CalendarIcon,
  WhatsAppIcon,
} from "../ui/LuxuryIcons";
import { clinicInfo, pagesContent, clinicContact } from "../../data/siteContent";

const HERO_SLIDES = pagesContent.home.hero.slides.map((s) => ({
  ...s,
  alt: s.title,
}));

const SLIDE_DURATION = 5500; // 5.5 seconds per banner

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);

  // Clean Appointment Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: clinicContact.branches?.[0]?.city || "Pitampura, Delhi",
    preferredDate: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Autoplay Slider (5.5s intervals, pauses when mouse hovers over banner)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Appointment Form Submission Handler
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  // Instant WhatsApp dispatch from Form
  const handleWhatsAppDispatch = () => {
    const message =
      `*🌟 New Appointment Booking — Truly Derma Clinic*\n\n` +
      `👤 *Name:* ${formData.name || "Patient"}\n` +
      `📞 *Phone:* ${formData.phone || "Requested via Web"}\n` +
      `🏥 *Clinic Location:* ${formData.branch}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available"}\n` +
      `${formData.message ? `💬 *Message:* ${formData.message}\n` : ""}\n` +
      `_Requested from Truly Derma Website_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encoded}`, "_blank");
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-12 bg-white overflow-hidden text-charcoal-900"
    >
      {/* Soft Luxury Dotted Matrix Texture on Pure White Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 [background-image:radial-gradient(#CBD5E1_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      {/* Gentle Ambient Rose/Violet Radial Glow behind banner */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-rose-100/40 via-violet-100/30 to-amber-100/30 blur-3xl pointer-events-none rounded-full" />

      {/* Hero Container */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* =========================================================================
            HERO BANNER CONTAINER (Balanced Proportionate Height & Ken Burns Slider)
            ========================================================================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(43,19,61,0.18)] border border-gray-100 min-h-[520px] sm:min-h-[560px] lg:min-h-[580px] flex items-center bg-[#17101E]"
        >
          {/* =====================================================================
              BACKGROUND IMAGE SLIDES LAYER (Cross-fade & Ken-Burns motion)
              ===================================================================== */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeSlide.index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: activeSlide.objectPosition || "center center" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Soft, focused gradient: Keeps treatment photos bright, crisp and clearly visible while ensuring text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent sm:w-[55%] lg:w-[48%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>

          {/* =====================================================================
              FLOATING SIDE SLIDER ARROWS (Previous & Next)
              ===================================================================== */}
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#DE6361] text-white/90 hover:text-white border border-white/20 backdrop-blur-md items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#DE6361] text-white/90 hover:text-white border border-white/20 backdrop-blur-md items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* =====================================================================
              FOREGROUND CONTENT: 12-Column Responsive Grid
              ===================================================================== */}
          <div className="relative z-10 w-full p-5 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
              
              {/* =================================================================
                  LEFT COLUMN: Clean Heading, Paragraph & WhatsApp Button
                  ================================================================= */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Balanced Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                      {activeSlide.title}
                    </h1>

                    {/* Subtitle Paragraph */}
                    <p className="text-sm sm:text-base text-zinc-100 font-light leading-relaxed max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                      {activeSlide.subtitle}
                    </p>

                    {/* Action Button: WhatsApp Consult */}
                    <div className="pt-1.5">
                      <a
                        href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=Hello%20Truly%20Derma%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(activeSlide.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm active:scale-95"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>WhatsApp Consult</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================================
                  RIGHT COLUMN: Clean Clinical Booking Form
                  ================================================================= */}
              <div ref={formRef} className="lg:col-span-5 relative w-full">
                <div className="relative rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-md border border-white/25 shadow-[0_24px_50px_rgba(0,0,0,0.4)] p-5 sm:p-6 md:p-7">
                  {!formSubmitted ? (
                    <form onSubmit={handleLeadSubmit} className="space-y-3 sm:space-y-3.5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                          Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Radhika Sharma"
                            className="w-full h-10 sm:h-10.5 pl-9 pr-3.5 rounded-xl bg-black/45 border border-white/25 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DE6361]/60 focus:border-[#DE6361] transition-all"
                          />
                          <User className="w-4 h-4 text-[#DE6361] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Phone No */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                          Phone No *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 98765 43210"
                            className="w-full h-10 sm:h-10.5 pl-9 pr-3.5 rounded-xl bg-black/45 border border-white/25 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DE6361]/60 focus:border-[#DE6361] transition-all"
                          />
                          <Phone className="w-4 h-4 text-[#DE6361] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Clinic Location */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                          Clinic Location *
                        </label>
                        <div className="relative">
                          <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                            className="w-full h-10 sm:h-10.5 pl-9 pr-8 rounded-xl bg-black/45 border border-white/25 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DE6361]/60 focus:border-[#DE6361] transition-all cursor-pointer font-medium appearance-none"
                          >
                            {clinicContact.branches.map((b) => (
                              <option key={b.id} value={`${b.name} (${b.city})`} className="bg-[#1A1224] text-white">
                                {b.city} ({b.landmark})
                              </option>
                            ))}
                          </select>
                          <MapPin className="w-4 h-4 text-[#DE6361] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300 text-xs">
                            ▼
                          </div>
                        </div>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="w-full h-10 sm:h-10.5 pl-9 pr-3.5 rounded-xl bg-black/45 border border-white/25 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DE6361]/60 focus:border-[#DE6361] transition-all cursor-pointer [color-scheme:dark]"
                          />
                          <Calendar className="w-4 h-4 text-[#DE6361] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message / Concern */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-100 uppercase tracking-wider mb-1">
                          Message / Concern
                        </label>
                        <div className="relative">
                          <textarea
                            rows={2}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Briefly describe your skin or hair concern (optional)"
                            className="w-full py-2 pl-9 pr-3.5 rounded-xl bg-black/45 border border-white/25 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#DE6361]/60 focus:border-[#DE6361] transition-all resize-none"
                          />
                          <MessageSquare className="w-4 h-4 text-[#DE6361] absolute left-3 top-2.5 pointer-events-none" />
                        </div>
                      </div>

                      {/* Clean Submit Button */}
                      <div className="pt-1.5">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-11 sm:h-12 rounded-xl bg-gradient-to-r from-[#DE6361] to-[#C74B4A] hover:from-[#c94f4d] hover:to-[#b33e3d] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-950/40 border border-white/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-75"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <CalendarIcon className="w-4 h-4 text-white" />
                              <span>Confirm Consultation</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Success Confirmation State */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-4 text-center space-y-4"
                    >
                      <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-lg font-bold text-white">
                          Appointment Requested!
                        </h4>
                        <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                          Thank you, <strong className="text-white">{formData.name || "Patient"}</strong>. Your appointment request for our{" "}
                          <strong className="text-white">{formData.branch}</strong> clinic has been received.
                        </p>
                      </div>

                      <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs text-zinc-200 text-left space-y-1.5">
                        <p>
                          <strong className="text-white">Phone:</strong> {formData.phone}
                        </p>
                        <p>
                          <strong className="text-white">Location:</strong> {formData.branch}
                        </p>
                        {formData.preferredDate && (
                          <p>
                            <strong className="text-white">Preferred Date:</strong> {formData.preferredDate}
                          </p>
                        )}
                        {formData.message && (
                          <p>
                            <strong className="text-white">Concern / Message:</strong> {formData.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 space-y-2.5">
                        <button
                          type="button"
                          onClick={handleWhatsAppDispatch}
                          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>Confirm via WhatsApp Consult</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormSubmitted(false)}
                          className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                        >
                          Book Another Appointment
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================================
              BOTTOM SLIDE ANIMATION LINE (Smoothly slides 0% -> 100% for each banner)
              ===================================================================== */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50 z-30 overflow-hidden">
            <motion.div
              key={`slide-line-${currentSlideIndex}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? undefined : "100%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#DE6361] via-[#FFA8B8] to-[#DE6361]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
