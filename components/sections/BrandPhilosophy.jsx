"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MicroscopeIcon, LaserPulseIcon, SerumDropletIcon, AwardMedalIcon, CheckCircleIcon } from "../ui/LuxuryIcons";
import { Reveal, StaggerReveal, StaggerItem } from "../animation/Reveal";
import TiltSpotlightCard from "../ui/TiltSpotlightCard";
import { SingleBloom, FloralBranch, BotanicalSectionDivider } from "../ui/BotanicalMotifs";
import { BrandPhilosophyLuxuryBg } from "../ui/LuxuryBackgrounds";

export default function BrandPhilosophy() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Split Parallax: text rises softly, botanical decoration floats with subtle rotation
  const textY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const botanicalY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const botanicalRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  const pillars = [
    {
      num: "01",
      category: "DIAGNOSTICS",
      title: "Microscopic Tissue Analysis",
      description:
        "Every clinical consultation commences with multi-spectral polarized dermoscopy, mapping cellular histology, lipid barrier integrity, and melanin depth before any treatment.",
      icon: MicroscopeIcon,
      tag: "Polarized Dermoscopy",
      iconBg: "bg-rose-50",
    },
    {
      num: "02",
      category: "TECHNOLOGY",
      title: "Bio-Calibrated Energy",
      description:
        "From authentic TD Glowtech 360° microcurrent resonance to US-FDA cleared Q-Switch Nd:YAG lasers, all instrumentation is calibrated to protect natural facial volume.",
      icon: LaserPulseIcon,
      tag: "US-FDA Cleared",
      iconBg: "bg-amber-50",
    },
    {
      num: "03",
      category: "EXPERIENCE",
      title: "Zero-Downtime Luxury",
      description:
        "Experience boutique calm paired with clinical potency. Walk out with visible cellular luminosity and zero peeling, allowing an effortless return to your life.",
      icon: SerumDropletIcon,
      tag: "Immediate Radiance",
      iconBg: "bg-cyan-50",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-16 sm:pt-20 pb-0 bg-[#FDEBF0] relative text-charcoal-900 overflow-hidden border-t border-blush-200/60"
    >
      {/* Bespoke Luxury Damask & Filigree Background */}
      <BrandPhilosophyLuxuryBg />

      {/* Parallax Floating Botanical Line Art */}
      <motion.div
        style={{ y: botanicalY, rotate: botanicalRotate }}
        className="hidden lg:block absolute top-16 right-16 pointer-events-none opacity-40 z-0"
      >
        <FloralBranch className="w-36 h-36 text-blush-300" color="#DFA6B4" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Section Pill with Small Blossom */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs tracking-widest uppercase font-semibold shadow-sm">
            <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
            <span>The Truly Derma Philosophy</span>
          </div>
        </Reveal>

        {/* Line-by-Line Editorial Serif Headline with Text Parallax */}
        <motion.div style={{ y: textY }} className="relative pt-2 max-w-4xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-normal text-charcoal-900 leading-[1.3] tracking-tight">
            “True aesthetic elegance cannot be achieved through generic salon facials or overfilling. It begins with{" "}
            <span className="italic text-blush-600 font-medium">
              deep cellular calibration
            </span>
            , medical laser accuracy, and an uncompromising respect for your natural facial harmony.”
          </blockquote>
        </motion.div>

        {/* Doctor Signature Credit */}
        <Reveal delay={0.15}>
          <div className="flex items-center justify-center gap-3.5 pt-2">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center shadow-sm border border-amber-200/60">
              <AwardMedalIcon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <p className="text-base font-serif font-semibold text-charcoal-900 tracking-wide">
                  Dr. Megha Aggarwal
                </p>
                <span className="px-2 py-0.5 rounded-full bg-blush-100 text-blush-600 text-[10px] font-bold uppercase tracking-wider">
                  MD Dermatology
                </span>
              </div>
              <p className="text-xs text-charcoal-700/80 font-normal">
                Founder & Aesthetic Director • Pitampura & Rajouri Garden, Delhi
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 Pillar Clinical Philosophy Cards */}
        <StaggerReveal stagger={0.15} className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={idx} yOffset={30}>
                <TiltSpotlightCard
                  className="rounded-3xl border border-blush-200/70 bg-white/95 shadow-[0_10px_30px_-10px_rgba(122,70,85,0.06)] hover:shadow-xl hover:border-blush-300 transition-all duration-300 h-full group"
                  spotlightColor="rgba(223, 166, 180, 0.15)"
                  tiltStrength={6}
                >
                  <div className="p-7 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${pillar.iconBg} transition-transform duration-300 group-hover:rotate-[4deg]`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blush-50 text-charcoal-700 border border-blush-100">
                          {pillar.num}
                        </span>
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-widest text-blush-500 mb-1">
                        {pillar.category}
                      </p>
                      <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-2 group-hover:text-blush-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-700/80 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-blush-100 flex items-center justify-between text-xs font-medium text-charcoal-800">
                      <span className="flex items-center gap-1.5 text-[11px] text-charcoal-900">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                        <span>{pillar.tag}</span>
                      </span>
                      <span className="text-[10px] uppercase text-charcoal-600/70 font-semibold tracking-wider">
                        Verified Protocol
                      </span>
                    </div>
                  </div>
                </TiltSpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>

      {/* Seamless Curved Section Divider into Services */}
      <div className="mt-8 sm:mt-10">
        <BotanicalSectionDivider fill="#FFFFFF" />
      </div>
    </section>
  );
}
