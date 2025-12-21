import { Github, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  purpose: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  learnings: string;
}

const projects: Project[] = [
  {
    name: 'Customer Reviews Clustering',
    description: 'NLP-powered system that transforms customer feedback into actionable insights using machine learning and clustering algorithms',
    purpose: 'Grouping similar customer opinions to identify trends and patterns in product feedback',
    techStack: ['Python', 'NLP', 'Machine Learning', 'K-Means', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/Prajusha2004/customer_reviews_clustering',
    learnings: 'Implemented data cleaning, text preprocessing, vectorization techniques, and unsupervised learning algorithms. Gained experience with NLP pipelines and extracting meaningful patterns from unstructured data',
  },
  {
    name: 'CareerCraft',
    description: 'A comprehensive career development platform designed to help users navigate their professional journey',
    purpose: 'Empowering individuals with tools and resources for career planning and skill development',
    techStack: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Prajusha2004/CareerCraft',
    learnings: 'Developed full-stack web application with user authentication, real-time database management, and responsive UI design. Learned about creating scalable career development features and user engagement strategies',
  },
  {
    name: 'Heart Diseases Prediction',
    description: 'Machine learning model that predicts the likelihood of heart diseases using medical data and advanced algorithms',
    purpose: 'Providing accurate risk assessment for early detection and prevention of heart diseases',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Medical Data Analysis'],
    githubUrl: 'https://github.com/Prajusha2004/Heart_Diseases',
    learnings: 'Implemented predictive modeling, data normalization, feature selection, and model evaluation. Gained expertise in healthcare data processing and building reliable ML prediction systems',
  },
  {
    name: 'AuraSafe',
    description: 'A comprehensive safety application with real-time features designed to enhance personal security',
    purpose: 'Empowering users with emergency assistance and location-based safety features',
    techStack: ['React', 'TypeScript', 'Node.js', 'GPS Integration', 'Real-time Communication'],
    githubUrl: 'https://github.com/Prajusha2004/AuraSafe',
    learnings: 'Implemented real-time location tracking, emergency contact systems, and privacy-focused development practices. Learned about geolocation APIs, instant messaging, and building secure safety-critical applications',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my development skills and problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 mb-3 italic">{project.purpose}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Learnings:</h4>
                  <p className="text-slate-300 text-sm">{project.learnings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Prajusha2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-slate-500/50 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
