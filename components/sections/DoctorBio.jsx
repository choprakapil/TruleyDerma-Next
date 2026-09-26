"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, GraduationCap, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { clinicInfo } from "../../data/clinicInfo";
import { useBooking } from "../providers/BookingContext";
import { Reveal, StaggerReveal, StaggerItem } from "../animation/Reveal";
import { MaskReveal } from "../animation/MaskReveal";
import CountUp from "../ui/CountUp";
import MagneticButton from "../ui/MagneticButton";
import { SingleBloom, FloralBranch, BotanicalFrameCorner } from "../ui/BotanicalMotifs";

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
      className="py-16 sm:py-20 bg-white border-b border-blush-200/70 relative overflow-hidden text-charcoal-900"
    >
      {/* Parallax Botanical Background Element */}
      <motion.div
        style={{ y: botanicalY, rotate: botanicalRotate }}
        className="hidden lg:block absolute -top-8 -left-8 pointer-events-none opacity-30 z-0"
      >
        <FloralBranch className="w-44 h-44 text-blush-300" color="#DFA6B4" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: Doctor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-blush-100/70 transform rotate-1 pointer-events-none" />

              {/* Direct Doctor Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_35px_-8px_rgba(122,70,85,0.18)] bg-white h-[280px] sm:h-[330px] lg:h-[370px] border-2 border-blush-200 z-10 group">
                <img
                  src={doc.image || "/images/dr-megha.jpg"}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Minimal Caption on Image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-blush-200 text-charcoal-900 space-y-0.5 shadow-md">
                  <p className="text-[8.5px] uppercase tracking-widest text-blush-600 font-bold">
                    Chief Dermatologist & Founder
                  </p>
                  <p className="text-sm sm:text-base font-serif font-bold text-charcoal-900 leading-tight">{doc.name}</p>
                  <p className="text-[10px] text-charcoal-700 font-light truncate">{doc.qualifications}</p>
                </div>

                {/* Delicate Corner Motif */}
                <div className="absolute top-2.5 right-2.5 pointer-events-none opacity-60 z-20">
                  <BotanicalFrameCorner className="w-6 h-6" color="#DFA6B4" />
                </div>
              </div>

              {/* Verified Experience Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:-right-2 bg-white px-2.5 py-1.5 rounded-xl border border-blush-200 shadow-md flex items-center gap-2 z-20">
                <div className="w-6 h-6 rounded-lg bg-blush-100 text-blush-600 flex items-center justify-center font-bold">
                  <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
                </div>
                <div>
                  <p className="text-[10px] font-serif font-bold text-charcoal-900 leading-none">14+ Years</p>
                  <p className="text-[8.5px] text-charcoal-600 font-medium">Aesthetic Dermatology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography, Credentials & Stats */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-blush-200 text-blush-600 text-[10px] font-semibold tracking-widest uppercase shadow-2xs">
                <Award className="w-3 h-3 text-blush-500" />
                <span>Direct Physician Leadership</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-normal text-charcoal-900 tracking-tight block">
                  {doc.name}
                </h2>
                <p className="text-blush-600 text-[11px] font-semibold tracking-wide mt-0.5">
                  {doc.title} • Founder, Truly Derma Clinic & Academy
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xs sm:text-xs text-charcoal-800 leading-relaxed font-serif italic border-l-2 border-blush-400 pl-2.5 py-1 bg-white/80 rounded-r-lg shadow-2xs">
                "{doc.philosophy}"
              </p>
            </Reveal>

            {/* Doctor Stats Grid */}
            <StaggerReveal stagger={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1.5 border-y border-blush-200/80">
              {doc.stats.map((stat, idx) => (
                <StaggerItem
                  key={idx}
                  yOffset={10}
                  className="space-y-0.5 p-1.5 sm:p-2 rounded-xl bg-white border border-blush-100 shadow-2xs"
                >
                  <p className="text-lg sm:text-xl font-serif font-bold text-charcoal-900">
                    <CountUp value={stat.value} duration={1.5} />
                  </p>
                  <p className="text-[8.5px] text-charcoal-600 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            {/* Truly Derma Academy Badge */}
            <Reveal delay={0.15} className="p-2.5 rounded-xl bg-white border border-blush-200/80 shadow-2xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blush-100 text-blush-600 flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-blush-600" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-semibold text-charcoal-900">
                  Director, Truly Derma Aesthetic Academy
                </h4>
                <p className="text-[10px] text-charcoal-700/85 mt-0.5 leading-tight font-light">
                  Training certified cosmetic dermatologists across India in advanced laser physics and gentle rejuvenation.
                </p>
              </div>
            </Reveal>

            {/* Consultation Action Buttons */}
            <Reveal delay={0.2} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-0.5">
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => openBooking()}
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-[11px] font-semibold tracking-wider uppercase active:scale-95 transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Consult Dr. Megha</span>
                </button>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent("Hello Dr. Megha, I would like to book a private clinical consultation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-white hover:bg-blush-50 text-charcoal-800 text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-blush-200 shadow-2xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-blush-500" />
                  <span>WhatsApp Desk</span>
                </a>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
