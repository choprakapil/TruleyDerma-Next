import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { blogs } from "../../../data/blogs";
import { clinicContact, doctorProfile } from "../../../data/siteContent";
import {
  WhatsAppIcon,
  PhoneIcon,
  AwardMedalIcon,
  CalendarIcon,
  SparklesIcon,
} from "../../../components/ui/LuxuryIcons";

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Article Not Found | Truly Derma Clinic" };
  return {
    title: `${blog.title} | Truly Derma Clinical Journal`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== slug);

  return (
    <article className="min-h-screen bg-[#FFFDFD] text-charcoal-900 pt-28 sm:pt-36 pb-20 relative overflow-hidden font-sans">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFF0F4]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200 text-xs font-semibold text-charcoal-700 hover:text-blush-600 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Clinical Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1 rounded-full bg-rose-100 text-blush-700 text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Medically Reviewed</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-charcoal-950 leading-[1.2] tracking-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-600 pt-2 border-b border-blush-100 pb-5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-blush-200">
                <img
                  src="/images/Doctor.png"
                  alt={blog.author}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-semibold text-charcoal-900">{blog.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blush-500" />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blush-500" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Banner */}
        <div className="rounded-3xl overflow-hidden mb-10 h-72 sm:h-96 lg:h-[420px] shadow-xl border-2 border-blush-200 bg-rose-50 relative group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Executive Summary / Key Takeaways Box */}
        <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-rose-50/80 via-[#FFF8FA] to-blush-50/70 border border-blush-200 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blush-700">
            <Sparkles className="w-4 h-4 text-blush-600" />
            <span>Clinical Summary & Key Takeaways</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-light">
            {blog.excerpt}
          </p>
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-charcoal-800 font-light leading-relaxed text-sm sm:text-base">
          {blog.content.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 pt-6 pb-2 border-b border-rose-100 leading-snug"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "subheading") {
              return (
                <h3
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-blush-700 pt-3"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <p key={idx} className="leading-relaxed text-charcoal-700">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Medically Reviewed Author Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-50 via-[#FFF4F7] to-blush-50 border-2 border-blush-200/90 shadow-md flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-blush-300 shadow-md bg-white">
            <img
              src="/images/Doctor.png"
              alt="Dr. Megha Aggarwal"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-widest uppercase text-blush-600">
              <Award className="w-3.5 h-3.5" />
              <span>Gold Medalist • MD Dermatology</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Authored & Reviewed by {doctorProfile.name}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              Dr. Megha is the Chief Aesthetician and Founder of Truly Derma Clinic & Academy. With 10+ years of practice, she specializes in advanced lasers, injectables, and evidence-based trichology in Pitampura & Rajouri Garden, Delhi.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
              <a
                href={clinicContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-blush-600 hover:bg-blush-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                Book In-Clinic Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-10 border-t border-blush-200">
            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
              More Clinical Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.slice(0, 2).map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="group bg-white p-5 rounded-3xl border border-blush-200 hover:border-blush-400 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10.5px] font-bold text-blush-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-blush-600 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-600 line-clamp-2 font-light">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-blush-100 flex items-center justify-between text-xs font-semibold text-blush-600 mt-3">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
