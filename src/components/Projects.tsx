import { Github, ExternalLink } from "lucide-react";

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
    name: "Customer Reviews Clustering",
    description:
      "NLP-powered system that transforms customer feedback into actionable insights using text preprocessing, TF-IDF vectorization, and clustering algorithms.",
    purpose:
      "Grouping similar customer opinions to identify trends and patterns in product feedback.",
    techStack: [
      "Python",
      "NLP",
      "TF-IDF",
      "K-Means",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    githubUrl:
      "https://github.com/Prajusha2004/customer_reviews_clustering",
    learnings:
      "Implemented text preprocessing, feature extraction, TF-IDF vectorization, and unsupervised learning using K-Means clustering. Gained experience in processing unstructured text data and extracting meaningful patterns from customer feedback.",
  },

  {
    name: "TaskFlow",
    description:
      "Full-stack task management application built with Spring Boot and React, featuring secure authentication and personalized task management.",
    purpose:
      "Helping users organize, track, and manage their tasks with priorities, statuses, and due dates.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "React",
      "React Router",
      "Axios",
      "MySQL",
      "Maven",
    ],
    githubUrl:
      "https://github.com/Prajusha2004/taskflow",
    learnings:
      "Built RESTful APIs using Spring Boot and implemented JWT-based authentication with Spring Security and BCrypt. Worked with JPA/Hibernate for relational data modeling, CRUD operations, validation, exception handling, and integration of a React frontend with a secured backend.",
  },

  {
    name: "Sales ETL Dashboard",
    description:
      "Java desktop application that extracts, cleans, transforms, and analyzes sales data from CSV files through an ETL pipeline.",
    purpose:
      "Converting raw sales data into structured revenue insights by region and product.",
    techStack: [
      "Java",
      "Java Swing",
      "File I/O",
      "Java Streams",
      "CSV",
      "ETL",
    ],
    githubUrl:
      "https://github.com/Prajusha2004/sales-etl-dashboard",
    learnings:
      "Implemented an ETL workflow using core Java, handled missing and invalid records, logged skipped data, aggregated revenue using Java Streams, built a Swing-based interface, and implemented CSV report export.",
  },

  {
    name: "AuraSafe",
    description:
      "AI-powered personal safety platform designed to provide emergency assistance and location-based safety features.",
    purpose:
      "Helping users access emergency assistance and safety tools through a responsive web application.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Geolocation",
      "Firebase",
    ],
    githubUrl:
      "https://github.com/Prajusha2004/AuraSafe",
    learnings:
      "Developed a responsive safety-focused web application and worked with geolocation, real-time workflows, interactive interfaces, and user-centered features for solving real-world safety problems.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold neon-red mb-4 text-center">
          Featured Projects
        </h2>

        <p className="text-white/55 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my development skills and
          problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="tilt-card border-neon bg-black/35 backdrop-blur-xl rounded-2xl overflow-hidden transition"
            >
              <div className="p-7">
                <div className="flex items-start justify-between mb-5 gap-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[rgba(255,27,76,0.12)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_14px_rgba(255,27,76,.25)] hover:bg-[rgba(255,27,76,0.18)] transition"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[rgba(255,27,76,0.12)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_14px_rgba(255,27,76,.25)] hover:bg-[rgba(255,27,76,0.18)] transition"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-white/60 mb-3 italic">
                  {project.purpose}
                </p>

                <p className="text-white/75 mb-5">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/55 mb-2">
                    Tech Stack:
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm bg-[rgba(255,27,76,0.12)] text-[var(--red)] border border-[rgba(255,27,76,0.35)] shadow-[0_0_10px_rgba(255,27,76,.18)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[rgba(255,27,76,0.18)]">
                  <h4 className="text-sm font-semibold text-white/55 mb-2">
                    Key Learnings:
                  </h4>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.learnings}
                  </p>
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
            className="btn-cyber inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}