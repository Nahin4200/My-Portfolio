"use client";

import { Github, ArrowUp } from "lucide-react";
import { profile, links } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-edit flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between lg:py-16">
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center border border-cream/40 font-display text-sm font-bold">
            {profile.initials.split("").join(" / ")}
          </div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-sm text-cream/60">{profile.title}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-cream/80 transition-colors hover:text-cream"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center border border-cream/40 transition-colors hover:border-cream"
            >
              <ArrowUp size={16} />
            </button>
          </div>
          <p className="text-xs text-cream/50">
            Â© {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

