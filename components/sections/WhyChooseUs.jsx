"use client";

import { Award, ShieldCheck, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { clinicInfo, pagesContent } from "../../data/siteContent";
import { SlideUp } from "../ui/MotionWrappers";
import { SingleBloom, FloralBranch } from "../ui/BotanicalMotifs";
import { AwardMedalIcon } from "../ui/LuxuryIcons";

export default function WhyChooseUs() {
  const items = clinicInfo.whyChooseUs;
  const whyData = pagesContent.home.whyChooseUs;

  return (
    <section className="py-16 sm:py-20 bg-white text-charcoal-900 border-b border-blush-200/70 relative overflow-hidden">
      {/* Subtle Botanical accents */}
      <div className="absolute top-6 left-6 opacity-15 pointer-events-none hidden sm:block">
        <FloralBranch className="w-48 h-48 text-blush-300" color="#DFA6B4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideUp yOffset={15} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-blush-200 text-blush-700 text-xs font-semibold tracking-widest uppercase shadow-2xs">
            <AwardMedalIcon className="w-3.5 h-3.5" />
            <span>{whyData.pill}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 mt-2 tracking-tight">
            {whyData.title}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/85 mt-2 font-light leading-relaxed">
            {whyData.subtitle}
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#FFFDFD] to-[#FFF7F9] p-6 sm:p-7 rounded-3xl border border-blush-200 shadow-sm hover:shadow-lg hover:border-blush-400 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-blush-200 flex items-center justify-center text-blush-600 shadow-2xs group-hover:scale-105 group-hover:bg-blush-50 transition-all">
                  {idx === 0 && <Award className="w-6 h-6" />}
                  {idx === 1 && <Clock className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-blush-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-blush-100/80 flex items-center gap-1.5 text-xs text-blush-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Clinical Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
