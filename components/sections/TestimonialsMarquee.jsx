"use client";

import { Star, Quote } from "lucide-react";
import { SparklesIcon, CheckCircleIcon } from "../ui/LuxuryIcons";
import { clinicInfo } from "../../data/clinicInfo";
import { SlideUp } from "../ui/MotionWrappers";
import { SingleBloom } from "../ui/BotanicalMotifs";

export default function TestimonialsMarquee() {
  const testimonials = clinicInfo.testimonials;
  const marqueeRow1 = [...testimonials, ...testimonials, ...testimonials];
  const marqueeRow2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white text-charcoal-900 border-b border-blush-200/70 overflow-hidden relative">
      {/* Soft Ambient Blush Backdrops */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blush-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blush-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Bloom Accent */}
      <div className="absolute top-3 right-6 opacity-20 pointer-events-none">
        <SingleBloom className="w-16 h-16 text-blush-400" />
      </div>

      <div className="w-full my-auto">
        {/* Section Header */}
        <SlideUp yOffset={15} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blush-300/80 text-blush-700 text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Verified Patient Reflections</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-charcoal-950 tracking-tight">
              Words from Our Discerning Clients
            </h2>
            <p className="text-charcoal-700/90 text-xs mt-1 max-w-lg mx-auto font-sans font-normal leading-tight">
              Authentic experiences from patients guided by Dr. Megha Aggarwal and our clinical team.
            </p>
          </div>
        </SlideUp>

        {/* Row 1 Marquee (Left Scroll) */}
        <SlideUp delay={0.08} yOffset={15} className="relative w-full overflow-hidden group mb-2.5 z-10">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3.5 animate-marquee group-hover:[animation-play-state:paused] w-max py-0.5">
            {marqueeRow1.map((item, idx) => {
              const initial = item.patientName ? item.patientName.charAt(0) : "P";

              return (
                <div
                  key={`row1-${item.id}-${idx}`}
                  className="w-[270px] sm:w-[330px] bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-blush-200/90 shadow-2xs hover:shadow-md hover:border-blush-400 transition-all duration-300 flex flex-col justify-between space-y-2 group/card"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-blush-400 text-blush-400" />
                        ))}
                      </div>
                      <Quote className="w-3.5 h-3.5 text-blush-300 group-hover/card:text-blush-500 transition-colors" />
                    </div>

                    <p className="text-[11.5px] text-charcoal-800 leading-snug font-sans font-normal italic line-clamp-2">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-blush-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blush-300 to-blush-500 text-white font-serif font-bold flex items-center justify-center text-[11px] shadow-2xs shrink-0">
                        {initial}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-serif font-bold text-charcoal-950 flex items-center gap-1.5 leading-none">
                          <span>{item.patientName}</span>
                          <CheckCircleIcon className="w-3 h-3" />
                        </h4>
                        <p className="text-[9.5px] text-blush-600 font-semibold tracking-wide mt-0.5">
                          {item.treatment}
                        </p>
                      </div>
                    </div>

                    <span className="text-[8.5px] uppercase tracking-wider text-blush-700 bg-blush-50 px-2 py-0.5 rounded-full font-bold border border-blush-200/80 shrink-0">
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </SlideUp>

        {/* Row 2 Marquee (Reverse Scroll) */}
        <SlideUp delay={0.14} yOffset={15} className="relative w-full overflow-hidden group z-10">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3.5 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max py-0.5">
            {marqueeRow2.map((item, idx) => {
              const initial = item.patientName ? item.patientName.charAt(0) : "P";

              return (
                <div
                  key={`row2-${item.id}-${idx}`}
                  className="w-[270px] sm:w-[330px] bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-blush-200/90 shadow-2xs hover:shadow-md hover:border-blush-400 transition-all duration-300 flex flex-col justify-between space-y-2 group/card"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-blush-400 text-blush-400" />
                        ))}
                      </div>
                      <Quote className="w-3.5 h-3.5 text-blush-300 group-hover/card:text-blush-500 transition-colors" />
                    </div>

                    <p className="text-[11.5px] text-charcoal-800 leading-snug font-sans font-normal italic line-clamp-2">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-blush-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blush-400 to-blush-600 text-white font-serif font-bold flex items-center justify-center text-[11px] shadow-2xs shrink-0">
                        {initial}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-serif font-bold text-charcoal-950 flex items-center gap-1.5 leading-none">
                          <span>{item.patientName}</span>
                          <CheckCircleIcon className="w-3 h-3" />
                        </h4>
                        <p className="text-[9.5px] text-blush-600 font-semibold tracking-wide mt-0.5">
                          {item.treatment}
                        </p>
                      </div>
                    </div>

                    <span className="text-[8.5px] uppercase tracking-wider text-blush-700 bg-blush-50 px-2 py-0.5 rounded-full font-bold border border-blush-200/80 shrink-0">
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
