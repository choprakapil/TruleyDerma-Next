"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MicroscopeIcon, LaserPulseIcon, SerumDropletIcon, AwardMedalIcon, CheckCircleIcon } from "../ui/LuxuryIcons";
import { Reveal, StaggerReveal, StaggerItem } from "../animation/Reveal";
import TiltSpotlightCard from "../ui/TiltSpotlightCard";
import { SingleBloom, FloralBranch, BotanicalSectionDivider } from "../ui/BotanicalMotifs";
import { BrandPhilosophyLuxuryBg } from "../ui/LuxuryBackgrounds";

import { pagesContent, doctorProfile } from "../../data/siteContent";

export default function BrandPhilosophy() {
  const sectionRef = useRef(null);
  const philosophyData = pagesContent.home.brandPhilosophy;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Split Parallax: text rises softly, botanical decoration floats with subtle rotation
  const textY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const botanicalY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const botanicalRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  const iconMap = [MicroscopeIcon, LaserPulseIcon, SerumDropletIcon];
  const bgMap = ["bg-rose-50", "bg-amber-50", "bg-cyan-50"];

  const pillars = philosophyData.pillars.map((p, idx) => ({
    ...p,
    icon: iconMap[idx] || MicroscopeIcon,
    iconBg: bgMap[idx] || "bg-rose-50",
  }));

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
            <span>{philosophyData.pill}</span>
          </div>
        </Reveal>

        {/* Section Heading & Subtitle */}
        <Reveal delay={0.05}>
          <div className="space-y-2.5 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-charcoal-900 tracking-tight">
              {philosophyData.title}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700/85 font-light leading-relaxed max-w-2xl mx-auto">
              {philosophyData.subtitle}
            </p>
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
