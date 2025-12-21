import { Code2, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold neon-red mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="tilt-card border-neon bg-black/35 backdrop-blur-xl p-7 rounded-2xl">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-[rgba(255,27,76,0.15)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_16px_rgba(255,27,76,.4)]">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Developer</h3>
            <p className="text-white/60 leading-relaxed">
              Passionate about building scalable web applications with modern frameworks and best practices
            </p>
          </div>

          {/* Card 2 */}
          <div className="tilt-card border-neon bg-black/35 backdrop-blur-xl p-7 rounded-2xl">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-[rgba(255,27,76,0.15)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_16px_rgba(255,27,76,.4)]">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Continuous Learner</h3>
            <p className="text-white/60 leading-relaxed">
              Always exploring new technologies and improving my craft through real-world projects
            </p>
          </div>

          {/* Card 3 */}
          <div className="tilt-card border-neon bg-black/35 backdrop-blur-xl p-7 rounded-2xl">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-[rgba(255,27,76,0.15)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_16px_rgba(255,27,76,.4)]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Career Focus</h3>
            <p className="text-white/60 leading-relaxed">
              Seeking frontend or full-stack internship opportunities to contribute and grow
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            I'm an engineering student building scalable full-stack apps using React and TypeScript. My work focuses on clean,
            maintainable code and real-world problem solving. Featured projects live on GitHub and demonstrate my ability to ship
            production-ready features.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute to meaningful projects and collaborate with talented
            teams. Check out my{" "}
            <a
              href="https://www.linkedin.com/in/prajushadhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--red)] underline decoration-[rgba(255,27,76,0.6)] hover:text-white transition-colors neon-red"
            >
              LinkedIn profile
            </a>{" "}
            to learn more about my background and experience.
          </p>
        </div>
      </div>
    </section>
  );
} 