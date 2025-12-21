import {FileText } from "lucide-react";
import resumePdf from "../assets/Prajusha_Dhar_Resume.pdf";

export default function Resume() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold neon-red mb-6">
          Resume
        </h2>

        <p className="text-white/65 max-w-2xl mx-auto mb-10">
          Frontend-focused software engineering student with hands-on experience
          in React, TypeScript, UI/UX design, and hackathon-based development.
        </p>

        {/* resume card */}
        <div className="mx-auto max-w-xl rounded-2xl border border-[rgba(255,27,76,0.25)]
                        bg-black/45 backdrop-blur-xl p-6
                        shadow-[0_0_40px_rgba(255,27,76,0.18)]">

          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[var(--red)]" />
            <p className="text-white font-semibold">
              Prajusha Dhar — Resume
            </p>
          </div>

          <p className="text-sm text-white/60 mb-6">
            B.Tech IT • React • TypeScript • UI/UX • Hackathon Organizer
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/15 bg-white/5
                         text-white font-semibold hover:bg-white/10 transition
                         inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5 text-[var(--red)]" />
              View Resume
            </a>

            <a
  href={resumePdf}
  download
  className="px-6 py-3 rounded-xl btn-cyber spark
             text-white font-semibold inline-flex items-center gap-2"
>
  Download PDF
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
