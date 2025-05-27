
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import FeatureShowcaseSection from '@/components/home/FeatureShowcaseSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import PricingPreviewSection from '@/components/home/PricingPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogHighlightsSection from '@/components/home/BlogHighlightsSection';
import MiniFAQSection from '@/components/home/MiniFAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <BlogHighlightsSection />
      <MiniFAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
