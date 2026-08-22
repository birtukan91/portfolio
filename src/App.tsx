import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

declare global {
  interface Window {
    __APP_MOUNTED__?: boolean;
  }
}

export default function App() {
  useEffect(() => {
    window.__APP_MOUNTED__ = true;
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
