"use client";

import { Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { clinicInfo, pagesContent } from "../../data/siteContent";
import { SlideUp } from "../ui/MotionWrappers";
import { FloralBranch } from "../ui/BotanicalMotifs";
import { AwardMedalIcon } from "../ui/LuxuryIcons";

export default function WhyChooseUs() {
  const items = clinicInfo.whyChooseUs;
  const whyData = pagesContent.home.whyChooseUs;

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-white text-charcoal-900 border-b border-blush-200/70 relative overflow-hidden">
      {/* Subtle Botanical accents */}
      <div className="absolute top-6 left-6 opacity-15 pointer-events-none hidden sm:block">
        <FloralBranch className="w-48 h-48 text-blush-300" color="#DFA6B4" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-15 pointer-events-none hidden sm:block -scale-x-100">
        <FloralBranch className="w-48 h-48 text-blush-300" color="#DFA6B4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideUp yOffset={15} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-blush-200 text-blush-700 text-xs font-bold tracking-widest uppercase shadow-2xs">
            <AwardMedalIcon className="w-3.5 h-3.5" />
            <span>Our Promise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mt-3 tracking-tight">
            Why Choose Us
          </h2>

          <p className="text-sm sm:text-base text-charcoal-700/90 mt-3 font-light leading-relaxed max-w-2xl mx-auto">
            {whyData.subtitle}
          </p>

          {/* Prominent Highlight Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-white border border-emerald-300/80 text-emerald-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-shadow">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Non-Invasive</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-50 to-white border border-rose-300/80 text-rose-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-shadow">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>100% Safe</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-white border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-shadow">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Proven Experience of 13 Years</span>
            </div>
          </div>
        </SlideUp>

        {/* 3 Prominent Highlighted Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-b from-white via-[#FFF9FA] to-[#FFF4F6] p-7 sm:p-8 rounded-3xl border border-blush-200 shadow-sm hover:shadow-xl hover:border-blush-400 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx === 0
                    ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                    : idx === 1
                    ? "bg-gradient-to-r from-rose-400 to-[#DE6361]"
                    : "bg-gradient-to-r from-amber-400 to-orange-400"
                }`}
              />

              <div className="space-y-5">
                {/* Header row: Icon & Highlight Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-all ${
                      idx === 0
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : idx === 1
                        ? "bg-rose-50 text-rose-600 border border-rose-200"
                        : "bg-amber-50 text-amber-600 border border-amber-200"
                    }`}
                  >
                    {idx === 0 && <Sparkles className="w-7 h-7" />}
                    {idx === 1 && <ShieldCheck className="w-7 h-7" />}
                    {idx === 2 && <Award className="w-7 h-7" />}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs ${
                      idx === 0
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : idx === 1
                        ? "bg-rose-50 text-rose-700 border-rose-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}
                  >
                    {item.tag || item.pillar}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 group-hover:text-blush-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal-700">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-blush-200/80 flex items-center justify-between text-xs font-semibold text-charcoal-700">
                <span className="flex items-center gap-1.5 text-blush-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{idx === 0 ? "Painless & Zero Downtime" : idx === 1 ? "US-FDA Approved Protocols" : "Founder Supervision"}</span>
                </span>
                <span className="text-[11px] font-mono text-charcoal-600">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
