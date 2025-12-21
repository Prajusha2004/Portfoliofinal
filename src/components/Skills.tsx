import { Code, Layers, Wrench, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'Java'],
    color: 'blue',
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layers className="w-6 h-6" />,
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
    color: 'cyan',
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Docker', 'Firebase'],
    color: 'green',
  },
  {
    title: 'Languages',
    icon: <Globe className="w-6 h-6" />,
    skills: ['English', 'Hindi', 'Bengali'],
    color: 'orange',
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-600', border: 'border-blue-500', text: 'text-blue-400' },
    cyan: { bg: 'bg-cyan-600', border: 'border-cyan-500', text: 'text-cyan-400' },
    green: { bg: 'bg-green-600', border: 'border-green-500', text: 'text-green-400' },
    orange: { bg: 'bg-orange-600', border: 'border-orange-500', text: 'text-orange-400' },
  };
  return colorMap[color] || colorMap.blue;
};

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built through hands-on projects and continuous learning
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`bg-slate-800 rounded-lg border border-slate-700 hover:${colors.border} transition-all duration-300 overflow-hidden hover:transform hover:scale-105`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 bg-slate-900 ${colors.text} rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-600 transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always expanding my skill set and staying current with industry trends.
            Currently exploring advanced React patterns, performance optimization, and cloud deployment strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
