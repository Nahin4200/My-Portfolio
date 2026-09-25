"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowRight } from "lucide-react";
import { contact, links } from "@/data/content";

function ContactRow({ icon: Icon, label, value, href, available }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-5">
      <div className="flex items-center gap-4">
        <Icon size={18} strokeWidth={1.5} className="text-teal" />
        <span className="text-sm font-medium uppercase tracking-widest2 text-muted">
          {label}
        </span>
      </div>
      {available ? (
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-teal sm:text-base"
        >
          {value}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      ) : (
        <span className="text-sm italic text-muted">Coming soon</span>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="container-edit py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="label-eyebrow mb-4">{contact.eyebrow}</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Let&apos;s
              <br />
              Connect
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted sm:text-base">
              {contact.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-center border-t border-line"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value={links.email}
              href={links.email ? `mailto:${links.email}` : undefined}
              available={Boolean(links.email)}
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value={links.githubHandle}
              href={links.github}
              available={Boolean(links.github)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

