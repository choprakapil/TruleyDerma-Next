"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon, CalendarIcon } from "../ui/LuxuryIcons";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo } from "../../data/clinicInfo";
import { useBooking } from "../providers/BookingContext";

export default function StickyCTA() {
  const { openBooking } = useBooking();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      setShowBackToTop(totalScroll > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2 sm:gap-2.5">
      {/* 1. Back to Top Button (Appears on scroll) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative group"
          >
            <button
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-plum text-white flex items-center justify-center shadow-lg border border-brand-violet/40 hover:bg-brand-plum-hover hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-rose group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Left Tooltip */}
            <span className="hidden md:block absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-charcoal-950/95 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl border border-white/15">
              Back to top
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Book Consultation Button */}
      <div className="relative group">
        <button
          onClick={() => openBooking()}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-plum text-white flex items-center justify-center shadow-lg border border-brand-violet/40 hover:bg-brand-plum-hover hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Book Consultation"
        >
          <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Left Tooltip */}
        <span className="hidden md:block absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-charcoal-950/95 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl border border-white/15">
          Book Consultation
        </span>
      </div>

      {/* 3. Normal WhatsApp Button */}
      <div className="relative group">
        <a
          href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
            "Hello Dr. Megha, I would like to inquire about Truly Derma clinical treatments."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer flex items-center justify-center"
          aria-label="WhatsApp Clinic"
        >
          <WhatsAppIcon className="w-10 h-10 sm:w-12 sm:h-12" />
        </a>

        {/* Left Tooltip */}
        <span className="hidden md:block absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-charcoal-950/95 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl border border-white/15">
          WhatsApp Clinic
        </span>
      </div>
    </div>
  );
}
