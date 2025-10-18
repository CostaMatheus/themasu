
import React, { useState, useEffect, useRef } from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { NavigationDots } from "@/components/NavigationDots";
import { useFadeIn } from "@/hooks/use-fade-in";

export const Home = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = ["hero", "projects", "contact"];

  useFadeIn();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Encontrar a seção mais visível
      let mostVisibleEntry: IntersectionObserverEntry | null = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleEntry = entry;
        }
      });

      if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
        setActiveSection(mostVisibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black overflow-x-hidden w-full relative">
      <div className="absolute top-[-107px] left-[calc(50%_-_640px)] md:left-[calc(50%_-_1284px)] w-[300px] md:w-[458px] h-[300px] md:h-[458px] bg-[#f90f4a] rounded-full blur-[150px] md:blur-[250px] opacity-50" />

      <div className="absolute top-[500px] md:top-[713px] left-[calc(50%_+_300px)] md:left-[calc(50%_+_833px)] w-[300px] md:w-[458px] h-[300px] md:h-[458px] bg-[#cee727] rounded-full blur-[150px] md:blur-[250px] opacity-50" />

      <div className="absolute top-[100px] md:top-[127px] left-[calc(50%_+_250px)] md:left-[calc(50%_+_779px)] w-[300px] md:w-[458px] h-[300px] md:h-[458px] bg-[#00d5e8] rounded-full blur-[150px] md:blur-[250px] opacity-50" />

      <HeaderSection onNavigate={handleNavigate} />
      
      <section
        id="hero"
        ref={(el) => (sectionsRef.current["hero"] = el)}
        className="min-h-screen"
      >
        <HeroSection />
      </section>

      <section
        id="projects"
        ref={(el) => (sectionsRef.current["projects"] = el)}
        className="min-h-screen"
      >
        <ProjectsSection />
      </section>

      <section
        id="contact"
        ref={(el) => (sectionsRef.current["contact"] = el)}
        className="min-h-screen"
      >
        <FooterSection />
      </section>

      <NavigationDots
        sections={sections}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
};
