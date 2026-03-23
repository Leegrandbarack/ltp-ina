import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FilieresPreview } from '@/components/home/FilieresPreview';
import { NewsSection } from '@/components/home/NewsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FilieresPreview />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
