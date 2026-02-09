import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import ResultsSection from "@/components/sections/ResultsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MethodologySection from "@/components/sections/MethodologySection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TargetAudienceSection />
      <PainPointsSection />
      <AuthoritySection />
      <ResultsSection />
      <TestimonialsSection />
      <MethodologySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
