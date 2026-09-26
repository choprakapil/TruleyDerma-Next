"use client";

import { DigitalSkinScanIcon, ResonanceChipIcon, CryoSealIcon, SparklesIcon, CheckCircleIcon } from "../ui/LuxuryIcons";
import { clinicInfo } from "../../data/clinicInfo";
import { SlideDown, StaggerContainer, StaggerItemSlide } from "../ui/MotionWrappers";
import { SingleBloom } from "../ui/BotanicalMotifs";

const stepIcons = {
  Microscope: DigitalSkinScanIcon,
  Cpu: ResonanceChipIcon,
  ShieldCheck: CryoSealIcon,
};

export default function TechnologyShowcase() {
  const steps = clinicInfo.techSteps;

  return (
    <section
      id="technology"
      className="py-16 sm:py-20 bg-white text-charcoal-900 overflow-hidden relative border-b border-blush-200/70"
    >
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blush-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Accent */}
      <div className="absolute top-4 right-8 opacity-15 pointer-events-none">
        <SingleBloom className="w-16 h-16 text-brand-rose" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Section Header */}
        <SlideDown className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-charcoal-800 text-[10px] font-semibold tracking-widest uppercase mb-2 shadow-2xs">
            <ResonanceChipIcon className="w-4 h-4" />
            <span>US-FDA Cleared Instrumentation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
            Precision Clinical Technology
          </h2>

          <p className="text-charcoal-600 text-xs sm:text-xs mt-1 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Synchronized 3-phase biological transformation powered by certified medical-grade dermal instrumentation.
          </p>
        </SlideDown>

        {/* 3-Column 100vh Compact Grid */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, idx) => {
            const Icon = stepIcons[step.icon] || Sparkles;

            return (
              <StaggerItemSlide key={step.stepNumber} yOffset={25}>
                <div className="bg-white rounded-3xl border border-rose-100/90 p-4 sm:p-5 shadow-[0_6px_25px_rgb(201,130,148,0.06)] hover:shadow-[0_10px_30px_rgb(201,130,148,0.12)] hover:border-brand-rose/40 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Image Preview */}
                    <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden mb-3 bg-charcoal-900 border border-rose-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-charcoal-900 text-[9.5px] font-bold tracking-wider uppercase border border-rose-200/80 shadow-2xs flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>Phase {step.stepNumber}</span>
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <span className="text-[9.5px] uppercase tracking-widest text-brand-rose font-bold block mb-0.5">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-charcoal-900 group-hover:text-brand-rose transition-colors mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Verification Tag */}
                  <div className="pt-2.5 mt-3 border-t border-rose-100/70 flex items-center justify-between text-[10.5px] text-charcoal-700">
                    <span className="flex items-center gap-1.5 font-medium text-charcoal-800">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      <span>Certified Protocol</span>
                    </span>
                    <span className="text-[9px] uppercase text-charcoal-400 font-semibold tracking-wider">
                      US-FDA Cleared
                    </span>
                  </div>
                </div>
              </StaggerItemSlide>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
