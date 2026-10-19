import Link from "next/link";
import { FileText, ArrowLeft, ShieldAlert, Award, Phone, Mail, CheckCircle2 } from "lucide-react";
import { pagesContent, clinicContact } from "../../data/siteContent";
import { SingleBloom } from "../../components/ui/BotanicalMotifs";
import { PhoneIcon } from "../../components/ui/LuxuryIcons";

export const metadata = {
  title: pagesContent.termsOfService.meta.title,
  description: pagesContent.termsOfService.meta.description,
};

export default function TermsOfServicePage() {
  const terms = pagesContent.termsOfService;

  return (
    <main className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Background soft glow */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200 text-xs font-semibold text-charcoal-700 hover:text-blush-600 transition-colors uppercase tracking-wider shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="bg-white p-8 sm:p-14 rounded-3xl border-2 border-blush-200 shadow-xl space-y-10">
          {/* Header */}
          <div className="border-b border-blush-100 pb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-blush-200 text-blush-600 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-blush-500" />
              <span>Clinical Practice Standards & Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-950 tracking-tight">
              {terms.title}
            </h1>
            <p className="text-xs text-charcoal-500 font-medium">
              Effective & Last Updated: <span className="text-charcoal-800 font-semibold">{terms.lastUpdated}</span>
            </p>
          </div>

          {/* Clinical Commitment Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-[#FFF7F9] border border-blush-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-blush-200 text-blush-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs text-charcoal-700">
              <p className="font-bold text-charcoal-900 text-sm">Medical Consultation & Treatment Agreement</p>
              <p className="leading-relaxed font-light">
                Truly Derma Clinic & Academy operates under medical board governance in New Delhi, India. All procedural treatments are performed following a comprehensive, personalized dermal assessment by Dr. Megha Aggarwal or our licensed aesthetic staff.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 pt-2">
            {terms.sections.map((sec, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFDFE] border border-blush-100/90 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-100 text-blush-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-charcoal-900">
                    {sec.heading}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed pl-8">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          {/* Patient Support Liaison */}
          <div className="p-7 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-blush-50 border border-blush-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-charcoal-900">Require Clarification on Clinical Policies?</h4>
              <p className="text-xs text-charcoal-600 font-light">
                Our front desk coordinators are happy to assist with any appointment or protocol questions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={`tel:${clinicContact.phoneClean}`}
                className="px-5 py-2.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Desk</span>
              </a>

              <a
                href={`mailto:${clinicContact.email}`}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-blush-200"
              >
                <span>Email Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
