import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <main>
        <Hero />
        <Stats />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
