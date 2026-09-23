import { Code, Layers, Database, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  meter: number;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Python",
    ],
    meter: 88,
  },

  {
    title: "Backend & Frameworks",
    icon: <Layers className="w-6 h-6" />,
    skills: [
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "REST APIs",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    meter: 84,
  },

  {
    title: "Database & Development",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "MySQL",
      "DBMS",
      "SQL",
      "Git",
      "GitHub",
      "Maven",
      "PostgreSQL (Learning)",
    ],
    meter: 82,
  },

  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "VS Code",
      "NetBeans",
      "Git",
      "GitHub",
      "npm",
      "Express.js (Learning)",
      "Firebase",
    ],
    meter: 80,
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold neon-red mb-4 text-center">
          Skills &amp; Technologies
        </h2>

        <p className="text-white/55 text-center mb-12 max-w-2xl mx-auto">
          A technical skill set developed through hands-on projects,
          problem-solving, and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tilt-card border-neon bg-black/35 backdrop-blur-xl rounded-2xl overflow-hidden
                         group relative transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,27,76,0.22)]"
            >
              {/* Hover highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_20%_0%,rgba(255,27,76,0.16),transparent_65%)]" />

                <div
                  className="absolute -inset-20 rotate-12 opacity-[0.14]
                             bg-[linear-gradient(90deg,transparent,rgba(255,27,76,0.45),transparent)]
                             animate-[shine_3.2s_linear_infinite]"
                />
              </div>

              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center
                               bg-[rgba(255,27,76,0.15)] text-[var(--red)]
                               shadow-[0_0_16px_rgba(255,27,76,.4)]
                               border border-[rgba(255,27,76,0.35)]
                               transition-all duration-300
                               group-hover:shadow-[0_0_22px_rgba(255,27,76,.55)]
                               group-hover:bg-[rgba(255,27,76,0.18)]"
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg text-sm font-medium
                                 bg-[rgba(255,27,76,0.10)] text-[var(--red)]
                                 border border-[rgba(255,27,76,0.30)]
                                 shadow-[0_0_10px_rgba(255,27,76,.18)]
                                 transition-all duration-300
                                 hover:bg-[rgba(255,27,76,0.16)]
                                 hover:shadow-[0_0_16px_rgba(255,27,76,.26)]
                                 hover:-translate-y-[1px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="h-1.5 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[rgba(255,27,76,0.7)] shadow-[0_0_18px_rgba(255,27,76,.35)]"
                      style={{ width: `${category.meter}%` }}
                    />
                  </div>

                  <p className="mt-2 text-xs text-white/45 font-mono">
                    signal:{" "}
                    <span className="text-[var(--red)]">
                      {category.meter}%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            I’m continuously strengthening my Java and full-stack development
            skills while expanding my knowledge of backend technologies,
            databases, and modern web development practices.
          </p>
        </div>
      </div>

      {/* Shimmer keyframes */}
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-30%);
            }

            100% {
              transform: translateX(30%);
            }
          }
        `}
      </style>
    </section>
  );
}