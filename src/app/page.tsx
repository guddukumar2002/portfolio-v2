"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import TechMarquee from "@/components/TechMarquee";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import WhyHireMe from "@/sections/WhyHireMe";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <Stats />
          <TechMarquee />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <WhyHireMe />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
