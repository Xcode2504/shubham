import HeroSection from '@/components/hero-section';
import FeaturedCategories from '@/components/featured-categories';
import TestimonialsSection from '@/components/testimonials-section';
import GalleryCarousel from '@/components/gallery-carousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <GalleryCarousel />
      <TestimonialsSection />
    </>
  );
}