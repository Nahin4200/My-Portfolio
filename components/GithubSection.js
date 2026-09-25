"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { githubSection, links } from "@/data/content";

export default function GithubSection() {
  return (
    <section id="github" className="border-b border-line">
      <div className="container-edit py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-8 border border-line p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div className="flex items-start gap-5">
            <Github size={32} strokeWidth={1.25} className="mt-1 shrink-0 text-teal" />
            <div>
              <p className="label-eyebrow mb-2">{githubSection.eyebrow}</p>
              <h2 className="mb-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
                {githubSection.heading}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                {githubSection.description}
              </p>
            </div>
          </div>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 border border-charcoal px-5 py-3 text-sm font-semibold uppercase tracking-widest2 text-charcoal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
          >
            {links.githubHandle}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
