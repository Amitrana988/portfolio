import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">

<div className="fixed inset-0 -z-10">
  <img
    src="/images/bground.png"
    alt="background"
    className="w-full h-full object-cover opacity-40 pointer-events-none"
  />
</div>


      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />

    </main>
  );
}