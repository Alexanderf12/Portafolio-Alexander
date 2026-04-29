import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DesignGallery from "./components/DesignGallery";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <DesignGallery />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
