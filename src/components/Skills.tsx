import React from "react";
import { Code, Layers, Wrench, Globe } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6" />,
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "VS Code", "npm", "Docker", "Firebase"],
  },
  {
    title: "Languages",
    icon: <Globe className="w-6 h-6" />,
    skills: ["English", "Hindi", "Bengali"],
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
          A comprehensive toolkit built through hands-on projects and continuous learning
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tilt-card border-neon bg-black/35 backdrop-blur-xl rounded-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[rgba(255,27,76,0.15)] text-[var(--red)] shadow-[0_0_16px_rgba(255,27,76,.4)] border border-[rgba(255,27,76,0.35)]">
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
                                 hover:bg-[rgba(255,27,76,0.16)]
                                 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            I'm always expanding my skill set and staying current with industry trends.
            Currently exploring advanced React patterns, performance optimization, and cloud deployment strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
