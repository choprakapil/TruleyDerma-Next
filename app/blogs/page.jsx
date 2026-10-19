import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  User,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";
import { allBlogs, pagesContent, doctorProfile, clinicContact } from "../../data/siteContent";
import {
  WhatsAppIcon,
  AwardMedalIcon,
  SparklesIcon,
} from "../../components/ui/LuxuryIcons";
import { SingleBloom, FloralBranch } from "../../components/ui/BotanicalMotifs";

export const metadata = {
  title: pagesContent.blogsHub.meta.title,
  description: pagesContent.blogsHub.meta.description,
};

export default function BlogsPage() {
  const hub = pagesContent.blogsHub;
  const featuredBlog = allBlogs[0];
  const regularBlogs = allBlogs.slice(1);

  return (
    <main className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Ambient background soft glow */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===================================================================
            PAGE HERO HEADER
            =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <SingleBloom className="w-3.5 h-3.5" color="#C98294" />
            <span>{hub.hero.badge || "The Truly Derma Clinical Journal"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-900 tracking-tight leading-[1.2]">
            Evidence-Based Skin & Hair{" "}
            <span className="italic text-blush-600 font-medium">Medical Insights</span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700/85 font-light leading-relaxed max-w-2xl mx-auto">
            {hub.hero.subtitle ||
              "Authoritative dermatological advice, clinical breakthrough reviews, and procedural guides authored by Chief Dermatologist Dr. Megha Aggarwal."}
          </p>

          <div className="flex items-center justify-center gap-4 pt-1 text-xs text-charcoal-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Peer-Reviewed Clinical Data</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Authored by MD Dermatologists</span>
            </span>
          </div>
        </div>

        {/* ===================================================================
            FEATURED ARTICLE SPOTLIGHT
            =================================================================== */}
        {featuredBlog && (
          <div className="mb-14 sm:mb-20">
            <div className="rounded-3xl overflow-hidden bg-white border-2 border-blush-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Image Banner */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] overflow-hidden bg-rose-50 group">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-blush-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                      Featured Clinical Guide
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-charcoal-900 text-[11px] font-bold tracking-wider uppercase border border-blush-200">
                      {featuredBlog.category}
                    </span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-charcoal-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blush-500" />
                      <span>{featuredBlog.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blush-500" />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 hover:text-blush-600 transition-colors leading-tight">
                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-3 border-t border-blush-100">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-blush-200 shrink-0">
                      <img
                        src="/images/Doctor.png"
                        alt={doctorProfile.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-charcoal-900">{featuredBlog.author || doctorProfile.name}</p>
                      <p className="text-[11px] text-blush-600 font-medium">Chief Dermatologist, MD</p>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/blogs/${featuredBlog.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-102 transition-all"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            ALL CLINICAL ARTICLES GRID
            =================================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-blush-100 pb-4">
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              All Clinical Publications
            </h3>
            <span className="text-xs text-charcoal-500 font-medium">
              {allBlogs.length} Published Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden border border-blush-200 shadow-sm hover:shadow-2xl hover:border-blush-400 transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-56 overflow-hidden bg-rose-50">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-blush-700 border border-blush-200 shadow-2xs">
                    {blog.category}
                  </div>

                  <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-medium drop-shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-rose-200" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-blush-600 transition-colors leading-snug">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blush-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-charcoal-500">
                      <Clock className="w-3.5 h-3.5 text-blush-400" />
                      <span>{blog.readTime}</span>
                    </div>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blush-600 hover:text-blush-700 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ===================================================================
            JOURNAL CTA BOX
            =================================================================== */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blush-600 via-[#A45D71] to-blush-700 text-white text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-rose-100 text-xs font-semibold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Clinical Guidance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight">
            Have Questions About a Specific Skin or Hair Concern?
          </h2>

          <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl mx-auto font-light leading-relaxed">
            Consult Dr. Megha Aggarwal directly for digital dermatoscope assessment and a customized medical treatment plan.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-white text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-rose-50 transition-all shadow-md"
            >
              Book Clinic Appointment
            </Link>

            <a
              href={clinicContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/30 transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
