import Header from './../../components/header';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutPreview from './sections/AboutPreview';
import TestimonialsSection from './sections/TestimonialsSection';
import BlogPreview from './sections/BlogPreview';
import CTASection from './sections/CTASection';
import Footer from '../../components/footer';
import StickyContactCTA from './sections/StickyContactCTA';

const HomePage = () => {
  return (
    <>
      
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
     
    </>
  );
};

export default HomePage;