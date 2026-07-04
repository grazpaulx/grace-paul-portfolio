import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import TraceDivider from "@/components/TraceDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TraceDivider />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <TraceDivider />
      <Gallery />
      <Footer />
    </>
  );
}
