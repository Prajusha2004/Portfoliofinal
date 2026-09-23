import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Skip expensive mouse tracking on touch devices
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isCoarse) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;

      // Throttle with rAF for smoothness
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const Separator = () => (
    <div className="mx-auto my-10 h-px w-[90%] max-w-6xl bg-[rgba(255,27,76,0.18)] shadow-[0_0_18px_rgba(255,27,76,0.15)]" />
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg0)] cyber-grid scanlines noise">
      {/* Particles */}
      <Particles count={34} />

      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[1] h-[560px] w-[560px] rounded-full blur-3xl will-change-transform"
        style={{
          transform: "translate3d(50vw, 40vh, 0) translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,27,76,0.16), transparent 60%)",
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

        <Separator />
        <About />

        <Separator />
        <Projects />

        <Separator />
        <Resume />

        <Separator />
        <Skills />

        <Separator />
        <Contact />

        
      </div>
    </div>
  );
}

export default App;
