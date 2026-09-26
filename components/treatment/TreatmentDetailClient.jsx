"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  AwardMedalIcon,
  CalendarIcon,
  WhatsAppIcon,
} from "../ui/LuxuryIcons";
import { useBooking } from "../providers/BookingContext";
import { clinicInfo } from "../../data/clinicInfo";
import { TreatmentDetailLuxuryBg } from "../ui/LuxuryBackgrounds";

export default function TreatmentDetailClient({ treatment, relatedTreatments }) {
  const { openBooking } = useBooking();

  return (
    <div className="relative pt-28 pb-20 bg-gradient-to-b from-[#FFF6F8] via-[#FCFAF9] to-white font-sans text-charcoal-900 overflow-hidden">
      {/* Bespoke Haute Parfumerie Watermark & Subtle Ambient Glow Background */}
      <TreatmentDetailLuxuryBg />

      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-700 hover:text-brand-rose transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Protocols</span>
        </Link>
      </div>

      {/* Treatment Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-rose-100 text-brand-rose text-xs font-semibold tracking-wider uppercase">
                {treatment.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white text-brand-rose text-xs font-semibold tracking-wider uppercase border border-rose-200 shadow-sm">
                {treatment.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-charcoal-900 leading-tight">
              {treatment.name}
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-brand-rose font-normal">
              "{treatment.tagline}"
            </p>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl font-sans font-light">
              {treatment.description}
            </p>

            {/* Treatment Fast Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-rose-100">
              <div className="flex items-center gap-3">
                <ClockIcon className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="text-xs font-semibold text-charcoal-900">{treatment.sessionDuration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Downtime</p>
                  <p className="text-xs font-semibold text-charcoal-900">{treatment.downtime}</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <AwardMedalIcon className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">Supervision</p>
                  <p className="text-xs font-semibold text-charcoal-900">Dr. Megha Aggarwal</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => openBooking(treatment.slug)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose via-[#DFA6B4] to-brand-rose text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:opacity-95 active:scale-95 transition-all shadow-[0_8px_25px_rgb(201,130,148,0.35)] flex items-center gap-2.5 border border-white/40 cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Reserve Consultation</span>
              </button>

              <a
                href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(`Hello Dr. Megha, I would like to inquire about ${treatment.name} at Truly Derma.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-white hover:bg-rose-50 text-charcoal-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 border border-rose-200 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Clinical Desk</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-200 aspect-[4/5] bg-charcoal-900 group">
              <img
                src={treatment.heroImage}
                alt={treatment.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-200/80 text-charcoal-900 shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-brand-rose font-semibold block mb-1">
                  Ideal Clinical Indications
                </span>
                <p className="text-xs text-charcoal-800 font-medium">
                  {treatment.suitableFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Steps & Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-rose-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Procedure Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-rose">
              <span>Step-by-Step Clinical Flow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-charcoal-900">
              What to Expect During Your Session
            </h2>

            <div className="space-y-4 pt-2">
              {treatment.procedureSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-rose-100 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 text-brand-rose flex items-center justify-center font-serif text-lg shrink-0 font-semibold shadow-sm border border-rose-100">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-charcoal-900">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-sans font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Highlights & Suitable Candidates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-rose-200 shadow-[0_10px_30px_rgb(201,130,148,0.1)] space-y-5">
              <h3 className="text-xl font-serif font-normal text-charcoal-900 border-b border-rose-100 pb-3">
                Key Biological Benefits
              </h3>
              <ul className="space-y-3">
                {treatment.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                    <CheckCircleIcon className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="font-normal font-sans">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-rose-100">
                <button
                  onClick={() => openBooking(treatment.slug)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-brand-rose via-[#DFA6B4] to-brand-rose text-white text-xs font-semibold tracking-wider uppercase hover:opacity-95 transition-colors text-center block shadow-[0_8px_20px_rgb(201,130,148,0.3)] cursor-pointer"
                >
                  Reserve Consultation for {treatment.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Treatments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-rose-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-serif font-normal text-charcoal-900">
              Related Protocols
            </h3>
            <p className="text-xs text-charcoal-500 mt-1 font-sans font-light">
              Explore complementary treatments for comprehensive aesthetic results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTreatments.map((item) => (
            <Link
              key={item.slug}
              href={`/treatments/${item.slug}`}
              className="group p-5 rounded-2xl bg-white border border-rose-100 hover:border-brand-rose/60 transition-all shadow-sm hover:shadow-[0_8px_25px_rgb(201,130,148,0.12)] flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] text-brand-rose font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
                <h4 className="text-lg font-serif font-medium text-charcoal-900 group-hover:text-brand-rose transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-charcoal-600 line-clamp-2 font-sans font-light">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-brand-rose font-semibold mt-4 border-t border-rose-50">
                <span>View Protocol</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
