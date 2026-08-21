import { Aurora } from "./components/Aurora";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceSection } from "./components/ExperienceSection";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Gallery } from "./components/Gallery";
import { Honors } from "./components/Honors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Publications />
        <Gallery />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
