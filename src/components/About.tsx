import { Code2, Lightbulb, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
            <p className="text-slate-400">
              Passionate about building scalable web applications with modern frameworks and best practices
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
            <p className="text-slate-400">
              Always exploring new technologies and improving my craft through real-world projects
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Focus</h3>
            <p className="text-slate-400">
              Seeking frontend or full-stack internship opportunities to contribute and grow
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm an engineering student building scalable full-stack apps using React and TypeScript. My work focuses on clean, maintainable code and real-world problem solving. Featured projects live on GitHub and demonstrate my ability to ship production-ready features.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute to meaningful projects and collaborate with talented teams. Check out my{' '}
            <a
              href="https://www.linkedin.com/in/prajushadhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              LinkedIn profile
            </a>
            {' '}to learn more about my background and experience.
          </p>
        </div>
      </div>
    </section>
  );
}
