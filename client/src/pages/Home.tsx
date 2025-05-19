import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Update active section
      const sections = [
        "home",
        "about",
        "services",
        "industries",
        "guarantee",
        "reviews",
        "contact",
      ];
      
      let current = "";
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.scrollY >= sectionTop - 200) {
            current = sectionId;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="font-body text-neutral-dark">
      <Navbar activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <GuaranteeSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      
      <FooterSection />
      
      <BackToTop visible={showBackToTop} />
    </div>
  );
}
