"use client";

import { motion } from "framer-motion";
import { Hammer, Github, ExternalLink } from "lucide-react";
import { projects, links } from "@/data/content";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col border border-[#1C1C1C]/15 bg-[#EFECE4]/50 rounded-xl p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1A382B]">
          {project.status}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1C1C1C]">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[#1C1C1C]/75">{project.description}</p>
      {project.tech?.length > 0 && (
        <ul className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="border border-[#1C1C1C]/15 px-2.5 py-1 text-xs font-medium text-[#1C1C1C]/80 bg-white/50 rounded-md"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-5 pt-2 border-t border-[#1C1C1C]/10">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.15em] text-[#1C1C1C] transition-colors hover:text-[#1A382B]"
          >
            <Github size={15} strokeWidth={1.75} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.15em] text-[#1C1C1C] transition-colors hover:text-[#1A382B]"
          >
            <ExternalLink size={15} strokeWidth={1.75} /> Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const hasProjects = projects.items.length > 0;

  return (
    <section id="projects" className="w-full bg-[#F4F1EA] text-[#1C1C1C] py-20 px-6 md:px-12 lg:px-16 border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-xl space-y-4"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1C]/60">
            {projects.eyebrow}
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl tracking-tight leading-[1.05] text-[#1C1C1C]">
            PROJECTS
          </h2>
          <div className="w-10 h-[2px] bg-[#1A382B] my-2"></div>
        </motion.div>

        {hasProjects ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 border border-dashed border-[#1C1C1C]/25 px-8 py-14 sm:items-center sm:text-center rounded-2xl bg-[#EFECE4]/30"
          >
            <div className="p-3 rounded-full bg-[#1A382B]/10">
              <Hammer size={24} strokeWidth={1.5} className="text-[#1A382B]" />
            </div>
            <div className="max-w-md space-y-2">
              <p className="text-lg font-extrabold text-[#1C1C1C]">Currently building.</p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#1C1C1C]/75">
                {projects.heading} In the meantime, my code and learning progress are visible on GitHub.
              </p>
            </div>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1A382B] border-b-2 border-[#1A382B] pb-1 transition-all hover:opacity-80"
            >
              <Github size={15} strokeWidth={1.75} />
              Visit GitHub
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}