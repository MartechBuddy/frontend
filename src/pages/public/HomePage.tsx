
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhyAiReadinessSection from '@/components/home/WhyAiReadinessSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhyAiReadinessSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default HomePage;
