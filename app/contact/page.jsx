"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
  Sparkles,
  Navigation,
  Car,
  CalendarCheck,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { clinicContact, doctorProfile, pagesContent, allTreatments } from "../../data/siteContent";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  AwardMedalIcon,
  SparklesIcon,
  CalendarIcon,
} from "../../components/ui/LuxuryIcons";
import { SingleBloom, FloralBranch } from "../../components/ui/BotanicalMotifs";

export default function ContactPage() {
  const contactData = pagesContent.contact;
  const branches = clinicContact.branches || [];
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: branches[0]?.name || "Pitampura Suite",
    service: allTreatments[0]?.name || "TD Glowtech 360°",
    preferredDate: "",
    message: "",
  });

  const branch = branches[selectedBranch] || branches[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sendViaWhatsApp) {
      const msg = `*Appointment Request — Truly Derma Clinic*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `🏥 *Preferred Suite:* ${formData.branch}\n` +
        `✨ *Treatment:* ${formData.service}\n` +
        `📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available"}\n` +
        `📝 *Notes:* ${formData.message || "General Dermatological Consultation"}\n\n` +
        `_Submitted via Truly Derma Contact Portal_`;

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/${clinicContact.whatsappNumber}?text=${encoded}`, "_blank");
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===================================================================
            PAGE HERO HEADER
            =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
            <span>{contactData.hero?.badge || "Connect With Truly Derma"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-900 tracking-tight leading-[1.2]">
            Visit Our Private <span className="italic text-blush-600 font-medium">Clinic Suites</span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700/85 font-light leading-relaxed max-w-2xl mx-auto">
            {contactData.hero?.subtitle ||
              "Experience private, dermatologist-supervised aesthetic care in Pitampura and Rajouri Garden, New Delhi. Schedule your consultation online or connect via WhatsApp concierge."}
          </p>

          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open Today: 10:30 AM – 7:30 PM (Mon – Sat)</span>
          </div>
        </div>

        {/* ===================================================================
            BRANCH SWITCHER TABS
            =================================================================== */}
        <div className="flex justify-center gap-3 mb-10">
          {branches.map((b, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedBranch(idx);
                setFormData((prev) => ({ ...prev, branch: b.name }));
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer border flex items-center gap-2 ${
                selectedBranch === idx
                  ? "bg-blush-600 text-white border-blush-600 shadow-md scale-102"
                  : "bg-white text-charcoal-700 hover:bg-blush-50 border-blush-200 shadow-2xs"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{b.name} ({b.city.split(",")[0]})</span>
            </button>
          ))}
        </div>

        {/* ===================================================================
            2-COLUMN GRID: DIRECT CONTACT & APPOINTMENT FORM
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: ACTIVE SUITE DETAILS & DIRECT LINES */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Branch Address Card */}
            {branch && (
              <div className="p-7 rounded-3xl bg-gradient-to-br from-[#FFF9FA] via-white to-[#FFF5F7] border-2 border-blush-200 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-blush-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-blush-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-charcoal-900 leading-none">{branch.city}</h3>
                      <p className="text-[11px] text-blush-600 font-medium mt-0.5">{branch.name}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-rose-50 text-blush-700 border border-blush-200">
                    Suite {selectedBranch + 1}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                  <p className="font-semibold text-charcoal-900">Clinic Address:</p>
                  <p className="leading-relaxed bg-white p-3.5 rounded-2xl border border-blush-100">
                    {branch.address}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-700 pt-1">
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blush-100">
                    <Navigation className="w-4 h-4 text-blush-600 shrink-0" />
                    <span><strong>Metro:</strong> {branch.metroStation || "Nearby"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blush-100">
                    <Car className="w-4 h-4 text-blush-600 shrink-0" />
                    <span><strong>Parking:</strong> {branch.parking || "Valet"}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={branch.mapEmbedUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href={`tel:${(branch.phone || clinicContact.phoneClean).replace(/\s+/g, "")}`}
                    className="flex-1 py-3 rounded-full bg-rose-50 hover:bg-blush-100 text-blush-800 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-blush-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Suite</span>
                  </a>
                </div>
              </div>
            )}

            {/* Direct Contact Lines Card */}
            <div className="p-7 rounded-3xl bg-white border border-blush-200 shadow-md space-y-4">
              <h4 className="font-serif font-bold text-base text-charcoal-900 border-b border-blush-100 pb-3">
                Patient Helpline & Concierge
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                {clinicContact.phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50/60 text-charcoal-700 hover:text-blush-600 transition-colors border border-transparent hover:border-blush-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-rose-50 text-blush-500 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{phone}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-blush-600">Line {idx + 1}</span>
                  </a>
                ))}

                <a
                  href={`mailto:${clinicContact.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-rose-50/60 text-charcoal-700 hover:text-blush-600 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-rose-50 text-blush-500 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>{clinicContact.email}</span>
                </a>

                <a
                  href={clinicContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">WhatsApp Priority Desk</p>
                      <p className="text-[11px] text-emerald-700">{clinicContact.whatsappDisplay}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Chat Now →</span>
                </a>
              </div>

              <div className="pt-2 border-t border-blush-100 flex items-center gap-3 text-xs text-charcoal-600">
                <Clock className="w-4 h-4 text-blush-400 shrink-0" />
                <span>{clinicContact.hours}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: APPOINTMENT RESERVATION FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border-2 border-blush-200 shadow-xl">
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-blush-600">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Your Slot</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  {contactData.bookingForm?.title || "Book Clinical Consultation"}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light">
                  {contactData.bookingForm?.subtitle || "Submit your details below and our patient coordination team will confirm your preferred timing within 1 hour."}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-[#F0FFF4] border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-emerald-950">Appointment Request Received</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong className="font-semibold">{formData.name}</strong>. Our front desk at Truly Derma ({formData.branch}) has logged your consultation request for <strong className="font-semibold">{formData.service}</strong>. We will confirm via call or WhatsApp shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Preferred Clinic Location *</label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all cursor-pointer"
                      >
                        {branches.map((b, i) => (
                          <option key={i} value={b.name}>{b.name} ({b.city})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Treatment of Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all cursor-pointer"
                      >
                        {allTreatments.map((t) => (
                          <option key={t.slug} value={t.name}>
                            {t.name} ({t.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-charcoal-800">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal-800">Dermal Concerns or Medical History (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your concerns, previous treatments, or preferred consultation timing..."
                      className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-rose-50/20 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-blush-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Send via WhatsApp Checkbox */}
                  <div className="flex items-center gap-2 pt-1 text-xs text-charcoal-700">
                    <input
                      type="checkbox"
                      id="sendWhatsApp"
                      checked={sendViaWhatsApp}
                      onChange={(e) => setSendViaWhatsApp(e.target.checked)}
                      className="w-4 h-4 rounded text-blush-600 focus:ring-blush-400 accent-blush-600 cursor-pointer"
                    />
                    <label htmlFor="sendWhatsApp" className="cursor-pointer select-none">
                      Also launch WhatsApp to connect with priority reception immediately
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-101 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-charcoal-500 pt-1">
                    🔒 Strict medical confidentiality guaranteed. Your personal information is never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
