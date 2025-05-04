
import React from "react";
import HeroSection from "@/components/PreLogin/HomePage/HeroSection";
import FeaturesSection from "@/components/PreLogin/HomePage/FeaturesSection";
import HowItWorksSection from "@/components/PreLogin/HomePage/HowItWorksSection";
import TestimonialSection from "@/components/PreLogin/HomePage/TestimonialSection";
import ToolPreviewSection from "@/components/PreLogin/HomePage/ToolPreviewSection";
import FAQSection from "@/components/PreLogin/HomePage/FAQSection";
import CTASection from "@/components/PreLogin/HomePage/CTASection";

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturesSection />
      <ToolPreviewSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
