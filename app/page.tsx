import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <Partners />
      <Contact />
    </main>
  );
}
