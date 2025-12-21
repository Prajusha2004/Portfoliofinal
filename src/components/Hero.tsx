import { Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Prajusha Dhar
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed animate-slide-up">
          Software Engineering Student & Developer
        </p>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
          Building full-stack applications with React, TypeScript, and modern web technologies
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up-delay-2">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://www.linkedin.com/in/prajushadhar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-slate-500/50 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Prajusha2004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-slate-500/50 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
