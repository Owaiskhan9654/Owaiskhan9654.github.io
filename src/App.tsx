import { MotionConfig } from "motion/react";
import { Aurora } from "./components/Aurora";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceSection } from "./components/ExperienceSection";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Mentorship } from "./components/Mentorship";
import { Gallery } from "./components/Gallery";
import { Honors } from "./components/Honors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Aurora />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Publications />
        <Mentorship />
        <Gallery />
        <Honors />
        <Contact />
      </main>
      <Footer />
      </div>
    </MotionConfig>
  );
}
