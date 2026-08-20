import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceSection } from "./components/ExperienceSection";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Honors } from "./components/Honors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_right,rgba(120,120,160,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,160,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
