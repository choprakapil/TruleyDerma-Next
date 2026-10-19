"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppIcon, PhoneIcon } from "../ui/LuxuryIcons";
import { siteNavigation, clinicContact } from "../../data/siteContent";
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

  const treatmentsNav = siteNavigation?.headerNav?.find(
    (item) => item.label === "Treatments"
  );
  const categories = treatmentsNav?.categories || [];

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-1 shadow-[0_4px_20px_-4px_rgba(201,130,148,0.15)] border-b border-rose-100"
          : "bg-white/90 backdrop-blur-sm py-1 sm:py-1.5 border-b border-rose-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Official Logo */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <div
            className={`relative transition-all duration-300 flex items-center ${
              isScrolled ? "h-11 sm:h-12 md:h-14" : "h-14 sm:h-16 md:h-20"
            }`}
          >
            <img
              src="/logo.png"
              alt="Truly Derma Clinic & Academy"
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
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("treatments")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={navItem.href}
                    className="flex items-center gap-1.5 py-1 hover:text-brand-rose transition-colors cursor-pointer"
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

                  {activeDropdown === "treatments" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-3xl shadow-2xl border border-rose-100 p-5 grid grid-cols-3 gap-4 animate-fade-in z-50">
                      {categories.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                          <Link
                            href={cat.href || "/treatments"}
                            className="block px-2 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-rose border-b border-rose-100/80 hover:underline"
                          >
                            {cat.title}
                          </Link>
                          <div className="space-y-1">
                            {cat.items.map((item) => (
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
                      ))}
                    </div>
                  )}
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

        {/* Right Action Section */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Official Phone Direct Dial */}
          <a
            href={`tel:${clinicContact.phoneClean || "+917591055566"}`}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-charcoal-800 hover:text-brand-rose transition-colors rounded-full bg-rose-50/80 hover:bg-rose-100/80 border border-rose-200/70 shadow-2xs"
            title="Call Truly Derma Helpline"
          >
            <PhoneIcon className="w-4 h-4 shrink-0" />
            <span className="hidden md:inline">{clinicContact.phoneFormatted || clinicContact.phone || "+91 75910 55566"}</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${clinicContact.whatsappNumber || "918076926982"}?text=${encodeURIComponent(
              "Hello Truly Derma, I would like to reserve an appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:scale-105 transition-transform"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Contact"
          >
            <WhatsAppIcon className="w-7 h-7" />
          </a>

          {/* Book Appointment CTA Button */}
          <button
            onClick={() => openBooking()}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-rose via-[#DFA6B4] to-brand-rose hover:opacity-95 text-white text-xs font-semibold tracking-wider uppercase active:scale-95 hover:-translate-y-0.5 transition-all shadow-[0_4px_16px_rgb(201,130,148,0.3)] flex items-center gap-1.5 border border-white/40 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>RESERVE VISIT</span>
          </button>
        </div>

        {/* Mobile Controls (Phone + Book + Hamburger Toggle) */}
        <div className="flex xl:hidden items-center gap-2">
          {/* Mobile Direct Phone Button */}
          <a
            href={`tel:${clinicContact.phoneClean || "+917591055566"}`}
            className="sm:hidden p-2 rounded-full bg-rose-50 text-brand-rose border border-rose-200/80 flex items-center justify-center shadow-2xs"
            aria-label="Call Truly Derma"
            title="Call Truly Derma"
          >
            <PhoneIcon className="w-4 h-4 shrink-0" />
          </a>

          {/* Mobile WhatsApp Quick Icon */}
          <a
            href={`https://wa.me/${clinicContact.whatsappNumber || "918076926982"}?text=${encodeURIComponent(
              "Hello Truly Derma, I would like to reserve an appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-1 rounded-full"
            aria-label="WhatsApp Truly Derma"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>

          <button
            onClick={() => openBooking()}
            className="px-3 py-1.5 rounded-full bg-brand-rose text-white text-[11px] font-semibold tracking-wider uppercase sm:hidden shadow-sm cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal-800 hover:bg-rose-50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Dynamic Accordion Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-rose-100 px-6 py-6 shadow-2xl animate-fade-in space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-charcoal-900">
            {siteNavigation?.headerNav?.map((navItem) => {
              if (navItem.isDropdown) {
                return (
                  <div key={navItem.label} className="border-b border-rose-50 py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={navItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2 hover:text-brand-rose"
                      >
                        {navItem.label}
                      </Link>
                      <button
                        onClick={() => toggleMobileAccordion("treatments")}
                        className="p-2 hover:text-brand-rose"
                        aria-label="Toggle treatments dropdown"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileAccordion === "treatments"
                              ? "rotate-180 text-brand-rose"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileAccordion === "treatments" && (
                      <div className="pl-3 pb-2 space-y-3 pt-1">
                        {categories.map((cat, cIdx) => (
                          <div key={cIdx} className="space-y-1">
                            <span className="text-[11px] font-bold text-brand-rose uppercase tracking-wider block">
                              {cat.title}
                            </span>
                            {cat.items.map((t) => (
                              <Link
                                key={t.slug}
                                href={`/treatments/${t.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-xs text-charcoal-600 hover:text-brand-rose font-medium"
                              >
                                • {t.name}
                              </Link>
                            ))}
                          </div>
                        ))}
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
                  className="py-2.5 border-b border-rose-50 flex items-center justify-between hover:text-brand-rose"
                >
                  <span>{navItem.label}</span>
                </Link>
              );
            })}
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
              href={`https://wa.me/${clinicContact.whatsappNumber}?text=${encodeURIComponent(
                "Hello Truly Derma, I would like to book an appointment."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-rose-50 text-charcoal-900 text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 border border-rose-200"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              WhatsApp Clinic Desk
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
    </header>
  );
}
