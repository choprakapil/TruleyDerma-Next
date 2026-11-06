"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Flame,
} from "lucide-react";
import { WhatsAppIcon, PhoneIcon, CalendarIcon } from "../ui/LuxuryIcons";
import { siteNavigation, clinicContact, treatmentCategories } from "../../data/siteContent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  const skinCategory = treatmentCategories.find((c) => c.id === "skin");
  const hairCategory = treatmentCategories.find((c) => c.id === "hair");
  const fatLossCategory = treatmentCategories.find((c) => c.id === "fat-loss");
  const laserCategory = treatmentCategories.find((c) => c.id === "laser");

  return (
    <header className="fixed top-2.5 sm:top-3.5 left-0 right-0 z-40 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 w-full">
        {/* Main Floating Navbar Card */}
        <div
          className={`relative pointer-events-auto rounded-2xl sm:rounded-3xl transition-all duration-300 px-4 sm:px-6 lg:px-7 flex items-center justify-between border ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md py-1.5 sm:py-2 shadow-[0_10px_30px_rgba(43,19,61,0.12)] border-rose-100"
              : "bg-white/90 backdrop-blur-sm py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(43,19,61,0.06)] border-rose-100/60"
          }`}
        >
          {/* Brand Official Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <div
              className={`relative transition-all duration-300 flex items-center ${
                isScrolled ? "h-10 sm:h-11 md:h-12" : "h-12 sm:h-13 md:h-14"
              }`}
            >
              <img
                src="/logo.png"
                alt="Truly Derma Clinic"
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-semibold text-charcoal-800">
            {siteNavigation?.headerNav?.map((navItem) => {
              if (navItem.isDropdown) {
                return (
                  <div
                    key={navItem.label}
                    onMouseEnter={() => handleMouseEnter("treatments")}
                    onMouseLeave={handleMouseLeave}
                    className="py-1"
                  >
                    <Link
                      href={navItem.href}
                      className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                        activeDropdown === "treatments"
                          ? "text-brand-rose"
                          : "hover:text-brand-rose"
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === "treatments"
                            ? "rotate-180 text-brand-rose"
                            : "text-charcoal-400"
                        }`}
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  className="py-1 hover:text-brand-rose transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:bg-brand-rose after:transition-transform after:duration-300 after:origin-left"
                >
                  {navItem.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Section (Call & WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Official Phone Direct Dial */}
            <a
              href={`tel:${clinicContact.phoneClean || "+917591055566"}`}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-charcoal-800 hover:text-brand-rose transition-colors rounded-full bg-rose-50/80 hover:bg-rose-100/80 border border-rose-200/70 shadow-2xs"
              title="Call Truly Derma Helpline"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">
                {clinicContact.phoneFormatted || clinicContact.phone || "+91 75910 55566"}
              </span>
              <span className="md:hidden">Call</span>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${clinicContact.whatsappNumber || "918076926982"}?text=${encodeURIComponent(
                "Hello Truly Derma, I would like to enquire about your treatments."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full hover:scale-105 transition-transform"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Contact"
            >
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          </div>

          {/* Mobile Controls (Phone + WhatsApp + Hamburger Toggle) */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${clinicContact.phoneClean || "+917591055566"}`}
              className="sm:hidden p-2 rounded-full bg-rose-50 text-brand-rose border border-rose-200/80 flex items-center justify-center shadow-2xs"
              aria-label="Call Truly Derma"
              title="Call Truly Derma"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
            </a>

            <a
              href={`https://wa.me/${clinicContact.whatsappNumber || "918076926982"}?text=${encodeURIComponent(
                "Hello Truly Derma, I would like to enquire about your treatments."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-1 rounded-full"
              aria-label="WhatsApp Truly Derma"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:bg-rose-50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* ===================================================================
              DESKTOP MEGA DROPDOWN (RESPONSIVE, BALANCED, ZERO OVERFLOW)
              =================================================================== */}
          {activeDropdown === "treatments" && (
            <div
              className="absolute top-full left-0 right-0 pt-2.5 z-50 pointer-events-auto animate-fade-in"
              onMouseEnter={() => handleMouseEnter("treatments")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{ backgroundColor: "#ffffff", opacity: 1 }}
                className="w-full max-w-[1140px] mx-auto bg-white rounded-3xl shadow-[0_25px_70px_rgba(43,19,61,0.25)] border border-rose-200/90 p-6 sm:p-7 relative z-50"
              >
                {/* 4 Category Columns */}
                <div className="grid grid-cols-4 gap-6">
                  {/* Column 1: Skin */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-brand-rose">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <Link
                          href="/treatments?category=skin"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold tracking-wider uppercase text-charcoal-900 hover:text-brand-rose transition-colors"
                        >
                          Skin
                        </Link>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-rose-50 text-brand-rose border border-rose-100">
                        7 Treatments
                      </span>
                    </div>

                    <div className="space-y-1">
                      {skinCategory?.treatments.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/treatments/${t.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="group/item flex items-center justify-between p-1.5 px-2 rounded-xl hover:bg-rose-50/80 transition-all duration-200"
                        >
                          <div className="min-w-0">
                            <span className="block text-xs font-medium text-charcoal-800 group-hover/item:text-brand-rose group-hover/item:translate-x-0.5 transition-all truncate">
                              {t.name}
                            </span>
                            <span className="block text-[10px] text-charcoal-400 font-light truncate">
                              {t.tag}
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-blush-400 group-hover/item:text-brand-rose group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100 shrink-0 ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Hair */}
                  <div className="space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-rose-100">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-brand-rose">
                            <ShieldCheck className="w-3 h-3" />
                          </div>
                          <Link
                            href="/treatments?category=hair"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-bold tracking-wider uppercase text-charcoal-900 hover:text-brand-rose transition-colors"
                          >
                            Hair
                          </Link>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-rose-50 text-brand-rose border border-rose-100">
                          4 Treatments
                        </span>
                      </div>

                      <div className="space-y-1 mt-3">
                        {hairCategory?.treatments.map((t) => (
                          <Link
                            key={t.slug}
                            href={`/treatments/${t.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item flex items-center justify-between p-1.5 px-2 rounded-xl hover:bg-rose-50/80 transition-all duration-200"
                          >
                            <div className="min-w-0">
                              <span className="block text-xs font-medium text-charcoal-800 group-hover/item:text-brand-rose group-hover/item:translate-x-0.5 transition-all truncate">
                                {t.name}
                              </span>
                              <span className="block text-[10px] text-charcoal-400 font-light truncate">
                                {t.tag}
                              </span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-blush-400 group-hover/item:text-brand-rose group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100 shrink-0 ml-1" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Trichology Tip Card */}
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/70 to-pink-50/40 border border-rose-100/80 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-rose block">
                        Clinical Trichology
                      </span>
                      <p className="text-[11px] text-charcoal-600 font-light leading-snug mt-1">
                        PRP & FUE restoration designed to stop shedding and restore natural hair density.
                      </p>
                    </div>
                  </div>

                  {/* Column 3: Fat Loss (Visual Feature Card) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-brand-rose">
                          <Flame className="w-3 h-3" />
                        </div>
                        <Link
                          href="/treatments/fat-loss"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold tracking-wider uppercase text-charcoal-900 hover:text-brand-rose transition-colors"
                        >
                          Fat Loss
                        </Link>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-rose-50 text-brand-rose border border-rose-100">
                        1 Treatment
                      </span>
                    </div>

                    <Link
                      href="/treatments/fat-loss"
                      onClick={() => setActiveDropdown(null)}
                      className="group/card block bg-[#FFF6F8] hover:bg-[#FCECEF] rounded-2xl p-3 border border-rose-200/70 transition-all duration-200 shadow-2xs hover:shadow-md"
                    >
                      <div className="relative h-28 rounded-xl overflow-hidden bg-rose-100/60 mb-2.5">
                        <img
                          src="/images/treatments/fat-loss.png"
                          alt="Non-Surgical Fat Loss"
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[9.5px] font-bold uppercase tracking-wider text-brand-rose shadow-2xs">
                          Zero Surgery
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-charcoal-900 group-hover/card:text-brand-rose transition-colors leading-tight">
                        Non-Surgical Fat Loss & Contouring
                      </h4>
                      <p className="text-[11px] text-charcoal-600 font-light leading-snug mt-1 line-clamp-2">
                        Cryolipolysis & ultrasound cavitation destroying stubborn fat deposits with no incisions.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-brand-rose">
                        <span>View Inner Page</span>
                        <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>

                  {/* Column 4: Laser Treatment (Visual Feature Card) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-brand-rose">
                          <Zap className="w-3 h-3" />
                        </div>
                        <Link
                          href="/treatments/laser-toning"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold tracking-wider uppercase text-charcoal-900 hover:text-brand-rose transition-colors"
                        >
                          Laser Treatment
                        </Link>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-rose-50 text-brand-rose border border-rose-100">
                        1 Treatment
                      </span>
                    </div>

                    <Link
                      href="/treatments/laser-toning"
                      onClick={() => setActiveDropdown(null)}
                      className="group/card block bg-[#FFF6F8] hover:bg-[#FCECEF] rounded-2xl p-3 border border-rose-200/70 transition-all duration-200 shadow-2xs hover:shadow-md"
                    >
                      <div className="relative h-28 rounded-xl overflow-hidden bg-rose-100/60 mb-2.5">
                        <img
                          src="/images/treatments/laser-toning.png"
                          alt="Laser Toning"
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[9.5px] font-bold uppercase tracking-wider text-brand-rose shadow-2xs">
                          US-FDA Approved
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-charcoal-900 group-hover/card:text-brand-rose transition-colors leading-tight">
                        Laser Toning (Q-Switch)
                      </h4>
                      <p className="text-[11px] text-charcoal-600 font-light leading-snug mt-1 line-clamp-2">
                        Sub-nanosecond pulses shatter deep melanin, clear stubborn melasma, and refine skin texture.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-brand-rose">
                        <span>View Inner Page</span>
                        <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Bottom Editorial Highlight Bar */}
                <div className="mt-5 pt-3.5 border-t border-rose-100 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-charcoal-800">
                      100% Non-Invasive & Doctor Supervised
                    </span>
                    <span className="text-rose-200 hidden sm:inline">•</span>
                    <span className="text-charcoal-500 hidden sm:inline">
                      Pitampura & Rajouri Garden, Delhi
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/treatments"
                      onClick={() => setActiveDropdown(null)}
                      className="font-bold text-brand-rose hover:text-rose-700 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View All Treatments Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ===================================================================
            MOBILE DRAWER MENU (RESPONSIVE ACCORDION WITH CARDS)
            =================================================================== */}
        {mobileMenuOpen && (
          <div
            style={{ backgroundColor: "#ffffff", opacity: 1 }}
            className="pointer-events-auto mt-2 xl:hidden bg-white border border-rose-100 rounded-2xl sm:rounded-3xl px-5 py-6 shadow-2xl animate-fade-in space-y-4 max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1 text-sm font-semibold text-charcoal-900">
              {siteNavigation?.headerNav?.map((navItem) => {
                if (navItem.isDropdown) {
                  return (
                    <div key={navItem.label} className="border-b border-rose-50 py-1.5">
                      <div className="flex items-center justify-between">
                        <Link
                          href={navItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1.5 text-base font-bold text-charcoal-900 hover:text-brand-rose"
                        >
                          {navItem.label}
                        </Link>
                        <button
                          onClick={() => toggleMobileAccordion("treatments")}
                          className="p-2 rounded-lg hover:bg-rose-50 text-charcoal-600 hover:text-brand-rose"
                          aria-label="Toggle treatments dropdown"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAccordion === "treatments"
                                ? "rotate-180 text-brand-rose"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileAccordion === "treatments" && (
                        <div className="space-y-4 pt-2 pb-1">
                          {treatmentCategories.map((cat) => (
                            <div
                              key={cat.id}
                              className="bg-rose-50/50 rounded-2xl p-3 border border-rose-100/70"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-brand-rose uppercase tracking-wider">
                                  {cat.name}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-white text-brand-rose border border-rose-100">
                                  {cat.badge}
                                </span>
                              </div>

                              <div className="space-y-1">
                                {cat.treatments.map((t) => (
                                  <Link
                                    key={t.slug}
                                    href={`/treatments/${t.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-2 rounded-xl bg-white/70 hover:bg-white text-xs text-charcoal-800 font-medium border border-rose-100/50"
                                  >
                                    <span>{t.name}</span>
                                    <ChevronRight className="w-3.5 h-3.5 text-blush-400" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}

                          <Link
                            href="/treatments"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-center py-2.5 rounded-xl bg-blush-600 text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
                          >
                            View All Treatments Directory
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={navItem.label}
                    href={navItem.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 border-b border-rose-50 flex items-center justify-between text-base font-semibold hover:text-brand-rose"
                  >
                    <span>{navItem.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${clinicContact.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Truly Derma, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 border border-emerald-200 shadow-2xs"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                WhatsApp Consult
              </a>
              <a
                href={`tel:${clinicContact.phoneClean}`}
                className="text-center text-xs font-semibold text-charcoal-700 py-1"
              >
                Direct Call: {clinicContact.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
