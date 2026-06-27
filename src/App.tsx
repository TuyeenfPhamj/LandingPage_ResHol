import { AboutSection } from "./components/AboutSection";
import { ContactCTA } from "./components/ContactCTA";
import { ExperienceGallery } from "./components/ExperienceGallery";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceGallery />
        <WhyChooseUsSection />
        <ProcessTimeline />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
