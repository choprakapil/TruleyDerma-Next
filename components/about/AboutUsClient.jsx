"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  GraduationCap,
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  Navigation,
  Car,
  CalendarCheck,
  Star,
} from "lucide-react";
import {
  pagesContent,
  doctorProfile,
  clinicContact,
  siteMeta,
} from "../../data/siteContent";
import { useBooking } from "../providers/BookingContext";
import WhyChooseUs from "../sections/WhyChooseUs";
import TestimonialsMarquee from "../sections/TestimonialsMarquee";
import {
  WhatsAppIcon,
  PhoneIcon,
  AwardMedalIcon,
  CalendarIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "../ui/LuxuryIcons";
import { SingleBloom, FloralBranch, BotanicalFrameCorner } from "../ui/BotanicalMotifs";

export default function AboutUsClient() {
  const { openBooking } = useBooking();
  const about = pagesContent.about;
  const doc = doctorProfile;
  const hero = about.hero;
  const spotlight = about.doctorSpotlight;
  const branches = clinicContact.branches || [];

  const [activeBranchIdx, setActiveBranchIdx] = useState(0);
  const currentBranch = branches[activeBranchIdx] || branches[0];

  return (
    <main className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Background Soft Glows */}
      <div className="absolute top-20 right-0 w-[550px] h-[550px] bg-rose-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      {/* =====================================================================
          1. HERO SECTION: BRAND INTRODUCTION & EXCELLENCE
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-sm">
              <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
              <span>{hero.badge || "Aesthetic Dermatology & Trichology Excellence"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif font-normal text-charcoal-900 tracking-tight leading-[1.25]">
              Where Clinical Science Meets{" "}
              <span className="italic text-blush-600 font-medium">High-Aesthetic Elegance</span>
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-charcoal-700/90 font-light leading-relaxed">
              {hero.introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Quick Highlights Badge Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-blush-200/80 shadow-2xs">
                <p className="text-lg font-serif font-bold text-blush-600">{siteMeta.yearsOfExcellence}</p>
                <p className="text-[11px] text-charcoal-600 font-medium">Years in Practice</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-blush-200/80 shadow-2xs">
                <p className="text-lg font-serif font-bold text-blush-600">{siteMeta.proceduresCount}</p>
                <p className="text-[11px] text-charcoal-600 font-medium">Completed Procedures</p>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white border border-blush-200/80 shadow-2xs">
                <p className="text-lg font-serif font-bold text-blush-600">20,000+</p>
                <p className="text-[11px] text-charcoal-600 font-medium">Satisfied Patients</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-7 py-3.5 rounded-full bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={clinicContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase border border-blush-200 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Consult</span>
              </a>

              <a
                href="#doctor"
                className="px-5 py-3.5 rounded-full bg-transparent hover:bg-blush-50 text-charcoal-700 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Meet Dr. Megha ↓
              </a>
            </div>
          </div>

          {/* Right Image: Grand Doctor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-blush-200/60 via-rose-100/40 to-blush-100/80 transform rotate-1 pointer-events-none shadow-md" />

              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border-2 border-blush-200/90 bg-rose-50 h-[420px] sm:h-[480px] lg:h-[520px] group">
                <img
                  src={doc.image || "/images/Doctor.png"}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-charcoal-950/20 to-transparent pointer-events-none" />

                {/* Corner Botanical Motif */}
                <div className="absolute top-3 right-3 pointer-events-none opacity-80 z-20">
                  <BotanicalFrameCorner className="w-8 h-8" color="#FFFFFF" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-charcoal-900 text-[10.5px] font-bold uppercase tracking-wider border border-blush-200 shadow-sm flex items-center gap-1.5 z-20">
                  <AwardMedalIcon className="w-4 h-4" />
                  <span>Founder • Truly Derma</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-blush-200 shadow-xl z-20 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-blush-600 uppercase tracking-widest">
                      Founder & Aesthetic Director
                    </p>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.9 / 5.0</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-medium">
                    {doc.qualifications}
                  </p>
                </div>
              </div>

              {/* Floating Verified Experience Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white px-4 py-2.5 rounded-2xl border border-blush-200 shadow-xl flex items-center gap-3 z-30">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-charcoal-900 leading-none">
                    {doc.experience}
                  </p>
                  <p className="text-[9.5px] text-charcoal-600 font-medium mt-0.5">
                    Direct Physician Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MEET OUR EXPERT & DOCTOR PHILOSOPHY SECTION (#doctor)
          ===================================================================== */}
      <section id="doctor" className="py-20 bg-[#FFF8FA] border-y border-blush-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-blush-500" />
              <span>{spotlight.badge || "Direct Physician Leadership"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-charcoal-900 tracking-tight">
              {spotlight.title || `Meet Our Expert: ${doc.name}`}
            </h2>
            <p className="text-xs sm:text-sm text-blush-700 font-semibold uppercase tracking-wider">
              {spotlight.subtitle || `${doc.experience} • 20,000+ Completed Procedures`}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-7 sm:p-12 rounded-3xl border border-blush-200 shadow-sm space-y-7">
            {/* Dr. Megha Personal Philosophy Note */}
            <div className="relative pl-6 border-l-4 border-blush-500 italic text-charcoal-800 font-serif text-base sm:text-lg leading-relaxed bg-rose-50/40 p-5 rounded-r-2xl">
              <p>
                &ldquo;{doc.personalNote ||
                  "Skincare is not just about the surface; it is about understanding yourself and promoting overall well-being. As your partner, I create a nurturing space where self-love is celebrated. Every treatment at Truly Derma is rooted in medical science, customized to your unique dermal needs, and delivered with genuine care."}&rdquo;
              </p>
              <div className="mt-3 not-italic font-sans text-xs font-bold text-blush-600 flex items-center justify-between">
                <span>— {doc.name}, Founder</span>
                <span className="text-charcoal-500 font-normal">Delhi, India</span>
              </div>
            </div>

            {/* Doctor Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-blush-100 text-center">
              {doc.stats.map((s, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-rose-50/70 border border-blush-100/90">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-charcoal-600 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Consultation Action */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-blush-100">
              <div className="text-xs text-charcoal-600">
                <span className="font-semibold text-charcoal-900">Available For Consultations:</span> Mon - Sat at Pitampura & Rajouri Garden Clinics.
              </div>
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-6 py-3 rounded-full bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Consult Dr. Megha</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. CLINIC SUITES SHOWCASE: PITAMPURA & RAJOURI GARDEN
          ===================================================================== */}
      <section className="py-20 bg-white border-t border-blush-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-blush-500" />
              <span>Two Luxury Clinic Locations in Delhi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-charcoal-900 tracking-tight">
              Visit Our <span className="italic text-blush-600 font-medium">Clinic Locations</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-xl mx-auto">
              Equipped with sterile procedure rooms, comfortable consultation spaces, and dedicated parking.
            </p>
          </div>

          {/* Interactive Branch Switcher Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {branches.map((b, idx) => (
              <button
                key={b.id || idx}
                onClick={() => setActiveBranchIdx(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
                  activeBranchIdx === idx
                    ? "bg-blush-600 text-white border-blush-600 shadow-md scale-102"
                    : "bg-white text-charcoal-700 hover:bg-blush-50 border-blush-200"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Active Suite Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFF9FA] via-white to-[#FFF5F7] p-8 sm:p-12 rounded-3xl border-2 border-blush-200 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-blush-600 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{currentBranch.city}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  {currentBranch.fullName || currentBranch.name}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed bg-white p-4 rounded-2xl border border-blush-100">
                  {currentBranch.address}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700 pt-1">
                  <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-blush-100">
                    <Navigation className="w-4 h-4 text-blush-600 shrink-0" />
                    <span><strong>Metro:</strong> {currentBranch.metroStation || "Nearby Station"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-blush-100">
                    <Car className="w-4 h-4 text-blush-600 shrink-0" />
                    <span><strong>Parking:</strong> {currentBranch.parking || "Valet available"}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-charcoal-600">
                  <Clock className="w-4 h-4 text-blush-500 shrink-0" />
                  <span><strong>Hours:</strong> {clinicContact.hours}</span>
                </div>
              </div>

              {/* Action Column */}
              <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-blush-200 shadow-2xs space-y-3.5">
                <h4 className="font-serif font-bold text-sm text-charcoal-900">
                  Direct Inquiries & Navigation
                </h4>

                <a
                  href={`tel:${(currentBranch.phone || clinicContact.phoneClean).replace(/\s+/g, "")}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-rose-50/70 hover:bg-blush-100/70 border border-blush-100 text-charcoal-900 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Phone className="w-4 h-4 text-blush-600" />
                    <span>{currentBranch.phone || clinicContact.phone}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-blush-600">Call Now</span>
                </a>

                <a
                  href={currentBranch.mapEmbedUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open In Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="w-full py-3 rounded-xl bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book At This Clinic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PATIENT SAFETY CHARTER & WHY CHOOSE US
          ===================================================================== */}
      <WhyChooseUs />

      {/* =====================================================================
          6. VERIFIED PATIENT TESTIMONIALS
          ===================================================================== */}
      <TestimonialsMarquee />

      {/* =====================================================================
          7. BOTTOM VIP CONSULTATION CTA
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-blush-600 via-[#A45D71] to-blush-700 text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-rose-100 text-xs font-semibold tracking-widest uppercase border border-white/20">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Private Consultations Available</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight">
            Begin Your Dermatological Journey With Dr. Megha
          </h2>

          <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl mx-auto font-light leading-relaxed">
            Personalized treatment plans tailored to your skin and hair biology. Visit our luxury suites in {branches.map((b) => b.name).join(" or ")}, Delhi.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-8 py-4 rounded-full bg-white text-charcoal-950 font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CalendarIcon className="w-4 h-4 text-blush-600" />
              <span>Book Priority Consultation</span>
            </button>

            <a
              href={clinicContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs tracking-wider uppercase border border-white/30 transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Consult</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
