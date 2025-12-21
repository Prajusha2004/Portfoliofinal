import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg0)] cyber-grid scanlines noise">
      {/* Particles */}
      <Particles count={34} />

      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[1] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,27,76,0.16), transparent 60%)",
        }}
      />

      {/* Global neon glows (background only) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[rgba(255,27,76,0.14)] blur-3xl" />
        <div className="absolute top-[35%] -left-40 h-[520px] w-[520px] rounded-full bg-[rgba(255,27,76,0.10)] blur-3xl" />
        <div className="absolute top-[70%] -right-40 h-[520px] w-[520px] rounded-full bg-[rgba(255,27,76,0.08)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        <div className="mx-auto my-10 h-px w-[90%] max-w-6xl bg-[rgba(255,27,76,0.18)] shadow-[0_0_18px_rgba(255,27,76,0.15)]" />
        <About />

        <div className="mx-auto my-10 h-px w-[90%] max-w-6xl bg-[rgba(255,27,76,0.18)] shadow-[0_0_18px_rgba(255,27,76,0.15)]" />
        <Projects />

        <div className="mx-auto my-10 h-px w-[90%] max-w-6xl bg-[rgba(255,27,76,0.18)] shadow-[0_0_18px_rgba(255,27,76,0.15)]" />
        <Skills />

        <div className="mx-auto my-10 h-px w-[90%] max-w-6xl bg-[rgba(255,27,76,0.18)] shadow-[0_0_18px_rgba(255,27,76,0.15)]" />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
