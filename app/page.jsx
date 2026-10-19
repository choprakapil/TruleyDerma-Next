import HeroSection from "../components/sections/HeroSection";
import BrandPhilosophy from "../components/sections/BrandPhilosophy";
import SkinQuizWidget from "../components/sections/SkinQuizWidget";
import PinnedShowcase from "../components/sections/PinnedShowcase";
import BeforeAfterSlider from "../components/sections/BeforeAfterSlider";
import DoctorBio from "../components/sections/DoctorBio";
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
      <BrandPhilosophy />
      <PinnedShowcase />
      <BeforeAfterSlider />
      <DoctorBio />
      <SkinQuizWidget />
      <TestimonialsMarquee />
      <BlogSection />
      <CTABanner />
    </>
  );
}

