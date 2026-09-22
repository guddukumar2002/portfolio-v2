"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import TechMarquee from "@/components/TechMarquee";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";
import ProjectModal from "@/components/ProjectModal";
import InteractiveTerminal from "@/components/InteractiveTerminal";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import EngineeringCapabilities from "@/sections/EngineeringCapabilities";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import WhyHireMe from "@/sections/WhyHireMe";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import { Project } from "@/data";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <CustomCursor />

      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main style={{ minWidth: 0, overflowX: "hidden" }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Stats />
        <TechMarquee />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <EngineeringCapabilities />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Education />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </main>

      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Modals & Tooling */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => {
          setIsCommandPaletteOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <InteractiveTerminal />
    </>
  );
}
