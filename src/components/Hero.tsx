import { Github, Linkedin, ArrowRight } from "lucide-react";
import DeviceFrame from "./DeviceFrame";
import profileImg from "../assets/profile.jpg";

const chips = ["React", "TypeScript", "Tailwind", "Node.js", "Firebase", "Vite"];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* glow */}
      <div className="absolute left-1/2 top-[18%] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[rgba(255,27,76,0.14)] blur-3xl" />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: text */}
        <div className="text-center lg:text-left">
          <p className="text-[var(--red)]/80 tracking-[0.25em] text-xs font-semibold mb-4">
            CYBER PORTFOLIO
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight neon-red">
            Prajusha <span className="text-[var(--red)]">Dhar</span>
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-white/75">
            Software Engineering Student & Developer
          </p>

          <p className="mt-4 text-white/55 max-w-xl">
            Building full-stack applications with React, TypeScript, and modern web technologies — with a bias for shipping.
          </p>

          {/* chips */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
            {chips.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full text-sm bg-[rgba(255,27,76,0.10)] text-[var(--red)]
                           border border-[rgba(255,27,76,0.30)]
                           shadow-[0_0_10px_rgba(255,27,76,.16)]"
              >
                {c}
              </span>
            ))}
          </div>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="group btn-cyber spark px-7 py-4 rounded-xl font-semibold text-white inline-flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://www.linkedin.com/in/prajushadhar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border border-white/15 bg-white/5 text-white/85 font-semibold
                         hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5 text-[var(--red)]" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Prajusha2004"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border border-white/15 bg-white/5 text-white/85 font-semibold
                         hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5 text-[var(--red)]" />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT: device frame */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xl">
            <DeviceFrame title="Prajusha.exe">
              <div className="grid sm:grid-cols-[160px_1fr] items-start gap-5 p-4 sm:p-5">
                {/* photo (FIXED HEIGHT so it can't stretch) */}
                <div className="relative h-[220px] rounded-2xl overflow-hidden border border-[rgba(255,27,76,0.28)] bg-black self-start">
                  <img
                    src={profileImg}
                    alt="Prajusha"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_200px_at_30%_0%,rgba(255,27,76,0.18),transparent_70%)]" />
                </div>

                {/* SYSTEM STATUS TERMINAL */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-[rgba(255,27,76,0.25)] bg-black/45 p-4 shadow-[0_0_30px_rgba(255,27,76,0.2)]">
                    <p className="text-sm text-white/50 mb-2 tracking-wide">
                      SYSTEM STATUS
                    </p>

                    <div className="font-mono text-sm space-y-2">
                      <p className="text-[var(--red)]">▸ boot.sequence.init()</p>

                      <p className="text-white/70">
                        ▸ loading mindset<span className="animate-pulse">...</span>
                      </p>

                      <p className="text-white/70">
                        ▸ status:{" "}
                        <span className="text-white font-semibold">
                          building, learning, shipping 🚀
                        </span>
                      </p>

                      <p className="text-white/50">
                        ▸ last_commit:{" "}
                        <span className="text-[var(--red)]">just now</span>
                      </p>
                    </div>
                  </div>

                  {/* Tip */}
                  <div>
                    <div className="h-px bg-[rgba(255,27,76,0.16)] mb-3" />
                    <p className="text-xs text-white/55">
                      Tip: hover & move mouse — the “device” tilts in 3D.
                    </p>
                  </div>
                </div>
              </div>
            </DeviceFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
