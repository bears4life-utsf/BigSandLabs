import { About } from "@/components/About";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowProjectsEvolve } from "@/components/HowProjectsEvolve";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Philosophy />
        <Projects />
        <HowProjectsEvolve />
        <About />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
