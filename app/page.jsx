import HeroSection from "../components/sections/HeroSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import DoctorBio from "../components/sections/DoctorBio";
import PinnedShowcase from "../components/sections/PinnedShowcase";
import BeforeAfterSlider from "../components/sections/BeforeAfterSlider";
import TestimonialsMarquee from "../components/sections/TestimonialsMarquee";
import BlogSection from "../components/sections/BlogSection";
import CTABanner from "../components/sections/CTABanner";
import ButterflyScrollStory from "../components/butterfly/ButterflyScrollStory";

export default function HomePage() {
  return (
    <>
      {/* 3D Scroll-Driven Butterfly Companion */}
      <ButterflyScrollStory />

      {/* Homepage Sections */}
      <HeroSection />
      <WhyChooseUs />
      <DoctorBio />
      <PinnedShowcase />
      <BeforeAfterSlider />
      <TestimonialsMarquee />
      <BlogSection />
      <CTABanner />
    </>
  );
}

