"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  AwardMedalIcon,
  SparklesIcon,
  RadianceGlowIcon,
  PoreRefineIcon,
  PigmentShieldIcon,
  ScarRemodelIcon,
  FaceLiftIcon,
  HairCareIcon,
  ShieldCheckIcon,
  SerumDropletIcon,
  DigitalSkinScanIcon,
} from "../ui/LuxuryIcons";
import { useBooking } from "../providers/BookingContext";
import MagneticButton from "../ui/MagneticButton";
import { Reveal } from "../animation/Reveal";
import { SingleBloom, BotanicalFrameCorner } from "../ui/BotanicalMotifs";
import { SkinQuizLuxuryBg } from "../ui/LuxuryBackgrounds";

const optionIconMap = {
  glow: RadianceGlowIcon,
  pores: PoreRefineIcon,
  pigmentation: PigmentShieldIcon,
  scars: ScarRemodelIcon,
  laxity: FaceLiftIcon,
  hair: HairCareIcon,
  zero: SparklesIcon,
  mild: ClockIcon,
  progressive: AwardMedalIcon,
  resilient: ShieldCheckIcon,
  sensitive: SerumDropletIcon,
  reactive: DigitalSkinScanIcon,
};

import { quizQuestions as QUIZ_QUESTIONS, quizPrescriptions as PRESCRIPTIONS, pagesContent } from "../../data/siteContent";


export default function SkinQuizWidget() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prescription, setPrescription] = useState(null);
  const { openBooking } = useBooking();

  const handleSelectOption = (option) => {
    const question = QUIZ_QUESTIONS[currentStep];
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        const matchedSlug = newAnswers.goal?.slug || "td-glowtech-360";
        setPrescription(PRESCRIPTIONS[matchedSlug] || PRESCRIPTIONS["td-glowtech-360"]);
      }, 1500);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setPrescription(null);
    setIsAnalyzing(false);
  };

  return (
    <section
      id="skin-matcher"
      className="py-16 sm:py-20 bg-[#FDEBF0] border-b border-blush-200/70 relative overflow-hidden text-charcoal-900"
    >
      {/* Bespoke Water Lily Floral Bloom & Floret Lace Background */}
      <SkinQuizLuxuryBg />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blush-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Section Header */}
        <Reveal className="text-center space-y-1.5 mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-blush-200 text-blush-600 text-[10px] font-semibold tracking-widest uppercase shadow-2xs">
            <SingleBloom className="w-3 h-3" color="#C98294" />
            <span>Personalized Skincare Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
            Discover Your Tailored Clinical Protocol
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/80 max-w-xl mx-auto font-light leading-snug">
            Answer 3 quick questions for Dr. Megha Aggarwal’s customized medical recommendation.
          </p>
        </Reveal>

        {/* Quiz Card Container */}
        <div className="bg-white/95 rounded-3xl border border-blush-200 p-4 sm:p-6 lg:p-7 shadow-[0_12px_40px_-10px_rgba(122,70,85,0.08)] relative overflow-hidden">
          {/* Progress Indicator */}
          {!prescription && !isAnalyzing && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-charcoal-600 mb-1.5">
                <span>Step 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}</span>
                <span className="text-blush-600 font-bold">
                  {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Completed
                </span>
              </div>
              <div className="w-full h-1 bg-blush-50 rounded-full overflow-hidden border border-blush-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-blush-300 to-blush-500 rounded-full"
                  initial={{ width: "33%" }}
                  animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          {/* Animated State Transitions */}
          <AnimatePresence mode="wait">
            {/* 1. Analyzing Botanical State */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blush-100 border border-blush-200 flex items-center justify-center text-blush-600 shadow-2xs animate-pulse">
                  <SingleBloom className="w-7 h-7" color="#C98294" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-charcoal-900">
                    Curating Your Prescription...
                  </h3>
                  <p className="text-xs text-charcoal-600 font-light">
                    Harmonizing skin histology parameters with Dr. Megha's clinical protocols.
                  </p>
                </div>
                <div className="w-36 h-1 bg-blush-100 rounded-full mx-auto overflow-hidden">
                  <motion.div
                    className="h-full bg-blush-400 rounded-full"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}

            {/* 2. Questions State */}
            {!prescription && !isAnalyzing && (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-charcoal-900">
                    {QUIZ_QUESTIONS[currentStep].title}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-light">
                    {QUIZ_QUESTIONS[currentStep].subtitle}
                  </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                  {QUIZ_QUESTIONS[currentStep].options.map((opt) => {
                    const OptIcon = optionIconMap[opt.id];
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt)}
                        className="p-3.5 rounded-2xl border border-blush-200/80 hover:border-blush-400 bg-[#FCFAF9] hover:bg-white transition-all duration-200 text-left group hover:shadow-sm flex items-start gap-3 cursor-pointer"
                      >
                        {OptIcon && (
                          <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-blush-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <OptIcon className="w-6 h-6" />
                          </div>
                        )}
                        <div className="flex-1 space-y-0.5">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs sm:text-sm font-serif font-semibold text-charcoal-900 group-hover:text-blush-600 transition-colors">
                              {opt.label}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-blush-500 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                          </div>
                          <p className="text-[11px] text-charcoal-700/80 leading-snug font-light line-clamp-2">
                            {opt.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 3. Prescription Reveal State */}
            {prescription && !isAnalyzing && (
              <motion.div
                key="outcome"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Result Top Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-blush-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blush-400 text-white text-[10px] font-semibold uppercase tracking-wider shadow-2xs">
                      {prescription.badge}
                    </span>
                    <span className="text-[11px] font-medium text-charcoal-600 uppercase tracking-wider">
                      {prescription.category}
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-charcoal-700 hover:text-blush-600 transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Consultation</span>
                  </button>
                </div>

                {/* Prescribed Protocol Title & Explanation */}
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-widest text-blush-600 font-bold">
                      Prescribed Clinical Recommendation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal-900">
                      {prescription.name}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-800 leading-relaxed bg-blush-50/70 border-l-2 border-blush-400 p-3 rounded-r-xl font-light">
                    {prescription.summary}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-charcoal-800">
                    Protocol Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px]">
                    {prescription.keyBenefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-2 rounded-lg bg-white border border-blush-100 flex items-start gap-2 shadow-2xs font-light text-charcoal-800"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Downtime & Duration Specs */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-blush-50/60 border border-blush-100 flex items-center gap-2.5">
                    <ClockIcon className="w-5 h-5" />
                    <div>
                      <span className="text-[9px] uppercase font-bold text-charcoal-500 block">
                        Downtime
                      </span>
                      <span className="text-xs font-semibold text-charcoal-900">
                        {prescription.downtime}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blush-50/60 border border-blush-100 flex items-center gap-2.5">
                    <AwardMedalIcon className="w-5 h-5" />
                    <div>
                      <span className="text-[9px] uppercase font-bold text-charcoal-500 block">
                        Course Recommendation
                      </span>
                      <span className="text-xs font-semibold text-charcoal-900">
                        {prescription.sessions}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Final Action CTA */}
                <div className="pt-2 border-t border-blush-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                  <p className="text-[10.5px] text-charcoal-600 font-light">
                    Directly pre-selects your protocol with Dr. Megha Aggarwal.
                  </p>

                  <MagneticButton strength={0.25}>
                    <button
                      onClick={() => openBooking(prescription.slug)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>Book Prescribed Protocol</span>
                    </button>
                  </MagneticButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
