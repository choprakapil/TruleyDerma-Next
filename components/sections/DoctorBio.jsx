"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AwardMedalIcon,
  GraduationCapIcon,
  CalendarIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "../ui/LuxuryIcons";
import { clinicInfo } from "../../data/clinicInfo";
import { useBooking } from "../providers/BookingContext";
import { Reveal, StaggerReveal, StaggerItem } from "../animation/Reveal";
import CountUp from "../ui/CountUp";
import MagneticButton from "../ui/MagneticButton";
import { SingleBloom, FloralBranch, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { MapPin, Star, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export default function DoctorBio() {
  const { openBooking } = useBooking();
  const doc = clinicInfo.doctor;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const botanicalY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const botanicalRotate = useTransform(scrollYProgress, [0, 1], [-5, 6]);

  return (
    <section
      ref={sectionRef}
      id="doctor"
      className="py-16 sm:py-24 bg-white border-b border-blush-200/70 relative overflow-hidden text-charcoal-900"
    >
      {/* Parallax Botanical Background Element */}
      <motion.div
        style={{ y: botanicalY, rotate: botanicalRotate }}
        className="hidden lg:block absolute -top-10 -left-10 pointer-events-none opacity-30 z-0"
      >
        <FloralBranch className="w-56 h-56 text-blush-300" color="#DFA6B4" />
      </motion.div>

      {/* Ambient Radial Soft Blush Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =================================================================
              LEFT COLUMN: GRAND DOCTOR PORTRAIT (Using Doctor.png)
              ================================================================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Accent Frame */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-blush-200/60 via-rose-100/40 to-blush-100/80 transform -rotate-1 pointer-events-none shadow-md" />

              {/* High-Resolution Doctor Image Container */}
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_-10px_rgba(122,70,85,0.2)] bg-gradient-to-b from-[#FFF5F7] to-white h-[420px] sm:h-[480px] lg:h-[530px] border-2 border-blush-200/90 z-10 group">
                <img
                  src="/images/Doctor.png"
                  alt="Dr. Megha Aggarwal - Chief Dermatologist & Aesthetic Director"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/15 to-transparent pointer-events-none" />

                {/* Delicate Corner Botanical Filigree */}
                <div className="absolute top-3 right-3 pointer-events-none opacity-70 z-20">
                  <BotanicalFrameCorner className="w-8 h-8" color="#FFFFFF" />
                </div>

                {/* Top Badge on Photo */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-charcoal-900 text-[10px] font-bold uppercase tracking-wider border border-blush-200 shadow-sm flex items-center gap-1.5 z-20">
                  <AwardMedalIcon className="w-4 h-4" />
                  <span>Chief Dermatologist & Founder</span>
                </div>

                {/* Bottom Overlay Card on Photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-blush-200 text-charcoal-900 space-y-1 shadow-lg z-20">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blush-600">
                      Truly Derma Clinic & Academy
                    </p>
                    <span className="flex items-center gap-0.5 text-amber-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-charcoal-950 leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-[10.5px] text-charcoal-700 font-medium">
                    {doc.qualifications}
                  </p>
                </div>
              </div>

              {/* Floating Verified Clinical Experience Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white px-3.5 py-2.5 rounded-2xl border border-blush-200 shadow-xl flex items-center gap-2.5 z-30">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-2xs font-bold">
                  <AwardMedalIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-charcoal-900 leading-none">
                    {doc.experience}
                  </p>
                  <p className="text-[9px] text-charcoal-600 font-medium mt-0.5">
                    MD Dermatology • Gold Medalist
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN: BIOGRAPHY, PHILOSOPHY, STATS & ACCOLADES
              ================================================================= */}
          <div className="lg:col-span-7 space-y-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-blush-200 text-blush-700 text-[10.5px] font-semibold tracking-widest uppercase shadow-2xs">
                <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
                <span>Meet Your Physician</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
                  {doc.name}
                </h2>
                <p className="text-blush-600 text-xs sm:text-sm font-semibold tracking-wide">
                  {doc.role || doc.title} • {clinicInfo.name}
                </p>
              </div>
            </Reveal>

            {/* Dr. Megha's Personal Philosophy Message */}
            <Reveal delay={0.1}>
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF7F9] to-[#FFFDFE] border border-blush-200 shadow-xs relative">
                <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-serif italic">
                  “{doc.personalNote || doc.philosophy}”
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-blush-700 font-semibold">
                  <span>— {doc.name}</span>
                  <span className="text-[10px] text-charcoal-500 uppercase tracking-wider font-normal">
                    {clinicInfo.contact.branches.map((b) => b.city).join(" & ")}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Doctor 4-Stat Proof Grid */}
            <StaggerReveal stagger={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              {doc.stats.map((stat, idx) => (
                <StaggerItem
                  key={idx}
                  yOffset={10}
                  className="p-3 rounded-2xl bg-white border border-blush-200 shadow-2xs text-center space-y-0.5"
                >
                  <p className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900">
                    <CountUp value={stat.value} duration={1.5} />
                  </p>
                  <p className="text-[9.5px] text-charcoal-600 uppercase tracking-wider font-semibold leading-tight">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            {/* Academy Leadership & Dual Clinic Locations */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-blush-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 border border-blush-100">
                    <GraduationCapIcon className="w-5 h-5 text-blush-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-charcoal-900">
                      Truly Derma Aesthetic Academy
                    </h4>
                    <p className="text-[10.5px] text-charcoal-600 font-light leading-snug mt-0.5">
                      Training 650+ certified doctors in modern lasers, skin injectables & microcurrent aesthetics.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-blush-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 border border-blush-100">
                    <MapPin className="w-5 h-5 text-blush-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-charcoal-900">
                      Delhi Clinic Suites
                    </h4>
                    <p className="text-[10.5px] text-charcoal-600 font-light leading-snug mt-0.5">
                      Private luxury clinics at {clinicInfo.contact.branches.map((b, i) => (
                        <span key={b.city}>
                          {i > 0 && " & "}
                          <strong>{b.name}</strong>
                        </span>
                      ))}.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Consultation Action Buttons */}
            <Reveal delay={0.2} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => openBooking()}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white text-xs font-semibold tracking-wider uppercase active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Consult {doc.name.split(" ")[0]} {doc.name.split(" ")[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Dr. Megha desk, I would like to schedule a private skin/hair consultation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 border border-blush-200 shadow-2xs cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Priority Desk</span>
                </a>
              </MagneticButton>

              <Link
                href="/about-us"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-rose-50/70 hover:bg-rose-100/70 text-blush-700 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-blush-200"
              >
                <span>Full Profile</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
