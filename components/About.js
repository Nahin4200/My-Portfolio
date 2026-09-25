"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Brain, FlaskConical } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full overflow-hidden border-t border-[#1C1C1C]/10 bg-[#F4F1EA] px-6 py-12 text-[#1C1C1C] sm:px-10 lg:min-h-[430px] lg:px-12 lg:py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#1C1C1C]/75"><span>ABOUT</span><span className="h-px w-20 bg-[#1C1C1C]/15" /></div>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-[clamp(3.4rem,5vw,4.7rem)] font-black uppercase leading-[0.88] tracking-[-0.035em] text-[#111214]">
              CURIOUS ABOUT<br />HOW MACHINES<br />LEARN.
            </motion.h2>
            <div className="mt-10 grid grid-cols-3 divide-x divide-[#1C1C1C]/10 border-t border-[#1C1C1C]/10 pt-5">
              <div className="flex gap-2 pr-2"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#1A6957]" /><div><p className="text-[9px] font-bold leading-tight sm:text-[10px]">Metropolitan University</p><p className="mt-1 text-[9px] text-[#1C1C1C]/60">CSE · 3rd Year</p></div></div>
              <div className="flex gap-2 px-2"><Brain className="mt-0.5 h-5 w-5 shrink-0 text-[#1A6957]" /><div><p className="text-[10px] font-bold leading-tight">AI / ML</p><p className="mt-1 text-[9px] text-[#1C1C1C]/60">Currently Exploring</p></div></div>
              <div className="flex gap-2 pl-2"><FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-[#1A6957]" /><div><p className="text-[10px] font-bold leading-tight">Research</p><p className="mt-1 text-[9px] text-[#1C1C1C]/60">Interested</p></div></div>
            </div>
          </div>

          <div className="relative lg:col-span-4 lg:px-5 lg:pr-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 text-sm leading-[1.6] text-[#1C1C1C]/75 sm:text-[15px]">
              <p>I&apos;m Mimtajul Alam Nahin, a Computer Science &amp; Engineering student at Metropolitan University with a growing interest in Artificial Intelligence, Machine Learning and research.</p>
              <p>With a foundation in C, C++, Java, Python and JavaScript, I&apos;m continuously expanding my technical knowledge and exploring how intelligent systems can solve real-world problems.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-5">
              <div className="mb-2 h-px w-8 bg-[#1A6957]/50" /><p className="font-serif text-[27px] italic tracking-wide text-[#1C1C1C]/80">M. A. Nahin</p>
            </motion.div>
            <div className="absolute -right-1 -top-1 hidden h-[calc(100%+8px)] w-px bg-[#1A6957]/60 lg:block" />
          </div>

          <div className="lg:col-span-3 lg:pl-2">
            <div className="mx-auto max-w-[300px] lg:ml-auto lg:mr-0">
              <p className="mb-4 font-mono text-[11px] font-bold leading-tight tracking-[0.22em] text-[#254d40]">METROPOLITAN<br />UNIVERSITY</p>
              <div className="relative aspect-[1/0.96] w-full overflow-hidden bg-[#e8e7e1]">
                <div className="absolute -right-12 -top-12 z-30 h-36 w-36 rounded-full bg-[#21775f]/90" />
                <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="absolute inset-0 z-20">
                  <Image src="/images/versity.png" alt="Metropolitan University campus" fill className="object-cover" sizes="(min-width: 1024px) 300px, 90vw" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

