"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Sparkles, Phone, ShieldCheck, CheckCircle } from "lucide-react";
import { clinicInfo } from "../../data/clinicInfo";
import { useBooking } from "../providers/BookingContext";
import { ZoomIn } from "../ui/MotionWrappers";
import MagneticButton from "../ui/MagneticButton";
import FloatingPetals from "../ui/FloatingPetals";
import { SingleBloom, FloralBranch } from "../ui/BotanicalMotifs";
import { CTABannerLuxuryBg } from "../ui/LuxuryBackgrounds";

export default function CTABanner() {
  const { openBooking } = useBooking();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDEBF0] via-[#FCE4EA] to-[#FCE8ED] border-b border-blush-200/80 text-charcoal-900 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Bespoke Opulent Sunburst Moire Silk & Radiant Starlight Sparkles Background */}
      <CTABannerLuxuryBg />

      {/* Ambient Floating Petals */}
      <FloatingPetals count={8} className="opacity-60" />

      {/* Subtle Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 20, 0],
          x: [-15, 15, -15],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[400px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          rotate: [20, 0, 20],
          x: [15, -15, 15],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[400px] bg-blush-200/25 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Luxury Glass Card */}
      <ZoomIn initialScale={0.96} duration={0.8} className="relative max-w-4xl mx-auto z-10 w-full">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-rose-200/80 shadow-[0_15px_45px_rgb(201,130,148,0.1)] text-center space-y-5 sm:space-y-6 relative overflow-hidden">
          
          {/* Subtle Corner Bloom Accent */}
          <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
            <SingleBloom className="w-44 h-44 text-brand-rose" />
          </div>

          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF6F8] border border-rose-200 text-brand-rose text-[11px] font-semibold tracking-widest uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-rose" />
            <span>Begin Your Skincare Journey</span>
          </div>

          <div className="space-y-2.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-[1.18] text-charcoal-900 max-w-3xl mx-auto tracking-tight">
              Your Skin. <span className="italic text-brand-rose">Your Confidence.</span>
            </h2>
            <p className="text-charcoal-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans font-light">
              Experience the harmony of medical-grade dermatology and serene skincare luxury. Visit Dr. Megha Aggarwal at our Pitampura or Rajouri Garden suites, or reserve priority scheduling below.
            </p>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-charcoal-700 font-medium pt-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-rose shrink-0" />
              <span>Zero Wait Times With Advance Booking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-rose shrink-0" />
              <span>US-FDA Cleared Technologies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-rose shrink-0" />
              <span>Personalized Clinical Roadmaps</span>
            </div>
          </div>

          {/* Action Buttons with Magnetic Touch */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <MagneticButton strength={0.25}>
              <button
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-brand-rose via-[#DFA6B4] to-brand-rose text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:opacity-95 active:scale-95 transition-all shadow-[0_6px_20px_rgb(201,130,148,0.35)] flex items-center justify-center gap-2 border border-white/40 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Reserve Consultation</span>
              </button>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Truly Derma desk, I would like to schedule a private consultation with Dr. Megha Aggarwal."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-rose-50/70 text-charcoal-800 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-rose-200 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-brand-rose" />
                <span>Chat via WhatsApp</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href={`tel:${clinicInfo.contact.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-rose-50/70 text-charcoal-800 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-rose-200 shadow-xs"
              >
                <Phone className="w-4 h-4 text-brand-rose" />
                <span>{clinicInfo.contact.phone}</span>
              </a>
            </MagneticButton>
          </div>

          {/* Security & Confidentiality */}
          <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-charcoal-500 font-normal">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-rose" />
            <span>Strict Patient Confidentiality & Certified Dermatology Protocols</span>
          </div>
        </div>
      </ZoomIn>
    </section>
  );
}
