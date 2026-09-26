import HeroSection from "../components/sections/HeroSection";
import BrandPhilosophy from "../components/sections/BrandPhilosophy";
import SkinQuizWidget from "../components/sections/SkinQuizWidget";
import ServicesGallery from "../components/sections/ServicesGallery";
import PinnedShowcase from "../components/sections/PinnedShowcase";
import TechnologyShowcase from "../components/sections/TechnologyShowcase";
import BeforeAfterSlider from "../components/sections/BeforeAfterSlider";
import DoctorBio from "../components/sections/DoctorBio";
import TestimonialsMarquee from "../components/sections/TestimonialsMarquee";
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
      <ServicesGallery />
      <PinnedShowcase />
      <TechnologyShowcase />
      <BeforeAfterSlider />
      <DoctorBio />
      <SkinQuizWidget />
      <TestimonialsMarquee />
      <CTABanner />
    </>
  );
}
