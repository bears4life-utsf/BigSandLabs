import { About } from "@/components/About";
import { Closing } from "@/components/Closing";
import { Experiments } from "@/components/Experiments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";

export default function Home() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <div className="site-frame">
        <Header />
        <main id="main">
          <Hero />
          <Philosophy />
          <Experiments />
          <About />
          <Closing />
        </main>
        <Footer />
      </div>
    </>
  );
}
