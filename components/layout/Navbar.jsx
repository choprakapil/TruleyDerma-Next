"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppIcon, PhoneIcon, SparklesIcon, CalendarIcon } from "../ui/LuxuryIcons";
import { clinicInfo } from "../../data/clinicInfo";
import { useBooking } from "../providers/BookingContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter treatments for dropdowns
  const skinTreatments = [
    { name: "Mesotherapy", slug: "mesotherapy", tag: "Cellular Nutrition" },
    { name: "Hydra Facial", slug: "hydra-facial", tag: "Most Popular" },
    { name: "Medi Facial", slug: "medi-facial", tag: "Doctor Formulated" },
    { name: "Party Pop Facial", slug: "party-pop-facial", tag: "Instant Glow" },
    { name: "Photo Facial", slug: "photo-facial", tag: "Skin Clarity" },
    { name: "Laser Toning", slug: "laser-toning", tag: "Clinical Standard" },
    { name: "Under-Eye Dark Circle", slug: "under-eye-dark-circle", tag: "Eye Care" },
    { name: "TD Glowtech 360°", slug: "td-glowtech-360", tag: "Exclusive in India" },
    { name: "Dermapen 4™", slug: "dermapen-4", tag: "World Leader" }
  ];

  const hairTreatments = [
    { name: "Laser Hair Reduction", slug: "laser-hair-reduction", tag: "Gold Standard" },
    { name: "Hair Rejuvenation (GFC)", slug: "hair-rejuvenation", tag: "Trichology Specialist" },
    { name: "Hair Transplant", slug: "hair-transplant", tag: "FUE Precision" },
    { name: "Hair Detox Therapy", slug: "hair-detox-therapy", tag: "Scalp Health" }
  ];

  const laserTreatments = [
    { name: "Laser Toning (Q-Switch)", slug: "laser-toning", tag: "Hollywood Carbon" },
    { name: "Laser Hair Reduction", slug: "laser-hair-reduction", tag: "Triple-Wavelength" }
  ];

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-[0_4px_20px_-4px_rgba(201,130,148,0.15)] border-b border-rose-100"
          : "bg-white/90 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-rose-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Official Logo */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <div className={`relative transition-all duration-300 flex items-center ${isScrolled ? "h-11 sm:h-12 md:h-14" : "h-14 sm:h-16 md:h-20"}`}>
            <img
              src="/logo.png"
              alt="Truly Derma Clinic & Academy"
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation Tabs: Clean 5 Top-Level Links */}
        <nav className="hidden xl:flex items-center gap-7 text-[13px] font-semibold text-charcoal-800">
          {/* 1. Home */}
          <Link
            href="/"
            className="py-1 text-charcoal-950 hover:text-brand-rose transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:bg-brand-rose after:transition-transform after:duration-300 after:origin-left"
          >
            Home
          </Link>

          {/* 2. About Dr. Megha */}
          <a
            href="#doctor"
            className="py-1 hover:text-brand-rose transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:bg-brand-rose after:transition-transform after:duration-300 after:origin-left"
          >
            About Dr. Megha
          </a>

          {/* 3. Combined Treatments Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("treatments")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 py-1 hover:text-brand-rose transition-colors cursor-pointer">
              <span>Treatments</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "treatments" ? "rotate-180 text-brand-rose" : "text-charcoal-400"}`} />
            </button>

            {activeDropdown === "treatments" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-3xl shadow-2xl border border-rose-100 p-5 grid grid-cols-3 gap-4 animate-fade-in z-50">
                {/* Skin Column */}
                <div className="space-y-2">
                  <div className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-rose border-b border-rose-100/80">
                    Skin Rejuvenation
                  </div>
                  <div className="space-y-1">
                    {skinTreatments.slice(0, 5).map((item) => (
                      <Link
                        key={item.slug}
                        href={`/treatments/${item.slug}`}
                        className="block p-1.5 rounded-lg hover:bg-rose-50/70 text-xs text-charcoal-700 hover:text-brand-rose font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Hair Column */}
                <div className="space-y-2">
                  <div className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-rose border-b border-rose-100/80">
                    Hair & Scalp
                  </div>
                  <div className="space-y-1">
                    {hairTreatments.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/treatments/${item.slug}`}
                        className="block p-1.5 rounded-lg hover:bg-rose-50/70 text-xs text-charcoal-700 hover:text-brand-rose font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Laser & Sculpting Column */}
                <div className="space-y-2">
                  <div className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-rose border-b border-rose-100/80">
                    Laser & Sculpting
                  </div>
                  <div className="space-y-1">
                    {laserTreatments.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/treatments/${item.slug}`}
                        className="block p-1.5 rounded-lg hover:bg-rose-50/70 text-xs text-charcoal-700 hover:text-brand-rose font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/treatments/fat-loss"
                      className="block p-1.5 rounded-lg hover:bg-rose-50/70 text-xs text-charcoal-700 hover:text-brand-rose font-medium transition-colors"
                    >
                      Non-Invasive Fat Loss
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Clinic Suites */}
          <a
            href="#suites"
            className="py-1 hover:text-brand-rose transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:bg-brand-rose after:transition-transform after:duration-300 after:origin-left"
          >
            Suites
          </a>

          {/* 5. Patient Reviews */}
          <a
            href="#testimonials"
            className="py-1 hover:text-brand-rose transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:bg-brand-rose after:transition-transform after:duration-300 after:origin-left"
          >
            Reviews
          </a>
        </nav>

        {/* Right Action Section */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Official Phone Direct Dial */}
          <a
            href={`tel:${clinicInfo.contact.phone}`}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-charcoal-800 hover:text-brand-rose transition-colors rounded-full bg-rose-50/80 border border-rose-200/70"
          >
            <PhoneIcon className="w-4 h-4 shrink-0" />
            <span>{clinicInfo.contact.phone}</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent("Hello Truly Derma, I would like to reserve an appointment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:scale-105 transition-transform"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Contact"
          >
            <WhatsAppIcon className="w-8 h-8" />
          </a>

          {/* Book Appointment CTA Button */}
          <button
            onClick={() => openBooking()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-rose via-[#DFA6B4] to-brand-rose hover:opacity-95 text-white text-xs font-semibold tracking-wider uppercase active:scale-95 hover:-translate-y-0.5 transition-all shadow-[0_4px_16px_rgb(201,130,148,0.35)] flex items-center gap-2 border border-white/40 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>RESERVE VISIT</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => openBooking()}
            className="px-3 py-1.5 rounded-full bg-brand-rose text-white text-[11px] font-semibold tracking-wider uppercase sm:hidden shadow-sm"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal-800 hover:bg-rose-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Full Accordion Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-rose-100 px-6 py-6 shadow-2xl animate-fade-in space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-charcoal-900">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-rose-50 flex items-center justify-between hover:text-brand-rose"
            >
              <span>Home</span>
            </Link>

            {/* About us */}
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-rose-50 flex items-center justify-between hover:text-brand-rose"
            >
              <span>About Dr. Megha</span>
            </a>

            {/* Skin Accordion */}
            <div className="border-b border-rose-50 py-1">
              <button
                onClick={() => toggleMobileAccordion("skin")}
                className="w-full py-2 flex items-center justify-between text-left hover:text-brand-rose"
              >
                <span>Skin Treatments</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "skin" ? "rotate-180 text-brand-rose" : ""}`} />
              </button>
              {mobileAccordion === "skin" && (
                <div className="pl-3 pb-2 space-y-1.5 pt-1">
                  {skinTreatments.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-charcoal-600 hover:text-brand-rose font-medium"
                    >
                      • {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hair Accordion */}
            <div className="border-b border-rose-50 py-1">
              <button
                onClick={() => toggleMobileAccordion("hair")}
                className="w-full py-2 flex items-center justify-between text-left hover:text-brand-rose"
              >
                <span>Hair Treatments</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "hair" ? "rotate-180 text-brand-rose" : ""}`} />
              </button>
              {mobileAccordion === "hair" && (
                <div className="pl-3 pb-2 space-y-1.5 pt-1">
                  {hairTreatments.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-charcoal-600 hover:text-brand-rose font-medium"
                    >
                      • {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fat Loss */}
            <Link
              href="/treatments/fat-loss"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-rose-50 flex items-center justify-between hover:text-brand-rose"
            >
              <span>Fat Loss</span>
            </Link>

            {/* Laser Treatment Accordion */}
            <div className="border-b border-rose-50 py-1">
              <button
                onClick={() => toggleMobileAccordion("laser")}
                className="w-full py-2 flex items-center justify-between text-left hover:text-brand-rose"
              >
                <span>Laser Treatment</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "laser" ? "rotate-180 text-brand-rose" : ""}`} />
              </button>
              {mobileAccordion === "laser" && (
                <div className="pl-3 pb-2 space-y-1.5 pt-1">
                  {laserTreatments.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-charcoal-600 hover:text-brand-rose font-medium"
                    >
                      • {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Reviews */}
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-rose-50 flex items-center justify-between hover:text-brand-rose"
            >
              <span>Reviews & Outcomes</span>
            </a>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3.5 rounded-full bg-brand-rose text-white text-xs font-semibold tracking-wider uppercase text-center shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>RESERVE APPOINTMENT</span>
            </button>
            <a
              href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent("Hello Truly Derma, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-rose-50 text-charcoal-900 text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 border border-rose-200"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              WhatsApp Clinic Desk
            </a>
            <a
              href={`tel:${clinicInfo.contact.phone}`}
              className="text-center text-xs font-semibold text-charcoal-700 py-1"
            >
              Direct Call: {clinicInfo.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
