
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ToolPreviewSection from "@/components/home/ToolPreviewSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
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

export default Home;
