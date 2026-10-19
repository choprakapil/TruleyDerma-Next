"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { allBlogs, pagesContent } from "../../data/siteContent";
import { SlideUp } from "../ui/MotionWrappers";
import { SingleBloom, FloralBranch } from "../ui/BotanicalMotifs";

export default function BlogSection() {
  const bContent = pagesContent?.home?.blogSection || {};
  const blogList = allBlogs.slice(0, 3);

  return (
    <section id="blogs" className="py-16 sm:py-20 bg-[#FDEBF0] text-charcoal-900 relative overflow-hidden border-b border-blush-200/70">
      {/* Decorative botanical art */}
      <div className="absolute -top-10 -right-10 opacity-15 pointer-events-none hidden sm:block">
        <FloralBranch className="w-52 h-52 text-blush-400" color="#C98294" />
      </div>
      <div className="absolute bottom-4 left-6 opacity-15 pointer-events-none">
        <SingleBloom className="w-24 h-24 text-blush-400" color="#C98294" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SlideUp yOffset={15} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blush-200 text-blush-600 text-xs font-semibold tracking-widest uppercase shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-blush-500" />
            <span>{bContent.pill || "Latest Blogs"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-charcoal-900 mt-2 tracking-tight">
            {bContent.title || "News From the Blog"}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/85 mt-2 font-light leading-relaxed">
            {bContent.subtitle || "Clinical insights, dermatological self-care protocols, and expert guidance directly from Dr. Megha Aggarwal."}
          </p>
        </SlideUp>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogList.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-blush-200 shadow-sm hover:shadow-xl hover:border-blush-400 transition-all duration-300 flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-rose-50">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-blush-700 border border-blush-200 shadow-2xs">
                  {blog.category}
                </div>

                {/* Date Tag */}
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-[11px] font-medium drop-shadow-sm">
                  <Calendar className="w-3 h-3 text-rose-200" />
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-blush-600 transition-colors leading-snug line-clamp-2">
                    <Link href={`/blogs/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600/90 font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer Read More Link */}
                <div className="pt-3 border-t border-blush-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-charcoal-500">
                    <Clock className="w-3.5 h-3.5 text-blush-400" />
                    <span>{blog.readTime}</span>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blush-600 hover:text-blush-700 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-blush-50 text-charcoal-800 text-xs font-semibold tracking-wider uppercase border border-blush-300 shadow-sm transition-all hover:scale-102"
          >
            <span>Explore All Journal Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-blush-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
